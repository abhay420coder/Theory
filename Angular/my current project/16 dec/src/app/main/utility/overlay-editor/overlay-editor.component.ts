import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'overlay-editor',
  templateUrl: './overlay-editor.component.html',
  styleUrls: ['./overlay-editor.component.scss']
})
export class OverlayEditorComponent implements OnInit {
  autoScrollEnabled: boolean = true;

  snackbarRef: MatSnackBarRef<any>;
  snackBarState: boolean;

  loadingSnackbarRef: MatSnackBarRef<any>;
  loadingSubscription: Subscription

  editorOptions = { theme: 'vs-dark', language: 'yaml', readOnly:true, tabSize:2 };

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent){
    var key = event.key;
    if(key === "Escape"){
      if(this.snackBarState){
        this.snackbarRef.dismiss();
      } else {
        this.dialogRef.close();
      }
    }
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<OverlayEditorComponent>) { }

  ngOnInit(): void {
    this.loadingSubscription = this.data.loading.subscribe(data=>{
      if(data){
        this.loadingSnackbarRef = this.snackBar.open("Loading log data ...");
      } else if(!data&&this.loadingSnackbarRef){
        this.loadingSnackbarRef.dismiss();
      }
    })
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  onInit(editor) {
    // this.loader = false;
    editor.focus();
    editor.onDidChangeModelContent(()=>{
      if(this.autoScrollEnabled){
          editor.revealLine(editor.getModel().getLineCount());
      }
    });
    editor.onMouseWheel(data=>{
      var curPosition = 0;
      if(data.deltaY<0){
          curPosition = editor.getVisibleRanges()[0].endLineNumber - 2;
      } else {
          curPosition = editor.getVisibleRanges()[0].endLineNumber + 3;
      }
      if(curPosition >= editor.getModel().getLineCount()){
          this.autoScrollEnabled = true;
      } else {
          this.autoScrollEnabled = false;
      }
    })
    this.snackbarRef = this.snackBar.open("Hit 'Esc' to exit fullscreen", "Ok", {duration: 5000});
    this.snackbarRef.afterOpened().subscribe(data=>{
      this.snackBarState = true;
    })
    this.snackbarRef.afterDismissed().subscribe(data=>{
      this.snackBarState = false;
    })
  }

}
