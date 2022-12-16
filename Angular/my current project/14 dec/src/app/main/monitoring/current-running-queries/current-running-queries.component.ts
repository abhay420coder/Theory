import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../../urls';

@Component({
  selector: 'current-running-queries',
  templateUrl: './current-running-queries.component.html',
  styleUrls: ['./current-running-queries.component.scss']
})
export class CurrentRunningQueriesComponent implements OnInit {
  monitoringDataDescription = {
    THREAD_ID:	                "Thread associated with the event. Together with EVENT_ID uniquely identifies the row.",
    EVENT_ID:	                  "Thread's current event number at the start of the event. Together with THREAD_ID uniquely identifies the row.",
    END_EVENT_ID:	              "NULL when the event starts, set to the thread's current event number at the end of the event.",
    EVENT_NAME:	                "Event instrument name and a NAME from the setup_instruments table",
    SOURCE:	                    "Name and line number of the source file containing the instrumented code that produced the event.",
    TIMER_START:	              "Time when the event timing started or NULL if timing is not collected.",
    TIMER_END:	                "Time when the event timing ended, or NULL if the event has not ended or timing is not collected.",
    TIMER_WAIT:	                "Event's duration or NULL if the event has not ended or timing is not collected.",
    LOCK_TIME:	                "Time spent waiting for locks",
    SQL_TEXT:	                  "The SQL statement, or NULL if the command is not associated with an SQL statement.",
    DIGEST:	                    "Statement digest.",
    DIGEST_TEXT:	              "Statement digest text.",
    CURRENT_SCHEMA:	            "Statement's default database for the statement, or NULL if there was none.",
    OBJECT_SCHEMA:	            "Reserved, currently NULL",
    OBJECT_NAME:	              "Reserved, currently NULL",
    OBJECT_TYPE:	              "Reserved, currently NULL",
    OBJECT_INSTANCE_BEGIN:	    "Address in memory of the statement object.",
    MYSQL_ERRNO:	              "Error code. See MariaDB Error Codes for a full list.",
    RETURNED_SQLSTATE:	        "The SQLSTATE value.",
    MESSAGE_TEXT:	              "Statement error message. See MariaDB Error Codes.",
    ERRORS:	                    "0 if SQLSTATE signifies completion (starting with 00) or warning (01), otherwise 1.",
    WARNINGS:	                  "Number of warnings from the diagnostics area.",
    ROWS_AFFECTED:	            "Number of rows affected the statement affected.",
    ROWS_SENT:	                "Number of rows returned.",
    ROWS_EXAMINED:	            "Number of rows read during the statement's execution.",
    CREATED_TMP_DISK_TABLES:	  "Number of on-disk temp tables created by the statement.",
    CREATED_TMP_TABLES:	        "Number of temp tables created by the statement.",
    SELECT_FULL_JOIN:	          "Number of joins performed by the statement which did not use an index.",
    SELECT_FULL_RANGE_JOIN:	    "Number of joins performed by the statement which used a range search of the first table.",
    SELECT_RANGE:	              "Number of joins performed by the statement which used a range of the first table.",
    SELECT_RANGE_CHECK:	        "Number of joins without keys performed by the statement that check for key usage after each row.",
    SELECT_SCAN:	              "Number of joins performed by the statement which used a full scan of the first table.",
    SORT_MERGE_PASSES:	        "Number of merge passes by the sort algorithm performed by the statement. If too high, you may need to increase the sort_buffer_size.",
    SORT_RANGE:	                "Number of sorts performed by the statement which used a range.",
    SORT_ROWS:	                "Number of rows sorted by the statement.",
    SORT_SCAN:	                "Number of sorts performed by the statement which used a full table scan.",
    NO_INDEX_USED:	            "0 if the statement performed a table scan with an index, 1 if without an index.",
    NO_GOOD_INDEX_USED:	        "0 if a good index was found for the statement, 1 if no good index was found. See the Range checked for each record description in the EXPLAIN article.",
    NESTING_EVENT_ID:	          "Reserved, currently NULL.",
    NESTING_EVENT_TYPE:	        "Reserved, currently NULL."
  }

  monitoringData = []

