import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { EmployeeInfoService } from 'src/app/services/employee-info.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ADMIN_OVERRIDE_ROLE, PERMISSION } from '../constants';
import { RtDeploymentsAddServiceComponent } from '../rt-deployments-add-service/rt-deployments-add-service.component';
import { RtDeploymentsConfigViewComponent } from '../rt-deployments-config-view/rt-deployments-config-view.component';
import { RtDeploymentsRedeploymentReviewComponent } from '../rt-deployments-redeployment-review/rt-deployments-redeployment-review.component';
import { globalUrls } from '../urls';
import { CodeEditorDialogComponent } from '../utility/code-editor-dialog/code-editor-dialog.component';
import { ConfirmDialogComponent } from '../utility/confirm-dialog/confirm-dialog.component';
import { RtDeploymentsSrLockDetailComponent } from './rt-deployments-sr-lock-detail/rt-deployments-sr-lock-detail.component';

@Component({
  selector: 'rt-deployments',
  templateUrl: './rt-deployments.component.html',
  styleUrls: ['./rt-deployments.component.scss']
})
export class RtDeploymentsComponent implements OnInit {
  pageNo: number = 1;
  serPageNo: number = 1;
  pageSize: number = 100;
  serPageSize: number = 100;
  searchKey: string = "";
  serSearchKey: string = "";
  lastPage: boolean = false;
  serLastPage: boolean = false;
  rtDeploymentList = [];
  loading = true;
  srRelSub: Subscription;
  serRelObv: any[] = [];
  loadingSerRel = true;
  failureKeywords: string[] = ['FAILED', 'FAILURE'];
  successKeywords: string[] = ['SUCCESS'];
  pendingKeywords: string[] = [null, 'PENDING'];
  employeeDetailData: any[] = [];
  expandedItem: string = "";

  searchObs: Subject<string> = new Subject<string>();
  searchSub: any

  serSearchObs: Subject<string> = new Subject<string>();
  serSearchSub: any

  
  podsControl = new FormControl();
  statusControl = new FormControl();
  form = new FormGroup({
    STATUSCONTROL: this.statusControl,
    PODSCONTROL: this.podsControl,
  });

  status: any = [
    { name: "Success", value: "SUCCESS" },
    { name: "Error", value: "FAILED" },
    { name: "Pending", value: "PENDING" },
  ];
  pods: any = [
    { name: "All Ready", value: "allReady" },
    { name: "Zero Ready", value: "zeroReady" },
    { name: "Partial Ready", value: "partialReady" },
  ];

  filterPodsWork: boolean = false;
  filterStatusWork: boolean = false;

  filteredStatSerRelObv: any[] = [];
  filteredPodSerRelObv: any[] = [];

  selectedStatus: any[] = [];   // this stores which data is coming from filter status
  selectedPods: any[] = [];   // this stores which data is coming from filter pods
  
  filtersSerRelObv: any[] = [];

  // lock component inputs
  deploymentObjToLock: any;
  lockPanelVisible = false;

  canCurrentUserLock: any = false;
  constructor(
    private api: ApiService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
    private wsService: WebsocketService,
    private cus: CurrentUserService,
    private employeeInfo: EmployeeInfoService
  ) { }

