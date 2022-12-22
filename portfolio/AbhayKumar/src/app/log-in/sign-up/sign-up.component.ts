import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUPComponent implements OnInit {

  userInfoSignUp : FormGroup = this.formBuilder.group({
    'FirstName' : new FormControl(null, [Validators.required, contentValidatorText]), // null is similar as ""
    'LastName' : new FormControl("", [Validators.required, contentValidatorText]),
    'MobileNumber' : new FormControl(null,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    'EmailId' : new FormControl("",[Validators.required,]),
    /* 
    At least 8 - 16 characters,
    must contain at least 1 uppercase letter,
    must contain at least 1 lowercase letter,
    and 1 number
    Can contain any of this special characters $ % # * & - .
    */
    'FirstPassword' : new FormControl("",[Validators.required,]),
    'ConfirmPassword' : new FormControl(),
  })
// ^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\#\$\.\%\&\*])(?=.*[a-zA-Z]).{8,16}$
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  onSignUp(){
    console.log(this.userInfoSignUp.value)
  }
}

export function contentValidatorText(control: AbstractControl) {
  if(control?.value!==""&&control?.value?.trim()===""){
    return {invalidContent: true};
  }
  return null;
}
// export function contentValidatorPhoneNumber(control: AbstractControl) {
//   // console.log("control.value.length" , control.value.length)
//   if(control?.value?.length==10){
//     return {invalidContent: false};
//   }
//   return null
// }