  columns = [
    "CURRENT_SCHEMA", "OBJECT_SCHEMA", "SQL_TEXT", "TIMER_START", "TIMER_END", "TIMER_WAIT", "LOCK_TIME", 
    "COUNT_ALLOC", "COUNT_FREE", "SUM_NUMBER_OF_BYTES_ALLOC", "SUM_NUMBER_OF_BYTES_FREE", "LOW_COUNT_USED",
    "CURRENT_COUNT_USED", "HIGH_COUNT_USED", "LOW_NUMBER_OF_BYTES_USED", "CURRENT_NUMBER_OF_BYTES_USED",
    "HIGH_NUMBER_OF_BYTES_USED", "MESSAGE_TEXT", "WARNINGS", "ERRORS"
  ];
  timeColumns = [
    "TIMER_START",
    "TIMER_END"
  ];
  durationColumns = [
    "TIMER_WAIT",
    "LOCK_TIME"
  ];
  dataColumns = [
    "SUM_NUMBER_OF_BYTES_ALLOC", "SUM_NUMBER_OF_BYTES_FREE", "LOW_NUMBER_OF_BYTES_USED", "CURRENT_NUMBER_OF_BYTES_USED",
    "HIGH_NUMBER_OF_BYTES_USED"
  ]
  loading: boolean = true;
  filterList: any[] = [];
  filterKey: string = "";
  filterValue: string = "";
  fromFilterVal;
  toFilterVal;
  showFilterInput: boolean = false;
  
  apiSub: any;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.getMonitoringData();
  }

  getMonitoringData(){
    this.loading = true;
    const filters = [...this.filterList].map(d=>{
      return {
        "cName": d.key,
        "cValue": d.value
      }
    });
    if(this.apiSub){
      this.apiSub.unsubscribe();
    }
    this.apiSub = this.api.postData(globalUrls.runningQueriesList, {
      "columnList": filters.length ? filters : undefined
    }).subscribe({
      next: (data: any) => {
        if(data && data.payload){
          this.monitoringData = data.payload;
          // this.columns = Object.keys(data.payload[0]);
          let colsToPush: string[] = []
          if(data.payload.length){
            Object.keys(data.payload[0]).map(d=>{
              if(!this.columns.includes(d)){
                colsToPush.push(d);
              }
            })
          }         
          this.columns = [...this.columns, ...colsToPush];
        }
        this.loading = false;
      },
      error: err=>{
        this.loading = false;
      }
    })
  }

  openFilterInput(column: string){
    this.filterKey = column;
    this.fromFilterVal = null;
    this.toFilterVal = null;
    const filterVal = this.filterList.filter(d=>d.key===column);
    if(filterVal.length){
      if(this.timeColumns.includes(column)){
        this.fromFilterVal = new Date(filterVal[0]?.value[0]);
        this.toFilterVal = new Date(filterVal[0]?.value[1]);
        this.showFilterInput = true;
        return;
      }
      this.filterValue = filterVal[0]?.value?.join(",");
    } else {
      this.filterValue = "";
    }
    this.showFilterInput = true;
  }

  onFilterChange(column: string, event: any) {
    console.log(this.filterValue)
    let currentFilters = this.filterList;
    let flag = false;
    for (let i = 0; i < currentFilters.length; i++) {
      if(currentFilters[i].key===column){
        currentFilters[i].value = this.filterValue.split(",").map(d=>{
          if(d.trim()!=="") return d.trim();
        });
        flag = true;
        break;
      }      
    }
    if(!flag){
      currentFilters.push({
        key: column,
        value: this.filterValue.split(",").map(d=>{
          if(d.trim()!=="") return d.trim();
        })
      })
    }
    this.filterList = [...currentFilters];
    this.monitoringData = [];
    this.getMonitoringData()
  }

  removeFilter(filter){
    this.filterList = this.filterList.filter(d=>d.key!==filter.key);
    this.monitoringData = [];
    this.getMonitoringData();
  }

  clearFilters(){
    this.filterList = [];
    this.monitoringData = [];
    this.getMonitoringData();
  }

  onSelectFromDate(event){
    this.fromFilterVal = new Date(event.target.value);
    let currentFilters = [...this.filterList];
    let flag = false;
    for (let i = 0; i < currentFilters.length; i++) {
      if(currentFilters[i].key===this.filterKey){
        currentFilters[i].value[0] = this.fromFilterVal.valueOf()
        flag = true;
        break;
      }      
    }
    if(!flag){
      let tempVal = [];
      tempVal[0] = this.fromFilterVal.valueOf();
      currentFilters.push({
        key: this.filterKey,
        value: tempVal
      })
    }
    this.filterList = [...currentFilters];
    this.monitoringData = [];
    this.getMonitoringData();
  }

  onSelectToDate(event){
    this.toFilterVal = new Date(event.target.value);
    let currentFilters = [...this.filterList];
    let flag = false;
    for (let i = 0; i < currentFilters.length; i++) {
      if(currentFilters[i].key===this.filterKey){
        currentFilters[i].value[1] = this.toFilterVal.valueOf()
        flag = true;
        break;
      }      
    }
    if(!flag){
      let tempVal = [];
      tempVal[1] = this.toFilterVal.valueOf();
      currentFilters.push({
        key: this.filterKey,
        value: tempVal
      })
    }
    this.filterList = [...currentFilters];
    this.monitoringData = [];
    this.getMonitoringData();
  }

}

