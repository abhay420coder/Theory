import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../urls';

@Component({
  selector: 'add-k8s-deploymnet',
  templateUrl: './add-k8s-deploymnet.component.html',
  styleUrls: ['./add-k8s-deploymnet.component.scss']
})
export class AddK8sDeploymnetComponent implements OnInit {
  deploymentConfig;
  deploymentMetadata: any = {
    nsId: "",
    nsName: "",
    deploymentId: undefined,
    deploymentName: "",
  }

  //component props
  editorOptions = { theme: 'vs-dark', language: 'yaml', readOnly: false, tabSize:2,  wordWrap: "off" };

  //view control vars
  editorLoading: boolean = true;
  isSaving: boolean = false;
  label = "Add"

  constructor(
    @Inject(MAT_DIALOG_DATA) public injectedData: any,
    private api: ApiService,
    private dialog: MatDialogRef<AddK8sDeploymnetComponent>,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    if(this.injectedData){
      this.deploymentMetadata.nsId = this.injectedData.id?this.injectedData.id:"";
      this.deploymentMetadata.nsName = this.injectedData.name?this.injectedData.name:"";
      if(this.injectedData.action==="patch"||this.injectedData.action==="redeploy"){
        this.deploymentMetadata.deploymentName = this.injectedData.deployment.name;
        this.deploymentMetadata.deploymentId = this.injectedData.deployment.id;
        this.deploymentConfig = this.injectedData.deployment.body;
      }
        this.label = this.injectedData.action==="add"?"Add":
           this.injectedData.action==="patch"?"Patch":
            this.injectedData.action==="redeploy"?"Hard Redeploy":""
    }
  }

  onInit(editor){
    this.editorLoading = false;
    editor.focus();
    editor.onDidChangeModelContent((data)=>{
      const config: string = editor.getModel().getValue();
      config.split('\r\n').map(d=>{
        if(d.trim().split(":")[0]==="name"){
          this.deploymentMetadata.deploymentName = d.trim().split(":")[1].trim();
        }
      })
    });
  }

  save(){
    this.isSaving = true;
    if(this.injectedData.action==="patch"){
      const payload = {
        "id": this.deploymentMetadata.deploymentId,
        "body": this.deploymentConfig
      }
      this.api.postData(globalUrls.nsK8sDeploymentPatch, payload).subscribe((data:any)=>{
        if(data&&data.code===200){
          this.dialog.close(true);
          this.snackbar.open("Deployment patched Successfully", "Close", {duration: 5000});
          this.isSaving = false;
        } else {
          this.snackbar.open("Something went wrong. Please try again.", "Close", {duration: 5000});
          this.isSaving = false;
        }        
      }, err=> {
        this.snackbar.open("Something went wrong. Please try again.", "Close", {duration: 5000});
        this.isSaving = false;
      })
    } else if(this.injectedData.action==="redeploy") {
      const payload = {
        "id": this.deploymentMetadata.deploymentId,
        "body": this.deploymentConfig
      }
      this.api.postData(globalUrls.nsK8sDeploymentHardRedeploy, payload).subscribe((data:any)=>{
        if(data&&data.code===200){
          this.dialog.close(true);
          this.snackbar.open("Deployment redeployed Successfully", "Close", {duration: 5000});
          this.isSaving = false;
        } else {
          this.snackbar.open("Something went wrong. Please try again.", "Close", {duration: 5000});
          this.isSaving = false;
        }        
      }, err=> {
        this.snackbar.open("Something went wrong. Please try again.", "Close", {duration: 5000});
        this.isSaving = false;
      })
    } else {
      this.api.postData(globalUrls.nsK8sDeploymentAdd, {
        nsId: this.deploymentMetadata.nsId,
        name: this.deploymentMetadata.deploymentName,
        body: this.deploymentConfig
      }).subscribe((data: any)=>{
        if(data&&data.code===201){
          this.dialog.close(true);
          this.snackbar.open("Deployment created Successfully", "Close", {duration: 5000});
          this.isSaving = false;
        } else {
          this.snackbar.open("Something went wrong. Please try again.", "Close", {duration: 5000});
          this.isSaving = false;
        }        
      }, err=> {
        this.snackbar.open("Something went wrong. Please try again.", "Close", {duration: 5000});
        this.isSaving = false;
      })
    }
    
  }

  canSave(){
    return this.deploymentConfig&&this.deploymentConfig!==""&&this.deploymentMetadata.name!=="";
  }

}