  ngOnInit(): void {
    this.cus.currentUser.subscribe(data=>{
      this.canCurrentUserLock = data&&data.permissionList?data.permissionList.includes(ADMIN_OVERRIDE_ROLE)||data.permissionList.includes(PERMISSION.RT.LOCKUNLOCK):false;
    })
    this.getRtdeploymentList();
    this.employeeInfo.employeeInfo.subscribe(data=>{
      this.employeeDetailData = data;
    })
    this.wsService.socketData.subscribe(async data => {
      // // if(data.message.status==="SUCCESS"){
      //   // this.getRtdeploymentList();
      //   console.log(this.rtDeploymentList.filter(d=>d.deploymentId===data.message.deploymentId));
      //   console.log(this.rtDeploymentList[0].deploymentId===data.message.deploymentId);
      // // }
      let deploymentData: any = await this.api.postData(globalUrls.rtDeploymentRead, {
        deploymentId: data.message.deploymentId
      }).toPromise();
      deploymentData = deploymentData.payload;

      this.rtDeploymentList.map((d: any, i: number) => {
        if (d.deploymentId === deploymentData.deploymentId) {
          this.rtDeploymentList[i] = deploymentData;
          console.log("wsService socket data" ,deploymentData )
        }
      });

      if (this.expandedItem === data.message.deploymentId) {
        if (data.message.srid) {
          //call the read api for particular service
          let serviceData: any = await this.api.postData(globalUrls.rtDeploymentHasSrRelRead, {
            srId: data.message.srid
          }).toPromise();
          serviceData = serviceData.payload;
          this.serRelObv.map((d: any, i: number) => {
            if (d.srId === data.message.srId) {
              this.serRelObv[i] = serviceData;
            }
          });
        } else {
          //trigger a force refresh of the serviceList
          this.getSerRel(deploymentData, true);
        }
      }
    })

    this.searchSub = this.searchObs.pipe(
      map(searchText => {
        this.searchKey = searchText;
      }),
      switchMap(searchText => this.api.postData(globalUrls.rtDeploymentList, {
        pageNo: 1,
        pageSize: this.pageSize,
        searchText: this.searchKey
      }))
    ).subscribe((data: any) => {
      this.rtDeploymentList = [...this.rtDeploymentList, ...data['payload']];
      this.loading = false;
      this.lastPage = data.payload.length < this.pageSize;
      const eids = data.payload.map((dt: any) => dt.deploymentLastModifiedBy.split(':')[0]);
      this.employeeInfo.fetchEmployeeInfo(eids);
    })
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }

  getRtdeploymentList() {
    this.loading = true;
    this.api.postData(globalUrls.rtDeploymentList, {
      pageNo: this.pageNo,
      pageSize: this.pageSize,
      searchText: this.searchKey
    }).subscribe((data: any) => {
      // this.rtDeploymentList = this.rtDeploymentList.concat(data['payload']);
      this.rtDeploymentList = data['payload'];
      this.loading = false;
      this.lastPage = data.payload.length < this.pageSize;
      const eids = data.payload.map((dt: any) => dt.deploymentLastModifiedBy.split(':')[0]);
      const lockEids = data.payload.map((dt: any) => dt?.activeLockUnlockInfo?.lockedUnlockedBy?.split(':')[0]);
      this.employeeInfo.fetchEmployeeInfo([...eids, ...lockEids]);
    }, err => {
      this.loading = false;
      this.rtDeploymentList = [];
    })
  }

  redeploy(rtDeployment) {
    this.dialog.open(ConfirmDialogComponent, {
      hasBackdrop: true,
      data: "Are you sure you want to redeploy?"
    }).afterClosed().subscribe(result => {
      if (result) {
        this.snackbar.open('Initiating deployment')
        this.rtDeploymentList.map((d: any, i: number) => {
          if (d.deploymentId === rtDeployment.deploymentId) {
            this.rtDeploymentList[i].deploymentStatus = "PENDING";
          }
        })
        this.api.postData(globalUrls.rtDeploymentReDeploy, {
          "deploymentId": rtDeployment.deploymentId
        }).subscribe((data: any) => {
          // this.getRtdeploymentList();
          this.snackbar.open('Deployment initiated', 'Ok', { duration: 3000 })
        }, err => {
          this.snackbar.open('There was an error! Please try again', 'Ok', { duration: 3000 })
        })
      }
    })
  }

  deleteRtDeployment(rtDeployment) {
    this.dialog.open(ConfirmDialogComponent,
      {
        hasBackdrop: true,
        data: "Are you sure you want to delete?"
      }).afterClosed().subscribe(result => {
        if (result) {
          this.api.postData(globalUrls.rtDeploymentDelete, {
            "deploymentId": rtDeployment.deploymentId
          }).subscribe(data => {
            this.pageNo = 1;
            this.rtDeploymentList = [];
            this.getRtdeploymentList();
            this.snackbar.open('Successfully Deleted', undefined, { duration: 500 })
          })
        }
      });
  }

  redeployServiceRel(rtDeployment, serRel) {
    this.dialog.open(RtDeploymentsRedeploymentReviewComponent, {
      width: "80%",
      height: "95%",
      data: {
        service: serRel,
        deploymentId: rtDeployment.deploymentId
      }
    })
    // this.snackbar.open('Initiating deployment');
    // this.serRelObv.map((d:any, i:number)=>{
    //   if(d.srId===serRel.srId){
    //     this.serRelObv[i].deploymentStatus = "PENDING";
    //   }
    // })
    // this.api.postData(globalUrls.rtDeploymentReDeploySerRel, {
    //   "deploymentId": rtDeployment.deploymentId,
    //   "srId": serRel.srId
    // }).subscribe(data => {
    //   // this.getRtdeploymentList();
    //   this.snackbar.open('Deployment initiated', 'Ok', { duration: 3000 })
    // })
  }

