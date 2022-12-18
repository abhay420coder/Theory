import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import indentString from 'indent-string';
import { MultiItemAttacherProps } from 'src/app/multi-item-attacher/types';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../urls';
import { CodeEditorDialogComponent } from '../utility/code-editor-dialog/code-editor-dialog.component';

@Component({
  selector: 'rt-deployments-redeployment-review',
  templateUrl: './rt-deployments-redeployment-review.component.html',
  styleUrls: ['./rt-deployments-redeployment-review.component.scss']
})
export class RtDeploymentsRedeploymentReviewComponent implements OnInit {

  //view control vars
  specSearchEmpty: boolean = false;
  isSaving: boolean = false;
  successTimer: number = 3;
  specListLoading: boolean = true;
  attachedSpecLoading: boolean = true;
  specListSkeletonCount = new Array(3);
  configEditorLoading: boolean = true;
  k8sEditorLoading: boolean = true;

  //stepper props
  stepperProp = {
    isLinear: false,
    label0: "Basic Info",
    label1: "Replica Set",
    label2: "Specs",
    label3: "Config",
    label4: "K8S Service",
    selectedIndex: 0
  }

  //monaco props
  configEditorOptions = {theme: 'vs-dark', language: 'json', readOnly:false, tabSize:2};
  k8sServiceEditorOptions = {theme: 'vs-dark', language: 'yaml', readOnly:false, tabSize:2};
  monacoError = {
    status: false,
    message: ""
  }

  //api props
  specTemplateListProps = {
    pageNo: 1,
    pageSize: 100,
    searchText: "",
    active: true,
    lastPage: false
  }

  // multi-attacher props
  multiAttacherProp: MultiItemAttacherProps = {
    attachmentDescription: "description",
    attachmentDisplay: "name",
    attachmentFilterBy: "id",
    attachmentPagination: false,
    attachmentProvider: this.getSpecTemplateList.bind(this),
    attachmentTitle: "Specs",
    attachmentKey: "specList",
    customAttachmentKey: "additionalSpec",

    attachableDescription: "releaseNote",
    attachableDisplay: "serviceName",
    attachableFilterBy: "id",
    attachablePagination: false,
    attachableProvider: this.servicesProvider.bind(this), 
    attachableTitle: "Services",

    canViewAttached: true,
    showAttachment: this.showSpec.bind(this),
    canAddCustomAttachment: true,
    customAttachmentProvider: this.addAdditionalSpec.bind(this)
  }

