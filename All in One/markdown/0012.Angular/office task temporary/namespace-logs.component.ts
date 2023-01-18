import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiService } from '../../../services/api.service';
import { DateTimeService } from '../../../services/date-time.service';
import { environment } from '../../../../environments/environment';
import { globalUrls } from '../../urls';

@Component({
  selector: 'namespace-logs',
  templateUrl: './namespace-logs.component.html',
  styleUrls: ['./namespace-logs.component.scss']
})
export class NamespaceLogsComponent implements OnInit {
  logLevelVar = {
    info: "INFO",
    warn: "WARN",
    error: "ERROR"
  }

  logLevels: any = [
    {name: "Error", value: "ERROR"},
    {name: "Warn", value: "WARN"},
    {name: "Info", value: "INFO"},
    {name: "Debug", value: "DEBUG"},
    {name: "Trace", value: "TRACE"},
  ];
  logDateFilterVariable = "logTimeStamp";

  filterExpressionObj: any;
  
  filterExpArr: any[] = [];
  uiFilterArr: any[] = [];
  filterExclusionList: string[] = ["logTimeStamp", "createdByBusinessId", "loggedEmployeeId", "logLevel"];
  nsList: any[] = [
    {
      name: "Dev",
      baseUrl: environment.nsLogsBaseUrl,
      env: "dev"
    },
    // {
    //   name: "Prod",
    //   baseUrl: environment.dbMonitoringHost,
    //   env: "prod"
    // }
  ];
  selectedNs: any; 
  moduleList: string[] = [];
  selectedModuleList: string[] = [];
  logList: any[] = [];
  fromDate: Object|null = null;
  toDate: Object;
  bussinessIdControl = new FormControl('');
  filteredBusinessList: Observable<any[]>;
  busisnessList: any[] = [];
  selectedBussiness: any;
  employeeList: any[] = [];
  filterVarConstants = {
    logTimeStamp: "logTimeStamp",
    bussinessId: "createdByBusinessId",
    loggedEmployeeId: "loggedEmployeeId",
    logLevel: "logLevel"
  }
  apiSubscription;
  logLevelFormControl = new FormControl();
  ascSort: boolean = true;
  searchKey: string = "";
  selectedEmployees: any[] = [];
  
  advancedFilterVisible: boolean = false;
  moduleSelectorVisible: boolean = false;
  quickFilterVisible: boolean = false;
  nsListloading: boolean = false;
  modulesLoading: boolean = false;
  logsLoading: boolean = false;
  loaderCount: any[] = new Array(3);

  constructor(
    private apiService: ApiService,
    private dateTime: DateTimeService
  ) { }

