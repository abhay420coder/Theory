import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../urls';
import { Location } from '@angular/common';
import { EmployeeInfoService } from 'src/app/services/employee-info.service';

@Component({
  selector: 'rt-deployment-sr-history-view',
  templateUrl: './rt-deployment-sr-history-view.component.html',
  styleUrls: ['./rt-deployment-sr-history-view.component.scss']
})
export class RtDeploymentSrHistoryViewComponent implements OnInit {

  id: string = "";
  jobData: any;
  loading: boolean = true;

  employeeData: any[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private location: Location,
    private employee: EmployeeInfoService
  ) { }

  ngOnInit(): void {
    this.employee.employeeInfo.subscribe(data=>{
      this.employeeData = data;
    })
    this.route.params.subscribe((data: any)=>{
      this.id = data.id;
      this.fetchJobDetails();
    })
  }

  fetchJobDetails(){
    this.loading = true;
    this.api.postData(globalUrls.rtDeploymentHasSrRelHistoryRead, {
      "rtDeploymentHasSerRelHasHistoryId": this.id
    }).subscribe({
      next: (data: any)=>{
        if(data&&data.payload){
          this.jobData = data?.payload;
          const eidList = data.payload.deploymentLastModifiedBy.split(":")[0]
          this.employee.fetchEmployeeInfo([eidList]);
        }
        this.loading = false
      },
      error: (err)=>{
        this.loading = false;
      }
    })
  }


  moveBack(){
    this.location.back();
  }
}
