import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../urls';
import { CodeEditorDialogComponent } from '../utility/code-editor-dialog/code-editor-dialog.component';
import indentString from 'indent-string'
import { Location } from '@angular/common';
import { interval, Subject } from 'rxjs';
import { debounce, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'rt-template-create-update',
  templateUrl: './rt-template-create-update.component.html',
  styleUrls: ['./rt-template-create-update.component.scss']
})
export class RtTemplateCreateUpdateComponent implements OnInit {
  searchTextSub:Subject<string> = new Subject<string>();
  pageNo: number = 1;
  pageSize: number = 100;
  searchKey: string = "";
  lastPage: boolean = false;
  loading: boolean = true;
  rtObj;
  rtId;
  templateId;
  serReleaseList = [];
  editorOptions = { theme: 'vs-dark', language: 'yaml', tabSize: 2 };
  code;
  templateObj = {
    id: undefined,
    rtId: undefined,
    name: "",
    description: 'No Description',
    spec: '',
    serviceList: []

  }
  editorLoader = true;
  isSaving: boolean = false;
  titleError: boolean = false;
  constructor(private api: ApiService, private route: ActivatedRoute,
    private dialog: MatDialog, private snackbar: MatSnackBar, private router: Router,private location:Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      this.templateObj.rtId = data['params']['rtId'];
      const templateId = data['params']['id'];
      if (templateId !== 'new') {
        this.templateObj.id = templateId;
        this.getTemplate();
      } else {
        this.getAttachedServiceRelease();
      }
      this.getRtObj();
    })
    this.searchTextSub.pipe(
      debounce(()=>interval(300)),
      distinctUntilChanged()
    ).subscribe(data=>{
      this.searchKey = data;
      this.pageNo = 1;
      this.getAttachedServiceRelease();      
    });
  }
  getTemplate() {
    this.api.postData(globalUrls.rtTemplateRead, {
      "id": this.templateObj.id
    }).subscribe(data => {
      if (data['code'] === 200) {
        this.templateObj.name = data['payload']['name'];
        this.templateObj.spec = data['payload']['spec'];
        this.templateObj.description = data['payload']['description'];
        this.getAttachedServiceRelease(data['payload']['serviceList']);
      }
    });
  }
  getRtObj() {
    this.api.postData(globalUrls.rtRead, {
      "rtId": this.templateObj.rtId
    }).subscribe(data => {
      if (data['code'] === 200) {
        this.rtObj = data['payload']
      }
    });
  }

  getAttachedServiceRelease(attachedList?: []) {
    this.loading = true;
    this.api.postData(globalUrls.rtServiceRelAttachedList, {
      "rtId": this.templateObj.rtId,
      "pageNo":this.pageNo,
      "pageSize":this.pageSize,
      searchText: this.searchKey
    }).subscribe((data: any) => {
      if (data['code'] === 200) {
        this.loading = false;
        this.serReleaseList = this.serReleaseList.concat(data['payload']);
        this.lastPage = data.payload.length < this.pageSize;
        this.serReleaseList.forEach(elem => {
          let flag = true;
          if (attachedList) {
            attachedList.forEach((item: any) => {
              if (item['srId'] === elem['srId']) {
                elem.id = item.id;
                elem.replicaCount = item.replicaCount;
                elem.spec = item.spec;
                flag = false;
              }
            });
          }
          if (flag) {
            elem['replicaCount'] = 1;
          }
        });

      }
    })
  }
  save() {
    if(this.templateObj.name === ""){
      this.titleError = true;
    } else {
      this.titleError = false;
      this.isSaving = true;
      this.templateObj.serviceList = this.serReleaseList;
      this.api.postData(globalUrls.rtTemplateCreateUpdate, this.templateObj)
        .subscribe(data => {
          this.isSaving = false;
          this.snackbar.open('Template Saved Successfully!', "Close", { duration: 3000 });
        }, err=>{
          this.isSaving = false;
          this.snackbar.open('An error occurred! Please try again', "Close", { duration: 3000 });
        })
    }
    
  }
  editSpec(serRel) {
    let code;
    if (serRel.spec || serRel.spec === '') {
      code = serRel.spec;
    } else {
      code = this.templateObj.spec;
    }
    this.dialog.open(CodeEditorDialogComponent, {
      data: { title: code===""?"Add Deployment Config":"Edit Deployment Config", code: code },
      disableClose: true
    }).afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (result !== this.templateObj.spec || !result && !this.templateObj.spec) {
          serRel.spec = result;
          this.snackbar.open('Spec Saved!', undefined, { duration: 2000 });
        }
      }
    })
  }
  onInit(editor) {
    this.editorLoader = false;
    editor.focus();
  }
  viewSpec(sr) {
    this.api.postData(globalUrls.srRead, {
      srId: sr.srId
    }).subscribe(data => {
      console.log(data);
      if (data['code'] === 200) {
        let service = data['payload'];
        let spec;
        if (sr.spec || sr.spec === '') {
          spec = sr.spec;
        } else {
          spec = this.templateObj.spec;
        }

        // DO NOT ADD ANY SPACES OR INDENTATION TO THE TEMPLATE BELOW
        let code =
          `apiVersion: apps/v1
kind: Deployment
metadata:
  name: ${service.serviceName}
spec:
  replicas: ${service.replicaCount || 1}
  selector:
    matchLabels:
      app: ${service.serviceName}
  template:
    metadata:
      labels:
        app: ${service.serviceName}
    spec:
${indentString(spec, 6)}
      containers:
      - name: ${service.serviceName}
        image: registry.pushcord.com:7777/${service.basePath}/${service.serviceName}:${service.srBranch}${service.srVersion}
        ports:
         - containerPort: ${service.portNumber}
        imagePullPolicy: Always
        env:      
         - name: SPRING_PROFILE
           value: v${(service.serviceName as string).slice(4)}
         - name: SPRING_APPLICATION_JSON
           valueFrom:
             configMapKeyRef:
               name: ${service.serviceName}-config
               key: dev-config.json

      imagePullSecrets:
      - name: api-secret  

      `;
        this.dialog.open(CodeEditorDialogComponent, {
          data: { title: "View Deployment Config", code: code, readOnly: true },
          disableClose: true
        }).afterClosed().subscribe(result => {
          if (result !== undefined) {

          }
        });
      }
    })

  }
  navigateBack(){
    this.location.back();
  }
  handleSearch(event: any){
    this.searchKey = event;
    this.pageNo = 1;
    this.serReleaseList = [];
    this.getAttachedServiceRelease();
  }
  onScroll(){
    if(!this.lastPage){
      this.pageNo += 1;
      this.getAttachedServiceRelease();
    }
  }
}
