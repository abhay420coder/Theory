// import { AppService } from 'src/app/shared/services/app.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
// import { ApiService } from 'src/app/shared/services/api.service';
// import { TranslationService } from 'src/app/shared/services/translation.service';


@Component({
  selector: 'filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss']
})
export class FilterContainerComponent implements OnInit, OnChanges {

  @Input() expressionData: any;
  @Input() exclusionList: string[];
  @Output() expressionSaved = new EventEmitter();
  selectedVarType: string;
  conditionExp = [];
  exprToolList: string[];
  pageNo = 1;
  showTools = false;
  recentlyUsedVars = [];
  searchKey: string;
  translationVar;
  loaderItems = [{
    noOfRows: new Array(10),
    items: ['100%']
  }];
  loadingItems: boolean;
  constructor(
    private apiService: ApiService, 
    // private translation: TranslationService,
    // private appService: AppService
  ) {
    this.exprToolList = ['(', ')', '==', '<', '<=', '>', '>=', '!=', 'OR', 'AND', 'like', 'IN', 'BETWEEN'];
  }
  ngOnInit() {
    // this.translationVar = this.translation.translationVar.lines;
    // this.searchVariables();
  }

  ngOnChanges() {
    if (this.expressionData) {
      this.selectedVarType = this.expressionData.selectedVarType;
      if (this.expressionData.exp && this.expressionData.exp.optionExpression) {
        this.conditionExp = this.expressionData.exp.optionExpression.expArr;
      } else {
        this.conditionExp = [];
      }
      this.searchVariables();
      this.pageNo = 1;
      this.recentlyUsedVars = [];
    }
  }

  saveOptionExpression() {
    console.log(this.conditionExp);
    let expPassed = true;
    this.conditionExp.forEach((element, index) => {
      if (element.value === 'like') {
        const expValue = isNaN(this.conditionExp[index + 1].value);
        if (!expValue) {
          expPassed = false;
          // this.appService.displayCustomAlert({
          //   header: 'Invalid Expression',
          //   message: `Oops! Your Expression contains <b>LIKE operator with number </b>.
          //   STRICTLY NOT ALLOWED, Please change the expression and continue.`,
          //   buttonName: 'Okay'
          // });
        }
      }
    })
    if (expPassed) { 
      this.expressionSaved.emit(this.conditionExp) 
    };
  }

  clearFilter() {
    this.conditionExp = [];
    this.saveOptionExpression();
  }

  addItemToOptionExp(value: any, type: string, variable?: any) {
    if (this.conditionExp.length && type === 'variable') {
      this.addItemToOptionExp('AND', 'operator');
    }
    if (type === 'variable') {
      if (variable.variableType !== 'base') {
        value = `${value}`
      }
    }
    const tempObj = {
      value: value,
      type: type,
      displayName: variable ? variable.variableDisplayName : undefined,
      dataType: variable ? variable.variableDataType : ''
    }
    if (type === 'date') {
      tempObj.value = new Date();
    }

    this.conditionExp.push(tempObj);

    if (type === 'variable') {
      if (!/date|between/gi.test(variable.variableDataType)) {
        this.addItemToOptionExp('==', 'operator');
        this.addItemToOptionExp('Edit me', 'literals');
      }
    }
  }

  // addVariables(event) {
  //   if (event['type'] === 'base') {
  //     this.addItemToOptionExp(event['var'], 'variable', event['var'].slice(this.selectedVarType.length + 1));
  //   } else if (event['type'] === 'single') {
  //     this.addItemToOptionExp(event['var'], 'variable', event['varObjList']['id']);
  //   } else if (event['type'] === 'table') {
  //     this.addItemToOptionExp(event['var'], 'variable', event['parentId'] + '.' + event['varObjList']['id']);
  //   } else {
  //     const arr = event['var'].split('.');
  //     this.addItemToOptionExp(event['var'], 'variable', arr[1]);
  //   }
  // }


  searchVariables() {
    if (!this.expressionData.warning&&this.expressionData.url) {
      // this.loadingItems = true;
      this.apiService.postData(this.expressionData.url, {
        "searchKey": this.searchKey,
        "pageSize": 100,
        "pageNumber": 1
      }).subscribe(result => {
        if (result['status'] === 'success') {
          const filteredList = result['payload']['list'].filter(d=>!this.exclusionList.includes(d.variableName))
          
          // this.loadingItems = false;
          const filterVars = filteredList.map(d=>{
            return {
              variableDataType: d.dataType,
              variableDisplayName: d.variableName,
              variableName: d.variableName,
              variableType: "base"
            }
          });
          if(this.searchKey&&this.searchKey!==""){
            this.recentlyUsedVars = filterVars.filter(d=>d.variableDisplayName.includes(this.searchKey));
          } else {
            this.recentlyUsedVars = filterVars;
          }
        } else {
          this.loadingItems = false;
        }
      })
    }
  }
}
