import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'rt-deployments-sr-lock-detail',
  templateUrl: './rt-deployments-sr-lock-detail.component.html',
  styleUrls: ['./rt-deployments-sr-lock-detail.component.scss']
})
export class RtDeploymentsSrLockDetailComponent implements OnInit {

  rtData:any
  lockedBy:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) private injectedData :any,
    private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.rtData=this.injectedData.rtdeploymentDetails // it is for keeping data safely 
    this.lockedBy=this.injectedData.id
  }

}
