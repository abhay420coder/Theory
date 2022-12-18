import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  msg = ''
  constructor(@Inject(MAT_DIALOG_DATA) public injectedData: any, private dialogRef: MatDialogRef<ConfirmDialogComponent>) {
    this.msg = injectedData
  }

  ngOnInit(): void {
  }
  confirm() {
    this.dialogRef.close(true)
  }
}
