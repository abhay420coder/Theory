import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import indentString from 'indent-string';
import { MultiItemAttacherProps } from 'src/app/multi-item-attacher/types';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../urls';
import { CodeEditorDialogComponent } from '../utility/code-editor-dialog/code-editor-dialog.component';

@Component({
  selector: 'rt-deploy-confirmation',
  templateUrl: './rt-deploy-confirmation.component.html',
  styleUrls: ['./rt-deploy-confirmation.component.scss']
})
export class RtDeployConfirmationComponent implements OnInit {

  //view control vars
  nameSpaceLoading: boolean = true;
  attachedServicesLoading: boolean = true;
  specSearchEmpty: boolean = false;
  serviceSearchEmpty: boolean = false;
  serviceSearchText: string = "";
  deploymentSuccess: boolean = false;
  successTimer: number = 3;
  specListSkeletonCount = new Array(3);
  specListLoading: boolean = false;
  serviceListSkeletonCount = new Array(3);
  deploying: boolean = false;

  //input props
  maxTagLength = 8;
  
  //stepper props
  stepperProp = {
    isLinear: false,
    label1: "Basic Info",
    label2: "Replica Set",
    label3: "Specs",
    label4: "Config",
    selectedIndex: 0
  }

  //api props
  specTemplateListProps = {
    // pageNo: 1,
    pageSize: 100,
    // searchText: "",
    active: true,
    // lastPage: false
  }

  //datasets
  rtDepObj = {
    rtId: '',
    rtName: "",
    tag: "",
    nsId: ''
  }

  nsList = []; 
  
  serviceList = [];
  srListDirty = [];
  selectedService = [];

  specList = [];
  selectedSpec = [];

  selectedNs: any = {}; 

  specAttacherProp: MultiItemAttacherProps = {
    attachmentTitle: "Spec Templates",
    attachmentFilterBy: "id",
    attachmentDisplay: "name",
    attachmentDescription: "description",
    attachmentProvider: this.getSpecTemplateList.bind(this),
    attachmentPagination: true,

    attachableTitle: "Services",
    attachableFilterBy: "srId",
    attachableDisplay: "serviceName",
    attachableDescription: "releaseNote",
    attachableProvider: this.getAttachedServices.bind(this),
    attachablePagination: false,
    attachmentKey: "specList",
    attachableHasIcon: true,
    attachableIcon: "serviceName",
    attachableIconPath: "/assets/icons/services/",
    attachableIconExt: ".svg",
    canViewAttached: true,
    showAttachment: this.showSpec.bind(this),
    canAddCustomAttachment: true,
    customAttachmentKey: "additionalSpec",
    customAttachmentProvider: this.addAdditionalSpec.bind(this)
  }

  constructor(
    private api: ApiService, private snackbar: MatSnackBar, private route: ActivatedRoute, private dialogRef: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.getNsList();
    // this.getSpecTemplateList(); //it is called by multi item attacher
    this.rtDepObj.rtId = this.route.snapshot.paramMap.get("rtId");
    this.getRTObj();
    this.serviceList = [];
    this.srListDirty = [];
    // this.getAttachedServices(); //it is called by multi item attacher
  }
  
  handleReplicaSearch(event:string){
    this.srListDirty = this.srListDirty.map(d=>{
      if (d.serviceName.includes(event)) {
        d.visible = true;
      } else {
        d.visible = false;
      }
      return d;
    })
  }

  //Get rt object details
  getRTObj(){
    this.api.postData(globalUrls.rtRead, {
      rtId: this.rtDepObj.rtId
    }).subscribe((data: any)=>{
      if(data.code === 200){
        this.rtDepObj.rtName = data.payload.rtName;
      }
    })
  }

  //Get namespace list
  getNsList() {
    this.nameSpaceLoading = true;
    this.api.postData(globalUrls.nsList, {
      "pageNo":1,
      "pageSize":100
    }).subscribe(data => {
      this.nameSpaceLoading = false;
      this.nsList = data['payload'] || [];

    }, err=>{
      this.nameSpaceLoading = false;
      this.nsList = [];
    })
  }

  //get attached services
  getAttachedServices(pageNo?: number, searchKey?: string){
    return  new Promise((resolve, reject)=>{
      this.attachedServicesLoading = true;
      const payload = {
        "rtId": this.rtDepObj.rtId,
        "pageNo": pageNo || 1,
        "pageSize":100
      }
      this.api.postData(globalUrls.rtServiceRelAttachedList, payload).subscribe((data: any)=>{
        this.attachedServicesLoading = false;
        if(data.code===200){
          this.serviceList = [...this.serviceList, ...(JSON.parse(JSON.stringify(data.payload)))];
          this.srListDirty = [...this.srListDirty, ...(this.genServiceListDirty(data.payload))];   
          resolve(data.payload);
        } else {
          resolve([]);
        }
      })
    })
  }

