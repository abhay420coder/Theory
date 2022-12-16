import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'add-update-taints',
  templateUrl: './add-update-taints.component.html',
  styleUrls: ['./add-update-taints.component.scss']
})
export class AddUpdateTaintsComponent implements OnInit {
  taints: any[] = [];

  // \"NoSchedule\", \"PreferNoSchedule\", \"NoExecute
  effectOptions = [
    {
      value: "NoSchedule",
      display: "No Schedule"
    },
    {
      value: "PreferNoSchedule",
      display: "Prefer No Schedule"
    },
    {
      value: "NoExecute",
      display: "No Execute"
    },
  ]

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddUpdateTaintsComponent>,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.taints = JSON.parse(JSON.stringify(this.data.taints)).map(d=>{
      d["disabled"] = true;
      return d;
    })
  }

  addTaint(){
    this.taints.push({
      key: "",
      value: "",
      effect: "",
      disabled: false
    });
  }

  removeTaint(taint: any){
    this.taints = this.taints.filter(d=>d.key!==taint.key);
  }

  save(){
    let flag = false;
    for (let i = 0; i < this.taints.length; i++) {
      if(this.taints[i].effect===""){
        flag = true;
        break;
      }      
    }
    if(flag){
      this.snackbar.open("Effect can not be empty", "Dismiss", {duration: 3000});
    } else {
      this.dialogRef.close(
        // removing disabled key before returning the object
        this.taints.map(d=>{
          const {disabled, ...taint} = d;
          return taint;
        })
      );
    }
  }

}
