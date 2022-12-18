import { Component, Inject, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../urls';
import { MatDialog } from '@angular/material/dialog';
import { CodeEditorDialogComponent } from '../utility/code-editor-dialog/code-editor-dialog.component';

@Component({
  selector: 'service-release-create-update',
  templateUrl: './service-release-create-update.component.html',
  styleUrls: ['./service-release-create-update.component.scss']
})
export class ServiceReleaseCreateUpdateComponent implements OnInit {
  selectedService
  serviceName = '';
  serviceRelObj = {
    srId: undefined,
    serviceId: "",
    srBranch: '',
    srVersion: "",
    portNumber: 80,
    releaseNote: "",
    volumePaths: [{
      'path': '/data',
      'type': 'Directory',
      'mountPath': ''
    }],
    checkReadiness: false,
    envVariables: ''
  }
  serviceList: any;
  isSaving: boolean = false;
  constructor(
    private dialogRef: MatDialogRef<ServiceReleaseCreateUpdateComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public injectedData: any, private api: ApiService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.injectedData) {
      this.serviceRelObj.serviceId = this.injectedData.serviceId
      this.serviceRelObj.srId = this.injectedData.srId
      this.serviceRelObj.srBranch = this.injectedData.srBranch
      this.serviceRelObj.srVersion = this.injectedData.srVersion
      this.serviceRelObj.portNumber = this.injectedData.portNumber
      this.serviceRelObj.releaseNote = this.injectedData.releaseNote;
      this.serviceRelObj.checkReadiness = this.injectedData.checkReadiness ? this.injectedData.checkReadiness : false
      this.serviceRelObj.envVariables = this.injectedData.envVariables;
      this.serviceName = this.injectedData.serviceName
      try {
        this.serviceRelObj.volumePaths = JSON.parse(this.injectedData.volumePaths);
      } catch (error) {
        this.serviceRelObj.volumePaths =
          [{
            'path': this.injectedData.volumePaths,
            'type': 'Directory',
            'mountPath': this.serviceName ? `/v${this.serviceName.slice(4)}` : '/'
          }];
      }

    }
    this.getServiceList()
  }
  closeDialog(msg?: any) {
    this.dialogRef.close(msg)
  }
  save() {
    if (this.selectedService || this.serviceRelObj.srId) {
      this.isSaving = true;
      let payload = JSON.parse(JSON.stringify(this.serviceRelObj))
      if (this.selectedService) {
        payload.serviceId = this.selectedService.serviceId;
      }
      payload.volumePaths = JSON.stringify(payload.volumePaths);
      this.api.postData(globalUrls.srCreateUpdate, payload).subscribe(data => {
        this.snackbar.open(this.injectedData ? "Successfully Updated!" : "Successfully created!", "Close", { duration: 3000 });
        this.closeDialog(true)
      }, err => {
        this.snackbar.open("Something went wrong! Please try again.", "Close", { duration: 3000 });
      })
    }
  }
  getServiceList(searchKey?: string) {
    this.api.postData(globalUrls.serviceList, {
      pageNo: 1,
      pageSize: 10,
      searchText: searchKey
    }).subscribe(data => {
      this.serviceList = data['payload']
    })
  }
  filterServices(evt: InputEvent) {
    this.getServiceList(evt.target['value'])
  }
  optionSelected(evt: MatAutocompleteSelectedEvent) {
    this.selectedService = evt.option.value
    this.serviceName = evt.option.value.serviceName;
    this.serviceRelObj.volumePaths[0].mountPath = `/v${this.serviceName.slice(4)}`;
    this.serviceRelObj.volumePaths[0].path = `/data/v${this.serviceName.slice(4)}`;
  }
  addMoreVolume() {
    let obj = {
      'path': this.serviceName ? `/data/v${this.serviceName.slice(4)}` : '/data',
      'type': 'Directory',
      'mountPath': this.serviceName ? `/v${this.serviceName.slice(4)}` : '/'
    }
    this.serviceRelObj.volumePaths.push(obj);
  }

  deleteVolume(i) {
    if (this.serviceRelObj.volumePaths.length !== 1) {
      this.serviceRelObj.volumePaths.splice(i, 1)
    }
  }

  openEnvEditor() {
    let code = this.serviceRelObj.envVariables;
    if (!code) {
      code = `- name: SPRING_PROFILE
  value: v${this.serviceName.slice(4)}`
    }
    this.serviceRelObj.envVariables = code;
    this.dialog.open(CodeEditorDialogComponent, {
      data: {
        title: 'Environment Config',
        code: code,
        language: 'yaml',
        canDisableOnError: true,
        readOnly: this.injectedData ? !this.injectedData["actions"].includes('update') : false
      },
      disableClose: true
    }).afterClosed().subscribe(result => {
      if (result !== undefined && result) {
        this.serviceRelObj.envVariables = result;
      }
    }
    )
  }
}