  hardRedeployServiceRel(rtDeployment, serRel) {
    this.dialog.open(ConfirmDialogComponent,
      {
        hasBackdrop: true,
        data: "Are you sure you want to Hard Deploy?"
      }).afterClosed().subscribe(result => {
        if (result) {
          this.snackbar.open('Initiating deployment');
          this.serRelObv.map((d: any, i: number) => {
            if (d.srId === serRel.srId) {
              this.serRelObv[i].deploymentStatus = "PENDING";
            }
          })
          this.api.postData(globalUrls.rtDeploymentHardReDeploySerRel, {
            "deploymentId": rtDeployment.deploymentId,
            "srId": serRel.srId
          }).subscribe(data => {
            // this.getRtdeploymentList();
            this.snackbar.open('Deployment initiated', 'Ok', { duration: 3000 })
          })
        }
      })
  }

  getSerRel(obj: any, force?: boolean) {
    if (!force) {
      this.serSearchKey = '';
    }
    if (this.expandedItem !== obj.deploymentId || force) {
      this.expandedItem = obj.deploymentId;
      this.serRelObv = [];
      this.filtersSerRelObv = [];
      this.loadingSerRel = true;
      this.srRelSub = this.api.postData(globalUrls.rtDeploymentHasSrRelList, {
        deploymentId: obj.deploymentId,
        pageNo: this.serPageNo,
        pageSize: this.serPageSize,
        searchText: this.serSearchKey
      }).subscribe((data: any) => {
        this.getSerRelStatus(obj.deploymentNamespace);
        this.loadingSerRel = false;
        this.serRelObv = data['payload'];
        this.filtersSerRelObv = this.serRelObv
        const eids = data.payload.map(d => d.deploymentLastModifiedBy.split(':')[0]);
        this.employeeInfo.fetchEmployeeInfo(eids);
      }, err => {
        this.loadingSerRel = false;
        this.serRelObv = [];
      })
    }
    this.toggleAllSelection();   // this is for auto unselect filter when any mat-expansion-panel  is open
  }

  showDeploymentLog(deploymentObj: any, serviceObj: any) {
    this.router.navigate([`/main/rt-deployments/pod-log/${deploymentObj.deploymentId}/${serviceObj.id}`])
  }

  getClass(type: string) {
    return {
      'success-border': type === "SUCCESS",
      'warning-border': type === 'warning',
      'error-border': type === "FAILED",
      'info-border': type === "PENDING" || type === null,
      'inactive-border': type === "inactive"
    }
  }

  showErrorPopUp(serData: any) {
    this.dialog.open(CodeEditorDialogComponent, {
      data: {
        title: "Error",
        code: serData.deploymentStatusDesc,
        readOnly: true,
        wordWrap: true
      }
    });
  }
  clearExpandedItem(obj: any) {
    if (this.expandedItem === obj.deploymentId) {
      this.expandedItem = "";
      this.serRelObv = [];
      this.filtersSerRelObv = this.serRelObv;
    }
    this.toggleAllSelection();  // this is for auto unselect filter when any mat-expansion-panel  is closed
  }

  handleSearch(event: string) {
    this.loading = true;
    this.rtDeploymentList = [];
    this.searchObs.next(event);
  }

  onScroll() {
    if (!this.lastPage) {
      this.pageNo += 1;
      this.getRtdeploymentList();
    }
  }

  handleSerSearch(deployment: any, event: string) {
    this.serSearchKey = event;
    this.serPageNo = 1;
    this.serRelObv = [];
    this.getSerRel(deployment, true);
  }

  getSerRelStatus(namespace: string) {
    this.api.postData(globalUrls.deploymentList, {
      namespace: namespace
    }).subscribe((data: any) => {
      data.payload.map((d: any) => {
        this.serRelObv.map((ser: any, i: number) => {
          if (ser.serviceName === d.metadata.name) {
            this.serRelObv[i]["replica"] = {
              available: d.status.availableReplicas ? d.status.availableReplicas : 0,
              ready: d.status.readyReplicas ? d.status.readyReplicas : 0,
              total: d.status.replicas ? d.status.replicas : 0
            }
          }
        })
      })
    })
  }

