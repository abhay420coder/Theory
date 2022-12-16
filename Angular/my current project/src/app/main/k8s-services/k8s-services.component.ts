import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AddK8sServiceComponent } from '../add-k8s-service/add-k8s-service.component';
import { globalUrls } from '../urls';
import { CodeEditorDialogComponent } from '../utility/code-editor-dialog/code-editor-dialog.component';

@Component({
  selector: 'k8s-services',
  templateUrl: './k8s-services.component.html',
  styleUrls: ['./k8s-services.component.scss']
})
export class K8sServicesComponent implements OnInit {

  @Input() nsId: string;
  @Input() nsData: any
  @Input() refreshTrigger: Subject<string>

  refreshTriggerSub: Subscription;

  allServicesData: any[] = [];
  syncedServicesData: any[] = [];
  unsyncedServicesData: any[] = [];
  unsyncedDbServices: any[] = [];

  servicesLoading: boolean = true;
  serviceSkeletonCount: any[] = new Array(3);

  constructor(
    private api: ApiService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.refreshTriggerSub = this.refreshTrigger.subscribe(component=>{
      if(component==="service"){
        this.resetAllData();
        this.fetchServices();
      }
    });
    this.fetchServices();
  }

  ngOnDestroy(): void {
    this.refreshTriggerSub.unsubscribe();
  }

  fetchServices() {
    this.servicesLoading = true;
    this.api.postData(globalUrls.nsServicesList, {
      "nsId": this.nsId
    }).subscribe((data: any) => {
      this.allServicesData = data && data.payload ? data.payload : [];
      // this.servicesData = [...this.allServicesData];
      this.fetchServicesFromDb();
    }, err => {
      this.allServicesData = [];
      // this.servicesData = [];
      this.servicesLoading = false;
    })
  }

  fetchServicesFromDb() {
    this.servicesLoading = true;
    this.api.postData(globalUrls.nsServicesListDb, {
      "nsId": this.nsId
    }).subscribe((data: any) => {
      if (data && data.payload) {
        data.payload.map((dbService: any) => {
          let flag: boolean = false;
          this.allServicesData.map((service: any, i: number) => {
            if (service.metadata.name === dbService.name) {
              service["visible"] = true;
              flag = true;
              // create an obeject to contain data from db under dbData key
              service["dbData"] = {};
              Object.keys(dbService).map(d => {
                service["dbData"][d] = dbService[d];
              });
              this.syncedServicesData.push(service);
            }
          })
          if (!flag) {
            dbService["visible"] = true;
            this.unsyncedDbServices.push(dbService);
          }
        })
        const unsyncedK8sServs = this.allServicesData.filter(d => {
          if (this.syncedServicesData.filter(sd => sd.metadata.uid === d.metadata.uid).length === 0) {
            d["visible"] = true;
            return d;
          }
        })
        this.unsyncedServicesData = unsyncedK8sServs;
      }
      this.servicesLoading = false;
    }, err => {
      this.servicesLoading = false;
    })
  }

  handleServiceSearch(searchKey: string) {
    this.syncedServicesData = this.syncedServicesData.map(d => {
      if (d.metadata.name.indexOf(searchKey) > -1) {
        d["visible"] = true;
      } else {
        d["visible"] = false;
      }
      return d;
    });
    this.unsyncedServicesData = this.unsyncedServicesData.map(d => {
      if (d.metadata.name.indexOf(searchKey) > -1) {
        d["visible"] = true;
      } else {
        d["visible"] = false;
      }
      return d;
    });
    this.unsyncedDbServices = this.unsyncedDbServices.map(d => {
      if (d.name.indexOf(searchKey) > -1) {
        d["visible"] = true;
      } else {
        d["visible"] = false;
      }
      return d;
    });
  }

  patchService(service: any) {
    this.dialog.open(AddK8sServiceComponent, {
      width: '600px',
      data: {
        id: this.nsId,
        name: this.nsData?.name,
        action: "patch",
        service: service
      }
    }).afterClosed().subscribe(data => {
      if (data) {
        this.resetAllData();
        this.fetchServices();
      }
    });
  }

  replaceService(service: any) {
    this.dialog.open(AddK8sServiceComponent, {
      width: '600px',
      data: {
        id: this.nsId,
        name: this.nsData.name,
        action: "replace",
        service: service
      }
    }).afterClosed().subscribe(data => {
      if (data) {
        this.resetAllData();
        this.fetchServices();
      }
    });
  }

  retryService(service: any) {
    this.dialog.open(AddK8sServiceComponent, {
      width: '600px',
      data: {
        id: this.nsId,
        name: this.nsData.name,
        action: "retry",
        service: service
      }
    }).afterClosed().subscribe(data => {
      if (data) {
        this.resetAllData();
        this.fetchServices();
      }
    });
  }

  getServiceName(service: string) {
    if (!service) {
      return "unknown-default";
    }
    return service.substring(0, service.length - 4);
  }

  resetAllData() {
    this.allServicesData = [];
    this.syncedServicesData = [];
    this.unsyncedDbServices = [];
    this.unsyncedServicesData = [];
  }

  showErrorPopUp(errorMsg: any) {
    this.dialog.open(CodeEditorDialogComponent, {
      data: {
        title: "Error",
        code: errorMsg ||  'No Error Found.',
        readOnly: true,
        wordWrap: true
      }
    });
  }
}
