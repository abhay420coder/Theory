import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { EmployeeInfoService } from 'src/app/services/employee-info.service';
import { RolesPermissionsService } from 'src/app/services/roles-permissions.service';
import { UtilityHelperService } from 'src/app/services/utility-helper.service';
import { ADMIN_OVERRIDE_ROLE, PERMISSION } from '../constants';
import { ServiceReleaseCreateUpdateComponent } from '../service-release-create-update/service-release-create-update.component';
import { globalUrls } from '../urls';
import { CodeEditorDialogComponent } from '../utility/code-editor-dialog/code-editor-dialog.component';
import { ConfirmDialogComponent } from '../utility/confirm-dialog/confirm-dialog.component';
import { DialogItemAttacherComponentV2 } from '../utility/dialog-item-attacher-v2/dialog-item-attacher-v2.component';
import { DialogItemAttacherComponent } from '../utility/dialog-item-attacher/dialog-item-attacher.component';

@Component({
  selector: 'service-release',
  templateUrl: './service-release.component.html',
  styleUrls: ['./service-release.component.scss']
})
export class ServiceReleaseComponent implements OnInit {
  pageNo: number = 1;
  pageSize: number = 100;
  searchKey: string = "";
  lastPage: boolean = false;

  serAvlPageNo: number = 0;
  serAvlPageSize: number = 100;
  serAvlSearchKey: string = "";

  serAttachedPageNo: number = 0;
  serAttachedPageSize: number = 100;
  serAttachedSearchKey: string = "";

  serviceReleaseList: any[] = [];
  avlServiceObs: BehaviorSubject<any[]> = new BehaviorSubject([]);
  attachedServiceObs: BehaviorSubject<any[]> = new BehaviorSubject([]);
  initialAttachedService: any[] = [];
  loading = true;

  avlPermsObv: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  attachedPermsObv: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  currentUserData: any = undefined;
  avlRoles: any[] = [];
  preAttachedRoles: any[] = [];

  employeeData: any[] = [];

  dialogRef: any;

  searchObs: Subject<string> = new Subject<string>();
  searchSub: any

  constructor(
    private api: ApiService, 
    public dialog: MatDialog, 
    private snackbar: MatSnackBar,
    private cus: CurrentUserService,
    private utils: UtilityHelperService,
    private roles: RolesPermissionsService,
    private employee: EmployeeInfoService
  ) { }

  ngOnInit(): void {
    this.employee.employeeInfo.subscribe(data=>{
      this.employeeData = data;
    });
    this.cus.currentUser.subscribe(data=>{
      if (JSON.stringify(data)!=='{}') {
        this.currentUserData = data;
      }
    });
    this.serviceReleaseList = [];
    this.pageNo = 1;
    this.getServiceReleaseList();
    this.searchSub = this.searchObs.pipe(
      map(searchText=>{
        this.searchKey = searchText;
      }),
      switchMap(searchText=>this.api.postData(globalUrls.srList, {
        pageNo: 1,
        pageSize: this.pageSize,
        searchText: this.searchKey
      }))
    ).subscribe((data: any)=>{
      this.loading = false;
      this.serviceReleaseList = [...this.serviceReleaseList, ...data['payload']];
      if(data.payload.length < this.pageSize){
        this.lastPage = true;
      }
      let empIdList = this.employeeData.map(d=>d.employeeId);
      data["payload"].map(d=>{
        const empId = d.lastModifiedBy.split(":")[0];
        if(!empIdList.includes(empId)){
          empIdList.push(empId);
        }
      });
      this.employee.fetchEmployeeInfo(empIdList);
    })
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }
  
  fetchAvlRoles(){
    this.avlRoles = this.roles.getAllRoles();
  }

  getServiceReleaseList() {
    this.loading = true;
    this.api.postData(globalUrls.srList, {
      pageNo: this.pageNo,
      pageSize: this.pageSize,
      searchText: this.searchKey
    }).subscribe((data: any) => {
      this.loading = false;
      this.serviceReleaseList = this.serviceReleaseList.concat(data['payload']);
      if(data.payload.length < this.pageSize){
        this.lastPage = true;
      }
      let empIdList = this.employeeData.map(d=>d.employeeId);
      data["payload"].map(d=>{
        const empId = d.lastModifiedBy.split(":")[0];
        if(!empIdList.includes(empId)){
          empIdList.push(empId);
        }
      });
      this.employee.fetchEmployeeInfo(empIdList);
      // this.fetchEmployeeInfo(empIdList);
    }, err=>{
      this.loading = false;
    })
  }


