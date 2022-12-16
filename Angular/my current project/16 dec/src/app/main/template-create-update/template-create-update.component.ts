import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../urls';

@Component({
  selector: 'template-create-update',
  templateUrl: './template-create-update.component.html',
  styleUrls: ['./template-create-update.component.scss']
})
export class TemplateCreateUpdateComponent implements OnInit {
  isSaving: boolean = false;

  //monaco props
  emptyLabel = "";
  editorOptions = { theme: 'vs-dark', language: 'yaml', readOnly:false, tabSize:2 };
  editorLoading: boolean = true;

  templateObj = {
    id: undefined,
    name: "",
    description: "",
    spec: this.emptyLabel
    // active: true
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: ApiService,
    private dialogRef: MatDialogRef<TemplateCreateUpdateComponent>,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    if(this.data){
      this.templateObj.id = this.data.id;
      this.templateObj.name = this.data.name;
      this.templateObj.description = this.data.description;
      this.templateObj.spec = this.data.spec===null?this.emptyLabel:this.data.spec;
    }
  }

  onInit(editor) {
    this.editorLoading = false;
    editor.focus();
  }

  canSubmit(){
    return this.templateObj.name!==""&&this.templateObj.description!==""&&(this.templateObj.spec!==""&&this.templateObj.spec!==this.emptyLabel);
  }

  save(){
    this.isSaving = true;
    this.api.postData(globalUrls.templateCreateUpdate, this.templateObj).subscribe(data=>{
      console.log(data);
      this.dialogRef.close(true);
    },
    error=>{
      this.isSaving = false;
      // this.snackbar.open("There was an error. Please try again.", "Close", {duration: 5000});
    })
  }

}
