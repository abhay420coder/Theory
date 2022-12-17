import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AddK8sRoleBindingComponent } from '../add-k8s-role-binding/add-k8s-role-binding.component';
import { globalUrls } from '../urls';
import { CodeEditorDialogComponent } from '../utility/code-editor-dialog/code-editor-dialog.component';

@Component({
  selector: 'k8s-role-binding',
  templateUrl: './k8s-role-binding.component.html',
  styleUrls: ['./k8s-role-binding.component.scss']
})
export class K8sRoleBindingComponent implements OnInit {

  @Input() nsId: string;
  @Input() nsData: any
  @Input() refreshTrigger: Subject<string>;

  allRoleBindingData: any[] = [];
  roleBindingData: any[] = [];
  syncedRoleBinding: any[] = [];
  unsyncedRoleBinding: any[] = [];
  unsyncedRoleBindingDb: any[] = [];

  roleBindingLoading: boolean = true;
  endpointSkeletonCount: any[] = new Array(3);

  constructor(
    private api: ApiService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.refreshTrigger.subscribe(component => {
      if (component === "role-binding") {
        this.resetAllData();
        this.fetchRoleBinding();
      }
    })
    this.fetchRoleBinding();
  }

  fetchRoleBinding() {
    this.roleBindingLoading = true;
    this.api.postData(globalUrls.nsK8sRoleBindingList, {
      "nsId": this.nsId,
      "pageSize": 1000
    }).subscribe((data: any) => {
      this.allRoleBindingData = data && data.payload ? data.payload : [];
      // this.roleBindingData = [...this.allRoleBindingData]
      // this.roleBindingLoading = false;
      this.fetchRoleBindingDb();
    }, err => {
      this.allRoleBindingData = [];
      this.roleBindingData = [];
      this.roleBindingLoading = false;
    })
  }

  fetchRoleBindingDb() {
    this.api.postData(globalUrls.nsK8sRoleBindingListDb, {
      "nsId": this.nsId,
      "pageSize": 1000
    }).subscribe({
      next: (data: any) => {
        if (data && data.payload) {
          data.payload.map((dbrb: any) => {
            let flag: boolean = false;
            this.allRoleBindingData.map((rb: any) => {
              if (rb.metadata.name === dbrb.name) {
                rb["visible"] = true;
                flag = true;
                rb["dbData"] = {};
                Object.keys(dbrb).map(d => {
                  rb["dbData"][d] = dbrb[d];
                })
                this.syncedRoleBinding.push(rb);
              }
            });
            if (!flag) {
              dbrb["visible"] = true;
              this.unsyncedRoleBindingDb.push(dbrb);
            }
          })
          const unsyncedRb = this.allRoleBindingData.filter(d => {
            if (this.syncedRoleBinding.filter(rb => rb.metadata.uid === d.metadata.uid).length === 0) {
              d["visible"] = true;
              return d;
            }
          })
          this.unsyncedRoleBinding = unsyncedRb;
        }
        this.roleBindingLoading = false;
        console.log(this.syncedRoleBinding, this.unsyncedRoleBinding, this.unsyncedRoleBindingDb);
      },
      error: err => {
        this.roleBindingLoading = false;
      }
    })
  }

  handleRoleBindingSearch(searchKey: string) {
    this.syncedRoleBinding = this.syncedRoleBinding.map(d => {
      if (d.metadata.name.indexOf(searchKey) > -1) {
        d["visible"] = true;
      } else {
        d["visible"] = false;
      }
      return d;
    });
    this.unsyncedRoleBinding = this.unsyncedRoleBinding.map(d => {
      if (d.metadata.name.indexOf(searchKey) > -1) {
        d["visible"] = true;
      } else {
        d["visible"] = false;
      }
      return d;
    });
    this.unsyncedRoleBindingDb = this.unsyncedRoleBindingDb.map(d => {
      if (d.name.indexOf(searchKey) > -1) {
        d["visible"] = true;
      } else {
        d["visible"] = false;
      }
      return d;
    });
  }

  patchRoleBinding(roleBinding: any) {
    this.dialog.open(AddK8sRoleBindingComponent, {
      width: '600px',
      data: {
        id: this.nsId,
        name: this.nsData?.name,
        action: "patch",
        roleBinding: roleBinding
      }
    }).afterClosed().subscribe(data => {
      if (data) {
        this.resetAllData();
        this.fetchRoleBinding();
      }
    });
  }

  replaceRoleBinding(roleBinding: any) {
    this.dialog.open(AddK8sRoleBindingComponent, {
      width: '600px',
      data: {
        id: this.nsId,
        name: this.nsData?.name,
        action: "replace",
        roleBinding: roleBinding
      }
    }).afterClosed().subscribe(data => {
      if (data) {
        this.resetAllData();
        this.fetchRoleBinding();
      }
    });
  }

  retryRoleBinding(roleBinding: any) {
    this.dialog.open(AddK8sRoleBindingComponent, {
      width: '600px',
      data: {
        id: this.nsId,
        name: this.nsData?.name,
        action: "retry",
        roleBinding: roleBinding
      }
    }).afterClosed().subscribe(data => {
      if (data) {
        this.resetAllData();
        this.fetchRoleBinding();
      }
    });
  }

  resetAllData() {
    this.allRoleBindingData = [];
    this.roleBindingData = [];
    this.unsyncedRoleBinding = [];
    this.syncedRoleBinding = [];
    this.unsyncedRoleBindingDb = [];
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
