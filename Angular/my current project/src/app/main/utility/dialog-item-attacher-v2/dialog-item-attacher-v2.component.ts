import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
  selector: 'dialog-item-attacher-v2',
  templateUrl: './dialog-item-attacher-v2.component.html',
  styleUrls: ['./dialog-item-attacher-v2.component.scss']
})
export class DialogItemAttacherComponentV2 implements OnInit {

  outputData: any;
  saveHandlerLoading: boolean = false;
  translationVar;
  sharedVar: any;
  refreshObs: Subject<number> = new Subject<number>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogItemAttacherComponentV2>) {
    this.data['isDialog'] = true;
    this.data['refreshTrigger'] = this.refreshObs;
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
    this.refreshObs.next(Math.random());
  }

}
