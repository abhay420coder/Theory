import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DateTimeService } from 'src/app/services/date-time.service';
import { globalUrls } from '../urls';

@Component({
  selector: 'service-health',
  templateUrl: './service-health.component.html',
  styleUrls: ['./service-health.component.scss']
})
export class ServiceHealthComponent implements OnInit {
  namespace: string = "";
  srId: string = "";

  //component props
  editorOptions = { theme: 'vs-dark', language: 'json', readOnly:true, tabSize:2,  wordWrap: "off" };

  //dataset
  podData: any;
  actuatorHealth: any;
  actuatorInfo: any;
  metricsData: any = {
    list: [],
    data: [],
  }
  envData = "Loading env data ...";
  threadDumpData = "Loading thread dump data ...";
  namespaceData: any;

  //view control vars
  selectedTabIndex: number = 0;
  podDataLoading: boolean = true;
  actuatorLoading: boolean = true;
  actuatorInfoLoading: boolean = true;
  metricsLoading: boolean = true;
  envLoading: boolean = true;
  threadDumpLoading: boolean = true; 

  actuatorSkeletonCount: any[] = new Array(5);
  actuatorInfoSkeletonCount: any[] = new Array(3);

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private dateTime: DateTimeService) { }

  async ngOnInit(): Promise<void> {
    this.namespace = this.route.snapshot.paramMap.get("namespace");
    this.srId = this.route.snapshot.paramMap.get("srId");
    this.podDataLoading = true;
    const nsData:any = await this.getNsData();
    this.namespaceData = nsData.payload;
    const podData:any = await this.getPodData();
    this.podData = podData&&podData.payload?podData.payload[0]:{};
    this.podDataLoading = false;
    this.getActuatorhealth();
    this.getActuatorInfo();
    // this.getMetrics();
    // this.getEnvData();
    // this.getThreadDump();
  }

  onEnvInit(editor){
    this.envLoading = false;
    editor.focus();
  }

  onThreadDumpInit(editor){
    this.threadDumpLoading = false;
    editor.focus();
  }

  getNsData(){
    return this.api.postData(globalUrls.nsRead, {
      id: this.namespace
    }).toPromise();
  }

  getPodData(){
    return this.api.postData(globalUrls.podList, {
      deploymentNamespace: this.namespaceData.name,
      srId: this.srId
    }).toPromise();
  }

  getActuatorhealth(){
    if(!this.podData||!this.podData.status||!this.namespaceData||!this.namespaceData.baseUrl){
      return;
    }

    this.actuatorLoading =  true;
    const url = `${this.namespaceData.baseUrl}/${this.podData.status.containerStatuses[0].name}/actuator/health`
    this.api.getData(url).subscribe((data:any)=>{
      for(var component in data.components){
        //if component is diskSpace then run data conversion
        if(component==="diskSpace" &&data.components[component].details){
          for(let detail in data.components[component].details){
            //if data is number then convert to GB 
            if(!isNaN(parseInt(data.components[component].details[detail]))){
              data.components[component].details[detail] = (data.components[component].details[detail] /(1024*1024*1024)).toFixed(3) + " GB";
            }            
          }
        }
      }
      this.actuatorHealth = data;
      this.actuatorLoading =  false;
    }, err=>{
      this.actuatorLoading =  false;
    })
  }

  getActuatorInfo(){
    if(!this.podData||!this.podData.status||!this.namespaceData||!this.namespaceData.baseUrl){
      return;
    }
    this.actuatorInfoLoading = true;
    const url = `${this.namespaceData.baseUrl}/${this.podData.status.containerStatuses[0].name}/actuator/info`
    this.api.getData(url).subscribe((data:any)=>{
      this.actuatorInfo = data;
      this.actuatorInfoLoading = false;
    }, err=>{
      this.actuatorInfoLoading = false;
    })
  }

  getMetrics(){
    if(!this.podData||!this.podData.status||!this.namespaceData||!this.namespaceData.baseUrl){
      return;
    }
    this.metricsLoading = true;
    const url = `${this.namespaceData.baseUrl}/${this.podData.status.containerStatuses[0].name}/actuator/metrics`
    this.api.getData(url).subscribe((data:any)=>{
      if(data&&data.names){
        this.metricsData.list = data.names.map(d=>{
          this.getMetricValue(d);
          return {
            name: d,
            active: true
          }
        });
      }
    }, err=>{
      console.log(err);
      this.metricsLoading = false;
    })
  }

  getMetricValue(metric: string){
    if(!this.podData||!this.podData.status||!this.namespaceData||!this.namespaceData.baseUrl){
      return;
    }
    const url = `${this.namespaceData.baseUrl}/${this.podData.status.containerStatuses[0].name}/actuator/metrics/${metric}`
    this.api.getData(url).subscribe((data:any)=>{
      if(data&&data!=='{}'){
        //data conversion and formatting
        if(data.measurements[0].value%1!==0 && data.baseUnit!=="seconds"){
          //float numbers
          data.measurements[0].value = data.measurements[0].value.toFixed(3)
        } else if(data.baseUnit==="bytes"){
          //data values
          data.baseUnit = "GB";
          data.measurements[0].value = (data.measurements[0].value/(1024*1024*1024)).toFixed(2);
        } else if(data.name === "process.start.time"){
          data.measurements = data.measurements.map(m=>{
            const unixStamp = Math.floor(m.value);
            const timestamp = this.dateTime.getDatestampFromUnixStamp(unixStamp, false);
            m.value = timestamp;
            return m;
          })
          data.baseUnit = "";
        } else if(data.baseUnit==="seconds"){
          //duration values
          const seconds = Math.floor(data.measurements[0].value);
          const days = Math.floor(seconds / (3600*24));
          const hours = Math.floor(seconds % (3600*24) / 3600);
          const mins =  Math.floor(seconds % 3600 / 60);
          const sec = Math.floor(seconds % 60);
          data.measurements[0].value = "";
          data.measurements[0].value += days>0?days+'d ':'';
          data.measurements[0].value += hours>0||days>0?hours+'h ':'';
          data.measurements[0].value += hours>0||days>0||mins>0?mins+'m ':'';
          data.measurements[0].value += sec+'s';
          data.baseUnit = "";
        }
        this.metricsData.data.push(data);
        this.metricsLoading = false;
      } 
    })
  }

  getEnvData(){
    if(!this.podData||!this.podData.status||!this.namespaceData||!this.namespaceData.baseUrl){
      return;
    }

    const url = `${this.namespaceData.baseUrl}/${this.podData.status.containerStatuses[0].name}/actuator/env`;
    this.api.getData(url).subscribe((data: any)=>{
      this.envData = JSON.stringify(data, null, '\t');
    }, err=>{
      this.envLoading = false;
      this.envData = "Env data is not available!"
    })
  }

  getThreadDump(){
    if(!this.podData||!this.podData.status||!this.namespaceData||!this.namespaceData.baseUrl){
      return;
    }

    const url = `${this.namespaceData.baseUrl}/${this.podData.status.containerStatuses[0].name}/actuator/threaddump`;
    this.api.getData(url).subscribe((data: any)=>{
      this.threadDumpData = JSON.stringify(data, null, '\t');
    }, err=>{
      this.threadDumpLoading = false;
      this.threadDumpData = "Thread-dump data is not available!";
    })
  }

  //utility functions

  handleTabChange(event){
    this.selectedTabIndex = event.index;
    switch(event.index){
      case 0:
        this.getActuatorhealth();
        this.getActuatorInfo();
        break;
      case 1:
        this.getMetrics();
        break;
      case 2:
        this.getEnvData();
        break;
      case 3: 
        this.getThreadDump();
        break;
    }
  }

  getStatusClass(status: string){
    return {
      'online': status==="UP",
      'offline': status==="DOWN",
      'unknown': status!=="UP"&&status!=="DOWN"
    }
  }
}
