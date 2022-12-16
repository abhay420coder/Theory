import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { DateTimeService } from 'src/app/services/date-time.service';
import { EmployeeInfoService } from 'src/app/services/employee-info.service';
import { globalUrls } from '../../urls';

@Component({
  selector: 'rt-deployments-sr-lock-detail',
  templateUrl: './rt-deployments-sr-lock-detail.component.html',
  styleUrls: ['./rt-deployments-sr-lock-detail.component.scss']
})
export class RtDeploymentsSrLockDetailComponent implements OnInit {

  rtData:any
  lockedBy:any;
  employeeData: any[] = [];
  unlockTime: string = "";
  dateObj
  days: number = 0;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;
  scheduledUnlocks: any[] = [];
  timerRef;
  nextAction: string = "";
  timerRunning: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) private injectedData :any,
    private employee: EmployeeInfoService,
    private dateTime: DateTimeService,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.employee.employeeInfo.subscribe(data=>{
      this.employeeData = data;
    })
    this.rtData=this.injectedData.rtdeploymentDetails // it is for keeping data safely 
    if(this.rtData?.activeLockUnlockInfo?.type!=="INDEFINITE" && this.rtData?.activeLockUnlockInfo?.endTime && !this.dateTime.isOldDate(this.rtData?.activeLockUnlockInfo?.endTime)){
      this.nextAction = this.rtData?.isLocked?"UNLOCK":"LOCK";
      this.dateObj = this.dateTime.getDurationObject(this.rtData?.activeLockUnlockInfo?.endTime, true);
      // this.dateObj = this.dateObj.add(2, "days")
      this.hour = this.dateObj.get("hours");
      this.minute = this.dateObj.get("minutes");
      this.second = this.dateObj.get("seconds");
      this.days = this.dateObj.get("days");
      if(this.days===0){
        this.startCountDown();
      }
    }
    this.getAllLockUnlockData();
  }

  startCountDown(){
    this.timerRef = setInterval(()=>{
      this.timerRunning = true;
      this.dateObj = this.dateObj.subtract(1, "second");
      this.hour = this.dateObj.get("hours");
      this.minute = this.dateObj.get("minutes");
      this.second = this.dateObj.get("seconds");
      if(this.hour===0&&this.minute===0&&this.second===0){
        this.timerRunning = false;
        clearInterval(this.timerRef);
      }
    }, 1000);
  }

  getAllLockUnlockData(){
    this.api.postData(globalUrls.rtDeploymentHasLockUnlockList, {
      "deploymentId" : this.rtData.deploymentId
    }).subscribe({
      next: (data: any)=>{
        if(data&&data.payload){
          this.filterUpcomingUnlocks(data.payload)
        }
      }
    })
  }

  filterUpcomingUnlocks(unlockData: any[]){
    const lockUnlockData = unlockData.filter((d: any)=>
      // d.desiredAction==="UNLOCK"
      d.actionType==="DURATION"
      &&!this.dateTime.isOldDate(d.actionStartTime)
    )    
    this.scheduledUnlocks = lockUnlockData.sort((x, y)=>{
      return this.dateTime.getDateDiff(x.actionStartTime, y.actionStartTime)
    });
    
    this.showUnlockStatus();
  }

  showUnlockStatus(){
    if(this.scheduledUnlocks.length === 0) return
    if(this.rtData?.activeLockUnlockInfo?.type==="INDEFINITE"||this.dateTime.isOldDate(this.rtData?.activeLockUnlockInfo?.endTime)){
      const currentState = this.rtData?.isLocked?"LOCK":"UNLOCK";
      const nextState = this.scheduledUnlocks.filter(d=>d.desiredAction!==currentState)[0];
      if(nextState){
        this.nextAction = nextState.desiredAction
        this.dateObj = this.dateTime.getDurationObject(nextState.actionStartTime, true);
        this.hour = this.dateObj.get("hours");
        this.minute = this.dateObj.get("minutes");
        this.second = this.dateObj.get("seconds");
        this.days = this.dateObj.get("days");
        if(this.days===0){
          this.startCountDown();
        }
      }
    }
  }

  deleteScheduledUnlock(unlock: any){
    // this.api.postData(globalUrls.rtDeploymentHasLockUnlockCreateUpdate, {
    //   deploymentId: unlock.deploymentId,
    //   deploymentHasLockUnlockId: unlock.deploymentHasLockUnlockId,
    //   actionDescription: "Deletion of scheduled unlock",
    //   active: false
    // }).subscribe({
    //   next: (data: any)=>{
    //     console.log(data);
        
    //   }
    // })
  }
}
