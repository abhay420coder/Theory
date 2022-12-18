/***************************************************************
 * injectedData: {
 *    title: string,
 *    code: string,
 *    readOnly: boolean,
 *    language: string
 * }
 ***************************************************************/

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'code-editor-dialog',
  templateUrl: './code-editor-dialog.component.html',
  styleUrls: ['./code-editor-dialog.component.scss']
})
export class CodeEditorDialogComponent implements OnInit {
  code;
  editorOptions = { theme: 'vs-dark', language: 'yaml',readOnly:false, tabSize:2,  wordWrap: "off" };
  loader = true;
  canDisableOnError: boolean = false;
  errorText: string = "";
  constructor(@Inject(MAT_DIALOG_DATA) public injectedData: any, private dialogRef: MatDialogRef<CodeEditorDialogComponent>) { }

  ngOnInit(): void {
    this.code = this.injectedData.code;
    this.editorOptions.readOnly = this.injectedData.readOnly || false;
    this.editorOptions.wordWrap = this.injectedData.wordWrap?'on':'off';
    this.editorOptions.language = this.injectedData.language || 'yaml';
    this.canDisableOnError = this.injectedData.canDisableOnError || false;
  }
  close(data?){
    this.dialogRef.close(data);
  }
  save(){
    this.close(this.code);
  }
  onInit(editor) {
    this.loader = false;
    editor.focus();
    editor.onDidChangeModelContent((data)=>{
      const jsonstring = editor.getModel().getValue();
      if(jsonstring==="" || this.editorOptions.language !== 'json'){
        this.errorText = "";
      } else {
        try{
          JSON.parse(jsonstring);
          this.errorText = "";
        } catch (error){
          this.errorText = error.message;
        }
      }
      
    })
  }
}
