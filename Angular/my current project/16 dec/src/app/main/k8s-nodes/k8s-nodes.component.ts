import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { AddModifyLabelsComponent } from '../add-modify-labels/add-modify-labels.component';
import { AddUpdateTaintsComponent } from '../add-update-taints/add-update-taints.component';
import { globalUrls } from '../urls';

@Component({
  selector: 'k8s-nodes',
  templateUrl: './k8s-nodes.component.html',
  styleUrls: ['./k8s-nodes.component.scss']
})
export class K8sNodesComponent implements OnInit {
  masterList: any[] = [];
  workerList: any[] = [];

  loading: boolean = false;
  skeletonCount: any[] = new Array(3);

  constructor(
    private api: ApiService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getNodeList();
  }

  getNodeList(){
    this.loading = true;
    this.masterList = [];
    this.workerList = [];
    this.api.postData(globalUrls.nodeList, {}).subscribe({
      next: (data: any)=>{
        // console.log(data);
        data.payload.filter((dt: any)=>{
          var isMaster: boolean = false;
          dt.spec.taints&&dt.spec.taints.map(d=>{
            if(d.key==="node-role.kubernetes.io/master"){
              isMaster = true;
            }
          });
          if(isMaster){
            this.masterList.push(dt);
          } else {
            this.workerList.push(dt);
          }
        });
        this.loading = false;
      }
    })
  }

  editLabels(node: any){
    let data = {
      name: node.metadata.name,
      label: []
    }
    const labels = Object.entries(node.metadata.labels).map(label=>{
      return {"key": label[0], "value": label[1]}
    })
    data.label = labels;

    this.dialog.open(AddModifyLabelsComponent, {
      width: "600px",
      data: data
    }).afterClosed().subscribe(data=>{
      if(data){
        this.api.postData(globalUrls.updateLabels, {
          "nodeName": node.metadata.name,
          "labels": data
        }).subscribe({
          next: (data: any)=>{
            if(data.code===200){
              this.snackbar.open("Labels updated successfully", "Dismiss", {duration: 3000});
              this.getNodeList();
            } else {
              this.snackbar.open("Something went wrong. Please try again.", "Dismiss", {duration: 3000});
            }
          },
          error: err=>{
            this.snackbar.open("Something went wrong. Please try again.", "Dismiss", {duration: 3000});
          }
        })
      }
    });
  }

  editTaints(node: any){
    let data = {
      name: node.metadata.name,
      taints: []
    };
    if(node.spec.taints){
      data.taints = [...node.spec.taints];
    }

    this.dialog.open(AddUpdateTaintsComponent, {
      width: "700px",
      data: data
    }).afterClosed().subscribe(data=>{
      if(data){
        this.api.postData(globalUrls.updateTaints, {
          "nodeName": "k8n1.pushcord.com",
          "taints": data
        }).subscribe({
          next: (data: any)=>{
            if(data.code===200){
              this.snackbar.open("Taints updated successfully", "Dismiss", {duration: 3000});
              this.getNodeList();
            } else {
              this.snackbar.open("Something went wrong. Please try again.", "Dismiss", {duration: 3000});
            }
          },
          error: err=>{
            this.snackbar.open("Something went wrong. Please try again.", "Dismiss", {duration: 3000});
          }
        })
      }
    })
  }

}
