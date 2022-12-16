import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../urls';

@Component({
  selector: 'rt-deployments-config-view',
  templateUrl: './rt-deployments-config-view.component.html',
  styleUrls: ['./rt-deployments-config-view.component.scss']
})
export class RtDeploymentsConfigViewComponent implements OnInit {
  attachedSpecLoading: boolean = true;
  specEditorLoading: boolean = true;
  configEditorLoading: boolean = true;

  specEditorOptions = {theme: 'vs-dark', language: 'yaml', readOnly:true, tabSize:2};
  configEditorOptions = {theme: 'vs-dark', language: 'json', readOnly:true, tabSize:2};
  
  attachedSpecList: any[] = [];

  constructor(
    @Inject( MAT_DIALOG_DATA) public data:any,
    private api:ApiService) { }

  ngOnInit(): void {
    this.getAttachedSpecs(this.data.id);
  }

  getAttachedSpecs(id: any){
    this.attachedSpecLoading = true;
    this.api.postData(globalUrls.rtDeploymentHasK8SpecList, {
      "rtDeploymentHasSerRelId": id
    }).subscribe((data:any)=>{
      if(data.code === 200){
        this.attachedSpecLoading = false;
        this.attachedSpecList = data.payload;
      }
    }, err=>{
      this.attachedSpecLoading = false;
      this.attachedSpecList = [];
    })
  }

  onSpecEditorInit(editor){
    this.specEditorLoading = false;
    editor.focus();
  }

  onConfigEditorInit(editor){
    this.configEditorLoading = false;
    editor.focus();
  }
}
