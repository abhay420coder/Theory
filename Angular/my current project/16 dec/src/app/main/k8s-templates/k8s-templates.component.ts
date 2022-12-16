import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { CreateTemplateComponent } from '../create-template/create-template.component';
import { globalUrls } from '../urls';
import { ConfirmDialogComponent } from '../utility/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'k8s-templates',
  templateUrl: './k8s-templates.component.html',
  styleUrls: ['./k8s-templates.component.scss']
})
export class K8sTemplatesComponent implements OnInit {
  // api params
  pageNo: number = 1;
  pageSize: number = 100;
  type: string = "endpoint"

  // dataset
  templateList: any[] = [];

  // view control vars
  loading: boolean = false;

  constructor(
    private api: ApiService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.fetchTemplates();
  }

  fetchTemplates(){
    this.loading = true;
    this.api.postData(globalUrls.k8sObjectTemplateList, {
      "pageNo": this.pageNo,
      "pageSize": this.pageSize,
      "type": this.type,
    }).subscribe((data: any)=>{
      if(data.payload){
        this.templateList = [...this.templateList, ...data.payload];
        this.loading = false;
      }
    })
  }

  addEndpointTemplate(){
    this.dialog.open(CreateTemplateComponent, {
      width: "600px",
      data: {
        type: "endpoint",
        body: ""
      }
    }).afterClosed().subscribe(res=>{
      if(res){
        this.templateList = [];
        this.fetchTemplates();
      }
    })
  }

  addServiceTemplate(){
    this.dialog.open(CreateTemplateComponent, {
      width: "600px",
      data: {
        type: "service",
        body: ""
      }
    }).afterClosed().subscribe(res=>{
      if(res){
        this.templateList = [];
        this.fetchTemplates();
      }
    })
  }

  addRoleBindingTemplate(){
    this.dialog.open(CreateTemplateComponent, {
      width: "600px",
      data: {
        type: "role-binding",
        body: ""
      }
    }).afterClosed().subscribe(res=>{
      if(res){
        this.templateList = [];
        this.fetchTemplates();
      }
    })
  }

  handleTabChange(ev: any){
    console.log(ev);
    this.templateList = [];
    switch(ev.index){
      case 0: 
        this.type = "endpoint"
        break;
      case 1: 
        this.type = "service"
        break;
      case 2: 
        this.type = "role-binding"
        break;
    }
    this.fetchTemplates();
  }

  editTemplate(template: any){
    this.dialog.open(CreateTemplateComponent, {
      width: "600px",
      data: template
    }).afterClosed().subscribe(res=>{
      if(res){
        this.templateList = [];
        this.fetchTemplates();
      }
    })
  }

  deleteTemplate(template: any){
    this.dialog.open(ConfirmDialogComponent, {
      data: "Are you sure you want to delete "+template.name+"?"
    }).afterClosed().subscribe(res=>{
      if(res){
        this.api.postData(globalUrls.k8sObjectTemplateCreateUpdate, {
          "id": template.id,
          "name": template.name,
          "type": template.type,
          "body": template.body,
          "active": false
        }).subscribe({
          next: (data: any)=>{
            if(data.code>=200 && data.code<300){
              this.snackbar.open("Template deleted successfully", "Dismiss", {duration: 3000});
              this.templateList = [];
              this.fetchTemplates();
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
