import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  title = 'tdf';
  topics = ['Angular','React','Vue'];

  userModel = new User( 'name1','name2','name3','name4','name5','name6');

  inputValue2_With_ngModelGroup:any;
  inputValue4_With_ngModelGroup:any;
  inputValue1_Without_ngModelGroup:any;
  inputValue3_Without_ngModelGroup:any;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(userForm: any){
    console.log('userForm     :-  ',userForm)
    console.log('userForm.value     :-  ',userForm.value)
  }
  formSubmitButton(userForm: any){
    console.log('userForm     :-  ',userForm)
    console.log('userForm.value     :-  ',userForm.value)
  }
  submitFormFunctionName(userForm: any){
    console.log('userForm     :-  ',userForm)
    console.log('userForm.value     :-  ',userForm.value)
  }

  resetForm(formsValue: NgForm){
    formsValue.resetForm();
  }
  setForm(formsValue: NgForm){
    let setObj={
      ngModel_Group_Name : {
        'inputName1_With_ngModelGroup':'Value_Here',
        'inputName2_With_ngModelGroup':'Value_Here',
        'inputName3_With_ngModelGroup':'Value_Here',
        'inputName4_With_ngModelGroup':'Value_Here',
      },
      'inputName1_Without_ngModelGroup':'Value_Here',
      'inputName2_Without_ngModelGroup':'Value_Here',
      'inputName3_Without_ngModelGroup':'Value_Here',
      'inputName4_Without_ngModelGroup':'Value_Here'
    };

    formsValue.setValue(setObj);

    console.log('userForm.value     :-  ',formsValue.value)


  }

}


export class User {
  constructor(
      public name1: string,
      public name2: string,
      public name3: string,
      public name4: string,
      public name5: string,
      public name6: string,
      
  ) { }



}



/* 
userForm.value | json :- 
userForm.value | json :- {
                            "useOfWithUserModel":{
                                "userNameWithngModelGroupAndWithUserModel":"Rob",
                                "userEmailWithngModelGroupAndWithUserModel":"rob@test.com",
                                "userPhoneWithngModelGroupAndWithUserModel":5556665566,
                                "topicWithngModelGroupAndWithUserModel":"",
                                "timepreferenceWithngModelGroupAndWithUserModel":"morning",
                                "timePreferenceWithngModelGroupAndWithUserModel":"morning",
                                "subscribeWithngModelGroupAndWithUserModel":true
                            },
                            "useOfWithoutUserModel":{
                                "userNameWithngModelGroupAndWithoutUserModel":"",
                                "userEmailWithngModelGroupAndWithoutUserModel":"",
                                "userPhoneWithngModelGroupAndWithoutUserModel":"",
                                "topicWithngModelGroupAndWithoutUserModel":"",
                                "timepreferenceWithngModelGroupAndWithoutUserModel":"",
                                "timePreferenceWithngModelGroupAndWithoutUserModel":"",
                                "subscribeWithngModelGroupAndWithoutUserModel":""
                            },
                            "userNameWithoutngModelGroup":"",
                            "userEmailWithoutngModelGroup":"",
                            "userPhoneWithoutngModelGroup":"",
                            "topicWithoutngModelGroup":"",
                            "timepreferenceWithoutngModelGroup":"",
                            "timePreferenceWithoutngModelGroup":"",
                            "subscribeWithoutngModelGroup":""
                          }

*/