  genServiceListDirty(srList: any[]){
    return srList.map(d=>{
      d["specList"] = [];
      d["replicaCount"] = 1;
      d["visible"] = true;
      d["additionalSpec"] = "";
      return d;
    })
  }

  getSpecTemplateList(pageNo: number, searchKey?: string) {
    return new Promise((resolve, reject)=>{
      this.api.postData(globalUrls.templateList, {
        pageNo: pageNo || 1,
        pageSize: this.specTemplateListProps.pageSize,
        searchText: searchKey,
        active: this.specTemplateListProps.active,
      }).subscribe((data: any) => {
        if(data.code === 200){
          // this.specListLoading = false;
          // this.specList = this.specList.concat(data.payload);
          // this.specTemplateListProps.lastPage = data.payload.length < this.specTemplateListProps.pageSize;
          // if(data.payload.length===0 && this.specTemplateListProps.searchText!==""){
          //   this.specSearchEmpty = true;
          // }
          // if(this.selectedSpec.length!==0){
          //   this.selectedSpec.map(spec=>{
          //     if(this.specList.filter(d=>d.id===spec.id).length===0){
          //       this.specList.push(spec);
          //     }
          //   })
          // }
          resolve(data.payload);
        } else {
          resolve([])
        }
      })
    })
  }

  save() {
    if(!this.canSubmit()){
      return;
    }
    this.deploying = true;
    let payload = {
      "rtId": this.rtDepObj.rtId,
      "nsId": this.rtDepObj.nsId,
      "tag": this.rtDepObj.tag
    }

    let serviceConfigList = [];
    this.srListDirty.map((service: any, index:number)=>{
      const specIdList = service.specList.map(d=>d.id);
      if(service.replicaCount!==1||specIdList.length!==0||service.additionalSpec!==""||service.configMap !== this.serviceList[index].configMap){
        serviceConfigList.push({
          "srId": service.srId,
          "replicaCount": service.replicaCount,
          "k8sSpecTemplateIdList": specIdList,
          "additionalSpec": service.additionalSpec!==""?service.additionalSpec:null, 
          "configMap": service.configMap === this.serviceList[index].configMap?null:service.configMap,
          "k8sService": service.k8sService === this.serviceList[index].k8sService?null:service.k8sService
        })
      }
    });
    
    payload["servicesConfigList"] = serviceConfigList;
    
    const snackbarRef = this.snackbar.open('Starting deployment')
    this.api.postData(globalUrls.rtDeploymentDeploy, payload).subscribe(data => {
      if (data['code'] === 500) {
        this.snackbar.open('An error has occurred. Please try again.', 'OK', { duration: 5000 })
        this.deploying = false;
      } else {
        // this.snackbar.open('Apps Deployment started', 'OK', { duration: 3000 })
        snackbarRef.dismiss();
        this.deploymentSuccess = true;
        this.deploying = false;
        this.successTimer = 3;
        let timer = setInterval(()=>{
          this.successTimer -= 1;
          if(this.successTimer===0){
            clearInterval(timer);
            this.router.navigate(['/main/rt-deployments']);
          }
        }, 1000);
      }
    }, err => {
      this.deploying = false;
      this.snackbar.open('An error has occurred. Please try again.', 'OK', { duration: 5000 })
    })
  }
  
  //Utility functions defined below

  stepperChange(event){
    this.stepperProp.selectedIndex = event.selectedIndex;
    if(event.previouslySelectedIndex === 1 || event.previouslySelectedIndex === 2){
      this.srListDirty = this.srListDirty.map(d=>{
        d.visible = true;
        return d;
      });
    }
  }

  toggleSpec(spec){
    if(this.selectedSpec.includes(spec)){
      this.selectedSpec = this.selectedSpec.filter(d=>d.id!==spec.id);
    } else {
      this.selectedSpec.push(spec);
    }
  }

  toggleAllSpec(flag){
    if (flag) {
      this.selectedSpec = [];
    } else {
      this.selectedSpec = this.specList;
    }
  }

  toggleService(item){
    if (this.selectedService.includes(item.srId)) {
      this.selectedService = this.selectedService.filter(d=>d!==item.srId);
    } else {
      this.selectedService.push(item.srId);
    }
  }

