import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {

  formGroupNameForFormGroupOnly : FormGroup = new FormGroup({
    'firstFormControlName': new FormControl(),
    'secondFormControlName': new FormControl(),
    'thirdFormControlName': new FormControl(),
    'fourthFormControlName': new FormControl(),
    'fifthFormControlName': new FormControl(),
    'sixthFormControlName': new FormControl(),
    'seventhFormControlName': new FormControl(),
    'eightthFormControlName': new FormControl(),
    'ninethFormControlName': new FormControl(),
  }) ;
  formGroupNameForFormBulderOnly : FormGroup = this.fb.group({
    'firstFormControlName': new FormControl(),
    'secondFormControlName': new FormControl(),
    'thirdFormControlName': new FormControl(),
    'fourthFormControlName': new FormControl(),
    'fifthFormControlName': new FormControl(),
    'sixthFormControlName': new FormControl(),
    'seventhFormControlName': new FormControl(),
    'eightthFormControlName': new FormControl(),
    'ninethFormControlName': new FormControl(),
  }) ;

  status: any = [
    { name: "Success", value: "SUCCESS" },
    { name: "Error", value: "FAILED" },
    { name: "Pending", value: "PENDING" },
  ];
  pods: any = [
    { name: "All Ready", value: "allReady" },
    { name: "Zero Ready", value: "zeroReady" },
    { name: "Partial Ready", value: "partialReady" },
  ];


  /* 
  interface Food {
  value: string;
  viewValue: string;
}
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  */
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }

  formGroupSubmitButtonForFormGroupOnly(){
    console.log('formGroupSubmitButtonForFormGroupOnly  :-    this.formGroupNameForFormGroupOnly.value :-  ',this.formGroupNameForFormGroupOnly.value)
    console.log('formGroupSubmitButtonForFormGroupOnly  :-    this.formGroupNameForFormGroupOnly :-  ',this.formGroupNameForFormGroupOnly)
    console.log('formGroupSubmitButtonForFormGroupOnly  :-    this.formGroupNameForFormGroupOnly.root.value :-  ',this.formGroupNameForFormGroupOnly.root.value)
  }

  
  formGroupSubmitButtonForFormBulderOnly(){
    console.log('formGroupSubmitButtonForFormBulderOnly  :-    this.formGroupNameForFormGroupOnly.value :-  ',this.formGroupNameForFormGroupOnly.value)
    console.log('formGroupSubmitButtonForFormBulderOnly  :-    this.formGroupNameForFormGroupOnly :-  ',this.formGroupNameForFormGroupOnly)
    console.log('formGroupSubmitButtonForFormBulderOnly  :-    this.formGroupNameForFormGroupOnly.root.value :-  ',this.formGroupNameForFormGroupOnly.root.value)
  }

}
