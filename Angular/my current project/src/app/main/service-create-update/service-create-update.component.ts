import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../urls';

@Component({
  selector: 'service-create-update',
  templateUrl: './service-create-update.component.html',
  styleUrls: ['./service-create-update.component.scss']
})
export class ServiceCreateUpdateComponent implements OnInit {
  serviceObj = {
    serviceId: undefined,
    serviceName: '',
    serviceDescription: '',
    basePath:'vca/api' // [vca/api,vca/ui]
  }
  isSaving: boolean = false;
  constructor(private dialogRef: MatDialogRef<ServiceCreateUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public injectedData: any, private api: ApiService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.injectedData) {
      this.serviceObj.serviceId = this.injectedData.serviceId
      this.serviceObj.serviceName = this.injectedData.serviceName
      this.serviceObj.serviceDescription = this.injectedData.serviceDescription
      this.serviceObj.basePath = this.injectedData.basePath || 'vca/api';
    }
  }
  closeDialog(msg?: any) {
    this.dialogRef.close(msg)
  }
  save() {
    this.isSaving = true;
    console.log(this.serviceObj);
    let payload = JSON.parse(JSON.stringify(this.serviceObj))
    payload['imagePullSecretValue'] = "ewogICAgImF1dGhzIjogewogICAgICAgICJodHRwczovL3JlZ2lzdHJ5LmdpdGxhYi5jb20iOnsKICAgICAgICAgICAgInVzZXJuYW1lIjoidmNhLWlkZW50aXR5IiwKICAgICAgICAgICAgInBhc3N3b3JkIjoiTWVXQ1lHRlREV3daSkxOVVhBRS0iLAogICAgICAgICAgICAiZW1haWwiOiJhcmJhYkBjb3JkaXMudXMiLAogICAgICAgICAgICAiYXV0aCI6ImRtTmhMV2xrWlc1MGFYUjVPazFsVjBOWlIwWlVSRmQzV2twTVRsVllRVVV0IgogICAgCX0KICAgIH0KfQoK"
    this.api.postData(globalUrls.serviceCreateUpdate, payload).subscribe(data => {
      if (data['code'] === 500) {
        this.snackbar.open('Internal server error')
        this.isSaving = false;
      }else {
        this.snackbar.open('Service Created',undefined,{duration:2000})
        this.closeDialog(payload)
      }
    }, err=>{
      this.isSaving = false;
    })
  }
}
