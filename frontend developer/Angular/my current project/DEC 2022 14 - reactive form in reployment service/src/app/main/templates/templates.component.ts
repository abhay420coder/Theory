import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { RolesPermissionsService } from 'src/app/services/roles-permissions.service';
import { UtilityHelperService } from 'src/app/services/utility-helper.service';
import { ADMIN_OVERRIDE_ROLE, PERMISSION } from '../constants';
import { TemplateCreateUpdateComponent } from '../template-create-update/template-create-update.component';
import { globalUrls } from '../urls';
import { ConfirmDialogComponent } from '../utility/confirm-dialog/confirm-dialog.component';
import { DialogItemAttacherComponent } from '../utility/dialog-item-attacher/dialog-item-attacher.component';

@Component({
  selector: 'templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
  
  //search and pagination vars
  pageNo: number = 1;
  pageSize: number = 100;
  lastPage: boolean = false;
  searchKey: string = "";
  

  //view control vars
  loading = true;

  //dataset
  templateList: any[] = [];
  avlPermsObv: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  attachedPermsObv: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  currentUserData: any = undefined;
  avlRoles: any[] = [];
  preAttachedRoles: any[] = [];

  searchObs: Subject<string> = new Subject<string>();
  searchSub: any

  constructor(
    private api: ApiService, 
    private dialogRef: MatDialog, 
    private snackbar: MatSnackBar,
    private cus: CurrentUserService,
    private utils: UtilityHelperService,
    private roles: RolesPermissionsService) { }

  ngOnInit(): void {
    this.cus.currentUser.subscribe(data=>{
      if (JSON.stringify(data)!=='{}') {
        this.currentUserData = data;
      }
    })
    this.getTemplateList();

    this.searchSub = this.searchObs.pipe(
      map(searchText=>{
        this.searchKey = searchText;
      }),
      switchMap(searchText=>this.api.postData(globalUrls.templateList, {
        pageNo: 1,
        pageSize: this.pageSize,
        searchText: this.searchKey
      }))
    ).subscribe((data:any)=>{
      this.templateList = [...this.templateList, ...data.payload];
      this.loading = false;
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

  getTemplateList(){
    this.api.postData(globalUrls.templateList, {
      "pageNo": this.pageNo,
      "pageSize": this.pageSize,
      "searchText": this.searchKey,
      "active": true
    }).subscribe((data: any)=>{
      if(data.code === 200){
        this.templateList = this.templateList.concat(data.payload);
        this.loading = false;
        if(data.payload.length < this.pageSize){
          this.lastPage = true;
        }
      }
    },
    error=>{
      // this.snackbar.open("There was an error. Please try again", "Close", {duration: 5000});
      this.loading = false;
      this.templateList = [];
    })
  }

  handleSearch(event: string){
    this.loading = true;
    this.templateList = [];
    this.searchObs.next(event);
  }

  onScroll(){
    if(!this.lastPage){
      this.pageNo += 1;
      this.getTemplateList();
    }
  }

  createUpdateTemplate(template?: any){
    this.dialogRef.open(TemplateCreateUpdateComponent, {
      width: "600px",
      height: "90%",
      data: template
    }).afterClosed().subscribe(data=>{
      if(data){
        if (template) {
          this.snackbar.open("Template successfully updated!", "Close", {duration: 5000});
        } else {
          this.snackbar.open("Template successfully added!", "Close", {duration: 5000});
        }
        this.pageNo = 1;
        this.templateList = [];
        this.getTemplateList();
      }
    }, err=>{
      this.snackbar.open("There was an error. Please try again", "Close", {duration: 5000});
    })
  }

  deleteTemplate(template: any){
    this.dialogRef.open(ConfirmDialogComponent, {
      hasBackdrop: true,
      data: "Are you sure you want to delete?"
    }).afterClosed().subscribe(res=>{
      if(res){
        this.snackbar.open("Deleting template");
        this.api.postData(globalUrls.templateCreateUpdate, {
          id: template.id,
          active: false
        }).subscribe((data:any)=>{
          //handle successful deletion
          if(data.code===200){
            this.snackbar.open("Template successfully deleted!", "Close", {duration: 5000});
            this.pageNo = 1;
            this.templateList = [];
            this.getTemplateList();
          }
        },
        err=>{
          this.snackbar.open("There was an error. Please try again", "Close", {duration: 5000});
        })
      }
    })
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
              "k8sSpecTemplateHasRoleId": role["k8sSpecTemplateHasRoleId"],
              active: false
            })
          }
        });
        updatedRoles = [...updatedRoles, ...detachedList];
        this.api.postData(globalUrls.templateUpdateRoles, {
          "k8sSpecTemplateId": template.id,
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
    this.api.postData(globalUrls.templateAttachedRoles, {
      "k8sSpecTemplateId": obj.id,
      "pageNo": 1,
      "pageSize": 1000
    }).subscribe((data: any)=>{
      let attachedRoles = [];
      //map attached role list
      data.payload.map(attachedRole=>{
        //get full role obj from avl list
        const roleObj = avlRoles.filter(role=>role.roleId===attachedRole.roleId)[0];
        if(roleObj){
          roleObj["k8sSpecTemplateHasRoleId"] = attachedRole["k8sSpecTemplateHasRoleId"]
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
    if(this.currentUserData&&this.currentUserData.permissionList.includes(PERMISSION.SPEC.ADD)||(this.currentUserData.permissionList.includes(ADMIN_OVERRIDE_ROLE))){
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
