import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../urls';

@Component({
  selector: 'release-train-create-update',
  templateUrl: './release-train-create-update.component.html',
  styleUrls: ['./release-train-create-update.component.scss']
})
export class ReleaseTrainCreateUpdateComponent implements OnInit {
  rtObj = {
    "rtId": undefined,
    "rtName": "",
    "rtVersion": "",
    "rtNote": "",
    "rtNoteUuid": undefined,
  }
  isSaving: boolean = false;
  constructor(private dialogRef: MatDialogRef<ReleaseTrainCreateUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public injectedData: any, private api: ApiService, private snackbar: MatSnackBar) {
    if (this.injectedData) {
      this.rtObj.rtId = this.injectedData.rtId;
      this.rtObj.rtName = this.injectedData.rtName;
      this.rtObj.rtVersion = this.injectedData.rtVersion;
      this.rtObj.rtNote = this.injectedData.rtNote;
      this.rtObj.rtNoteUuid = this.injectedData.rtNoteUuid;
    }
  }


  closeDialog(msg?: any) {
    this.dialogRef.close(msg)
  }
  ngOnInit(): void {
  }
  save() {
    if (this.rtObj.rtName && this.rtObj.rtVersion) {
      this.isSaving = true;
      this.api.postData(globalUrls.rtCreateUpdate, this.rtObj).subscribe(data => {
        if (data['code'] == 201) {
          this.snackbar.open('Created !', null, { duration: 3000 })
        } else if (data['code'] == 200) {
          this.snackbar.open('Updated !', null, { duration: 3000 })
        }
        this.closeDialog(true)
      }, err => {
        this.isSaving = false;
      })
    }
  }

}