  getStatusColor(replica: any) {
    if (replica) {
      return {
        "red-text": replica.available < 1,
        "orange-text": replica.available > 0 && replica.available !== replica.total,
        "green-text": replica.available === replica.total
      }
    } else {
      return {
        "blue-text": true
      }
    }
  }

  refreshServiceList(deploymentObj: any) {
    this.serPageNo = 1;
    this.serRelObv = [];
    this.serSearchKey = "";
    this.getSerRel(deploymentObj, true);
  }

  showDeploymentConfig(item: any) {
    this.dialog.open(RtDeploymentsConfigViewComponent, {
      width: "700px",
      height: "95%",
      data: item
    })
  }

  addServiceRel(rtDeployment) {
    this.dialog.open(RtDeploymentsAddServiceComponent, {
      width: "80%",
      height: "95%",
      data: {
        deploymentId: rtDeployment.deploymentId
      }
    })
  }

  isApiService(ser) {
    return ser.basePath.split("/")[1] === "api";
  }

  filterStatus(event: any) {
    this.selectedStatus = event.value;
    this.quickFilter(this.selectedStatus, this.selectedPods)

  }

  filterPods(event: any) {
    this.selectedPods = event.value;
    this.quickFilter(this.selectedStatus, this.selectedPods)

  }

  quickFilter(filterStatusSelected: any[], filterPodsSelected: any[]) {
    this.filtersSerRelObv = [];
    let oldSerRelObv = [...this.serRelObv]  // save serRelObv  for safety purpous // this is raw data
    // this is for pods filter
    let selectedPodssFilter = filterPodsSelected;
    this.filteredPodSerRelObv = [];
    if (this.selectedPods.length > 0) {
      this.filterPodsWork = true
      for (let i = 0; i < selectedPodssFilter.length; i++) {
        if (selectedPodssFilter[i] == "allReady") {
          let result: any[] = oldSerRelObv.filter(filterstat => ((filterstat.replica?.available) / (filterstat.replica?.total)) == 1);
          this.filteredPodSerRelObv = [...this.filteredPodSerRelObv, ...result];
        } else if (selectedPodssFilter[i] == "partialReady") {
          let result: any[] = oldSerRelObv.filter(filterstat => (((filterstat.replica?.available) / (filterstat.replica?.total)) < 1) && (((filterstat.replica?.available) / (filterstat.replica?.total)) > 0));
          this.filteredPodSerRelObv = [...this.filteredPodSerRelObv, ...result];
        } else {
          let result: any[] = oldSerRelObv.filter(filterstat => ((filterstat.replica?.available) / (filterstat.replica?.total)) == 0);
          this.filteredPodSerRelObv = [...this.filteredPodSerRelObv, ...result];
        }
      }
    } else {
      this.filteredPodSerRelObv = this.serRelObv;
    };

    // this is for filter status
    let selectedStatusFilter: any[] = filterStatusSelected;
    this.filteredStatSerRelObv = [];
    if (this.selectedStatus.length > 0) {
      this.filterStatusWork = true;
      for (let i = 0; i < selectedStatusFilter.length; i++) {
        let result: any[] = oldSerRelObv.filter(filterstat => filterstat.deploymentStatus == selectedStatusFilter[i]);
        this.filteredStatSerRelObv = [...this.filteredStatSerRelObv, ...result];
      }
    } else {
      this.filteredStatSerRelObv = this.serRelObv;
    }
    this.filtersSerRelObv = this.filteredStatSerRelObv.filter(value => this.filteredPodSerRelObv.includes(value)); // intersection method
  }



  //  this is the function when i call to unselect multi mat option :- filterPods   filterStatus  ;
  toggleAllSelection() {
    this.filtersSerRelObv = this.serRelObv
    this.form.controls.STATUSCONTROL.patchValue([]);
    this.form.controls.PODSCONTROL.patchValue([]);
    this.filterPodsWork = false;
    this.filterStatusWork = false;

  }
  
  lockDeployment(rtDeployment: any){
    this.deploymentObjToLock = rtDeployment;
    this.lockPanelVisible = true;
  }

  handleLockUnlock(event: boolean){
    this.lockPanelVisible = false;
  }

  lockDescription(rtDeployment:any){
    this.dialog.open( RtDeploymentsSrLockDetailComponent, {
      width: "60%",
      height: "500px",
      data:{
        rtdeploymentDetails:rtDeployment
      }
    })
  }

}
