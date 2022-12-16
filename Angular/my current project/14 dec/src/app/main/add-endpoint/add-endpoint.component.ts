import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as jsyaml from 'js-yaml';
import { ApiService } from 'src/app/services/api.service';
import { CreateTemplateComponent } from '../create-template/create-template.component';
import { k8sEndPointTemplate } from '../kubernetes/templates/k8s-endpoint';
import { SelectTemplateComponent } from '../select-template/select-template.component';
import { globalUrls } from '../urls';

@Component({
  selector: 'add-endpoint',
  templateUrl: './add-endpoint.component.html',
  styleUrls: ['./add-endpoint.component.scss']
})
export class AddEndpointComponent implements OnInit {
  endpointConfig = k8sEndPointTemplate;
  endpointMetadata: any = {
    nsId: "",
    nsName: "",
    endpointId: undefined,
    endpointName: "",
  }
  // selectedService: any;
  serviceList: any = [];
  templateList: any[] = [];

  //component props
  editorOptions = { theme: 'vs-dark', language: 'yaml', readOnly: false, tabSize: 2, wordWrap: "off" };

  //view control vars
  editorLoading: boolean = true;
  isSaving: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public injectedData: any,
    private api: ApiService,
    private snackbar: MatSnackBar,
    private dialog: MatDialogRef<AddEndpointComponent>,
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchTemplateList();
    if (this.injectedData) {
      this.endpointMetadata.nsId = this.injectedData.id ? this.injectedData.id : "";
      this.endpointMetadata.nsName = this.injectedData.name ? this.injectedData.name : "";
      if (this.injectedData.action === "patch" || this.injectedData.action === "replace" || this.injectedData.action === "retry") {
        this.endpointMetadata.endpointName = this.injectedData.endpoint.name;
        this.endpointMetadata.endpointId = this.injectedData.endpoint.id;
        this.endpointConfig = this.injectedData.endpoint.body;
      }
    }
    // this.getServiceList();
  }

  onInit(editor) {
    this.editorLoading = false;
    editor.focus();
    editor.onDidChangeModelContent((data) => {
      const config: string = editor.getModel().getValue();
      const yamlObj: any = jsyaml.load(config);
      this.endpointMetadata.endpointName = yamlObj?.metadata?.name || '';
      /* config.split('\r\n').map(d => {
        if (d.trim().split(":")[0] === "name") {
          this.endpointMetadata.endpointName = d.trim().split(":")[1].trim();
        }
      }) */
    });
  }

  /*  getServiceList(searchKey?: string) {
     this.api.postData(globalUrls.nsServicesListDb, {
       pageNo: 1,
       pageSize: 100,
       nsId: this.endpointMetadata.nsId,
       searchText: searchKey
     }).subscribe(data => {
       this.serviceList = data['payload']
     })
   } */

  /* filterServices(evt: InputEvent) {
    this.getServiceList(evt.target['value'])
  } */

  /*  optionSelected(evt: MatAutocompleteSelectedEvent) {
     this.selectedService = evt.option.value
   } */

   fetchTemplateList(){
    this.api.postData(globalUrls.k8sObjectTemplateList, {
      "pageNo": 1,
      "pageSize": 1000,
      "type": "endpoint",
      "searchText":"",
	    "active": true
    }).subscribe({
      next: (data: any)=>{
        if(data&&data.payload){
          this.templateList = [...data.payload];
        }
      }
    })
  }

  save() {
    this.isSaving = true;
    if (this.injectedData.action === "patch") {
      const payload = {
        "id": this.endpointMetadata.endpointId,
        "body": this.endpointConfig
      }
      this.api.postData(globalUrls.nsEndpointsPatch, payload).subscribe((data: any) => {
        if (data && data.code === 200) {
          this.snackbar.open("Endpoint patched Successfully", "Close", { duration: 5000 });
          this.isSaving = false;
        } else {
          this.snackbar.open("Something went wrong. Please try again.", "Close", { duration: 5000 });
          this.isSaving = false;
        }
        this.dialog.close(true);
      }, err => {
        this.snackbar.open("Something went wrong. Please try again.", "Close", { duration: 5000 });
        this.isSaving = false;
        this.dialog.close(true);
      })
    } else if (this.injectedData.action === "replace") {
      const payload = {
        "id": this.endpointMetadata.endpointId,
        "body": this.endpointConfig
      }
      this.api.postData(globalUrls.nsEndpointsReplace, payload).subscribe((data: any) => {
        if (data && data.code === 200) {
          this.snackbar.open("Endpoint replaced Successfully", "Close", { duration: 5000 });
          this.isSaving = false;
        } else {
          this.snackbar.open("Something went wrong. Please try again.", "Close", { duration: 5000 });
          this.isSaving = false;
        }
        this.dialog.close(true);
      }, err => {
        this.snackbar.open("Something went wrong. Please try again.", "Close", { duration: 5000 });
        this.isSaving = false;
        this.dialog.close(true);
      })
    }
    else if (this.injectedData.action === "retry") {
      const payload = {
        "id": this.endpointMetadata.endpointId,
        "body": this.endpointConfig
      }
      this.api.postData(globalUrls.nsEndpointsRetry, payload).subscribe((data: any) => {
        if (data && data.code === 201) {
          this.snackbar.open("Endpoint Created Successfully", "Close", { duration: 5000 });
          this.isSaving = false;
        } else {
          this.snackbar.open("Something went wrong. Please try again.", "Close", { duration: 5000 });
          this.isSaving = false;
        }
        this.dialog.close(true);
      }, err => {
        this.snackbar.open("Something went wrong. Please try again.", "Close", { duration: 5000 });
        this.isSaving = false;
        this.dialog.close(true);
      })
    } else {
      /* Added extra check incase monaca's onChange triggered only on save */
      const yamlObj: any = jsyaml.load(this.endpointConfig);
      this.endpointMetadata.endpointName = yamlObj?.metadata?.name || '';
      this.api.postData(globalUrls.nsAddEndpoint, {
        nsId: this.endpointMetadata.nsId,
        // k8sServiceId: this.selectedService.id,
        name: this.endpointMetadata.endpointName,
        body: this.endpointConfig
      }).subscribe((data: any) => {
        if (data && data.code === 201) {
          this.snackbar.open("Endpoint created Successfully", "Close", { duration: 5000 });
          this.isSaving = false;
        } else {
          this.snackbar.open("Something went wrong. Please try again.", "Close", { duration: 5000 });
          this.isSaving = false;
        }
        this.dialog.close(true);
      }, err => {
        this.snackbar.open("Something went wrong. Please try again.", "Close", { duration: 5000 });
        this.isSaving = false;
        this.dialog.close(true);
      })
    }

  }

  canSave() {
    return this.endpointConfig && this.endpointConfig !== "" && this.endpointMetadata.name !== "";
  }

  selectTemplate(value: any){
    this.endpointConfig = value.body;
  }

  createTemplate(){
    this.dialogRef.open(CreateTemplateComponent, {
      width: "600px",
      data: {
        type: "endpoint",
        body: this.endpointConfig
      }
    })
  }

}
