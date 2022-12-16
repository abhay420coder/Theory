import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../urls';
import {Location} from '@angular/common';
import { EmployeeInfoService } from 'src/app/services/employee-info.service';

@Component({
  selector: 'rt-deployment-history',
  templateUrl: './rt-deployment-history.component.html',
  styleUrls: ['./rt-deployment-history.component.scss']
})
export class RtDeploymentHistoryComponent implements OnInit {
  pageNo: number = 1;
  pageSize: number = 15;
  lastPage: boolean = false;
  historyType = {
    deployment: "deployment",
    serviceRel: "service"
  }

  id: string = "";
  type: string = "";
  parentDeploymentId: string = "";

  name: string = "";
  rtName: string = "";
  namespace: string = "";
  
  deploymentData: any[] = [];
  employeeData: any[] = [];
  affectedServices: any = [];

  loading: boolean = true;
  servicesLoading: boolean = false;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private employee: EmployeeInfoService
  ) { }

  ngOnInit(): void {
    this.employee.employeeInfo.subscribe(data=>{
      this.employeeData = data;
    })
    this.route.params.subscribe(data=>{
      this.id = data.id;
      this.type = data.type;
      this.fetchHistory()
    })
    this.route.queryParams.subscribe(data=>{
      if(data.deploymentId){
        this.parentDeploymentId = data.deploymentId;
        this.fetchParentDeploymentDetails();
      }
    })
  }

  fetchHistory(){
    this.loading = true;
    const payload = {
      "pageNo": this.pageNo,
      "pageSize": this.pageSize
    };
    if(this.type === this.historyType.deployment){
      payload["rtDeploymentId"] = this.id;
    } else if(this.type === this.historyType.serviceRel){
      payload["srId"] = this.id;
    }
    this.api.postData(this.type===this.historyType.deployment?globalUrls.rtDeploymentHistoryList:globalUrls.rtDeploymentHasSrRelHistoryList, payload).subscribe({
      next: (data: any)=>{
        if(data&&data.payload){
          this.deploymentData = [...this.deploymentData, ...data.payload];
          this.lastPage = data.payload.length < this.pageSize;
          this.name = data.payload?.[0]?.releaseTrainName || data.payload?.[0]?.serviceName
          const eidList = data.payload.map(d=>{
            return d.deploymentLastModifiedBy.split(":")[0]
          });
          this.employee.fetchEmployeeInfo(eidList)
        }
        this.loading = false;
      },
      error: err=>{
        this.loading = false;
      }
    })
  }

  fetchParentDeploymentDetails(){
    this.api.postData(globalUrls.rtDeploymentRead, {
      deploymentId: this.parentDeploymentId
    }).subscribe({
      next: (data: any)=>{
        console.log(data);
        if(data&&data.payload){
          this.rtName = `${data?.payload?.releaseTrainName} (V ${data?.payload?.releaseTrainVersion})`;
          this.namespace = data?.payload?.deploymentNamespace;
        }
      }
    })
  }

  viewHistory(history){
    this.clearAffectedServices();
    if(this.type === this.historyType.deployment){
      this.fetchAffectedServices(history)
    }
    if(this.type === this.historyType.serviceRel){
      this.navigateToServiceDeploymentDetail(history);
    }
  }

  fetchAffectedServices(job: any){
    this.servicesLoading = true;
    this.api.postData(globalUrls.rtDeploymentHasSrRelHistoryList, {
      "jobId": job.jobId
    }).subscribe({
      next: (data: any)=>{
        if(data&&data.payload){
          this.affectedServices = data.payload;
        }
        this.servicesLoading = false;
      },
      error: err=>{
        this.servicesLoading = false;
      }
    })
  }

  clearAffectedServices(){
    this.affectedServices = [];
  }

  navigateToServiceDeploymentDetail(history){
    let path = "/main/rt-deployments/deployment-history/view/" + this.type + "/";
    path += history?.rtDeploymentHasSerRelHasHistoryId;
    this.router.navigate([path]);
  }

  moveBack(){
    this.location.back();
  }

  onScroll(){
    if(this.lastPage){
      return;
    }
    this.pageNo += 1;
    this.fetchHistory();
  }
}
