import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Subject } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { CurrentUserService } from '../../services/current-user.service';
import { RolesPermissionsService } from '../../services/roles-permissions.service';
import { UtilityHelperService } from '../../services/utility-helper.service';
import { NamespaceCreateUpdateComponent } from '../namespace-create-update/namespace-create-update.component';
import { ADMIN_OVERRIDE_ROLE, PERMISSION } from '../constants';
import { globalUrls } from '../urls';
import { ConfirmDialogComponent } from '../utility/confirm-dialog/confirm-dialog.component';
import { DialogItemAttacherComponent } from '../utility/dialog-item-attacher/dialog-item-attacher.component';
import { AddEndpointComponent } from '../add-endpoint/add-endpoint.component';
import { AddK8sServiceComponent } from '../add-k8s-service/add-k8s-service.component';
import { AddK8sRoleBindingComponent } from '../add-k8s-role-binding/add-k8s-role-binding.component';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'namespace',
  templateUrl: './namespace.component.html',
  styleUrls: ['./namespace.component.scss']
})
export class NamespaceComponent implements OnInit {
  pageNo: number = 1;
  pageSize: number = 100;
  searchKey: string = "";
  lastPage: boolean = false;

  nsList = []
  loading = true

  currentUserData: any = undefined;
  avlPermsObv: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  attachedPermsObv: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  avlRoles: any[] = [];
  preAttachedRoles: any[] = [];
  
  searchObs: Subject<string> = new Subject<string>();
  searchSub: any

  constructor(
    private api: ApiService, 
    private dialog: MatDialog, 
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
    this.getNamespaceList();
    
    this.searchSub = this.searchObs.pipe(
      map(searchText=>{
        this.searchKey = searchText;
      }),
      switchMap(searchText=>this.api.postData(globalUrls.nsList, {
        pageNo: 1,
        pageSize: this.pageSize,
        searchText: this.searchKey
      }))
    ).subscribe((data:any)=>{
      this.loading = false;
      this.nsList = [...this.nsList, ...data['payload'] || []];
      if (data.payload.length < this.pageSize) {
        this.lastPage = true;
      }
    }, err=>{
      this.nsList= [];
      this.loading = false;
    })
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }
  
  fetchAvlRoles(){
    this.avlRoles = this.roles.getAllRoles();
  }
  getNamespaceList() {
    this.loading = true;
    this.api.postData(globalUrls.nsList, {
      pageNo: this.pageNo,
      pageSize: this.pageSize,
      searchText: this.searchKey
    }).subscribe((data:any) => {
      this.loading = false;
      this.nsList = [...this.nsList, ...(data['payload'] || [])];
      if (data.payload.length < this.pageSize) {
        this.lastPage = true;
      }
    }, err=>{
      this.loading = false;
      this.nsList = [];
    })
  }
  checkConn(){
    this.api.postData(globalUrls.rtDeploymentHasSrRelRead,{
      "id": '5b863fff-8369-4fcc-91e0-d17a3485b25a',
      // "deploymentId": 'feff5398-2dda-4015-aa0a-2041ab57541d',
      // "srId": 'f1d2d574-7ddf-467e-9f11-ef608bc734d7',

      }).subscribe(data=>{
      
    })
  }
  createUpdateNamespace(obj?:any) {
    const dialogRef = this.dialog.open(NamespaceCreateUpdateComponent, {
      width: "400px",
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.pageNo = 1;
        this.nsList = [];
        this.getNamespaceList();
      }
    });
  }
  deleteNs(obj) {
    this.dialog.open(ConfirmDialogComponent,
      {
        hasBackdrop:true,
        data:"Are you sure you want to delete?"
      }).afterClosed().subscribe(result => {
      if (result) {
        let payload = JSON.parse(JSON.stringify(obj))
        payload['active'] = false;
        this.api.postData(globalUrls.nsCreateUpdate, payload).subscribe(data => {
          this.snackbar.open("Deleted Successfully!", "Close", {duration: 3000});
          this.pageNo = 1;
          this.nsList = [];
          this.getNamespaceList();
        })
      }
    })
  }

  handleSearch(event: string){
    this.loading = true
    this.nsList = [];
    this.searchObs.next(event);
  }

  onScroll(){
    if (!this.lastPage) {
      this.pageNo += 1;
      this.getNamespaceList();
    }
  }

  async manageRole(ns){
    this.attachedPermsObv.next([]);
    this.avlPermsObv.next([]);
    this.fetchAvlRoles();
    
    const data = {};
    data["title"] = "Roles Management";
    data["avlItemFunc"] = this.getAvlPerms.bind(this, ns);
    data["attachedItemFunc"] = this.getAttachedPerms.bind(this, ns);
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
        //populate new attached items
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
              "nsHasRoleId": role.nsHasRoleId,
              active: false
            })
          }
        });
        updatedRoles = [...updatedRoles, ...detachedList];
        this.api.postData(globalUrls.nsUpdateRoles, {
          "nsId": ns.id,
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
    this.api.postData(globalUrls.nsAttachedRoles, {
      nsId: obj.id,
      pageNo: 1,
      pageSize: 1000
    }).subscribe((data: any)=>{
      let attachedRoles = [];
      //map attached role list
      data.payload.map((attachedRole:any)=>{
        //get full role obj from avl list
        const roleObj = avlRoles.filter(role=>role.roleId===attachedRole.roleId)[0];
        roleObj["nsHasRoleId"] = attachedRole.nsHasRoleId;
        attachedRoles.push(roleObj);
      })
      this.attachedPermsObv.next(attachedRoles);
      this.preAttachedRoles = [...attachedRoles];
    }, err=>{
      this.attachedPermsObv.next([]);
    });    
  }

  addEndpoint(ns:any){
    this.dialog.open(AddEndpointComponent, {
      width: '400px',
      data: ns
    }).afterClosed().subscribe(data=>{
      if(data){
        this.pageNo = 1;
        this.getNamespaceList();
      }
    });
  }

  addService(ns:any){
    this.dialog.open(AddK8sServiceComponent, {
      width: '600px',
      data: ns
    }).afterClosed().subscribe(data=>{
      if(data){
        this.pageNo = 1;
        this.getNamespaceList();
      }
    });
  }

  addRoleBinding(ns:any){
    this.dialog.open(AddK8sRoleBindingComponent, {
      width: '400px',
      data: ns
    }).afterClosed().subscribe(data=>{
      if(data){
        this.pageNo = 1;
        this.getNamespaceList();
      }
    });
  }

  //RBAC methods
  canAdd(){
    if(this.currentUserData&&(this.currentUserData.permissionList.includes(PERMISSION.NS.ADD)||(this.currentUserData.permissionList.includes(ADMIN_OVERRIDE_ROLE)))){
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
function afterClosed() {
  throw new Error('Function not implemented.');
}

