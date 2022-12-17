import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import indentString from 'indent-string';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { UtilityHelperService } from 'src/app/services/utility-helper.service';
import { globalUrls } from '../urls';
import { CodeEditorDialogComponent } from '../utility/code-editor-dialog/code-editor-dialog.component';

@Component({
  selector: 'rt-deployments-add-service',
  templateUrl: './rt-deployments-add-service.component.html',
  styleUrls: ['./rt-deployments-add-service.component.scss']
})
export class RtDeploymentsAddServiceComponent implements OnInit {

  //view control vars
  specListLoading: boolean = false;
  specSearchEmpty: boolean = false;
  serviceSearchEmpty: boolean = false;
  serviceSearchText: string = "";
  specListSkeletonCount = new Array(3);
  attachedServicesLoading: boolean = false;
  isSaving: boolean = false;
  avlServicesLoading: boolean = true;

  //stepper props
  stepperProp = {
    isLinear: false,
    label1: "Select Services",
    label2: "Replica Set",
    label3: "Specs",
    label4: "Config",
    selectedIndex: 0
  }

  //api props
  specTemplateListProps = {
    pageNo: 1,
    pageSize: 100,
    searchText: "",
    active: true,
    lastPage: false
  }

  //dataset
  allServices: any[] = [];
  deployedServices: any[] = [];
  avlServices: any[] = [];
  selectedServices: any[] = [];
  toggledServices: any = []
  avlServicesObv: Subject<any[]> = new Subject<any[]>();
  selectedServicesObv: Subject<any[]> = new Subject<any[]>();

  specList = [];
  selectedSpec = [];
  
  //item-attacher props
  itemAttacherData = {
    isDialog: true,
    avlItemFunc: this.dummyFunction.bind(this),
    attachedItemFunc: this.dummyFunction.bind(this),
    avlItemsObs: this.avlServicesObv,
    attachedItemObs: this.selectedServicesObv,
    filterBy: ["srId"],
    displayField: "serviceName",
    seconderyString: "Branch: #, Ver.: #, Note: #",
    secondaryDisplayField: ["srBranch","srVersion","releaseNote"],
    isPagination: false,
    avlItemSearchMode: "offline",
    atchItemSearchMode: "offline",
    hasIcon: true
  }


  constructor(
    @Inject(MAT_DIALOG_DATA) private injectedData: any, 
    private api: ApiService, 
    private snackbar: MatSnackBar, 
    private dialogRef: MatDialog,
    private selfRef: MatDialogRef<RtDeploymentsAddServiceComponent>,
    private utils: UtilityHelperService) { }

  ngOnInit(): void {
    this.avlServicesLoading = true;
    this.fetchAllServices();
    this.getSpecTemplateList();
  }

  fetchAllServices(){
    this.api.postData(globalUrls.srList, {
      pageNo: 1,
      pageSize: 1000,
      searchText: ""
    }).subscribe((data: any) => {
      this.allServices = data.payload;
      this.fetchDeployedServices();
    });
  }

  fetchDeployedServices(){
    this.api.postData(globalUrls.rtDeploymentHasSrRelList,{
      deploymentId: this.injectedData.deploymentId,
      pageNo: 1,
      pageSize: 1000,
      searchText: ""
    }).subscribe((data:any)=> {
      this.deployedServices = data.payload;
      this.generateAvlServices();
    })
  }

  generateAvlServices(){
    // const avlList = this.allServices.filter(d=>this.deployedServices.filter(dx=>dx.srId===d.srId).length===0);
    const avlList = this.allServices.filter(d=>!this.utils.objectExistInArray(d, this.deployedServices, "srId")&&(d.actions&&d.actions.includes("deploy")));
    this.avlServices = avlList;
    this.avlServicesLoading = false;
  }

  save(){
    this.isSaving = true;
    let payload = {
      deploymentId: this.injectedData.deploymentId,
      servicesConfigList: []
    }

    this.selectedServices.map(d=>{
      const specTemplateList = d.specList.map(spec=>{
        return {
          k8sSpecTemplateId: spec.id,
          active: true
        }
      })
      const obj = {
        "srId": d.srId,
        "replicaCount": d.replicaCount,
        "k8sSpecTemplateIdList": specTemplateList.length?specTemplateList:[],
        "additionalSpec": d.additionalSpec!==""?d.additionalSpec:null,
        "configMap": d.updatedConfigMap&&d.updatedConfigMap!==null?d.updatedConfigMap:null
      }
      payload.servicesConfigList.push(obj);
    })
    this.api.postData(globalUrls.rtDeploymentAddServiceRel, payload).subscribe((data)=>{
      this.snackbar.open("Deployment has started", "Close", {duration: 5000});
      this.selfRef.close();
    }, err =>{
      this.isSaving = false;
      this.snackbar.open("Something went wrong. Please try again", "Close", {duration: 5000});
    })

  }

  //Utility functions defined below