  ngOnInit(): void {
    this.filteredBusinessList = this.bussinessIdControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => {
        const name = typeof value === 'string' ? value : value?.frontName;
        // const name = Number.isNaN(Number(value)) && typeof value === 'string' ? value : value?.frontName;
        const id =  !Number.isNaN(Number(name)) ? Number(name) : value?.frontEntityId;
        
        if(name || id) {
          console.log("name :-  " ,name)
          console.log("id :-  " ,id )
          // console.log(" value?.frontEntityId :-  " , value?.frontEntityId )
          return this._businessFilter(name as string , id as number) 
        }
        // else if(id) {
        //   console.log("id :-  " ,id )
        //   return this._businessFilter(id as number)
        // }
        else return this.busisnessList.slice()
        // return name ? this._businessFilter(name as string) : this.busisnessList.slice();
      }),
    )

    this.filterExpressionObj = {
      selectedVarType: 'customLine',
      filterType: 'lines',
      exp: {
        optionExpression:{
          expArr: this.filterExpArr
        }
      },
      url: this.selectedNs?this.selectedNs.baseUrl+globalUrls.filterVarList: "",
      warning: undefined
    }
    // this.getNamespaceList();
    this.getFrontList();
  }

  filterBusinessId(event: any){
    this.selectedBussiness = event.option.value;
    console.log("event.option.value :-  " , event.option.value)
    console.log("typeof  event.option.value.frontEntityId :-  " , typeof event.option.value.frontEntityId)
    console.log("event.option.value.frontEntityId :-  " , event.option.value.frontEntityId)
    this.getEmployeesList();
    this.addVariableToUiFilter(this.filterVarConstants.bussinessId, '==', event.option.value.frontEntityId, "Long")
    this.getLogs();
  }

  filterEmployee(event: any){
    this.selectedEmployees = event;
    const eidList = event.map(d=>d.employeeId);
    this.addVariableToUiFilter(this.filterVarConstants.loggedEmployeeId, "IN", eidList, "Long");
    this.getLogs();
  }

  getFrontList(){
    if(!this.selectedNs) return;
    this.apiService.postData(globalUrls.frontList, {
      "environment": this.selectedNs.env,
      "pageNo":1,
      "pageSize":1000,
      "searchKey":"",
      "active":true
    }).subscribe({
      next: (data: any) => {
        if(data&&data.payload&&data.payload.list){
          this.busisnessList = [...data.payload.list];
          this.bussinessIdControl.patchValue("")
        }
      }
    })
  }

  getEmployeesList(){
    if(!this.selectedBussiness||!this.selectedNs) return;
    this.apiService.postData(globalUrls.employeeList, {
      "environment": this.selectedNs.env,
      "frontEntityId": this.selectedBussiness?.frontEntityId,
      "active": true,
      "pageNo": 1,
      "pageSize": 1000,
      "searchKey": ""
    }).subscribe({
      next: (data: any)=>{
        if(data&&data.payload&&data.payload.list){
          this.employeeList = [...data.payload.list];
          this.employeeList = [...this.employeeList]
        }
      }
    })
  }

  getNamespaceList(){
    this.nsListloading = true;
    this.apiService.postData(globalUrls.nsList, {
      pageNo: 1,
      pageSize: 1000,
      searchText: ""
    }).subscribe((data:any) => {
      if(data&&data.payload){
        this.nsList = data.payload.filter(d=>{
          if(d&&d.deploymentId){
            return d;
          }
        });
        this.selectedNs = this.nsList[0];
        this.switchNs();
      }
      this.nsListloading = false;
    }, err=>{
      this.nsListloading = false;
    })
  }

  getModulesList(){
    if(!this.selectedNs||!this.selectedNs.baseUrl) {
      this.modulesLoading = false;
      return;
    }
    this.modulesLoading = true;
    this.apiService.postData(this.selectedNs.baseUrl + globalUrls.modulesList, {}).subscribe({
    // this.apiService.postData("http://192.168.1.37:8999" + globalUrls.modulesList, {}).subscribe({
      next: (data: any)=>{
        if(data&&data.payload){
          this.moduleList = data.payload.list;
          this.selectedModuleList = data.payload.list;
        }
        this.modulesLoading = false;
      },
      error: err => {
        this.modulesLoading = false;
      }
    })
  }

  getLogs(){
    if(!this.selectedNs || !this.selectedNs.baseUrl || !this.selectedBussiness) {
      this.logsLoading = false;
      return;
    }
    this.logList = [];
    this.logsLoading = true;
    let filterExp = "";
    let filterMap = {
      // "F1": {
      //   "filterVariableName": "createdByBusinessId",
      //   "filterVariableDataType": "BigInteger",
      //   "operator": "==",
      //   "filterValueType": "literals",
      //   "filterValue": environment.bussinessid
      // }
    }
    let newFilterArr = this.uiFilterArr;
    if(this.filterExpArr.length){
      newFilterArr = [
        ...newFilterArr,
        {value: 'AND', type: 'operator', displayName: undefined, dataType: ''},
        ...this.filterExpArr
      ]
    }
    if(newFilterArr.length > 0){
      const {exp, filter} = this.createFilterOptionExpression(newFilterArr);
      filterExp += exp;
      filterMap = {...filterMap, ...filter};
    }

    let payload = {
      "indexNameList": this.selectedModuleList,
      "sortBy": this.ascSort?"asc":"desc",
      "searchKey": this.searchKey,
    }

    if(filterExp!=="") {
      payload["searchFilterWithExpression"] = {
        "expression": filterExp,
        "filterMap": filterMap
      }
    }

    if(this.apiSubscription){
      this.apiSubscription.unsubscribe();
    }
    
    this.apiSubscription = this.apiService.postData(this.selectedNs.baseUrl + globalUrls.logList, payload).subscribe({
    // this.apiService.postData("http://192.168.1.37:8999" + globalUrls.logList, payload).subscribe({
      next: (data: any)=>{
        if(data&&data.payload&&data.payload.list&&data.payload.list.length){
          this.logList = data.payload.list || [];
        }
        this.logsLoading = false;
      },
      error: err=>{
        this.logsLoading = false;
      }
    })
  }

  switchNs(){
    this.logList = [];
    this.moduleList = [];
    this.filterExpArr = [];
    this.filterExpressionObj = {
      selectedVarType: 'customLine',
      filterType: 'lines',
      exp: {
        optionExpression:{
          expArr: this.filterExpArr
        }
      },
      url: this.selectedNs?this.selectedNs.baseUrl+globalUrls.filterVarList:"",
      // url: "http://192.168.1.37:8999"+globalUrls.filterVarList,
      warning: undefined
    }
    this.getFrontList();
    this.getModulesList();
    this.getLogs();
  }

  toggleModuleSelection(module){
    if(this.selectedModuleList.includes(module)){
      this.selectedModuleList = [...this.selectedModuleList].filter(d=>d!==module)
    } else {
      this.selectedModuleList = [...this.selectedModuleList, module];
    }
  }

  handleModuleChange(){
    this.moduleSelectorVisible = !this.moduleSelectorVisible;
    this.getLogs();
  }
  
  handleExpressionSaved(event){
    this.filterExpArr = event;
    this.advancedFilterVisible = false;
    // this.extractDateBoundFromFilter();
    this.getLogs();
  }

  createFilterOptionExpression(conditionExp: any[]): any {
    const expObj: any = {};
    expObj.exp = '';
    expObj.filter = {};
    let itemIndex = 0;
    while (itemIndex < conditionExp.length) {
      if (!/\(|\)/gi.test(conditionExp[itemIndex].value) && conditionExp[itemIndex].type === 'operator') {
        expObj.exp += conditionExp[itemIndex].value.toLowerCase() + ' ';
      } else if (conditionExp[itemIndex].type === 'variable') {
        if (!expObj.baseTable) {
          expObj.baseTable = conditionExp[itemIndex].value.split('.')[0];
        }
        expObj.exp += 'F' + itemIndex + ' ';
        expObj.filter['F' + itemIndex] = {
          filterVariableName: conditionExp[itemIndex].value,
          filterVariableDataType: conditionExp[itemIndex].dataType,
          operator: conditionExp[(itemIndex + 1)].value,
          filterValueType: conditionExp[(itemIndex + 2)].type
        };
        if (/in|between/gi.test(conditionExp[(itemIndex + 1)].value)) {
          if (/literals/gi.test(conditionExp[(itemIndex + 2)].type)) {
            expObj.filter['F' + itemIndex].filterValueList = conditionExp[(itemIndex + 2)].value.length?conditionExp[(itemIndex + 2)].value.toString().split(','):[];
          } else {
            expObj.filter['F' + itemIndex].filterValueList = conditionExp[(itemIndex + 2)].value;
          }
        } else {
          expObj.filter['F' + itemIndex].filterValue = Number(conditionExp[(itemIndex + 2)].value) ?
            Number(conditionExp[(itemIndex + 2)].value) : conditionExp[(itemIndex + 2)].value;
        }
        itemIndex += 2;
      } else {
        expObj.exp += conditionExp[itemIndex].value + ' ';
      }
      itemIndex++;
    }
    expObj.exp = expObj.exp.trim();
    expObj.expArr = conditionExp;
    return expObj;
  }

  onSelectFromDate(event){
    this.fromDate = new Date(event.target.value);
    this.updateDateBoundInFilterExp();
    this.getLogs();
  }

  onSelectToDate(event){
    this.toDate = new Date(event.target.value);
    this.updateDateBoundInFilterExp();
    this.getLogs();
  }
  
  updateDateBoundInFilterExp(){
    if(this.fromDate&&this.toDate){
      var fromDate = this.dateTime.getISOString(this.fromDate);
      var toDate = this.dateTime.getISOString(this.toDate);
      this.addVariableToUiFilter(this.filterVarConstants.logTimeStamp, 'BETWEEN', [fromDate, toDate], "literals");
      return;
    }
    if(this.fromDate){
      var fromDate = this.dateTime.getISOString(this.fromDate);
      this.addVariableToUiFilter(this.filterVarConstants.logTimeStamp, '>=', fromDate, "String");
      return;
    }
    if(this.toDate){
      var toDate = this.dateTime.getISOString(this.toDate);
      this.addVariableToUiFilter(this.filterVarConstants.logTimeStamp, '<=', toDate, "String");
    }
  }

  handleLogLevel(event){
    let selectedLogLevel = event.value
    this.addVariableToUiFilter(this.filterVarConstants.logLevel, "IN", selectedLogLevel, "String");
    this.getLogs();    
  }

  addVariableToUiFilter(variable: string, operator: string, value: any, filterVarDataType: string){
    if(this.uiFilterArr.length){
      let flag = false;
      for (let i = 0; i < this.uiFilterArr.length; i++) {
        if(this.uiFilterArr[i].type === "variable" && 
          this.uiFilterArr[i].value === variable){
            this.uiFilterArr[i+1].value = operator;
            if(operator === 'IN'){
              if(value.length){
                this.uiFilterArr[i+2].value = value                
              } else {
                let preArr = this.uiFilterArr.slice(0, (i-1)>0?(i-1):0);
                let postArr = this.uiFilterArr.slice(i+3, this.uiFilterArr.length);
                this.uiFilterArr = [...preArr, ...postArr];
              }
            } else {
              this.uiFilterArr[i+2].value = value
            }
            flag = true;
            break;
        }
      }
      if(!flag) {
        let businessIdFilterArr = [
          {value: 'AND', type: 'operator', displayName: undefined, dataType: ''},
          {value: variable, type: 'variable', displayName: variable, dataType: filterVarDataType},
          {value: operator, type: 'operator', displayName: undefined, dataType: ''},
          {value: value, type: 'literals', displayName: undefined, dataType: ''}
        ]
        this.uiFilterArr = [...this.uiFilterArr, ...businessIdFilterArr];
      }
    } else {
      let businessIdFilterArr = [
        {value: variable, type: 'variable', displayName: variable, dataType: filterVarDataType},
        {value: operator, type: 'operator', displayName: undefined, dataType: ''},
        {value: value, type: 'literals', displayName: undefined, dataType: ''}
      ]
      this.uiFilterArr = [...this.uiFilterArr, ...businessIdFilterArr];
    }
  }

  handleSort(){
    this.ascSort = !this.ascSort;
    this.getLogs();
  }

  handleSearch(event){
    this.searchKey = event.target.value;
    this.getLogs();
  }
  // autoComplete utility functions
  private _businessFilter(name: string , id:number) {
    /* const filterValue = value.toLowerCase();
    return [...this.busisnessList].filter(d=>d.frontName.toLowerCase().includes(filterValue)); */

  
    // if (typeof name === 'string' || typeof id === 'number')
    // {
      const filterName = name.toLowerCase();
      console.log("id :- in busiiness fulter" , id)
      console.log("filterName :- in busiiness fulter" , filterName)
      let filterNameList = [...this.busisnessList].filter(d=>d.frontName.toLowerCase().includes(filterName));
      let filteridList = [...this.busisnessList].filter(d=>String(d.frontEntityId).includes(String(id)));
      // return [...this.busisnessList].filter(d=>String(d.frontEntityId).includes(String(id)));
      // return [...this.busisnessList].filter(d => {
      //   if(typeof filterName === "string")return d.frontName.toLowerCase().includes(filterName)
      //   else if(typeof id === "number" )return d.frontEntityId
      // } 
      //   );
      return [...filterNameList , ...filteridList]
    // }
    // else if (typeof id === 'number')
    // {
    //   const filterValue = id;
    //   return [...this.busisnessList].filter(d=>d.frontEntityId.includes(filterValue));
    // }

  }

  bussinessDisplayFn(bussiness){
    return bussiness.frontName;
    // console.log(`bussiness.frontEntityId :- ${bussiness.frontEntityId}   ,  bussiness.frontName :- ${bussiness.frontName}`);
    // return bussiness.frontEntityId;
    // return bussiness.frontName || bussiness.frontEntityId;
  }
}
