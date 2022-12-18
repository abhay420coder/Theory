import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../urls';

@Component({
  selector: 'kubernetes-cluster-create-update',
  templateUrl: './kubernetes-cluster-create-update.component.html',
  styleUrls: ['./kubernetes-cluster-create-update.component.scss']
})
export class KubernetesClusterCreateUpdateComponent implements OnInit {
  clusterObj = {
    k8sClusterId: undefined,
    k8sClusterProvider: "",
    k8sClusterName: "",
    k8sClusterBaseUri: "",
    k8sClusterCaCert: "",
    k8sClusterClientCert: "",
    k8sClusterClientKey: "",
  }
  isSaving: boolean = false;
  constructor(private dialogRef: MatDialogRef<KubernetesClusterCreateUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public injectedData: any, private api: ApiService, private snackbar: MatSnackBar) {
    if (this.injectedData) {

    }
  }

  ngOnInit(): void {
  }
  closeDialog(msg?: any) {
    this.dialogRef.close(msg)
  }
  save() {
    this.isSaving = true;
    this.api.postData(globalUrls.k8sClusterCreateUpdate,this.clusterObj).subscribe(data=> {
      console.log((data));
      if (data['code'] == 201) {
        this.snackbar.open('Created !', null, { duration: 3000 })
      } else if (data['code'] == 200) {
        this.snackbar.open('Updated !', null, { duration: 3000 })
      }
      this.closeDialog(true)      
    })
  }

}