  stepperChange(event){
    this.stepperProp.selectedIndex = event.selectedIndex;
  }

  dummyFunction(obj, query){
    this.avlServicesObv.next([...this.avlServices]);
    this.selectedServicesObv.next([]);
  }

  attachItems(event){
    const modList = event.map(d=>{
      d["replicaCount"] = 1;
      d["visible"] = true;
      d["specList"] = [];
      d["additionalSpec"] = "";
      return d;
    });
    this.selectedServices = modList;
  }

  specSearch(event: string){
    this.specTemplateListProps.searchText = event;
    this.specTemplateListProps.pageNo = 1;
    this.specList = [];
    this.getSpecTemplateList();
  }

  getSpecTemplateList() {
    this.specListLoading = true;
    this.specSearchEmpty = false;
    this.api.postData(globalUrls.templateList, {
      pageNo: this.specTemplateListProps.pageNo,
      pageSize: this.specTemplateListProps.pageSize,
      searchText: this.specTemplateListProps.searchText,
      active: this.specTemplateListProps.active,
    }).subscribe((data: any) => {
      if(data.code === 200){
        this.specListLoading = false;
        this.specList = this.specList.concat(data.payload);
        this.specTemplateListProps.lastPage = data.payload.length < this.specTemplateListProps.pageSize;
        if(data.payload.length===0 && this.specTemplateListProps.searchText!==""){
          this.specSearchEmpty = true;
        }
        if(this.selectedSpec.length!==0){
          this.selectedSpec.map(spec=>{
            if(this.specList.filter(d=>d.id===spec.id).length===0 && spec.name.includes(this.specTemplateListProps.searchText)){
              this.specList.push(spec);
            }
          })
        }
      }
    })
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

  onSpecListScroll(){
    if(!this.specTemplateListProps.lastPage){
      this.specTemplateListProps.pageNo += 1;
      this.getSpecTemplateList();
    }
    
  }

  isSpecSelected(spec){
    return this.selectedSpec.filter(d=>d.id===spec.id).length!==0
  }

  attachSpec(){
    if(this.selectedSpec.length===0){
      this.snackbar.open("Select specs to attach!", "Close", {duration: 3000});
    } else if(this.toggledServices.length===0){
      this.snackbar.open("Select services to attach!", "Close", {duration: 3000});
    } else {
      this.selectedServices.map((d, i)=>{
        if(this.toggledServices.filter(ts=>ts.srId===d.srId).length>0){
          this.selectedSpec.map(spec=>{
            if(this.selectedServices[i].specList.filter(dx=>spec.id===dx.id).length===0){
              this.selectedServices[i].specList.push(spec);
            }
          })
        }
      });
      this.selectedSpec = [];
      this.toggledServices = [];
    }
  }

  serviceSearch(event: string){
    this.serviceSearchEmpty = true;
    this.serviceSearchText = event;
    this.selectedServices = this.selectedServices.map(d=>{
      if (d.serviceName.includes(event)) {
        d.visible = true;
        this.serviceSearchEmpty = false;
      } else {
        d.visible = false;
      }
      return d;
    });
  }

  toggleService(item){
    if (this.toggledServices.filter(d=>d.srId===item.srId).length>0) {
      this.toggledServices = this.toggledServices.filter(d=>d.srId!==item.srId);
    } else {
      this.toggledServices.push(item);
    }
  }

  toggleAllServices(flag){
    if (flag) {
      this.toggledServices = [];
    } else {
      this.toggledServices = this.selectedServices;
    }
  }

  isServiceSelected(service){
    return this.toggledServices.filter(d=>d.srId===service.srId).length>0;
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

  addAdditionalSpec(serviceId: any){
    const editorRef = this.dialogRef.open(CodeEditorDialogComponent, {
      data: {
        title: "Additional spec",
        code: this.selectedServices[serviceId].additionalSpec,
        language: "yaml",
        readOnly: false
      }
    }).afterClosed().subscribe((data: string)=>{
      if(data !== undefined){
        if(data===''){
          this.selectedServices[serviceId].additionalSpec = "";
        } else {
          this.selectedServices[serviceId].additionalSpec = data;
        }
      }
    })
  }

  editConfig(id){
    this.dialogRef.open(CodeEditorDialogComponent, {
      data: {
        title: "Edit config",
        code: this.selectedServices[id].updatedConfigMap?this.selectedServices[id].updatedConfigMap:this.selectedServices[id].configMap,
        language: "json",
        readOnly: false,
        canDisableOnError: true
      }
    }).afterClosed().subscribe(data=>{
      if(data!==undefined){
        if(data===this.selectedServices[id].configMap){
          this.selectedServices[id]["updatedConfigMap"] = null;
        } else {
          this.selectedServices[id]["updatedConfigMap"] = data;
        }
      }
    })
  }

  isConfigChanged(index){
    return this.selectedServices[index].updatedConfigMap&&this.selectedServices[index].updatedConfigMap!==null;    
  }
  
}
