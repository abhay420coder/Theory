import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { RolesPermissionsService } from 'src/app/services/roles-permissions.service';
import { UtilityHelperService } from 'src/app/services/utility-helper.service';
import { ADMIN_OVERRIDE_ROLE, PERMISSION } from '../constants';
import { ReleaseTrainCreateUpdateComponent } from '../release-train-create-update/release-train-create-update.component';
import { RtDeployConfirmationComponent } from '../rt-deploy-confirmation/rt-deploy-confirmation.component';
import { globalUrls } from '../urls';
import { ConfirmDialogComponent } from '../utility/confirm-dialog/confirm-dialog.component';
import { DialogItemAttacherComponentV2 } from '../utility/dialog-item-attacher-v2/dialog-item-attacher-v2.component';
import { DialogItemAttacherComponent } from '../utility/dialog-item-attacher/dialog-item-attacher.component';

@Component({
  selector: 'release-train',
  templateUrl: './release-train.component.html',
  styleUrls: ['./release-train.component.scss']
})
export class ReleaseTrainComponent implements OnInit {
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

  attacherDialogRef: MatDialogRef<DialogItemAttacherComponent>;

  rtList = []
  avlServiceObs: BehaviorSubject<any[]> = new BehaviorSubject([]);
  attachedServiceObs: BehaviorSubject<any[]> = new BehaviorSubject([]);
  initialAttachedService: any[] = [];
  loading = true;
  loadingTemplates = true;
  templateListSub:Subscription;
  templateListObv = new Subject<any>();
  avlPermsObv: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  attachedPermsObv: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  currentUserData: any = undefined;
  avlRoles: any[] = [];
  preAttachedRoles: any[] = [];

  searchObs: Subject<string> = new Subject<string>();
  searchSub: any

  constructor(
    private api: ApiService, 
    private dialog: MatDialog,
    private snackBar:MatSnackBar, 
    private cus: CurrentUserService,
    private utils: UtilityHelperService,
    private roles: RolesPermissionsService) { }

  ngOnInit(): void {
    this.cus.currentUser.subscribe(data=>{
      if (JSON.stringify(data)!=='{}') {
        this.currentUserData = data;
      }
    })
    this.getRtList();

    this.searchSub = this.searchObs.pipe(
      map(searchText=>{
        this.searchKey = searchText;
      }),
      switchMap(searchText=>this.api.postData(globalUrls.rtList, {
        pageNo: 1,
        pageSize: this.pageSize,
        searchText: this.searchKey
      }))
    ).subscribe((data:any)=>{
      this.loading = false;
      this.rtList = [...this.rtList, ...data.payload];
      if(data.payload.length < this.pageSize){
        this.lastPage = true;
      }
    })
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }
  
  fetchAvlRoles(){
    this.avlRoles = this.roles.getAllRoles();
  }

