import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AddEndpointComponent } from '../add-endpoint/add-endpoint.component';
import { globalUrls } from '../urls';
import { CodeEditorDialogComponent } from '../utility/code-editor-dialog/code-editor-dialog.component';

@Component({
  selector: 'k8s-endpoints',
  templateUrl: './k8s-endpoints.component.html',
  styleUrls: ['./k8s-endpoints.component.scss']
})
export class K8sEndpointsComponent implements OnInit {

  @Input() nsId: string;
  @Input() nsData: any;
  @Input() refreshTrigger: Subject<string>

  allEndpointsData: any[] = [];
  k8sEndpointsData: any[] = [];
  unsyncedK8sEndpointsData: any[] = [];
  unsyncedK8sEndpointsDb: any[] = [];

  endpointsLoading: boolean = true;
  endpointSkeletonCount: any[] = new Array(3);

  constructor(
    private api: ApiService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.refreshTrigger.subscribe(component => {
      if (component === "endpoint") {
        this.resetAllData();
        this.fetchEndpoints();
      }
    })
    this.fetchEndpoints();
  }

  fetchEndpoints() {
    this.endpointsLoading = true;
    this.api.postData(globalUrls.nsEndpointsList, {
      "nsId": this.nsId
    }).subscribe((data: any) => {
      this.allEndpointsData = data && data.payload ? data.payload : [];
      // this.endpointsData = [...this.allEndpointsData];
      // this.endpointsLoading = false;
      this.fetchEndpointsFromDb();
    }, err => {
      this.allEndpointsData = [];
      // this.endpointsData = [];
      this.endpointsLoading = false;
    })
  }

  fetchEndpointsFromDb() {
    this.api.postData(globalUrls.nsEndpointsListDb, {
      "nsId": this.nsId
    }).subscribe((data: any) => {
      if (data && data.payload) {
        data.payload.map((ep: any) => {
          let flag: boolean = false;
          this.allEndpointsData.map((endpoint: any) => {
            if (endpoint.metadata.name === ep.name) {
              endpoint["visible"] = true;
              flag = true;
              // create an obeject to contain data from db under dbData key
              endpoint["dbData"] = {}
              Object.keys(ep).map(d => {
                endpoint["dbData"][d] = ep[d];
              });
              this.k8sEndpointsData.push(endpoint);
            }
          })
          if (!flag) {
            ep["visible"] = true;
            this.unsyncedK8sEndpointsDb.push(ep);
          }
        })
        const unsyncedEps = this.allEndpointsData.filter(d => {
          if (this.k8sEndpointsData.filter(ep => ep.metadata.uid === d.metadata.uid).length === 0) {
            d["visible"] = true;
            return d;
          }
        })
        this.unsyncedK8sEndpointsData = unsyncedEps;
      }
      this.endpointsLoading = false;
    }, err => {
      this.endpointsLoading = false;
    })
  }

  patchEndpoint(endpoint) {
    this.dialog.open(AddEndpointComponent, {
      width: '600px',
      data: {
        id: this.nsId,
        name: this.nsData.name,
        action: "patch",
        endpoint: endpoint
      }
    }).afterClosed().subscribe(data => {
      if (data) {
        this.resetAllData();
        this.fetchEndpoints()
      }
    });
  }

  replaceEndpoint(endpoint) {
    this.dialog.open(AddEndpointComponent, {
      width: '600px',
      data: {
        id: this.nsId,
        name: this.nsData.name,
        action: "replace",
        endpoint: endpoint
      }
    }).afterClosed().subscribe(data => {
      if (data) {
        this.resetAllData();
        this.fetchEndpoints();
      }
    });
  }
  retryEndpoint(endpoint) {
    this.dialog.open(AddEndpointComponent, {
      width: '600px',
      data: {
        id: this.nsId,
        name: this.nsData.name,
        action: "retry",
        endpoint: endpoint
      }
    }).afterClosed().subscribe(data => {
      if (data) {
        this.resetAllData();
        this.fetchEndpoints();
      }
    });
  }

  handleEndpointSearch(searchKey: string) {
    this.k8sEndpointsData = this.k8sEndpointsData.map(d => {
      if (d.metadata.name.indexOf(searchKey) > -1) {
        d["visible"] = true;
      } else {
        d["visible"] = false;
      }
      return d;
    });
    this.unsyncedK8sEndpointsData = this.unsyncedK8sEndpointsData.map(d => {
      if (d.metadata.name.indexOf(searchKey) > -1) {
        d["visible"] = true;
      } else {
        d["visible"] = false;
      }
      return d;
    });
    this.unsyncedK8sEndpointsDb = this.unsyncedK8sEndpointsDb.map(d => {
      if (d.name.indexOf(searchKey) > -1) {
        d["visible"] = true;
      } else {
        d["visible"] = false;
      }
      return d;
    });  
  }

  getServiceName(service: string) {
    if (!service) {
      return "unknown-default";
    }
    return service.substring(0, service.length - 4);
  }

  resetAllData() {
    this.allEndpointsData = [];
    this.k8sEndpointsData = [];
    this.unsyncedK8sEndpointsData = [];
    this.unsyncedK8sEndpointsDb = [];
  }

  showErrorPopUp(errorMsg: any) {
    this.dialog.open(CodeEditorDialogComponent, {
      data: {
        title: "Error",
        code: errorMsg || 'No Error Found.',
        readOnly: true,
        wordWrap: true
      }
    });
  }

}
