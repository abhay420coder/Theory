import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../../urls';
import { DbGlobalStatusDescription as desc} from './DbGlobalStatusDescription';

@Component({
  selector: 'db-global-status',
  templateUrl: './db-global-status.component.html',
  styleUrls: ['./db-global-status.component.scss']
})
export class DbGlobalStatusComponent implements OnInit {

  loading : boolean= true;
  schema: any | {code: any, payload: any} ;

  InformationPayload: any  ;
  
  PerformancePayload: any  ;




  descriptions = new desc();
  desk:any = this.descriptions.Description;

  informationSchemaUrl = globalUrls.informationSchemaGlobalStatus;
  performanceSchemaUrl = globalUrls.performanceSchemaGlobalStatus;

  constructor(
    private api: ApiService 
  ) { }

  ngOnInit(): void {
    this.fetchPerformanceSchema();
    this.fetchInformationSchema();

  }

  fetchPerformanceSchema(){
    this.loading = true;
    this.api.postData(this.performanceSchemaUrl , this.schema).subscribe((response) => {
        this.loading = false;
        this.PerformancePayload=response["payload"]; // then we save payload key of Performance into PerformancePayload
    })
  }

  fetchInformationSchema(){
    this.loading = true;
    this.api.postData(this.informationSchemaUrl , this.schema).subscribe((response) => {
        this.loading = false;
        this.InformationPayload=response["payload"]; // then we save payload key of Information into InformatonPayload
    })
  }

  handleTabChange(ev: any){
    console.log(ev);
    switch(ev.index){
      case 0: 
        this.fetchInformationSchema();
        break;
      case 1: 
        this.fetchPerformanceSchema();
        break;
    }

  }


}























/*

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


*/


































/* done by myself






informationSchemaUrl = globalUrls.informationSchemaGlobalStatus;
  performanceSchemaUrl = globalUrls.performanceSchemaGlobalStatus;

  constructor(
    private api: ApiService 
  ) { }

  ngOnInit(): void {
    this.fetchInformationSchema();
    this.fetchPerformanceSchema();

  }

  fetchPerformanceSchema(){
    this.loading = true;
    this.api.postData(this.performanceSchemaUrl , this.Performance).subscribe((response) => {
        this.loading = false;
        this.Performance = response // we save response in Performance
        this.PerformancePayload=this.Performance.payload; // then we save payload key of Performance into PerformancePayload
    })
  }

  fetchInformationSchema(){
    this.loading = true;
    this.api.postData(this.informationSchemaUrl , this.Information).subscribe((response) => {
        this.loading = false;
        this.Information = response // we save response in Information
        this.InformationPayload=this.Information.payload; // then we save payload key of Information into InformatonPayload
    })
  }




*/