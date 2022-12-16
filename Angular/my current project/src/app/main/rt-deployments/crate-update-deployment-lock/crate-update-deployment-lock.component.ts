import { Component, Input, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { DateTimeService } from 'src/app/services/date-time.service';
import { globalUrls } from '../../urls';

@Component({
  selector: 'crate-update-deployment-lock',
  templateUrl: './crate-update-deployment-lock.component.html',
  styleUrls: ['./crate-update-deployment-lock.component.scss']
})
export class CrateUpdateDeploymentLockComponent implements OnInit {

  @Input() canShow: boolean = false;
  @Input() rtDeployment: any;
  @Output() onPanelClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  lockForm = new FormGroup({
    actionType: new FormControl("indefinite"),
    action: new FormControl(""),
    description: new FormControl("", [Validators.required, contentValidator]),
    fromDateTime: new FormControl(),
    toDateTime: new FormControl()
  });

  isSaving: boolean = false;
  minDateTime;

  constructor(
    private cd: ChangeDetectorRef,
    private api: ApiService,
    private snackbar: MatSnackBar,
    private dateTime: DateTimeService
  ) { }

  ngOnInit(): void {
    this.minDateTime = new Date();
  }

  close(){
    this.onPanelClose.emit(false);
    this.lockForm.reset();
    this.lockForm.patchValue({
      actionType: "indefinite"
    });
  }

  onSubmit(){
    if (this.lockForm.invalid) return;
    this.isSaving=true;

    let payload: any = {
      "deploymentId": this.rtDeployment.deploymentId,
      "desiredAction": this.lockForm.get("action").value,
      "actionType": this.lockForm.get("actionType").value,
      "actionDescription": this.lockForm.get("description").value,
    }

    if(this.lockForm.get('actionType').value==='duration'){
      payload["actionStartTime"] = this.dateTime.getISOString(this.lockForm.get("fromDateTime").value);
      payload["actionEndTime"] = this.dateTime.getISOString(this.lockForm.get("toDateTime").value);
    }
    
    this.api.postData(globalUrls.rtDeploymentHasLockUnlockCreateUpdate, payload).subscribe((data: any) => {
      this.snackbar.open("Operation Successful", "Close", {duration: 3000});
      this.lockForm.reset();
      this.isSaving = false;
      this.onPanelClose.emit(true);
    }, err => {
      this.isSaving = false;
      this.snackbar.open('There was an error! Please try again', 'Close', { duration: 3000 })
    });
  }

  onActionTypeSelect(event: any){
    if(event?.value === "duration"){
      this.lockForm.patchValue({
        action: "unlock"
      });
      this.lockForm.get("action").disable();
      this.lockForm.get('fromDateTime').setValidators([Validators.required]);
      this.lockForm.get('toDateTime').setValidators([Validators.required]);
    } else {
      this.lockForm.patchValue({
        action: ""
      });
      this.lockForm.get("action").enable();
      this.lockForm.get('fromDateTime').clearValidators();
      this.lockForm.get('toDateTime').clearValidators();
    }
    this.lockForm.get('fromDateTime').updateValueAndValidity();
    this.lockForm.get('toDateTime').updateValueAndValidity();
    this.cd.detectChanges();
  }

}

export function contentValidator(control: AbstractControl) {
  if(control?.value!==""&&control?.value?.trim()===""){
    return {invalidContent: true};
  }
  return null;
}