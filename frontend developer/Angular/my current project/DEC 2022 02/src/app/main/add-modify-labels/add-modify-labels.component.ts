import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'add-modify-labels',
  templateUrl: './add-modify-labels.component.html',
  styleUrls: ['./add-modify-labels.component.scss']
})
export class AddModifyLabelsComponent implements OnInit {
  labels: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddModifyLabelsComponent>
  ) { }

  ngOnInit(): void {
    if(this.data.label){
      this.labels = JSON.parse(JSON.stringify(this.data.label)).map(d=>{
        d["disabled"] = true;
        return d;
      });
    }
  }

  addLabel(){
    this.labels.push({
      key: "",
      value: "",
      disabled: false
    })
  }

  removeLabel(label: any){
    this.labels = this.labels.map(d=>{
      if(d.key===label.key){
        d.value = null;
      } 
      return d;
    })
  }

  save(){
    let updatedLabels = this.labels.filter(d=>d.key!=="")
    // calculating labels that have been modified
    const modLabels = updatedLabels.filter(label=>{
      let flag = false;
      for (let i = 0; i < this.data.label.length; i++) {
        if(this.data.label[i].key===label.key && this.data.label[i].value===label.value){
          flag = true;
          break;
        }        
      }
      if(!flag){
        return label;
      }
    });
    // putting all the labels in a single object
    let labelsObj: any = {};
    modLabels.map((label: any)=>{
      labelsObj[label.key.trim()] = label.value?label.value?.trim():null;
    })
    this.dialogRef.close(labelsObj);
  }
}