  toggleAllServices(flag){
    if (flag) {
      this.selectedService = [];
    } else {
      this.selectedService = this.serviceList.map(d=>d.srId);
    }
  }

  handleAttachment(serviceList: any[]){
    console.log(serviceList);
    const servies = this.srListDirty.map(d=>d.srId);
    serviceList.map((service: any)=>{
      let index = servies.indexOf(service.srId);
      if(index > -1){
        this.srListDirty[index].specList = service.specList;
        this.srListDirty[index].addAdditionalSpec = service.addAdditionalSpec;
      }
    })
      // this.srListDirty = this.srListDirty.map(d=>{
      //   //check if d is selected
      //   if(this.selectedService.includes(d.srId)){
      //     //for each selected spec check if it is already attached
      //     this.selectedSpec.map(ds=>{
      //       if(!d.specList.includes(ds)){
      //         //if not attach it
      //         d.specList.push(ds);
      //       }
      //     })
      //   }
      //   return d;
      // })
  }

  removeSpec(service, spec){
    const modifiedSpecList = service.specList.filter(d=>d.id!==spec.id);
    this.srListDirty.map(d=>{
      if(d.srId === service.srId){
        d.specList = modifiedSpecList;
      }
    })
  }

  // specSearch(event: string){
  //   this.specTemplateListProps.searchText = event;
  //   this.specTemplateListProps.pageNo = 1;
  //   this.specList = [];
  //   this.getSpecTemplateList();
  // }

  serviceSearch(event: string){
    this.serviceSearchEmpty = true;
    this.serviceSearchText = event;
    this.srListDirty = this.srListDirty.map(d=>{
      if (d.serviceName.includes(event)) {
        d.visible = true;
        this.serviceSearchEmpty = false;
      } else if (this.selectedService.includes(d.srId)){
        d.visible = true;
      } else {
        d.visible = false;
      }
      return d;
    });
  }

  isSpecSelected(spec){
    return this.selectedSpec.filter(d=>d.id===spec.id).length!==0
  }

  isConfigChanged(id){
    return this.serviceList[id].configMap !== this.srListDirty[id].configMap;
  }

  showSpec(service: any){
    let specConfig = "";
    service.specList.map(s=>{
      if(s.spec){
        specConfig += indentString(s.spec, 6) + "\n\r";
      }
    });
    specConfig += indentString(service.additionalSpec, 6) + "\n\r";
    
    //DO NOT ADD ANY SPACE OR INDENTATION IN BELOW CODE
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
${specConfig}
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
    this.dialogRef.open(CodeEditorDialogComponent, {
      data: {
        title: "Additional spec",
        code: code,
        language: "yaml",
        readOnly: true
      }
    });
  }

  addAdditionalSpec(additionalSpec){
    const editorRef = this.dialogRef.open(CodeEditorDialogComponent, {
      data: {
        title: "Additional spec",
        code: additionalSpec,
        language: "yaml",
        readOnly: false
      }
    })
    return editorRef;
  }

  // onSpecListScroll(){
  //   if(!this.specTemplateListProps.lastPage){
  //     this.specTemplateListProps.pageNo += 1;
  //     this.getSpecTemplateList();
  //   }
    
  // }

  editConfig(id){
    this.dialogRef.open(CodeEditorDialogComponent, {
      data: {
        title: "Edit config",
        code: this.srListDirty[id].configMap,
        language: "json",
        readOnly: false,
        canDisableOnError: true
      }
    }).afterClosed().subscribe(data=>{
      if(data!==undefined){
        if(data===""){
          this.srListDirty[id].configMap = null;
        } else {
          this.srListDirty[id].configMap = data;
        }
      }
    })
  }

  editK8sService(id){
    this.dialogRef.open(CodeEditorDialogComponent, {
      data: {
        title: "Edit K8S Service",
        code: this.srListDirty[id].k8sService,
        language: "yaml",
        readOnly: false,
        canDisableOnError: false
      }
    }).afterClosed().subscribe(data=>{
      if(data!==undefined){
        if(data===""){
          this.srListDirty[id].k8sService = null;
        } else {
          this.srListDirty[id].k8sService = data;
        }
      }
    })
  }

  canSubmit(){
    return this.rtDepObj.nsId!=="" && 
      this.rtDepObj.tag!=="" && 
      this.rtDepObj.tag.length<=this.maxTagLength &&
      !this.selectedNs.deploymentId;
  }

  handleNsChange(ns){
    this.selectedNs = this.nsList.filter(d=>d.id===ns.value)[0];
  }
}