  //datasets
  attachedSpecList: any[] = [];
  serviceObjDirty:any = {};
  specList = [];
  selectedSpec = [];


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: ApiService, 
    private dialogRef: MatDialog,
    private snackbar: MatSnackBar,
    private selfRef: MatDialogRef<RtDeploymentsRedeploymentReviewComponent>) { }

  ngOnInit(): void {
    this.serviceObjDirty = JSON.parse(JSON.stringify(this.data.service));
    if(!this.serviceObjDirty.customConfigMap){
      this.serviceObjDirty.customConfigMap = this.serviceObjDirty.configMap;
    }
  }

  getSpecTemplateList(pageNo?: number, searchkey?: string) {
    return new Promise((resolve, reject)=>{
      this.api.postData(globalUrls.templateList, {
        pageNo: pageNo,
        pageSize: this.specTemplateListProps.pageSize,
        searchText: searchkey,
        active: this.specTemplateListProps.active,
      }).subscribe((data: any) => {
        if(data.code === 200){
          resolve(data.payload);
        }
      })
    })
  }

  servicesProvider(pageNo?: number, searchKey?: string){
    return new Promise((resolve, reject)=>{
      this.api.postData(globalUrls.rtDeploymentHasK8SpecList, {
        "rtDeploymentHasSerRelId": this.serviceObjDirty.id
      }).subscribe((data:any)=>{
        if(data.code === 200){
          this.attachedSpecLoading = false;
          const remappedList = data.payload.map(d=>{
            //remapping to make the keys consistent with spec-template-list
            return{
              active: true,
              description: d.k8sSpecTempDescription,
              id: d.k8sSpecTempId,
              attachedId: d.id,
              name: d.k8sSpecTempName,
              spec: d.spec
            }
          })
          this.attachedSpecList = remappedList;
          this.serviceObjDirty["specList"] = JSON.parse(JSON.stringify(remappedList));
          resolve([this.serviceObjDirty]);
        }
      })
    })
  }

  save(){
    this.isSaving = true;
    let payload = {
      "deploymentId": this.data.deploymentId,
      "srId": this.serviceObjDirty.srId,
      "replicaCount": this.serviceObjDirty.replicaCount
    }

    let specTempList = [];
    this.serviceObjDirty.specList.map(d=>{
      if(this.attachedSpecList.filter(s=>s.id===d.id).length===0){
        specTempList.push({
          k8sSpecTemplateId: d.id,
          active: true
        });
      }
      
    });

    this.attachedSpecList.map(d=>{
      if(this.serviceObjDirty.specList.filter(s=>s.id===d.id).length===0){
        specTempList.push({
          "rtDepSrHask8sSpecTemplateId": d.attachedId,
          active: false
        });
      }
    });
    payload["k8sSpecTemplateIdList"] = specTempList;
    payload["additionalSpec"] = this.serviceObjDirty.additionalSpec!==this.data.service.additionalSpec?this.serviceObjDirty.additionalSpec:undefined;
    if(this.data.service.customConfigMap){
      payload["configMap"] = this.data.service.customConfigMap!==this.serviceObjDirty.customConfigMap?this.serviceObjDirty.customConfigMap:undefined;
    } else {
      payload["configMap"] = this.data.service.configMap!==this.serviceObjDirty.customConfigMap?this.serviceObjDirty.customConfigMap:undefined;
    }
    payload["k8sService"] = this.serviceObjDirty.k8sService;
    this.api.postData(globalUrls.rtDeploymentReDeploySerRel, payload).subscribe((data: any)=>{
      this.isSaving= false;
      if(data.code===202){
        this.snackbar.open('Deployment initiated', 'Ok', { duration: 5000 });
        this.selfRef.close();
      }
    }, err=>{
      this.snackbar.open("Something went wrong. Please try again.", "Close", {duration: 5000});
      this.isSaving= false;
    });

  }

  //Utility functions defined below

  onInit(editor) {
    this.configEditorLoading = false;
    editor.focus();
    editor.onDidChangeModelContent((data)=>{
      const jsonstring = editor.getModel().getValue();
      if(jsonstring===""){
        this.monacoError.status = false,
        this.monacoError.message = "";
      } else {
        try{
          JSON.parse(jsonstring);
          this.monacoError.status = false,
          this.monacoError.message = "";
        } catch (error){
          this.monacoError.status = true,
          this.monacoError.message = error.message;
        }
      }
      
    })
  }

  onK8sEditorInit(editor){
    this.k8sEditorLoading = false;
    editor.focus();
  }

  stepperChange(event){
    this.stepperProp.selectedIndex = event.selectedIndex;
  }

  isSpecSelected(spec){
    return this.selectedSpec.filter(d=>d.id===spec.id).length!==0
  }

  showSpec(service: any){
    let specConfig = "";
    service.specList.map(s=>{
      if(s.spec){
        specConfig += indentString(s.spec, 6) + "\n\r";
      }
    });
    specConfig += indentString(this.serviceObjDirty.additionalSpec||"", 6) + "\n\r";
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

  addAdditionalSpec(){
    const editorRef = this.dialogRef.open(CodeEditorDialogComponent, {
      data: {
        title: "Additional spec",
        code: this.serviceObjDirty.additionalSpec,
        language: "yaml",
        readOnly: false
      }
    })
    return editorRef
  }

  handleAttachment(event){
    this.serviceObjDirty.specList = event[0].specList;
    this.serviceObjDirty.additionalSpec = event[0].additionalSpec;
  }

}
