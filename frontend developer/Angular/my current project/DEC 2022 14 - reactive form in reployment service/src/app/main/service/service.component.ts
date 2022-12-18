import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { RolesPermissionsService } from 'src/app/services/roles-permissions.service';
import { UtilityHelperService } from 'src/app/services/utility-helper.service';
import { ADMIN_OVERRIDE_ROLE, PERMISSION } from '../constants';
import { ServiceCreateUpdateComponent } from '../service-create-update/service-create-update.component';
import { globalUrls } from '../urls';
import { ConfirmDialogComponent } from '../utility/confirm-dialog/confirm-dialog.component';
import { DialogItemAttacherComponent } from '../utility/dialog-item-attacher/dialog-item-attacher.component';

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  pageNo: number = 1;
  pageSize: number = 100;
  searchKey: string = "";
  lastPage: boolean = false;
  serviceList: any[] = [];
  loading = true;
  avlRoles: any[] = [];
  preAttachedRoles: any[] = [];
  currentUserData: any = undefined;


  avlPermsObv: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  attachedPermsObv: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  searchObs: Subject<string> = new Subject<string>();
  searchSub: any

  constructor(
    private api: ApiService, 
    public dialog: MatDialog, 
    private snackBar: MatSnackBar,
    private roles: RolesPermissionsService,
    private dialogRef: MatDialog,
    private cus: CurrentUserService,
    private utils: UtilityHelperService) { }

  ngOnInit(): void {
    this.cus.currentUser.subscribe(data=>{
      if (JSON.stringify(data)!=='{}') {
        this.currentUserData = data;
      }
    })
    this.pageNo = 1;
    this.serviceList = [];
    this.getServiceList();

    this.searchSub = this.searchObs.pipe(
      map(searchText=>{
        this.searchKey = searchText;
      }),
      switchMap(searchText=>this.api.postData(globalUrls.serviceList, {
        pageNo: 1,
        pageSize: this.pageSize,
        searchText: this.searchKey
      }))
    ).subscribe((data:any)=>{
      this.loading = false;
      this.serviceList = [...this.serviceList, ...data['payload']];
      if(data.payload.length < this.pageSize){
        this.lastPage = true;
      }
    }, err=>{
      this.loading = false;
      this.serviceList = [];
    })
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }
  
  fetchAvlRoles(){
    this.avlRoles = this.roles.getAllRoles();
  }

  getServiceList() {
    this.loading = true;
    this.api.postData(globalUrls.serviceList, {
      pageNo: this.pageNo,
      pageSize: this.pageSize,
      searchText: this.searchKey
    }).subscribe((data:any) => {
      this.loading = false;
      this.serviceList = this.serviceList.concat(data['payload']);
      if(data.payload.length < this.pageSize){
        this.lastPage = true;
      }
    }, err=>{
      this.loading = false;
      this.serviceList = [];
    })
  }
  createUpdateService(obj?: any) {
    const dialogRef = this.dialog.open(ServiceCreateUpdateComponent, {
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.pageNo = 1;
        this.serviceList = [];
        this.getServiceList();
      }
    });
  }
  deleteService(obj) {
    this.dialog.open(ConfirmDialogComponent,
      {
        hasBackdrop:true,
        data:"Are you sure you want to delete?"
      }).afterClosed().subscribe(result => {
      if (result) {
        let payload = JSON.parse(JSON.stringify(obj))
        payload['active'] = false;
        payload['imagePullSecretValue'] = "ewogICAgImF1dGhzIjogewogICAgICAgICJodHRwczovL3JlZ2lzdHJ5LmdpdGxhYi5jb20iOnsKICAgICAgICAgICAgInVzZXJuYW1lIjoidmNhLWlkZW50aXR5IiwKICAgICAgICAgICAgInBhc3N3b3JkIjoiTWVXQ1lHRlREV3daSkxOVVhBRS0iLAogICAgICAgICAgICAiZW1haWwiOiJhcmJhYkBjb3JkaXMudXMiLAogICAgICAgICAgICAiYXV0aCI6ImRtTmhMV2xrWlc1MGFYUjVPazFsVjBOWlIwWlVSRmQzV2twTVRsVllRVVV0IgogICAgCX0KICAgIH0KfQoK"
        this.api.postData(globalUrls.serviceCreateUpdate, payload).subscribe(data => {
          this.snackBar.open("Successfully deleted!", "Close", {duration: 3000});
          this.pageNo = 1;
          this.serviceList = [];
          this.getServiceList();
        }, err=>{
          this.snackBar.open("An error occurred! Please try again.", "Close", {duration: 3000});
        })
      }
    })
  }

  handleSearch(event: string){
    this.loading = true;
    this.serviceList = [];
    this.searchObs.next(event)
  }

  onScroll(){
    if(!this.lastPage){
      this.pageNo += 1;
      this.getServiceList();
    }
  }

  async manageRole(service){
    this.attachedPermsObv.next([]);
    this.avlPermsObv.next([]);
    this.fetchAvlRoles();
    const data = {};
    data["title"] = "Roles Management";
    data["avlItemFunc"] = this.getAvlPerms.bind(this, service);
    data["attachedItemFunc"] = this.getAttachedPerms.bind(this, service);
    data["avlItemsObs"] = this.avlPermsObv;
    data["attachedItemObs"] = this.attachedPermsObv;
    data["filterBy"] = ["roleId"];
    data["displayField"] = "roleName";
    data["isPagination"] = false;
    data["avlItemSearchMode"] = "offline";
    data["atchItemSearchMode"] = "offline";

    this.dialogRef.open(DialogItemAttacherComponent, {
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
        this.api.postData(globalUrls.serviceUpdateRoles, {
          "serviceId": service.serviceId,
          "roleList": updatedRoles
        }).subscribe((data: any)=>{
          if (data.code >= 200 && data.code < 300) {
            this.snackBar.open("Roles updated successfully!", "Close", {duration: 5000});
          }
        }, err=>{
          this.snackBar.open("Something went wrong. Please try again.", "Close", {duration: 5000});
        })
      }
    })
  }

  getAvlPerms(obj, query){
    this.avlPermsObv.next([...this.avlRoles]);
  }

  getAttachedPerms(obj, query){
    const avlRoles = [...this.avlRoles];
    this.api.postData(globalUrls.serviceAttachedRoles, {
      "serviceId": obj.serviceId,
      "pageNo": 1,
      "pageSize": 1000
    }).subscribe((data: any)=>{
      let attachedRoles = [];
      //map attached role list
      data.payload.map(attachedRole=>{
        //get full role obj from avl list
        const roleObj = avlRoles.filter(role=>role.roleId===attachedRole.roleId)[0];
        roleObj["srHasRoleId"] = attachedRole["srHasRoleId"]
        attachedRoles.push(roleObj);
      })
      this.attachedPermsObv.next(attachedRoles);
      this.preAttachedRoles = [...attachedRoles];
    }, err=>{
      this.attachedPermsObv.next([]);
    }); 
  }

  redirectToSwagger(service: any){
    window.open(`https://devwww2.pushcord.com:8000/${service.serviceName}/swagger-ui.html`, '_blank', "noreferrer");
  }

  //RBAC methods
  canAdd(){
    if(this.currentUserData&&this.currentUserData.permissionList.includes(PERMISSION.SERVICE.ADD)||(this.currentUserData.permissionList.includes(ADMIN_OVERRIDE_ROLE))){
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
