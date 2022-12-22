import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  userInfoSignIn : FormGroup = this.formBuilder.group({
    'MobileNumber' : new FormControl(null,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    /* 
    At least 8 - 16 characters,
    must contain at least 1 uppercase letter,
    must contain at least 1 lowercase letter,
    and 1 number
    Can contain any of this special characters $ % # * & - .
    */
    'FirstPassword' : new FormControl("",[Validators.required,]),
  })
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  onSignIn(){
    console.log(this.userInfoSignIn.value)
  }

}