  createUpdateServiceRelease(obj?: any) {
    const dialogRef = this.dialog.open(ServiceReleaseCreateUpdateComponent, {
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.serviceReleaseList = [];
        this.pageNo = 1;
        this.getServiceReleaseList()
      }
    });
  }
  deleteServiceRel(obj) {
    this.dialog.open(ConfirmDialogComponent,
      {
        hasBackdrop: true,
        data: "Are you sure you want to delete?"
      }).afterClosed().subscribe(result => {
        if (result) {
          let payload = JSON.parse(JSON.stringify(obj))
          payload['active'] = false;
          this.api.postData(globalUrls.srCreateUpdate, payload).subscribe(data => {
            this.snackbar.open("Successfully deleted!", "Close", { duration: 3000 });
            this.serviceReleaseList = [];
            this.pageNo = 1;
            this.getServiceReleaseList();
          })
        }
      })
  }
  mapDependency(obj) {
    const data = {};
    data["title"] = "Service Dependency Maping";
    data["avlItemFunc"] = this.getAvlServics.bind(this, obj);
    data["attachedItemFunc"] = this.getAttachedServcices.bind(this, obj);
    data["filterBy"] = ["srId"];
    data["displayField"] = "serviceName";
    data["seconderyString"] = "Branch: #, Ver.: #, Note: #"
    data["secondaryDisplayField"] = ["srBranch","srVersion","releaseNote"]
    data["isPagination"] = true;
    data["avlItemSearchMode"] = "online";
    data["atchItemSearchMode"] = "online";
    data["hasIcon"] = true;
    data["activeControlled"] = true;
    this.dialogRef = this.dialog.open(DialogItemAttacherComponentV2, { 'width': "60vw", data });
    this.dialogRef.afterClosed()
      .subscribe((result) => {
        if (result instanceof Array) {
          this.saveMapping(result, obj);
        }
      });   
  }
  getAvlServics(obj, query: any) {
    this.serAvlPageNo += 1;
    let payload = {
      "baseServiceReleaseId": obj.srId,
      "pageNo": this.serAvlPageNo,
      "pageSize": this.serAvlPageSize
    }
    if (query) {
      if(query.refresh){
        this.serAvlPageNo = 1;
        payload['pageNo'] = this.serAvlPageNo;
      }
      if (query.searchKey) {
        payload['searchText'] = query.searchKey;
      }
    }

    return new Promise((resolve, reject)=>{
      this.api.postData(globalUrls.srDepUnattachedList, payload).subscribe((data: any) => {
        if(data&&data.payload){
          resolve({
            data: data.payload,
            lastPage: data.payload.length<this.serAvlPageSize
          })
        }
      })
    })
  }
  getAttachedServcices(obj, query: any) {
    this.serAttachedPageNo += 1;
    let payload = {
      "baseServiceReleaseId": obj.srId,
      "pageNo":this.serAttachedPageNo,
      "pageSize":this.serAttachedPageSize
    }
    if (query) {
      if(query.refresh){
        this.serAttachedPageNo = 1;
        payload['pageNo'] = this.serAttachedPageNo;
      }
      if (query.searchKey) {
        payload['searchText'] = query.searchKey;
      }
    }
    return new Promise((resolve, reject)=>{
      this.api.postData(globalUrls.srDepAttachedList, payload).subscribe((data:any) => {
        if(data&&data.payload){
          resolve({
            data: data.payload,
            lastPage: data.payload.length<this.serAttachedPageSize
          })
        }
      })
    })
  }

  saveMapping(attachedList: any[], baseSrObj) {
    this.snackbar.open("Updating dependency!");
    let payload = {
      baseServiceReleaseId: baseSrObj.srId,
      dependentServiceReleases: attachedList
    }
    this.api.postData(globalUrls.srDepCreateUpdate, payload).subscribe(data => {
      this.snackbar.open("Dependency updated!", "Close", { duration: 3000 });
      this.serviceReleaseList = [];
      this.pageNo = 1;
      this.getServiceReleaseList();
    })

  }
  openConfigMap(obj) {
    let code = obj['configMap'];
    this.dialog.open(CodeEditorDialogComponent, {
      data: {
        title: obj["actions"].includes('update')?"Edit Config" + " - " + obj.serviceName:"View Config" + " - " + obj.serviceName,
        code: code,
        language: 'json',
        canDisableOnError: true,
        readOnly: !obj["actions"].includes('update')
      },
      disableClose: true
    }).afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.snackbar.open('Saving Config...', undefined, { duration: 2000 });
        let payload = {
          "srId": obj['srId'],
          "configMap": result
        }
        this.api.postData(globalUrls.srCreateUpdate, payload).subscribe(data => {
          this.snackbar.open('Config Saved!', undefined, { duration: 2000 });
          this.serviceReleaseList = [];
          this.pageNo = 1;
          this.getServiceReleaseList();
        })
       
      }
    }
    )
  }

  handleSearch(event: string){
    this.loading = true;
    this.serviceReleaseList = [];
    this.searchObs.next(event);
  }

  onScroll(){
    if(!this.lastPage){
      this.pageNo += 1;
      this.getServiceReleaseList();
    }
  }

  getColorScheme(item: string){
    return {
      'blueChip': item==='depSerCount',
      'greenChip': item==='configPresent',
      'redChip': item==='configAbsent'
    }
  }

  async manageRole(template){
    this.attachedPermsObv.next([]);
    this.avlPermsObv.next([]);
    this.fetchAvlRoles();
    const data = {};
    data["title"] = "Roles Management";
    data["avlItemFunc"] = this.getAvlPerms.bind(this, template);
    data["attachedItemFunc"] = this.getAttachedPerms.bind(this, template);
    data["avlItemsObs"] = this.avlPermsObv;
    data["attachedItemObs"] = this.attachedPermsObv;
    data["filterBy"] = ["roleId"];
    data["displayField"] = "roleName";
    data["isPagination"] = false;
    data["avlItemSearchMode"] = "offline";
    data["atchItemSearchMode"] = "offline";

    this.dialog.open(DialogItemAttacherComponent, {
      width: "60vw",
      data: data
    }).afterClosed().subscribe(data=>{
      if(data){
        let updatedRoles = [];
        data.map(role=>{
          if(!this.utils.objectExistInArray(role, this.preAttachedRoles, "roleId")){
            updatedRoles.push({
              roleId: role.roleId,
              active: true
            })
          }
        })
        // populate the detached items
        const detachedList = [];
        this.preAttachedRoles.map(role=>{
          if(!this.utils.objectExistInArray(role, data, "roleId")){
            detachedList.push({
              "srHasRoleId": role["srHasRoleId"],
              active: false
            })
          }
        });
        updatedRoles = [...updatedRoles, ...detachedList];
        this.api.postData(globalUrls.srUpdateRoles, {
          "srId": template.srId,
          "roleList": updatedRoles
        }).subscribe((data: any)=>{
          if (data.code >= 200 && data.code < 300) {
            this.snackbar.open("Roles updated successfully!", "Close", {duration: 5000});
          }
        }, err=>{
          this.snackbar.open("Something went wrong. Please try again.", "Close", {duration: 5000});
        })
      }
    })
  }

  getAvlPerms(obj, query){
    this.avlPermsObv.next([...this.avlRoles]);
  }

  getAttachedPerms(obj, query){
    const avlRoles = [...this.avlRoles];
    this.api.postData(globalUrls.srAttachedRoles, {
      "srId": obj.srId,
      "pageNo": 1,
      "pageSize": 1000
    }).subscribe((data: any)=>{
      let attachedRoles = [];
      //map attached role list
      data.payload.map(attachedRole=>{
        //get full role obj from avl list
        const roleObj = avlRoles.filter(role=>role.roleId===attachedRole.roleId)[0];
        if(roleObj){
          roleObj["srHasRoleId"] = attachedRole["srHasRoleId"];
          attachedRoles.push(roleObj);
        }
      })
      this.attachedPermsObv.next(attachedRoles);
      this.preAttachedRoles = [...attachedRoles];
    }, err=>{
      this.attachedPermsObv.next([]);
    }); 
  }

  openK8sService(serviceRelease: any){
    let code = serviceRelease['k8sService'];
    this.dialog.open(CodeEditorDialogComponent, {
      data: {
        title: serviceRelease["actions"].includes('update')?"Edit K8S Service" + " - " + serviceRelease.serviceName:"View K8S Service" + " - " + serviceRelease.serviceName,
        code: code,
        language: 'yaml',
        canDisableOnError: false,
        readOnly: !serviceRelease["actions"].includes('update')
      },
      disableClose: true
    }).afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.snackbar.open('Saving K8S Service...', undefined, { duration: 2000 });
        let payload = {
          "srId": serviceRelease['srId'],
          "k8sService": result
        }
        this.api.postData(globalUrls.srCreateUpdate, payload).subscribe(data => {
          this.snackbar.open('K8S Service Saved!', undefined, { duration: 2000 });
          this.serviceReleaseList = [];
          this.pageNo = 1;
          this.getServiceReleaseList();
        })
      }
    })
  }

  //RBAC methods
  canAdd(){
    if((this.currentUserData&&this.currentUserData.permissionList.includes(PERMISSION.SERVICE_RELEASE.ADD))||(this.currentUserData.permissionList.includes(ADMIN_OVERRIDE_ROLE))){
      return true;
    } else {
      return false;
    }
  }

  canManageRoles(){
    if(this.currentUserData&&(this.currentUserData.permissionList.includes(ADMIN_OVERRIDE_ROLE))){
      return true;
    } else {
      return false;
    }
  }
}
