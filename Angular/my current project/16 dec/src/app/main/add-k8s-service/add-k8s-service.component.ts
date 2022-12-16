import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { k8sServiceTemplate } from '../kubernetes/templates/k8s-service';
import { globalUrls } from '../urls';
import * as jsyaml from 'js-yaml';
import { SelectTemplateComponent } from '../select-template/select-template.component';
import { CreateTemplateComponent } from '../create-template/create-template.component';

@Component({
  selector: 'add-k8s-service',
  templateUrl: './add-k8s-service.component.html',
  styleUrls: ['./add-k8s-service.component.scss']
})
export class AddK8sServiceComponent implements OnInit {
  serviceConfig = k8sServiceTemplate;
  serviceMetadata: any = {
    nsId: "",
    nsName: "",
    serviceId: undefined,
    serviceName: "",
  }
  templateList: any[] = []

  //component props
  editorOptions = { theme: 'vs-dark', language: 'yaml', readOnly: false, tabSize: 2, wordWrap: "off" };

  //view control vars
  editorLoading: boolean = true;
  isSaving: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public injectedData: any,
    private api: ApiService,
    private dialog: MatDialogRef<AddK8sServiceComponent>,
    private snackbar: MatSnackBar,
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchTemplateList();
    if (this.injectedData) {
      this.serviceMetadata.nsId = this.injectedData.id ? this.injectedData.id : "";
      this.serviceMetadata.nsName = this.injectedData.name ? this.injectedData.name : "";
      if (this.injectedData.action === "patch" || this.injectedData.action === "replace" || this.injectedData.action === 'retry') {
        this.serviceMetadata.serviceName = this.injectedData.service.name;
        this.serviceMetadata.serviceId = this.injectedData.service.id;
        this.serviceConfig = this.injectedData.service.body;
      }
    }
  }

  onInit(editor) {
    this.editorLoading = false;
    editor.focus();
    editor.onDidChangeModelContent((data) => {
      const config: string = editor.getModel().getValue();
      const yamlObj: any= jsyaml.load(config);
      this.serviceMetadata.serviceName = yamlObj?.metadata?.name || '';
      /* config.split('\r\n').map(d => {
        if (d.trim().split(":")[0] === "name") {
          this.serviceMetadata.serviceName = d.trim().split(":")[1].trim();
        }
      }) */
    });
  }

  fetchTemplateList(){
    this.api.postData(globalUrls.k8sObjectTemplateList, {
      "pageNo": 1,
      "pageSize": 1000,
      "type": "service",
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
        "id": this.serviceMetadata.serviceId,
        "body": this.serviceConfig
      }
      this.api.postData(globalUrls.nsServicePatch, payload).subscribe((data: any) => {
        if (data && data.code === 200) {
          this.snackbar.open("Service patched Successfully", "Close", { duration: 5000 });
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
        "id": this.serviceMetadata.serviceId,
        "body": this.serviceConfig
      }
      this.api.postData(globalUrls.nsServiceReplace, payload).subscribe((data: any) => {
        if (data && data.code === 200) {
          this.snackbar.open("Service replaced Successfully", "Close", { duration: 5000 });
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
    } else if (this.injectedData.action === "retry") {
      const payload = {
        "id": this.serviceMetadata.serviceId,
        "body": this.serviceConfig
      }
      this.api.postData(globalUrls.nsServiceRetry, payload).subscribe((data: any) => {
        if (data && data.code === 201) {
          this.snackbar.open("Service created Successfully", "Close", { duration: 5000 });
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
      const yamlObj: any= jsyaml.load(this.serviceConfig);
      this.serviceMetadata.serviceName = yamlObj?.metadata?.name || '';
      this.api.postData(globalUrls.nsAddK8sService, {
        nsId: this.serviceMetadata.nsId,
        name: this.serviceMetadata.serviceName,
        body: this.serviceConfig
      }).subscribe((data: any) => {
        if (data && data.code === 201) {
          this.snackbar.open("Service created Successfully", "Close", { duration: 5000 });
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
    return this.serviceConfig && this.serviceConfig !== "" && this.serviceMetadata.name !== "";
  }

  selectTemplate(value: any){
    this.serviceConfig = value.body;
  }

  createTemplate(){
    this.dialogRef.open(CreateTemplateComponent, {
      width: "600px",
      data: {
        type: "service",
        body: this.serviceConfig
      }
    })
  }
}