  createUpdateRt(obj?: any) {
    const dialogRef = this.dialog.open(ReleaseTrainCreateUpdateComponent, {
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.pageNo = 1;
        this.rtList = [];
        this.getRtList();
      }
    });
  }
  getRtList() {
    this.loading = true;
    this.api.postData(globalUrls.rtList, {
      pageNo: this.pageNo,
      pageSize: this.pageSize,
      searchText: this.searchKey
    }).subscribe((data: any) => {
      if (data.payload) {
        this.loading = false;
        this.rtList = this.rtList.concat(data.payload);
        if(data.payload.length < this.pageSize){
          this.lastPage = true;
        }
      }
    }, err => {
      this.loading = false;
      this.rtList = [];
    })
  }
  deleteRt(obj) {
    this.dialog.open(ConfirmDialogComponent,
      {
        hasBackdrop: true,
        data: "Are you sure you want to delete?"
      }).afterClosed().subscribe(result => {
        if (result) {
          let payload = JSON.parse(JSON.stringify(obj))
          payload['active'] = false;
          this.api.postData(globalUrls.rtCreateUpdate, payload).subscribe(data => {
            this.snackBar.open("Deleted Successfully!", "Close", {duration: 3000});
            this.pageNo = 1;
            this.rtList = [];
            this.getRtList();
          }, err=>{
            this.snackBar.open("There was an error!", "Close", {duration: 3000});
          })
        }
      })
  }
  // deploy(obj){
  //   const data = {};
  //   data['rtId'] = obj.rtId;
  //   this.dialog.open(RtDeployConfirmationComponent,{width:"80%",data})
  //   .afterClosed()
  //   .subscribe((result) => {
  //     console.log(result);
  //   });
   
  // }
  mapDependency(obj) {
    const data = {};
    data["title"] = "Service Release Maping - " + obj.rtName;
    data["readOnly"] = !obj["actions"].includes('update');
    data["avlItemFunc"] = this.getAvlServics.bind(this, obj);
    data["attachedItemFunc"] = this.getAttachedServcices.bind(this, obj);
    // data["avlItemsObs"] = this.avlServiceObs;
    // data["attachedItemObs"] = this.attachedServiceObs;
    data["filterBy"] = ["srId"];
    data["displayField"] = "serviceName";
    data["secondaryDisplayField"] = ["srBranch", "srVersion", "releaseNote"];
    data["seconderyString"] = "Branch: #, Ver.: #, Note: #";
    data["isPagination"] = true;
    data["avlItemSearchMode"] = "online";
    data["atchItemSearchMode"] = "online";
    data["hasIcon"] = true;
    data["activeControlled"] = true;
    // data["avlLastPage"] = false;
    // data["attachedLastPage"] = false;
    
    this.attacherDialogRef = this.dialog
      .open(DialogItemAttacherComponentV2, { width: "60vw", data });
    this.attacherDialogRef.afterClosed()
      .subscribe((result) => {
        this.avlServiceObs.next([]);
        this.avlServiceObs.next([]);
        if (result instanceof Array) {
          this.saveMapping(result, obj);
        }
      });
  }
  getAvlServics(obj, query: any) {
    this.serAvlPageNo += 1;
    let payload = {
      "rtId": obj.rtId,
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
    // if (typeof query === "string") {
    //   payload['searchText'] = query;
    //   if(this.serAvlSearchKey!==query){
    //     this.serAvlSearchKey = query;
    //     this.avlServiceObs.next([]);
    //     this.serAvlPageNo = 1;
    //     payload['pageNo'] = this.serAvlPageNo;
    //     if(this.attacherDialogRef){
    //       this.attacherDialogRef.componentInstance.data["avlLastPage"] = false;
    //     }
    //   }
    // } else if (typeof query === "object"){
    //   if(query.refresh){
    //     this.serAvlPageNo = 1;
    //     payload['pageNo'] = this.serAvlPageNo;
    //     this.avlServiceObs.next([]);
    //     if(this.attacherDialogRef){
    //       this.attacherDialogRef.componentInstance.data["avlLastPage"] = false;
    //     }
    //   }
    // }
    return new Promise((resolve, reject)=>{
      this.api.postData(globalUrls.rtServiceRelUnattachedList, payload).subscribe((data: any) => {
        if(data&&data.payload){
          resolve({
            data: data.payload,
            lastPage: data.payload.length<this.serAvlPageSize
          })
        }
      });
    })
    // this.api.postData(globalUrls.rtServiceRelUnattachedList, payload).subscribe((data: any) => {
    //   if(data.payload.length<this.serAvlPageSize){
    //     if(this.attacherDialogRef){
    //       this.attacherDialogRef.componentInstance.data["avlLastPage"] = true;
    //     }
    //   }
    //   this.avlServiceObs.next(this.avlServiceObs.value.concat(data['payload']));
    // })
  }
  getAttachedServcices(obj, query: any) {
    this.serAttachedPageNo += 1;
    let payload = {
      "rtId": obj.rtId,
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
    // if (typeof query === "string" && query !== '') {
    //   payload['searchText'] = query;
    //   if(this.serAttachedSearchKey!==query){
    //     this.serAttachedSearchKey = query;
    //     this.attachedServiceObs.next([]);
    //     this.serAttachedPageNo = 1;
    //     payload['pageNo'] = this.serAttachedPageNo;
    //     if(this.attacherDialogRef){
    //       this.attacherDialogRef.componentInstance.data["attachedLastPage"] = false;
    //     }
    //   }
    // } else if (typeof query === "object"){
    //   if(query.refresh){
    //     this.serAttachedPageNo = 1;
    //     payload['pageNo'] = this.serAttachedPageNo;
    //     this.attachedServiceObs.next([]);
    //     if(this.attacherDialogRef){
    //       this.attacherDialogRef.componentInstance.data["attachedLastPage"] = false;
    //     }
    //   }
    // }
    return new Promise((resolve, reject)=>{
      this.api.postData(globalUrls.rtServiceRelAttachedList, payload).subscribe((data:any) => {
        if(data&&data.payload){
          resolve({
            data: data.payload,
            lastPage: data.payload.length<this.serAttachedPageSize
          })
        }
      })
    })
    // this.api.postData(globalUrls.rtServiceRelAttachedList, payload).subscribe((data:any) => {
    //   if(data.payload.length<this.serAttachedPageSize){
    //     if(this.attacherDialogRef){
    //       this.attacherDialogRef.componentInstance.data["attachedLastPage"] = true;
    //     }
    //   }
    //   this.attachedServiceObs.next(this.attachedServiceObs.value.concat(data['payload']));
    //   this.initialAttachedService = this.initialAttachedService.concat(data['payload']);
    // })
  }

  saveMapping(attachedList: any[], baseRtObj) {
    this.snackBar.open("Updating dependency...");
    // this.initialAttachedService.forEach((item: any) => {
    //   item.active = false;
    //   attachedList.forEach((attachedItem: any) => {
    //     if (item.srId === attachedItem.srId) {
    //       attachedItem = item;
    //       item.active = true;
    //     }
    //   });
    //   if (!item.active) {
    //     attachedList.push(item);
    //   }
    // });
    // attachedList = attachedList.map(data => {
    //   if (data.active !== false) {
    //     data.active = true
    //   }
    //   return {
    //     active: data.active,
    //     srId: data.srId,
    //   }
    // })
    let payload = {
      rtId: baseRtObj.rtId,
      serviceReleases: attachedList
    }
    this.api.postData(globalUrls.rtServiceRelCreateUpdate, payload).subscribe(data => {
      this.pageNo = 1;
      this.rtList = [];
      this.getRtList();
      this.snackBar.open("Services Updated","Close",{duration:3000})
    }, err=>{
      this.snackBar.open("An error occurred. Please try again","Close",{duration:3000})
    })

  }
  getTemplateList(rt){
    this.loadingTemplates = true;
    if(this.templateListSub){
      this.templateListSub.unsubscribe();
      this.templateListObv.next([]);
    }
    this.templateListSub = this.api.postData(globalUrls.rtTemplateList,{
      rtId: rt.rtId,
      "pageNo":1,
      "pageSize":100
    }).subscribe(data=> {
      this.loadingTemplates = false;
      this.templateListObv.next(data['payload']) 
    }, err=>{
      this.loadingTemplates = false;
      this.templateListObv.next([]);
    })
  }

  copyReleaseTrain(rt:any){
    const rtObj = {
      title: "Copy " + rt.rtName,
      rtName: rt.rtName + "_copy",
      rtVersion: rt.rtVersion,
      rtNote: rt.rtNote,
      rtNodeUuid: rt.rtNoteUuid
    }
    const dialogRef = this.dialog.open(ReleaseTrainCreateUpdateComponent, {
      data: rtObj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.pageNo = 1;
        this.rtList = [];
        this.getRtList();
      }
    });
  }

  handleSearch(event: string){
    this.loading = true;
    this.rtList = [];
    this.searchObs.next(event);
  }

  onScroll(){
    if (!this.lastPage) {
      this.pageNo += 1;
      this.getRtList();
    }
  }

  async manageRole(rt){
    this.attachedPermsObv.next([]);
    this.avlPermsObv.next([]);
    this.fetchAvlRoles();

    const data = {};
    data["title"] = "Roles Management";
    data["avlItemFunc"] = this.getAvlPerms.bind(this, rt);
    data["attachedItemFunc"] = this.getAttachedPerms.bind(this, rt);
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
        //populate attached items
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
              "rtHasRoleId": role.rtHasRoleId,
              active: false
            })
          }
        });
        updatedRoles = [...updatedRoles, ...detachedList];
        this.api.postData(globalUrls.rtUpdateRoles, {
          "rtId": rt.rtId,
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
    this.api.postData(globalUrls.rtAttachedRoles, {
      rtId: obj.rtId
    }).subscribe((data: any)=>{
      let attachedRoles = [];
      //map attached role list
      data.payload.map(attachedRole=>{
        //get full role obj from avl list
        const roleObj = avlRoles.filter(role=>role.roleId===attachedRole.roleId)[0];
        if(roleObj){
          roleObj["rtHasRoleId"] = attachedRole["rtHasRoleId"]
          attachedRoles.push(roleObj);
        }
      })
      this.attachedPermsObv.next(attachedRoles);
      this.preAttachedRoles = [...attachedRoles];
    }, err=>{
      this.attachedPermsObv.next([]);
    }); 
  }

  //RBAC methods
  canAdd(){
    if(this.currentUserData&&(this.currentUserData.permissionList.includes(PERMISSION.RT.ADD)||(this.currentUserData.permissionList.includes(ADMIN_OVERRIDE_ROLE)))){
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
