import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit  {

  /* formGroupNameForFormGroupOnly : FormGroup = new FormGroup({
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
  formGroupNameForFormGroupOnlyForSetPurpous : FormGroup = new FormGroup({
    'firstFormControlName': new FormControl('vs'),
    'secondFormControlName': new FormControl("dadasa"),
    'thirdFormControlName': new FormControl(true),
    'fourthFormControlName': new FormControl(undefined),
    'fifthFormControlName': new FormControl("vip"),
    'sixthFormControlName': new FormControl("FAILED"),
    'seventhFormControlName': new FormControl(['zeroReady',' partialReady ' ]),
    'eightthFormControlName': new FormControl("tacos -2"),
    'ninethFormControlName': new FormControl(true),
    
  }) ; */

  /* 
                                        eightthFormControlName : "tacos -2",
                                        fifth FormControlName : "vip",
                                        firstFormControlName: "vs",
                                        fourth FormControlName : undefined,
                                        ninethFormControlName: true,
                                        second FormControlName: "dadasa",
                                        seventhFormControlName : ['zeroReady',' partialReady ' ],
                                        sixth FormControlName : "FAILED",
                                        thirdFormControlName: true,
                                        [[Prototype]] : Object,
    */

  /* formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue : FormGroup = new FormGroup({
    'firstFormControlName': new FormControl(),
    'secondFormControlName': new FormControl(),
    'thirdFormControlName': new FormControl(),
    'fourthFormControlName': new FormControl(),
    'fifthFormControlName': new FormControl(),
    'sixthFormControlName': new FormControl(),
    'seventhFormControlName': new FormControl(),
    'eightthFormControlName': new FormControl(),
    'ninethFormControlName': new FormControl(),
  }) ; */


 /*  formGroupNameForFormBulderOnly : FormGroup = this.fb.group({
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
  formGroupNameForFormBulderOnlyForSetPurpous : FormGroup = this.fb.group({
    'firstFormControlName': new FormControl('vs'),
    'secondFormControlName': new FormControl("dadasa"),
    'thirdFormControlName': new FormControl(true),
    'fourthFormControlName': new FormControl(undefined),
    'fifthFormControlName': new FormControl("vip"),
    'sixthFormControlName': new FormControl("FAILED"),
    'seventhFormControlName': new FormControl(['zeroReady',' partialReady ' ]),
    'eightthFormControlName': new FormControl("tacos -2"),
    'ninethFormControlName': new FormControl(true),
  }) ; */
  formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue : FormGroup = this.fb.group({
    'firstFormControlName': new FormControl('', [  Validators.minLength(4),   Validators.required , Validators.maxLength(8)] ),
    'secondFormControlName': new FormControl('',  Validators.compose([Validators.minLength(4),   Validators.required , Validators.maxLength(8)]) ),
    'thirdFormControlName': new FormControl(),
    'fourthFormControlName': new FormControl(),
    'fifthFormControlName': new FormControl(),
    'sixthFormControlName': new FormControl(),
    'seventhFormControlName': new FormControl(),
    'eightthFormControlName': new FormControl(),
    'ninethFormControlName': new FormControl(),
  }) ;
  FormBulder : FormGroup = this.fb.group({
    'firstFormControlName': new FormControl('', [  Validators.minLength(4),   Validators.required , Validators.maxLength(8)] ),
    'secondFormControlName': new FormControl('',  Validators.compose([Validators.minLength(4),   Validators.required , Validators.maxLength(8)]) ),
    'thirdFormControlName': new FormControl(),
    'fourthFormControlName': new FormControl(),
    'fifthFormControlName': new FormControl(),
    'sixthFormControlName': new FormControl(),
    'seventhFormControlName': new FormControl(),
    'eightthFormControlName': new FormControl(),
    'ninethFormControlName': new FormControl(),
  }) ;



  FormBulder_for_formGroup : FormGroup = this.fb.group({
    'firstFormControlName': new FormControl('', [  Validators.minLength(4),   Validators.required , Validators.maxLength(8)] ),
    'secondFormControlName': new FormControl('',  Validators.compose([Validators.minLength(4),   Validators.required , Validators.maxLength(8)]) ),
    'thirdFormControlName': new FormControl(),
    'fourthFormControlName': new FormControl(),
    'fifthFormControlName': new FormControl(),
    'sixthFormControlName': new FormControl(),
    'seventhFormControlName': new FormControl(),
    'eightthFormControlName': new FormControl(),
    'ninethFormControlName': new FormControl(),
    // formArray_2 is the array of FormControl - simple form Array
    // formArray_2 is using in tempelate
    formArray_2 : this.fb.array([
      new FormControl('ARc'),
      new FormControl('tutorial')
    ]),
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


  formValueChanges(): void {
    
    console.log("value changed")
    // it tracks  valueChanges in full form
    // this.FormBulder.valueChanges.subscribe(data=>{
    //   console.log("this.FormBulder.valueChanges.subscribe     data " , data)
    // })

    // it tracks  valueChanges in  particular form control
    // this.FormBulder.get('firstFormControlName')?.valueChanges.subscribe((data: any)=>{
    //   console.log("this.FormBulder.get('firstFormControlName')?.valueChanges.subscribe     data " , data)
    // })

    // it tracks  statusChanges in full form
    this.FormBulder.statusChanges.subscribe(data=>{
      console.log("this.FormBulder.statusChanges.subscribe     data " , data)
    })

    // it tracks  statusChanges in  particular form control
    this.FormBulder.get('firstFormControlName')?.statusChanges.subscribe((data: any)=>{
      console.log("this.FormBulder.get('firstFormControlName')?.statusChanges.subscribe     data " , data)
    })
  }

  ngOnInit(): void {

    // it tracks  valueChanges in full form
    this.FormBulder.valueChanges.subscribe(data=>{
      console.log("this.FormBulder.valueChanges.subscribe     data " , data)
    })


    // it tracks  valueChanges in  particular form control
    this.FormBulder.get('firstFormControlName')?.valueChanges.subscribe((data: any)=>{
      console.log("this.FormBulder.get('firstFormControlName')?.valueChanges.subscribe     data " , data)
    })

    // it tracks  statusChanges in full form
    // this.FormBulder.statusChanges.subscribe(data=>{
    //   console.log("this.FormBulder.statusChanges.subscribe     data " , data)
    // })

    // it tracks  statusChanges in  particular form control
    // this.FormBulder.get('firstFormControlName')?.statusChanges.subscribe((data: any)=>{
    //   console.log("this.FormBulder.get('firstFormControlName')?.statusChanges.subscribe      data " , data)
    // })

    // formArray_1 is the array of FormControl - simple form Array
    // formArray_1 is not using in tempelate
    let formArray_1 = new FormArray([
      new FormControl('formControl_1_of_formArray_1'),
      new FormControl('formControl_2_of_formArray_1'),
    ]);

    console.log('formArray_1    :-    ',formArray_1)
    console.log('formArray_1.value    :-    ',formArray_1.value)


  }

  /* formGroupSubmitButtonForFormGroupOnly(){
    console.log('formGroupSubmitButtonForFormGroupOnly  :-    this.formGroupNameForFormGroupOnly.value :-  ',this.formGroupNameForFormGroupOnly.value)
    console.log('formGroupSubmitButtonForFormGroupOnly  :-    this.formGroupNameForFormGroupOnly :-  ',this.formGroupNameForFormGroupOnly)
    console.log('formGroupSubmitButtonForFormGroupOnly  :-    this.formGroupNameForFormGroupOnly.root.value :-  ',this.formGroupNameForFormGroupOnly.root.value)
  
    console.log("formGroupSubmitButtonForFormGroupOnly  firstFormControlName :-    this.formGroupNameForFormGroupOnly.get('firstFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnly.get('firstFormControlName')?.value)
    console.log("formGroupSubmitButtonForFormGroupOnly  secondFormControlName :-    this.formGroupNameForFormGroupOnly.get('secondFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnly.get('secondFormControlName')?.value)
    console.log("formGroupSubmitButtonForFormGroupOnly  thirdFormControlName :-    this.formGroupNameForFormGroupOnly.get('thirdFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnly.get('thirdFormControlName')?.value)
    console.log("formGroupSubmitButtonForFormGroupOnly  fourthFormControlName :-    this.formGroupNameForFormGroupOnly.get('fourthFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnly.get('fourthFormControlName')?.value)
    console.log("formGroupSubmitButtonForFormGroupOnly  fifthFormControlName :-    this.formGroupNameForFormGroupOnly.get('fifthFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnly.get('fifthFormControlName')?.value)
    console.log("formGroupSubmitButtonForFormGroupOnly  sixthFormControlName :-    this.formGroupNameForFormGroupOnly.get('sixthFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnly.get('sixthFormControlName')?.value)
    console.log("formGroupSubmitButtonForFormGroupOnly  seventhFormControlName :-    this.formGroupNameForFormGroupOnly.get('seventhFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnly.get('seventhFormControlName')?.value)
    console.log("formGroupSubmitButtonForFormGroupOnly  eightthFormControlName :-    this.formGroupNameForFormGroupOnly.get('eightthFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnly.get('eightthFormControlName')?.value)
    console.log("formGroupSubmitButtonForFormGroupOnly  ninethFormControlName :-    this.formGroupNameForFormGroupOnly.get('ninethFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnly.get('ninethFormControlName')?.value)
  }
  formGroupSubmitButtonForFormGroupOnlyForSetPurpous(){
    console.log('formGroupNameForFormGroupOnlyForSetPurpous  :-    this.formGroupNameForFormGroupOnlyForSetPurpous.value :-  ',this.formGroupNameForFormGroupOnlyForSetPurpous.value)
    console.log('formGroupNameForFormGroupOnlyForSetPurpous  :-    this.formGroupNameForFormGroupOnlyForSetPurpous :-  ',this.formGroupNameForFormGroupOnlyForSetPurpous)
    console.log('formGroupNameForFormGroupOnlyForSetPurpous  :-    this.formGroupNameForFormGroupOnlyForSetPurpous.root.value :-  ',this.formGroupNameForFormGroupOnlyForSetPurpous.root.value)

    console.log("formGroupNameForFormGroupOnlyForSetPurpous  firstFormControlName :-    this.formGroupNameForFormGroupOnlyForSetPurpous.get('firstFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnlyForSetPurpous.get('firstFormControlName')?.value)
    console.log("formGroupNameForFormGroupOnlyForSetPurpous  secondFormControlName :-    this.formGroupNameForFormGroupOnlyForSetPurpous.get('secondFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnlyForSetPurpous.get('secondFormControlName')?.value)
    console.log("formGroupNameForFormGroupOnlyForSetPurpous  thirdFormControlName :-    this.formGroupNameForFormGroupOnlyForSetPurpous.get('thirdFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnlyForSetPurpous.get('thirdFormControlName')?.value)
    console.log("formGroupNameForFormGroupOnlyForSetPurpous  fourthFormControlName :-    this.formGroupNameForFormGroupOnlyForSetPurpous.get('fourthFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnlyForSetPurpous.get('fourthFormControlName')?.value)
    console.log("formGroupNameForFormGroupOnlyForSetPurpous  fifthFormControlName :-    this.formGroupNameForFormGroupOnlyForSetPurpous.get('fifthFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnlyForSetPurpous.get('fifthFormControlName')?.value)
    console.log("formGroupNameForFormGroupOnlyForSetPurpous  sixthFormControlName :-    this.formGroupNameForFormGroupOnlyForSetPurpous.get('sixthFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnlyForSetPurpous.get('sixthFormControlName')?.value)
    console.log("formGroupNameForFormGroupOnlyForSetPurpous  seventhFormControlName :-    this.formGroupNameForFormGroupOnlyForSetPurpous.get('seventhFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnlyForSetPurpous.get('seventhFormControlName')?.value)
    console.log("formGroupNameForFormGroupOnlyForSetPurpous  eightthFormControlName :-    this.formGroupNameForFormGroupOnlyForSetPurpous.get('eightthFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnlyForSetPurpous.get('eightthFormControlName')?.value)
    console.log("formGroupNameForFormGroupOnlyForSetPurpous  ninethFormControlName :-    this.formGroupNameForFormGroupOnlyForSetPurpous.get('ninethFormControlName')?.value :-  ", this.formGroupNameForFormGroupOnlyForSetPurpous.get('ninethFormControlName')?.value)
  }

  formGroupSubmitButtonForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue(){
    console.log('formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue  :-    this.formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue.value :-  ',this.formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue.value)
    console.log('formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue  :-    this.formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue :-  ',this.formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue)
    console.log('formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue  :-    this.formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue.root.value :-  ',this.formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue.root.value)
  }
  SetValueForFormGroupOnly(){
    let settObj : any =   {
                    'firstFormControlName'  : 'vs',
                    'secondFormControlName' : "dadasa",
                    'thirdFormControlName'  : true,
                    'fourthFormControlName' : true,
                    'fifthFormControlName'  : "vip",
                    'sixthFormControlName'  : "FAILED",
                    'seventhFormControlName': ['zeroReady',' partialReady ' ],
                    'eightthFormControlName': "tacos -2",
                    'ninethFormControlName' : true,
                  };
                  
    this.formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue.setValue(settObj);

    console.log('formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue  :-    this.formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue.value :-  ',this.formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue.value)
    console.log('formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue  :-    this.formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue :-  ',this.formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue)
    console.log('formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue  :-    this.formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue.root.value :-  ',this.formGroupNameForFormGroupOnlyForSetPurpousWithTheHelpOfSetValue.root.value)
  }

 */

/* 

  formGroupSubmitButtonForFormBulderOnly(){
    console.log('formGroupSubmitButtonForFormBulderOnly  :-    this.formGroupNameForFormBulderOnly.value :-  ',this.formGroupNameForFormBulderOnly.value)
    console.log('formGroupSubmitButtonForFormBulderOnly  :-    this.formGroupNameForFormBulderOnly :-  ',this.formGroupNameForFormBulderOnly)
    console.log('formGroupSubmitButtonForFormBulderOnly  :-    this.formGroupNameForFormBulderOnly.root.value :-  ',this.formGroupNameForFormBulderOnly.root.value)

    console.log("formGroupSubmitButtonForFormBulderOnly  firstFormControlName :-    this.formGroupNameForFormBulderOnly.get('firstFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnly.get('firstFormControlName')?.value)
    console.log("formGroupSubmitButtonForFormBulderOnly  secondFormControlName :-    this.formGroupNameForFormBulderOnly.get('secondFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnly.get('secondFormControlName')?.value)
    console.log("formGroupSubmitButtonForFormBulderOnly  thirdFormControlName :-    this.formGroupNameForFormBulderOnly.get('thirdFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnly.get('thirdFormControlName')?.value)
    console.log("formGroupSubmitButtonForFormBulderOnly  fourthFormControlName :-    this.formGroupNameForFormBulderOnly.get('fourthFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnly.get('fourthFormControlName')?.value)
    console.log("formGroupSubmitButtonForFormBulderOnly  fifthFormControlName :-    this.formGroupNameForFormBulderOnly.get('fifthFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnly.get('fifthFormControlName')?.value)
    console.log("formGroupSubmitButtonForFormBulderOnly  sixthFormControlName :-    this.formGroupNameForFormBulderOnly.get('sixthFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnly.get('sixthFormControlName')?.value)
    console.log("formGroupSubmitButtonForFormBulderOnly  seventhFormControlName :-    this.formGroupNameForFormBulderOnly.get('seventhFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnly.get('seventhFormControlName')?.value)
    console.log("formGroupSubmitButtonForFormBulderOnly  eightthFormControlName :-    this.formGroupNameForFormBulderOnly.get('eightthFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnly.get('eightthFormControlName')?.value)
    console.log("formGroupSubmitButtonForFormBulderOnly  ninethFormControlName :-    this.formGroupNameForFormBulderOnly.get('ninethFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnly.get('ninethFormControlName')?.value)

  }
  formGroupSubmitButtonForFormBulderOnlyForSetPurpous(){
    console.log('formGroupNameForFormBulderOnlyForSetPurpous  :-    this.formGroupNameForFormBulderOnlyForSetPurpous.value :-  ',this.formGroupNameForFormBulderOnlyForSetPurpous.value)
    console.log('formGroupNameForFormBulderOnlyForSetPurpous  :-    this.formGroupNameForFormBulderOnlyForSetPurpous :-  ',this.formGroupNameForFormBulderOnlyForSetPurpous)
    console.log('formGroupNameForFormBulderOnlyForSetPurpous  :-    this.formGroupNameForFormBulderOnlyForSetPurpous.root.value :-  ',this.formGroupNameForFormBulderOnlyForSetPurpous.root.value)

    console.log("formGroupNameForFormBulderOnlyForSetPurpous  firstFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpous.get('firstFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpous.get('firstFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpous  secondFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpous.get('secondFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpous.get('secondFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpous  thirdFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpous.get('thirdFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpous.get('thirdFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpous  fourthFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpous.get('fourthFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpous.get('fourthFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpous  fifthFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpous.get('fifthFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpous.get('fifthFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpous  sixthFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpous.get('sixthFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpous.get('sixthFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpous  seventhFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpous.get('seventhFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpous.get('seventhFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpous  eightthFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpous.get('eightthFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpous.get('eightthFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpous  ninethFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpous.get('ninethFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpous.get('ninethFormControlName')?.value)

  }
 */

  /* formGroupSubmitButtonForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue(){

    // to check form is valid or not
    console.log("this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.valid   :-  ",this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.valid)
    // if this.formGroupName.valid return true then form is valid
    // if this.formGroupName.valid return false then form is invalid

    console.log('formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.value :-  ',this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.value)
    console.log('formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue :-  ',this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue)
    console.log('formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.root.value :-  ',this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.root.value)

    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  only  get('FormControlName')  :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('firstFormControlName') :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('firstFormControlName'))
    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  firstFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('firstFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('firstFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  secondFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('secondFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('secondFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  thirdFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('thirdFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('thirdFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  fourthFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('fourthFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('fourthFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  fifthFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('fifthFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('fifthFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  sixthFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('sixthFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('sixthFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  seventhFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('seventhFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('seventhFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  eightthFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('eightthFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('eightthFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  ninethFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('ninethFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('ninethFormControlName')?.value)
    


    // all below will be return boolean , you can validate with the help of  'valid, invalid, pending, pristine, dirty, touched, untouched' in if-condition
    console.log("this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.valid   :-  ",this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.valid)
    console.log("this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.invalid   :-  ",this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.invalid)
    console.log("this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.pending   :-  ",this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.pending)
    console.log("this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.pristine   :-  ",this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.pristine)
    console.log("this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.dirty   :-  ",this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.dirty)
    console.log("this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.touched   :-  ",this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.touched)
    console.log("this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.untouched   :-  ",this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.untouched)

  
  }
  SetValueForFormBulderOnly(){

    let settObj : any =   {
      'firstFormControlName'  : 'vs',
      'secondFormControlName' : "dadasa",
      'thirdFormControlName'  : true,
      'fourthFormControlName' : true,
      'fifthFormControlName'  : "vip",
      'sixthFormControlName'  : "FAILED",
      'seventhFormControlName': ['zeroReady',' partialReady ' ],
      'eightthFormControlName': "tacos -2",
      'ninethFormControlName' : true,
    };

    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.setValue(settObj);
    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.patchValue(settObj);
   
    console.log('formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.value :-  ',this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.value)
    console.log('formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue :-  ',this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue)
    console.log('formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.root.value :-  ',this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.root.value)

    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  firstFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('firstFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('firstFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  secondFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('secondFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('secondFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  thirdFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('thirdFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('thirdFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  fourthFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('fourthFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('fourthFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  fifthFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('fifthFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('fifthFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  sixthFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('sixthFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('sixthFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  seventhFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('seventhFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('seventhFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  eightthFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('eightthFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('eightthFormControlName')?.value)
    console.log("formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue  ninethFormControlName :-    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('ninethFormControlName')?.value :-  ", this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('ninethFormControlName')?.value)


  } */



  // formSubmitButton(){

  //   // to check form is valid or not
  //   console.log("this.FormBulder.valid   :-  ",this.FormBulder.valid)
  //   // if this.formGroupName.valid return true then form is valid
  //   // if this.formGroupName.valid return false then form is invalid

  //   console.log('FormBulder  :-    this.FormBulder.value :-  ',this.FormBulder.value)
  //   console.log('FormBulder  :-    this.FormBulder :-  ',this.FormBulder)
  //   console.log('FormBulder  :-    this.FormBulder.root.value :-  ',this.FormBulder.root.value)

  //   console.log("FormBulder  only  get('FormControlName')  :-    this.FormBulder.get('firstFormControlName') :-  ", this.FormBulder.get('firstFormControlName'))
  //   console.log("FormBulder  firstFormControlName :-    this.FormBulder.get('firstFormControlName')?.value :-  ", this.FormBulder.get('firstFormControlName')?.value)
  //   console.log("FormBulder  secondFormControlName :-    this.FormBulder.get('secondFormControlName')?.value :-  ", this.FormBulder.get('secondFormControlName')?.value)
  //   console.log("FormBulder  thirdFormControlName :-    this.FormBulder.get('thirdFormControlName')?.value :-  ", this.FormBulder.get('thirdFormControlName')?.value)
  //   console.log("FormBulder  fourthFormControlName :-    this.FormBulder.get('fourthFormControlName')?.value :-  ", this.FormBulder.get('fourthFormControlName')?.value)
  //   console.log("FormBulder  fifthFormControlName :-    this.FormBulder.get('fifthFormControlName')?.value :-  ", this.FormBulder.get('fifthFormControlName')?.value)
  //   console.log("FormBulder  sixthFormControlName :-    this.FormBulder.get('sixthFormControlName')?.value :-  ", this.FormBulder.get('sixthFormControlName')?.value)
  //   console.log("FormBulder  seventhFormControlName :-    this.FormBulder.get('seventhFormControlName')?.value :-  ", this.FormBulder.get('seventhFormControlName')?.value)
  //   console.log("FormBulder  eightthFormControlName :-    this.FormBulder.get('eightthFormControlName')?.value :-  ", this.FormBulder.get('eightthFormControlName')?.value)
  //   console.log("FormBulder  ninethFormControlName :-    this.FormBulder.get('ninethFormControlName')?.value :-  ", this.FormBulder.get('ninethFormControlName')?.value)
    


  //   // all below will be return boolean , you can validate with the help of  'valid, invalid, pending, pristine, dirty, touched, untouched' in if-condition
  //   console.log("this.FormBulder.valid   :-  ",this.FormBulder.valid)
  //   console.log("this.FormBulder.invalid   :-  ",this.FormBulder.invalid)
  //   console.log("this.FormBulder.pending   :-  ",this.FormBulder.pending)
  //   console.log("this.FormBulder.pristine   :-  ",this.FormBulder.pristine)
  //   console.log("this.FormBulder.dirty   :-  ",this.FormBulder.dirty)
  //   console.log("this.FormBulder.touched   :-  ",this.FormBulder.touched)
  //   console.log("this.FormBulder.untouched   :-  ",this.FormBulder.untouched)

  
  // }
 /*  formSubmitButtonWithoutNgSubmit(){

    // to check form is valid or not
    console.log("this.FormBulder.valid   :-  ",this.FormBulder.valid)
    // if this.formGroupName.valid return true then form is valid
    // if this.formGroupName.valid return false then form is invalid

    console.log('FormBulder  :-    this.FormBulder.value :-  ',this.FormBulder.value)
    console.log('FormBulder  :-    this.FormBulder :-  ',this.FormBulder)
    console.log('FormBulder  :-    this.FormBulder.root.value :-  ',this.FormBulder.root.value)

    console.log("FormBulder  only  get('FormControlName')  :-    this.FormBulder.get('firstFormControlName') :-  ", this.FormBulder.get('firstFormControlName'))
    console.log("FormBulder  firstFormControlName :-    this.FormBulder.get('firstFormControlName')?.value :-  ", this.FormBulder.get('firstFormControlName')?.value)
    console.log("FormBulder  secondFormControlName :-    this.FormBulder.get('secondFormControlName')?.value :-  ", this.FormBulder.get('secondFormControlName')?.value)
    console.log("FormBulder  thirdFormControlName :-    this.FormBulder.get('thirdFormControlName')?.value :-  ", this.FormBulder.get('thirdFormControlName')?.value)
    console.log("FormBulder  fourthFormControlName :-    this.FormBulder.get('fourthFormControlName')?.value :-  ", this.FormBulder.get('fourthFormControlName')?.value)
    console.log("FormBulder  fifthFormControlName :-    this.FormBulder.get('fifthFormControlName')?.value :-  ", this.FormBulder.get('fifthFormControlName')?.value)
    console.log("FormBulder  sixthFormControlName :-    this.FormBulder.get('sixthFormControlName')?.value :-  ", this.FormBulder.get('sixthFormControlName')?.value)
    console.log("FormBulder  seventhFormControlName :-    this.FormBulder.get('seventhFormControlName')?.value :-  ", this.FormBulder.get('seventhFormControlName')?.value)
    console.log("FormBulder  eightthFormControlName :-    this.FormBulder.get('eightthFormControlName')?.value :-  ", this.FormBulder.get('eightthFormControlName')?.value)
    console.log("FormBulder  ninethFormControlName :-    this.FormBulder.get('ninethFormControlName')?.value :-  ", this.FormBulder.get('ninethFormControlName')?.value)
    


    // all below will be return boolean , you can validate with the help of  'valid, invalid, pending, pristine, dirty, touched, untouched' in if-condition
    console.log("this.FormBulder.valid   :-  ",this.FormBulder.valid)
    console.log("this.FormBulder.invalid   :-  ",this.FormBulder.invalid)
    console.log("this.FormBulder.pending   :-  ",this.FormBulder.pending)
    console.log("this.FormBulder.pristine   :-  ",this.FormBulder.pristine)
    console.log("this.FormBulder.dirty   :-  ",this.FormBulder.dirty)
    console.log("this.FormBulder.touched   :-  ",this.FormBulder.touched)
    console.log("this.FormBulder.untouched   :-  ",this.FormBulder.untouched)

  
  } */


  /* // formSubmitButtonWithNgSubmit(){
  formSubmitButtonWithNgSubmit(FormBulder: { value: any; }){
    console.log("FormBulder.form.value  :-  ",FormBulder.value)
    // to check form is valid or not
    console.log("this.FormBulder.valid   :-  ",this.FormBulder.valid)
    // if this.formGroupName.valid return true then form is valid
    // if this.formGroupName.valid return false then form is invalid

    console.log('FormBulder  :-    this.FormBulder.value :-  ',this.FormBulder.value)
    console.log('FormBulder  :-    this.FormBulder :-  ',this.FormBulder)
    console.log('FormBulder  :-    this.FormBulder.root.value :-  ',this.FormBulder.root.value)

    console.log("FormBulder  only  get('FormControlName')  :-    this.FormBulder.get('firstFormControlName') :-  ", this.FormBulder.get('firstFormControlName'))
    console.log("FormBulder  firstFormControlName :-    this.FormBulder.get('firstFormControlName')?.value :-  ", this.FormBulder.get('firstFormControlName')?.value)
    console.log("FormBulder  secondFormControlName :-    this.FormBulder.get('secondFormControlName')?.value :-  ", this.FormBulder.get('secondFormControlName')?.value)
    console.log("FormBulder  thirdFormControlName :-    this.FormBulder.get('thirdFormControlName')?.value :-  ", this.FormBulder.get('thirdFormControlName')?.value)
    console.log("FormBulder  fourthFormControlName :-    this.FormBulder.get('fourthFormControlName')?.value :-  ", this.FormBulder.get('fourthFormControlName')?.value)
    console.log("FormBulder  fifthFormControlName :-    this.FormBulder.get('fifthFormControlName')?.value :-  ", this.FormBulder.get('fifthFormControlName')?.value)
    console.log("FormBulder  sixthFormControlName :-    this.FormBulder.get('sixthFormControlName')?.value :-  ", this.FormBulder.get('sixthFormControlName')?.value)
    console.log("FormBulder  seventhFormControlName :-    this.FormBulder.get('seventhFormControlName')?.value :-  ", this.FormBulder.get('seventhFormControlName')?.value)
    console.log("FormBulder  eightthFormControlName :-    this.FormBulder.get('eightthFormControlName')?.value :-  ", this.FormBulder.get('eightthFormControlName')?.value)
    console.log("FormBulder  ninethFormControlName :-    this.FormBulder.get('ninethFormControlName')?.value :-  ", this.FormBulder.get('ninethFormControlName')?.value)
    


    // all below will be return boolean , you can validate with the help of  'valid, invalid, pending, pristine, dirty, touched, untouched' in if-condition
    console.log("this.FormBulder.valid   :-  ",this.FormBulder.valid)
    console.log("this.FormBulder.invalid   :-  ",this.FormBulder.invalid)
    console.log("this.FormBulder.pending   :-  ",this.FormBulder.pending)
    console.log("this.FormBulder.pristine   :-  ",this.FormBulder.pristine)
    console.log("this.FormBulder.dirty   :-  ",this.FormBulder.dirty)
    console.log("this.FormBulder.touched   :-  ",this.FormBulder.touched)
    console.log("this.FormBulder.untouched   :-  ",this.FormBulder.untouched)

    // after submitting then resetted form
    // this.FormBulder.reset()
  
  } */


  form_Submit_Button_With_NgSubmit_FormArray(FormBulder_for_formArray: { value: any; }){
    console.log("FormBulder_for_formArray.form.value  :-  ",FormBulder_for_formArray.value)
    // to check form is valid or not
    console.log("this.FormBulder_for_formArray.valid   :-  ",this.FormBulder_for_formGroup.valid)
    // if this.formGroupName.valid return true then form is valid
    // if this.formGroupName.valid return false then form is invalid

    console.log('FormBulder_for_formArray  :-    this.FormBulder_for_formArray.value :-  ',this.FormBulder_for_formGroup.value)
    console.log('FormBulder_for_formArray  :-    this.FormBulder_for_formArray :-  ',this.FormBulder_for_formGroup)
    console.log('FormBulder_for_formArray  :-    this.FormBulder_for_formArray.root.value :-  ',this.FormBulder_for_formGroup.root.value)

    console.log("FormBulder_for_formArray  only  get('FormControlName')  :-    this.FormBulder_for_formArray.get('firstFormControlName') :-  ", this.FormBulder_for_formGroup.get('firstFormControlName'))
    console.log("FormBulder_for_formArray  firstFormControlName :-    this.FormBulder_for_formArray.get('firstFormControlName')?.value :-  ", this.FormBulder_for_formGroup.get('firstFormControlName')?.value)
    console.log("FormBuFormBulder_for_formArraylder  secondFormControlName :-    this.FormBulder_for_formArray.get('secondFormControlName')?.value :-  ", this.FormBulder_for_formGroup.get('secondFormControlName')?.value)
    console.log("FormBulder_for_formArray  thirdFormControlName :-    this.FormBulder_for_formArray.get('thirdFormControlName')?.value :-  ", this.FormBulder_for_formGroup.get('thirdFormControlName')?.value)
    console.log("FormBulder_for_formArray  fourthFormControlName :-    this.FormBulder_for_formArray.get('fourthFormControlName')?.value :-  ", this.FormBulder_for_formGroup.get('fourthFormControlName')?.value)
    console.log("FormBulder_for_formArray  fifthFormControlName :-    this.FormBulder_for_formArray.get('fifthFormControlName')?.value :-  ", this.FormBulder_for_formGroup.get('fifthFormControlName')?.value)
    console.log("FormBulder_for_formArray  sixthFormControlName :-    this.FormBulder_for_formArray.get('sixthFormControlName')?.value :-  ", this.FormBulder_for_formGroup.get('sixthFormControlName')?.value)
    console.log("FormBulder_for_formArray  seventhFormControlName :-    this.FormBulder_for_formArray.get('seventhFormControlName')?.value :-  ", this.FormBulder_for_formGroup.get('seventhFormControlName')?.value)
    console.log("FormBulder_for_formArray  eightthFormControlName :-    this.FormBulder_for_formArray.get('eightthFormControlName')?.value :-  ", this.FormBulder_for_formGroup.get('eightthFormControlName')?.value)
    console.log("FormBulder_for_formArray  ninethFormControlName :-    this.FormBulder_for_formArray.get('ninethFormControlName')?.value :-  ", this.FormBulder_for_formGroup.get('ninethFormControlName')?.value)
    


    // all below will be return boolean , you can validate with the help of  'valid, invalid, pending, pristine, dirty, touched, untouched' in if-condition
    console.log("this.FormBulder_for_formArray.valid   :-  ",this.FormBulder_for_formGroup.valid)
    console.log("this.FormBulder_for_formArray.invalid   :-  ",this.FormBulder_for_formGroup.invalid)
    console.log("this.FormBulder_for_formArray.pending   :-  ",this.FormBulder_for_formGroup.pending)
    console.log("this.FormBulder_for_formArray.pristine   :-  ",this.FormBulder_for_formGroup.pristine)
    console.log("this.FormBulder_for_formArray.dirty   :-  ",this.FormBulder_for_formGroup.dirty)
    console.log("this.FormBulder_for_formArray.touched   :-  ",this.FormBulder_for_formGroup.touched)
    console.log("this.FormBulder_for_formArray.untouched   :-  ",this.FormBulder_for_formGroup.untouched)

    // after submitting then resetted form
    // this.FormBulder_for_formArray.reset()
  
  }


  SetValueButton(){
    let settObj : any =   {
      'firstFormControlName'  : 'vs',
      'secondFormControlName' : "dadasa",
      'thirdFormControlName'  : true,
      'fourthFormControlName' : true,
      'fifthFormControlName'  : "vip",
      'sixthFormControlName'  : "FAILED",
      'seventhFormControlName': ['zeroReady',' partialReady ' ],
      'eightthFormControlName': "tacos -2",
      'ninethFormControlName' : true,
    };

    // this.FormBulder.setValue(settObj);
    this.FormBulder.patchValue(settObj);
   
    // console.log('FormBulder  :-    this.FormBulder.value :-  ',this.FormBulder.value)
    // console.log('FormBulder  :-    this.FormBulder :-  ',this.FormBulder)
    // console.log('FormBulder  :-    this.FormBulder.root.value :-  ',this.FormBulder.root.value)

    // console.log("FormBulder  firstFormControlName :-    this.FormBulder.get('firstFormControlName')?.value :-  ", this.FormBulder.get('firstFormControlName')?.value)
    // console.log("FormBulder  secondFormControlName :-    this.FormBulder.get('secondFormControlName')?.value :-  ", this.FormBulder.get('secondFormControlName')?.value)
    // console.log("FormBulder  thirdFormControlName :-    this.FormBulder.get('thirdFormControlName')?.value :-  ", this.FormBulder.get('thirdFormControlName')?.value)
    // console.log("FormBulder  fourthFormControlName :-    this.FormBulder.get('fourthFormControlName')?.value :-  ", this.FormBulder.get('fourthFormControlName')?.value)
    // console.log("FormBulder  fifthFormControlName :-    this.FormBulder.get('fifthFormControlName')?.value :-  ", this.FormBulder.get('fifthFormControlName')?.value)
    // console.log("FormBulder  sixthFormControlName :-    this.FormBulder.get('sixthFormControlName')?.value :-  ", this.FormBulder.get('sixthFormControlName')?.value)
    // console.log("FormBulder  seventhFormControlName :-    this.FormBulder.get('seventhFormControlName')?.value :-  ", this.FormBulder.get('seventhFormControlName')?.value)
    // console.log("FormBulder  eightthFormControlName :-    this.FormBulder.get('eightthFormControlName')?.value :-  ", this.FormBulder.get('eightthFormControlName')?.value)
    // console.log("FormBulder  ninethFormControlName :-    this.FormBulder.get('ninethFormControlName')?.value :-  ", this.FormBulder.get('ninethFormControlName')?.value)


  }

  resetForm(){
    this.FormBulder.reset();
  }

}


