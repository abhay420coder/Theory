import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { globalUrls } from '../main/urls';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RolesPermissionsService {
  allRoles: BehaviorSubject<any[]> = new BehaviorSubject([]);
  allPerms: any[];

  constructor(private api:ApiService) { }

  fetchAllRolesAndPermissions(){
    return new Promise<boolean>((resolve, reject)=>{
      this.api.postData(globalUrls.vcaRolesAndPerms, {
        "pageNumber":1,
        "pageSize":1000,
        "searchKey":""
      }).subscribe((data:any)=>{
        if(data&&data.payload){
          this.allRoles.next([...data.payload.roleList]);
          this.allPerms = [...data.payload.permissionList];
          resolve(true);
        } else {
          resolve(false);
        }
      }, err=>{
        reject(true);
      });
    });
  }

  getAllRoles(){
    return [...this.allRoles.value];
  }

  getAllPerms(){
    return [...this.allPerms];
  }
}
