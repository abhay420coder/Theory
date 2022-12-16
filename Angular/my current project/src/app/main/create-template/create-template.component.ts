import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { SelectTemplateComponent } from '../select-template/select-template.component';
import { globalUrls } from '../urls';

@Component({
  selector: 'create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent implements OnInit {

  templateName = "";
  templateBody = "";

  editorLoading: boolean = true;
  editorOptions: any = {
    theme: 'vs-dark', 
    language: 'yaml', 
    readOnly: false, 
    tabSize:2,  
    wordWrap: "off"
  }
  isSaving: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: ApiService,
    private dialog: MatDialogRef<SelectTemplateComponent>,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if(this.data){
      this.templateName = this.data.name;
      this.templateBody = this.data.body;
    }
  }

  onInit(editor){
    this.editorLoading = false;
    editor.focus();
  }

  save(){
    this.isSaving = true;
    this.api.postData(globalUrls.k8sObjectTemplateCreateUpdate, {
      "id": this.data.id?this.data.id:null,
      "name": this.templateName,
      "type": this.data.type,
      "body": this.templateBody,
      "active": true
    }).subscribe({
      next: (data: any)=>{
        if(data.code>=200 && data.code<300){
          this.isSaving = false;
          this.dialog.close(true);
          this.snackbar.open(`Template ${this.data.id?"updated":"created"} successfully`, "Dismiss", {duration: 3000});
        } else {
          this.snackbar.open("Something went wrong. Please try again.", "Dismiss", {duration: 3000});
        }
      },
      error: err=>{
        this.isSaving = false;
        this.snackbar.open("Something went wrong. Please try again.", "Dismiss", {duration: 3000});
      }
    })
  }

}
