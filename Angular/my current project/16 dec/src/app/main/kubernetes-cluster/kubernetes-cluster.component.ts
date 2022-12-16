import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { KubernetesClusterCreateUpdateComponent } from '../kubernetes-cluster-create-update/kubernetes-cluster-create-update.component';
import { globalUrls } from '../urls';
import { ConfirmDialogComponent } from '../utility/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'kubernetes-cluster',
  templateUrl: './kubernetes-cluster.component.html',
  styleUrls: ['./kubernetes-cluster.component.scss']
})
export class KubernetesClusterComponent implements OnInit {
  clusterList = []
  loading = true
  constructor(private api: ApiService, private dialog: MatDialog, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.getClusterList()
  }
  getClusterList() {
    this.loading = true;
    this.api.postData(globalUrls.k8sClusterList, {}).subscribe(data => {
      console.log(data);
      this.loading = false;

    })
  }
  checkConn(){
    this.api.postData(globalUrls.k8sClusterCheckConn,{}).subscribe(data=>{
      console.log(data);
      
    })
  }
  createUpdateCluster(obj?:any) {
    const dialogRef = this.dialog.open(KubernetesClusterCreateUpdateComponent, {
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getClusterList()
      }
    });
  }
  deleteCluster(obj) {
    this.dialog.open(ConfirmDialogComponent,
      {
        hasBackdrop:true,
        data:"Are you sure you want to delete?"
      }).afterClosed().subscribe(result => {
      if (result) {
        let payload = JSON.parse(JSON.stringify(obj))
        payload['active'] = false;
        this.api.postData(globalUrls.k8sClusterCreateUpdate, payload).subscribe(data => {
          this.snackbar.open("Deleted Successfully!", "Close", {duration: 3000});
          this.getClusterList();
        })
      }
    })
  }
}
