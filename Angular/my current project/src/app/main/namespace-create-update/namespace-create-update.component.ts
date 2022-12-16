import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../urls';

@Component({
  selector: 'namespace-create-update',
  templateUrl: './namespace-create-update.component.html',
  styleUrls: ['./namespace-create-update.component.scss']
})
export class NamespaceCreateUpdateComponent implements OnInit {
  nsObj = {
    id: undefined,
    name: "",
    description: "",
    baseUrl: ""
  }
  canSubmit: boolean = false;
  isSaving: boolean = false;
  constructor(private dialogRef: MatDialogRef<NamespaceCreateUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public injectedData: any, private api: ApiService, private snackbar: MatSnackBar) {
    if (this.injectedData) {

    }
  }

  ngOnInit(): void {
    if(this.injectedData){
      this.nsObj.id = this.injectedData.id;
      this.nsObj.name = this.injectedData.name;
      this.nsObj.description = this.injectedData.description;
      this.nsObj.baseUrl = this.injectedData.baseUrl;
    }
  }
  closeDialog(msg?: any) {
    this.dialogRef.close(msg)
  }
  save() {
    this.isSaving = true;
    let payload:any = {
      id: this.nsObj.id,
      description: this.nsObj.description,
      baseUrl: this.nsObj.baseUrl
    };
    if(!this.nsObj.id){
      payload["name"] = this.nsObj.name
    }
    this.api.postData(globalUrls.nsCreateUpdate,payload).subscribe(data=> {
      //console.log((data));
      if (data['code'] == 201) {
        this.snackbar.open('Created !', null, { duration: 3000 })
      } else if (data['code'] == 200) {
        this.snackbar.open('Updated !', null, { duration: 3000 })
      }
      this.closeDialog(true)      
    }, err => {
      this.isSaving = false;
    })
  }
  validator(){
    const requiredErr = this.nsObj.name === "";
    const lengthErr = this.nsObj.name.length > 63;
    const charsetRegex = new RegExp('^[a-z,0-9,-]+$', 'g');
    const charsetErr = requiredErr?false:!charsetRegex.test(this.nsObj.name);
    const startEndRegex = new RegExp('^[a-z,0-9].*[a-z,0-9]$', 'g');
    const startEndErr = requiredErr?false:!startEndRegex.test(this.nsObj.name);

    this.canSubmit = !requiredErr && !lengthErr && !charsetErr && !startEndErr;
        
    return {
      required: requiredErr,
      length: lengthErr,
      charset: charsetErr,
      startEnd: startEndErr
    }
  }
}
