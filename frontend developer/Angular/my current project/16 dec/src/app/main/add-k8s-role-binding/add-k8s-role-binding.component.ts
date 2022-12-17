import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as jsyaml from 'js-yaml';
import { ApiService } from 'src/app/services/api.service';
import { AddK8sServiceComponent } from '../add-k8s-service/add-k8s-service.component';
import { CreateTemplateComponent } from '../create-template/create-template.component';
import { k8sRoleBindingTemplate } from '../kubernetes/templates/k8s-rolebinding';
import { SelectTemplateComponent } from '../select-template/select-template.component';
import { globalUrls } from '../urls';

@Component({
  selector: 'add-k8s-role-binding',
  templateUrl: './add-k8s-role-binding.component.html',
  styleUrls: ['./add-k8s-role-binding.component.scss']
})
export class AddK8sRoleBindingComponent implements OnInit {
  nsId: string = "";
  nsName: string = "";
  roleBindingId: string = "";
  roleBindingName: string = "";
  roleBindingConfig: string = k8sRoleBindingTemplate;
  templateList: any[] = [];

  //view control vars
  editorLoading: boolean = true;
  isSaving: boolean = false;

  //component props
  editorOptions = { theme: 'vs-dark', language: 'yaml', readOnly: false, tabSize: 2, wordWrap: "off" };

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
      this.nsId = this.injectedData.id ? this.injectedData.id : "";
      this.nsName = this.injectedData.name ? this.injectedData.name : "";
      if (this.injectedData.action === "patch" || this.injectedData.action === "replace" || this.injectedData.action === 'retry') {
        this.roleBindingId = this.injectedData.roleBinding.id;
        this.roleBindingName = this.injectedData.roleBinding.name;
        this.roleBindingConfig = this.injectedData.roleBinding.body;
      }
    }
  }

  onInit(editor) {
    this.editorLoading = false;
    editor.focus();
    editor.onDidChangeModelContent((data) => {
      const config: string = editor.getModel().getValue();
      const yamlObj: any= jsyaml.load(config);
      this.roleBindingName = yamlObj?.metadata?.name || '';
     /*  const configArr = config.split('\r\n');
      for (let i = 0; i < configArr.length; i++) {
        if (configArr[i].trim().split(":")[0] === "metadata") {
          let j = i + 1;
          while (j < configArr.length) {
            if (configArr[j].trim().split(":")[0] === "name") {
              this.roleBindingName = configArr[j].trim().split(":")[1].trim();
              return;
            }
            i++;
          }
        }
      } */
    });
  }

  fetchTemplateList(){
    this.api.postData(globalUrls.k8sObjectTemplateList, {
      "pageNo": 1,
      "pageSize": 1000,
      "type": "role-binding",
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
        "id": this.roleBindingId,
        "body": this.roleBindingConfig
      }
      this.api.postData(globalUrls.nsK8sRoleBindingPatch, payload).subscribe({
        next: (data: any) => {
          if (data && data.code === 200) {
            this.snackbar.open("Role-binding patched Successfully", "Close", { duration: 5000 });
            this.isSaving = false;
          } else {
            this.snackbar.open("Something went wrong. Please try again.", "Close", { duration: 5000 });
            this.isSaving = false;
          }
          this.dialog.close(true);
        },
        error: err => {
          this.snackbar.open("Something went wrong. Please try again.", "Close", { duration: 5000 });
          this.isSaving = false;
          this.dialog.close(true);
        }
      })
    } else if (this.injectedData.action === "replace") {
      const payload = {
        "id": this.roleBindingId,
        "body": this.roleBindingConfig
      }
      this.api.postData(globalUrls.nsK8sRoleBindingReplace, payload).subscribe({
        next: (data: any) => {
          if (data && data.code === 200) {
            this.snackbar.open("Role-binding replaced Successfully", "Close", { duration: 5000 });
            this.isSaving = false;
          } else {
            this.snackbar.open("Something went wrong. Please try again.", "Close", { duration: 5000 });
            this.isSaving = false;
          }
          this.dialog.close(true);
        },
        error: err => {
          this.snackbar.open("Something went wrong. Please try again.", "Close", { duration: 5000 });
          this.isSaving = false;
          this.dialog.close(true);
        }
      })
    } else if (this.injectedData.action === "retry") {
      const payload = {
        "id": this.roleBindingId,
        "body": this.roleBindingConfig
      }
      this.api.postData(globalUrls.nsK8sRoleBindingRetry, payload).subscribe((data: any) => {
        if (data && data.code === 201) {
          this.snackbar.open("Role-binding created Successfully", "Close", { duration: 5000 });
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
      const yamlObj: any= jsyaml.load(this.roleBindingConfig);
      this.roleBindingName = yamlObj?.metadata?.name || '';
      this.api.postData(globalUrls.nsAddK8sRoleBinding, {
        nsId: this.nsId,
        name: this.roleBindingName,
        body: this.roleBindingConfig
      }).subscribe((data: any) => {
        if (data && data.code === 201) {
          this.snackbar.open("Role-binding created Successfully", "Close", { duration: 5000 });
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

  selectTemplate(value: any){
    this.roleBindingConfig = value.body;
  }

  createTemplate(){
    this.dialogRef.open(CreateTemplateComponent, {
      width: "600px",
      data: {
        type: "role-binding",
        body: this.roleBindingConfig
      }
    })
  }


}
