import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { globalUrls } from '../main/urls';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeInfoService {
  availableIdList: string[] = [];
  employeeInfo: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(
    private api: ApiService
  ) { }

  // this function checks if data for an employee is already present,
  // if not fetches it from the API
  fetchEmployeeInfo(eIdList: string[]){
    let newIdsToFetch = new Set()
    eIdList.map(d=>{
      if(!this.availableIdList.includes(d)&&d!=="") {
        newIdsToFetch.add(d);
      }
    });
    if(newIdsToFetch.size === 0) return;

    this.api.postData(globalUrls.employeeDetailById, { employeeIdList: Array.from(newIdsToFetch)}).subscribe((data: any) => {
      const newData = data.payload && data.payload.list ? data.payload.list : [];
      const newIds = newData.map(d=>{return d?.employeeId?.toString()});
      this.availableIdList = [...this.availableIdList, ...newIds];
      this.employeeInfo.next([...this.employeeInfo.value, ...newData]);
    });
  }
  
}
