import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
  selector: 'dialog-item-attacher',
  templateUrl: './dialog-item-attacher.component.html',
  styleUrls: ['./dialog-item-attacher.component.scss']
})
export class DialogItemAttacherComponent implements OnInit {

  outputData: any;
  saveHandlerLoading: boolean = false;
  translationVar;
  sharedVar: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogItemAttacherComponent>) {
    this.data['isDialog'] = true;
   }

  ngOnInit() {
  }

  attachItems(data) {
    this.outputData = data;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveAttachments() {
    if (this.saveHandlerLoading) {
      return;
    }
    this.saveHandlerLoading = true;
    this.dialogRef.close(this.outputData)
  }

  refreshList() {
    this.data['avlItemFunc']({refresh: true});
    this.data['attachedItemFunc']({refresh: true});
  }

}
