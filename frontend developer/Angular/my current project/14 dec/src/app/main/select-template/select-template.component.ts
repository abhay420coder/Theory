import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../urls';

@Component({
  selector: 'select-template',
  templateUrl: './select-template.component.html',
  styleUrls: ['./select-template.component.scss']
})
export class SelectTemplateComponent implements OnInit {
  templateForm = new UntypedFormControl('');
  templateFormSub

  editorLoading: boolean = true;

  editorOptions: any = {
    theme: 'vs-dark', 
    language: 'yaml', 
    readOnly: true, 
    tabSize:2,  
    wordWrap: "off"
  }

  templateList: any[] = []
  filteredTemplateList: any[] = [];
  templateBody = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private api: ApiService,
    private dialog: MatDialogRef<SelectTemplateComponent>
  ) { }

  ngOnInit(): void {
    this.fetchTemplateList();
    this.templateFormSub = this.templateForm.valueChanges.subscribe(value=>{
      const val = (typeof value === "string"?value:value.name)||"";
      this.filteredTemplateList = this.templateList.filter(d=>d.name.toLowerCase().includes(val.toLowerCase()))
    })
  }

  ngOnDestroy(): void {
    this.templateFormSub.unsubscribe();
  }

  fetchTemplateList(){
    this.api.postData(globalUrls.k8sObjectTemplateList, {
      "pageNo": 1,
      "pageSize": 1000,
      "type": this.data.type,
      "searchText":"",
	    "active": true
    }).subscribe({
      next: (data: any)=>{
        if(data&&data.payload){
          this.templateList = [...data.payload];
          this.filteredTemplateList = [...data.payload]
        }
      }
    })
  }

  onInit(editor){
    this.editorLoading = false;
    editor.focus();
  }

  displayFn(template){
    return template && template.name
  }

  handleOption(){
    this.templateBody = this.templateForm.value.body;
  }

  save(){
    this.dialog.close(this.templateForm.value);
  }
}
