import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { UtilityHelperService } from 'src/app/services/utility-helper.service';
import { AddEndpointComponent } from '../add-endpoint/add-endpoint.component';
import { AddK8sRoleBindingComponent } from '../add-k8s-role-binding/add-k8s-role-binding.component';
import { AddK8sServiceComponent } from '../add-k8s-service/add-k8s-service.component';
import { globalUrls } from '../urls';

@Component({
  selector: 'namespace-detail',
  templateUrl: './namespace-detail.component.html',
  styleUrls: ['./namespace-detail.component.scss']
})
export class NamespaceDetailComponent implements OnInit {
  nsId: string = "";

  //dataset
  nsData: any;
  k8sDeployments: any[] = [];

  //view control vars
  refreshComponent: Subject<string> = new Subject<string>();
  nsDataLoading: boolean = true;
  k8sDeploymentsLoading: boolean = true;

  //api props
  searchKey: string = ""

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private dialog: MatDialog,
    private utils: UtilityHelperService) { }

  ngOnInit(): void {
    this.nsId = this.route.snapshot.paramMap.get("nsId");
    this.fetchNsDetail();
  }

  fetchNsDetail() {
    this.nsDataLoading = true;
    this.api.postData(globalUrls.nsRead, {
      id: this.nsId
    }).subscribe((data: any) => {
      this.nsData = data && data.payload ? data.payload : {};
      this.nsDataLoading = false;
    }, err => {
      this.nsData = {};
      this.nsDataLoading = false;
    })
  }

  fetchDeploymentData() {
    this.k8sDeploymentsLoading = true;
    this.api.postData(globalUrls.nsK8sDeploymentList, {
      "nsId": this.nsId,
      "searchText": this.searchKey
    }).subscribe((data: any) => {
      if (data && data.payload) {
        this.k8sDeployments = data.payload;
        this.k8sDeploymentsLoading = false;
      }
    }, err => {
      this.k8sDeployments = [];
      this.k8sDeploymentsLoading = false;
    })
  }

  addEndpoint() {
    this.dialog.open(AddEndpointComponent, {
      width: '600px',
      data: {
        id: this.nsId,
        name: this.nsData.name,
        action: "add"
      }
    }).afterClosed().subscribe(data => {
      if (data) {
        this.refreshComponent.next("endpoint")
      }
    });
  }

  

  addService() {
    this.dialog.open(AddK8sServiceComponent, {
      width: '600px',
      data: {
        id: this.nsId,
        name: this.nsData.name,
        action: "add"
      }
    }).afterClosed().subscribe(data => {
      if (data) {
        this.refreshComponent.next("service");
      }
    });
  }
  
  addRoleBinding() {
    this.dialog.open(AddK8sRoleBindingComponent, {
      width: '600px',
      data: {
        id: this.nsId,
        name: this.nsData.name
      }
    }).afterClosed().subscribe(data => {
      if (data) {
        this.refreshComponent.next("role-binding");
      }
    });
  }

  // addDeployment() {
  //   this.dialog.open(AddK8sDeploymnetComponent, {
  //     width: '600px',
  //     data: {
  //       id: this.nsId,
  //       name: this.nsData.name,
  //       action: "add"
  //     }
  //   }).afterClosed().subscribe(data => {
  //     if (data) {
  //       this.fetchDeploymentData();
  //     }
  //   });
  // }

  // patchDeployment(deployment) {
  //   this.dialog.open(AddK8sDeploymnetComponent, {
  //     width: '600px',
  //     data: {
  //       id: this.nsId,
  //       name: this.nsData.name,
  //       action: "patch",
  //       deployment: deployment
  //     }
  //   }).afterClosed().subscribe(data => {
  //     if (data) {
  //       this.fetchDeploymentData();
  //     }
  //   });
  // }

  // hardRedeploy(deployment) {
  //   this.dialog.open(AddK8sDeploymnetComponent, {
  //     width: '600px',
  //     data: {
  //       id: this.nsId,
  //       name: this.nsData.name,
  //       action: "redeploy",
  //       deployment: deployment
  //     }
  //   }).afterClosed().subscribe(data => {
  //     if (data) {
  //       this.fetchDeploymentData();
  //     }
  //   });
  // }

  // utility functions
  // deploymentSearch(searchKey: string) {
  //   this.searchKey = searchKey;
  //   this.k8sDeployments = [];
  //   this.fetchDeploymentData();
  // }

  handleTabChange(event) {
  //   switch (event.index) {
  //     case 3:
  //       this.searchKey = "";
  //       this.fetchDeploymentData();
  //       break;
  //   }
  }
  
}
