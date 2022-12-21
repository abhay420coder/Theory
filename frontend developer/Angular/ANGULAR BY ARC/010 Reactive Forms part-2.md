# Topic

60. Reactive Forms Complete Tutorial
61. Reactive Forms. FormGroup, FormControl For Beginners| Angular 10 Tutorial
62. Reactive Forms. FormBuilder
63. Reactive Forms. Set Form Values
64. Reactive Forms. Read Form Values
65. Reactive Forms Validations
66. Reactive Forms State and Validations
67. Reactive Forms Reset Example
68. Reactive Forms Value Changes
69. Reactive Forms State Changes
70. Reactive Forms. FormArray
71. Reactive Forms Add Remove FormControl
72. Component Communication Tutorial
73. Angular Material Design Layout Tutorial | Angular Layout Template Tutorial | Angular Starter Project

# Reactive Forms. Read Form Values

## Reactive Forms. Read Form Values by ARC

### Reactive Forms - Introduction

* **Reactive Forms are a way to create Forms** in Angular application
* What's different is how we implement, design and handle the form and the data
* All the form elements, user interactions and validations are handled in the component class
* We will make use of Angular's built in **formGroup** and **formControI**
* Using Reactive Forms we can control better data binding
* Exclusive define custom regular expression patterns of error handling
* We will need to import **ReactiveFormsModuIe** in our app module
> * Very flexible and allows users to define, develop complex requirements of forms
> * More logic in the component class and less in HTML mark up itself
* Angular maintains the state information of forms at all times
  * ng-touched
  * ng-untouched
  * ng-dirty
  * ng-pristine
  * ng-valid
  * ng-invalid

### Just Remember 3 important things in Reactive Forms

* FormControI
* FormGroup
* FormBuiIder

* `formControlName = "key"`   is manadatory for every   `input`,`select`&`option`,`textarea`,etc
* basically we are writing  `formControlName` instead of `name` attribute.

### Reactive Forms in 6 simple Steps

* We will learn and do hands-on exampels of the 6 simple steps

### How to use Reactive Forms

#### Step #1 — Import and Add in the ReactiveFormsModuIe in the app.module.ts

* For template driven forms — `ReactiveFormsModuIe` needs to be imported
* **If we do NOT import this — we will get error**
* Add the module into the array list of imports

#### Step #2 — Create the form in app.component.html

* `FormGroup`
  * We need to use the directive `FormGroup` for the entire form and give it a name
* `formControIName`
  * Every form field should have a "`formControlName`" attribute
  * basically we are writing  `formControlName` instead of `name` attribute of all `input`.
  


####  Step #3 — Create the form in app.component.html -

```html
<form [formGroup]="registerForm" (ngSubmit)="postData()">
    <input type="text" formControlName="firstname">
    <input type="text" formControlName="lastname">
    <input type="text" formControlName="email">
    <input type="submit" value="Post Data" [disabled]="!registerForm.valid">
</form>
```

#### Step #4 — In the component class — import the required modules

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators} from '@angular/forms';
```

#### Step #5 — Inject the FormBuiIder in the constructor

```ts
constructor(private formBuilder: FormBuilder)
```

#### Step #6 — Create the form instance

```ts
this.registerForm = formBuilder.group({
firstname: new FormControl(),
lastname: new FormControl()
})
```

### Setting values in Reactive Forms

#### Set the value of entire form in one go

```ts
this.formGroupName = new FormGroup({
                                          'FormControlName1' : new FormControl('Value Here'),
                                          'FormControlName2': new FormControl(('Value Here'),
                                          'FormControlName3': new FormControl(('Value Here')
                                    })
```

#### Setting the form values using `setValue`

```ts
const SetObj = {
                    FormControlName1 : 'Value Here',
                    FormControlName2: 'Value Here',
                    FormControlName3: 'Value Here'
                }
this.formGroupName.setValue(SetObj);
```


### Read Reactive Form Values

1. Get Value of Entire Form
   * `this.formGroupName.value`
   * `this.formGroupName.root.value`
2. Get Entire Form Object
   * `this.formGroupName`
3. Get Values of specific Form Control
   * `this.formGroupName.get('formControlName').value;`
   * `this.formGroupName.get('formControlName')?.value;` // if you get "Object is possibly 'null'" as error
4. Get values on changes
   * `this.formGroupName.valueChanges`
### syntax

**in html file**

```html
<form [formGroup]="formGroupName">
    <div><input type="text" formControlName="FormControlName1"></div>
    <div><input type="number" formControlName="FormControlName2"></div>
    <div><input type="date" formControlName="FormControlName3"></div>
    <!--  formControlName = "key"   is manadatory for every   input,select&option,textarea,etc -->
    <!-- basically we are writing  formControlName instead of name attribute -->

    <div><button (click)="formGroupSubmitButton()">Submit Button Name</button></div>
    <div><button (click)="setForm()">Set Form</button></div>
</form>
```

**in ts file**

```ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {


// reactive form creation
// method-1
//  this FormGroup is created with the help of  FormGroup constructor
  formGroupName : FormGroup = new FormGroup({
    'FormControlName1': new FormControl(),
    'FormControlName2': new FormControl(),
    'FormControlName3': new FormControl(),
  }) ;

// method-2
//  this FormGroup is created with the help of  FormBuilder
  formGroupName : FormGroup = this.formBuilder.group({
    'FormControlName1': new FormControl(),
    'FormControlName2': new FormControl(),
    'FormControlName3': new FormControl(),
  }) ;





// set value in reactive form
// method-1 
//  SetValue  in reactive Form by formControl Constructor- FormGroup constructor method
formGroupName : FormGroup = new FormGroup({
                                          'FormControlName1' : new FormControl('Value Here'),
                                          'FormControlName2' : new FormControl('Value Here'),
                                          'FormControlName3' : new FormControl('Value Here')
                                    })
// method-2 
//  SetValue  in reactive Form by formControl Constructor- FormBuilder method
formGroupName : FormGroup = this.formBuilder.group({
                                          'FormControlName1' : new FormControl('Value Here'),
                                          'FormControlName2' : new FormControl('Value Here'),
                                          'FormControlName3' : new FormControl('Value Here')
                                    })
// method-3 
// SetValue  in reactive Form by set method - FormBuilder method & FormGroup constructor method
setForm() {
    let SetObj :any = {
      'FormControlName1' : 'Value Here',
      'FormControlName2' : 'Value Here',
      'FormControlName3' : 'Value Here'
    };
    this.formGroupName.setValue(SetObj);
  }



  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {}





  formGroupSubmitButton(){

    // Get Value of Entire Form
    console.log('this.formGroupName.value :-  ',this.formGroupName.value);
    console.log('this.formGroupName.root.value :-  ',this.formGroupName.root.value);

    // Get Entire Form object with all value and prototype
    console.log('this.formGroupName :-  ',this.formGroupName);

    // Get Values of specific Form Control
    console.log("this.formGroupName.get('FormControlName1')?.value :-  ", this.formGroupName.get('FormControlName1')?.value);
    console.log("this.formGroupName.get('FormControlName2')?.value :-  ", this.formGroupName.get('FormControlName2')?.value);
    console.log("this.formGroupName.get('FormControlName3')?.value :-  ", this.formGroupName.get('FormControlName3')?.value);



    // Get values on changes
    /* 
    when you are going to do valueChanges then 
            you have to do subscribe 
            or you haveé to pass data through pipe
    because valueChanges return observable

            1. when valueChanges  subscribe :- 

            this.formGroupName.valueChanges.subscribe(data=>{
                console.log(data)
                //data
            })

            2. when valueChanges  are passed through pipe

            this.formGroupName.valueChanges.pipe(
                map(element => {
                    //code
                })
            )
    */

   this.formGroupName.valueChanges.subscribe(data=>{
                console.log(data)
                //data
            })
 
  }

}

```

### Example :-

**add-customer.component.html**


```html
<p>loan-types works!</p>

<!-- formControlName = "key"           is manadatory for every     input,select&option,textarea,toggle,etc

this.formGroupName.root.value :{eightthFormContr01Name : "tacos -2",fifth FormContr01Name : "vip",firstFormContr01Name: "vs",fourth FormContr01Name : undefined,ninethFormContr01Name: true,second FormContr01Name: "dadasa",seventhFormContr01Name : ['zeroReady',' partialReady ' ],sixth FormContr01Name : "FAILED",thirdFormContr01Name: true }

this.formGroupName.value :{eightthFormContr01Name : "tacos -2",fifth FormContr01Name : "vip",firstFormContr01Name: "vs",fourth FormContr01Name : undefined,ninethFormContr01Name: true,second FormContr01Name: "dadasa",seventhFormContr01Name : ['zeroReady',' partialReady ' ],sixth FormContr01Name : "FAILED",thirdFormContr01Name: true }

this.formGroupName.value :          {
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
                                    }
this.formGroupName.root.value :    {
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
                                    }


-->


<div class="ByFormBulder">
    <h1> create the form with the help of FormBuilder </h1>

    <form [formGroup]="formGroupNameForFormBulderOnly">
        <div><input type="text" formControlName="firstFormControlName"></div>
        <!--  formControlName = "key"   is manadatory for every   input,select&option,textarea,etc -->
        <div><textarea formControlName="secondFormControlName" ></textarea></div>
        <div><input type="checkbox" formControlName="thirdFormControlName"  > Accept all terms and condition</div>
        <div><input type="radio" formControlName="fourthFormControlName">   Radio</div>
    
        <div>
            <select formControlName="fifthFormControlName" >
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
                <option value="economic">Economic</option>
            </select>
        </div>
    
        
        <div>
            <mat-form-field appearance="outline" class=" _w-50  _ml-10">
                <mat-label>Status</mat-label>
                <mat-select  [multiple]="false" formControlName="sixthFormControlName" >
            
                    <mat-option *ngFor="let groupFilter of status" [value]="groupFilter.value">
                        {{groupFilter.name}}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
        
      
      <div>
        <mat-form-field appearance="outline" class="  _w-50 _ml-10">
            <mat-label>Pods</mat-label>
            <mat-select [multiple]="true" formControlName="seventhFormControlName" >
                <mat-option *ngFor="let groupFilter of pods" [value]="groupFilter.value">
                    {{groupFilter.name}}
                </mat-option>
            </mat-select>
        </mat-form-field>
      </div>
      
      <div>
            <mat-form-field appearance="outline">
            <mat-label>Favorite food</mat-label>
            <mat-select formControlName="eightthFormControlName"  >
              <mat-option *ngFor="let food of foods" [value]="food.value" >
                {{food.viewValue}}
              </mat-option>
            </mat-select>
          </mat-form-field>
      </div>
      
      <div>
        <mat-slide-toggle formControlName="ninethFormControlName" >Slide me!</mat-slide-toggle>
      </div>
    
        <div><button (click)="formGroupSubmitButtonForFormBulderOnly()">Submit Button Name</button></div>
    </form>
</div>



<div class="ByFormBulder">
    <h1> create the form with the help of FormBuilder For Set Purpous </h1>

    <form [formGroup]="formGroupNameForFormBulderOnlyForSetPurpous">
        <div><input type="text" formControlName="firstFormControlName"></div>
        <!--  formControlName = "key"   is manadatory for every   input,select&option,textarea,etc -->
        <div><textarea formControlName="secondFormControlName" ></textarea></div>
        <div><input type="checkbox" formControlName="thirdFormControlName"  > Accept all terms and condition</div>
        <div><input type="radio" formControlName="fourthFormControlName">   Radio</div>
    
        <div>
            <select formControlName="fifthFormControlName" >
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
                <option value="economic">Economic</option>
            </select>
        </div>
    
        
        <div>
            <mat-form-field appearance="outline" class=" _w-50  _ml-10">
                <mat-label>Status</mat-label>
                <mat-select  [multiple]="false" formControlName="sixthFormControlName" >
            
                    <mat-option *ngFor="let groupFilter of status" [value]="groupFilter.value">
                        {{groupFilter.name}}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
        
      
      <div>
        <mat-form-field appearance="outline" class="  _w-50 _ml-10">
            <mat-label>Pods</mat-label>
            <mat-select [multiple]="true" formControlName="seventhFormControlName" >
                <mat-option *ngFor="let groupFilter of pods" [value]="groupFilter.value">
                    {{groupFilter.name}}
                </mat-option>
            </mat-select>
        </mat-form-field>
      </div>
      
      <div>
            <mat-form-field appearance="outline">
            <mat-label>Favorite food</mat-label>
            <mat-select formControlName="eightthFormControlName"  >
              <mat-option *ngFor="let food of foods" [value]="food.value" >
                {{food.viewValue}}
              </mat-option>
            </mat-select>
          </mat-form-field>
      </div>
      
      <div>
        <mat-slide-toggle formControlName="ninethFormControlName" >Slide me!</mat-slide-toggle>
      </div>
    
        <div><button (click)="formGroupSubmitButtonForFormBulderOnlyForSetPurpous()">Submit Button Name For Set Purpous</button></div>
    </form>
</div>




<div class="ByFormBulder">
    <h1> create the form with the help of FormBuilder For Set Purpous With The Help Of SetValue</h1>

    <form [formGroup]="formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue">
        <div><input type="text" formControlName="firstFormControlName"></div>
        <!--  formControlName = "key"   is manadatory for every   input,select&option,textarea,etc -->
        <div><textarea formControlName="secondFormControlName" ></textarea></div>
        <div><input type="checkbox" formControlName="thirdFormControlName"  > Accept all terms and condition</div>
        <div><input type="radio" formControlName="fourthFormControlName">   Radio</div>
    
        <div>
            <select formControlName="fifthFormControlName" >
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
                <option value="economic">Economic</option>
            </select>
        </div>
    
        
        <div>
            <mat-form-field appearance="outline" class=" _w-50  _ml-10">
                <mat-label>Status</mat-label>
                <mat-select  [multiple]="false" formControlName="sixthFormControlName" >
            
                    <mat-option *ngFor="let groupFilter of status" [value]="groupFilter.value">
                        {{groupFilter.name}}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
        
      
      <div>
        <mat-form-field appearance="outline" class="  _w-50 _ml-10">
            <mat-label>Pods</mat-label>
            <mat-select [multiple]="true" formControlName="seventhFormControlName" >
                <mat-option *ngFor="let groupFilter of pods" [value]="groupFilter.value">
                    {{groupFilter.name}}
                </mat-option>
            </mat-select>
        </mat-form-field>
      </div>
      
      <div>
            <mat-form-field appearance="outline">
            <mat-label>Favorite food</mat-label>
            <mat-select formControlName="eightthFormControlName"  >
              <mat-option *ngFor="let food of foods" [value]="food.value" >
                {{food.viewValue}}
              </mat-option>
            </mat-select>
          </mat-form-field>
      </div>
      
      <div>
        <mat-slide-toggle formControlName="ninethFormControlName" >Slide me!</mat-slide-toggle>
      </div>
    
        <div><button (click)="formGroupSubmitButtonForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue()">
            Submit Button Name For Set Purpous With The Help Of SetValue </button></div>
        <div><button (click)="SetValueForFormBulderOnly()">set Button Name</button></div>
    </form>
</div>

```

**add-customer.component.ts**

```ts
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
  }) ;
  formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue : FormGroup = this.fb.group({
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



  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }





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


  formGroupSubmitButtonForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue(){
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


  }

}

```

## Reactive Forms. Read Form Values by  Angular.io

# Reactive Forms Validations

## Reactive Forms Validations by ARC

### Reactive Forms - Introduction

* **Reactive Forms are a way to create Forms** in Angular application
* What's different is how we implement, design and handle the form and the data
* All the form elements, user interactions and validations are handled in the component class
* We will make use of Angular's built in **formGroup** and **formControI**
* Using Reactive Forms we can control better data binding
* Exclusive define custom regular expression patterns of error handling
* We will need to import **ReactiveFormsModuIe** in our app module
> * Very flexible and allows users to define, develop complex requirements of forms
> * More logic in the component class and less in HTML mark up itself
* Angular maintains the state information of forms at all times
  * ng-touched
  * ng-untouched
  * ng-dirty
  * ng-pristine
  * ng-valid
  * ng-invalid

### Just Remember 3 important things in Reactive Forms

* FormControI
* FormGroup
* FormBuiIder

* `formControlName = "key"`   is manadatory for every   `input`,`select`&`option`,`textarea`,etc
* basically we are writing  `formControlName` instead of `name` attribute.

### Reactive Forms in 6 simple Steps

* We will learn and do hands-on exampels of the 6 simple steps

### How to use Reactive Forms

#### Step #1 — Import and Add in the ReactiveFormsModuIe in the app.module.ts

* For template driven forms — `ReactiveFormsModuIe` needs to be imported
* **If we do NOT import this — we will get error**
* Add the module into the array list of imports

#### Step #2 — Create the form in app.component.html

* `FormGroup`
  * We need to use the directive `FormGroup` for the entire form and give it a name
* `formControIName`
  * Every form field should have a "`formControlName`" attribute
  * basically we are writing  `formControlName` instead of `name` attribute of all `input`.
  


####  Step #3 — Create the form in app.component.html -

```html
<form [formGroup]="registerForm" (ngSubmit)="postData()">
    <input type="text" formControlName="firstname">
    <input type="text" formControlName="lastname">
    <input type="text" formControlName="email">
    <input type="submit" value="Post Data" [disabled]="!registerForm.valid">
</form>
```

#### Step #4 — In the component class — import the required modules

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators} from '@angular/forms';
```

#### Step #5 — Inject the FormBuiIder in the constructor

```ts
constructor(private formBuilder: FormBuilder)
```

#### Step #6 — Create the form instance

```ts
this.registerForm = formBuilder.group({
firstname: new FormControl(),
lastname: new FormControl()
})
```

### Setting values in Reactive Forms

#### Set the value of entire form in one go

```ts
this.formGroupName = new FormGroup({
                                          'FormControlName1' : new FormControl('Value Here'),
                                          'FormControlName2': new FormControl(('Value Here'),
                                          'FormControlName3': new FormControl(('Value Here')
                                    })
```

#### Setting the form values using `setValue`

```ts
const SetObj = {
                    FormControlName1 : 'Value Here',
                    FormControlName2: 'Value Here',
                    FormControlName3: 'Value Here'
                }
// when you do have to pass all "keys/ fields"
this.formGroupName.setValue(SetObj);

// The only difference is -> you do not have to pass all "keys/ fields"
// this.formGroupName.patchVa1ue(SetObj);
```


### Read Reactive Form Values

1. Get Value of Entire Form
   * `this.formGroupName.value`
   * `this.formGroupName.root.value`
2. Get Entire Form Object
   * `this.formGroupName`
3. Get Values of specific Form Control
   * `this.formGroupName.get('formControlName').value;`
   * `this.formGroupName.get('formControlName')?.value;` // if you get "Object is possibly 'null'" as error
4. Get values on changes
   * `this.formGroupName.valueChanges`

### Built-In Reactive Form Validations

#### Validations in `FormControl`

```ts
this.formGroupName = new FormGroup({

'formControlName' : new FormControl('some', [  
                                                Validators.minLength(10),   
                                                Validators.required 
                                            ])

})
```

#### Multiple Validations using `Validators.compose`

```ts
'formControlName' : new FormControl('some', [  
                                                Validators.minLength(10),   
                                                Validators.required 
                                                Validators.pattern('^[a-zA-Z]+$') 
                                                ])

```

#### Get the state of the form -> valid or not

```html
<button (click)="formGroupSubmitButton()" [disabled]="!formGroupName.valid">Add Loan Type</button>
```

#### Disable the form button

```ts
this.formGroupName.valid
```

#### to check form is valid or not
* `console.log(this.formGroupName.valid)`
  * if `this.formGroupName.valid` return true then form is valid
  * if `this.formGroupName.valid` return false then form is invalid

### syntax

**in html file**

```html
<form [formGroup]="formGroupName">
    <div><input type="text" formControlName="FormControlName1"></div>
    <div><input type="number" formControlName="FormControlName2"></div>
    <div><input type="date" formControlName="FormControlName3"></div>
    <!--  formControlName = "key"   is manadatory for every   input,select&option,textarea,etc -->
    <!-- basically we are writing  formControlName instead of name attribute -->

    <div><button (click)="formGroupSubmitButton()">Submit Button Name</button></div>

    <div><button (click)="formGroupSubmitButton()" [disabled]="!formGroupName.valid">
        Submit Button Name with disable feature according to validators</button>
    <!--    
        if formGroupName.valid return true then form is valid  
        if formGroupName.valid return false then form is invalid 
    -->
    </div>

    <div><button (click)="setForm()">Set Form</button></div>
</form>
```

**in ts file**

```ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {


// reactive form creation
// method-1
//  this FormGroup is created with the help of  FormGroup constructor
  formGroupName : FormGroup = new FormGroup({
    'FormControlName1': new FormControl(),
    'FormControlName2': new FormControl(),
    'FormControlName3': new FormControl(),
  }) ;

// method-2
//  this FormGroup is created with the help of  FormBuilder
  formGroupName : FormGroup = this.formBuilder.group({
    'FormControlName1': new FormControl(),
    'FormControlName2': new FormControl(),
    'FormControlName3': new FormControl(),
  }) ;





// set value in reactive form
// method-1 
//  SetValue  in reactive Form by formControl Constructor- FormGroup constructor method
formGroupName : FormGroup = new FormGroup({
                                          'FormControlName1' : new FormControl('Value Here'),
                                          'FormControlName2' : new FormControl('Value Here'),
                                          'FormControlName3' : new FormControl('Value Here')
                                    })
// method-2 
//  SetValue  in reactive Form by formControl Constructor- FormBuilder method
formGroupName : FormGroup = this.formBuilder.group({
                                          'FormControlName1' : new FormControl('Value Here'),
                                          'FormControlName2' : new FormControl('Value Here'),
                                          'FormControlName3' : new FormControl('Value Here')
                                    })
// method-3 
// SetValue  in reactive Form by set method - FormBuilder method & FormGroup constructor method
setForm() {
    let SetObj :any = {
      'FormControlName1' : 'Value Here',
      'FormControlName2' : 'Value Here',
      'FormControlName3' : 'Value Here'
    };
    // when you do have to pass all "keys/ fields"
    this.formGroupName.setValue(SetObj);

    // The only difference is -> you do not have to pass all "keys/ fields"
    // this.formGroupName.patchVa1ue(SetObj);
  }




  
// reactive form creation with validations
// method-1
//  this FormGroup is created with the help of  FormGroup constructor
  formGroupName : FormGroup = new FormGroup({
    'FormControlName1': new FormControl('Value Here',   [  
                                                            Validators.minLength(4),   
                                                            Validators.required , 
                                                            Validators.maxLength(8)
                                                        ] 
                                        ),
    // Validators.compose is used for re-use :- you can check on google
    'FormControlName2': new FormControl('Value Here',  Validators.compose([
                                                                            Validators.minLength(4),   
                                                                            Validators.required , 
                                                                            Validators.maxLength(8)
                                                                        ]) 
                                        ),

    'FormControlName3': new FormControl(),
  }) ;

// method-2
//  this FormGroup is created with the help of  FormBuilder
  formGroupName : FormGroup = this.formBuilder.group({
    'FormControlName1': new FormControl('Value Here',   [  
                                                            Validators.minLength(4),   
                                                            Validators.required , 
                                                            Validators.maxLength(8)
                                                        ] 
                                        ),
    // Validators.compose is used for re-use :- you can check on google
    'FormControlName2': new FormControl('Value Here',  Validators.compose([
                                                                            Validators.minLength(4),   
                                                                            Validators.required , 
                                                                            Validators.maxLength(8)
                                                                        ]) 
                                        ),
    'FormControlName3': new FormControl(),
  }) ;






  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }





  formGroupSubmitButton(){

    // Get Value of Entire Form
    console.log('this.formGroupName.value :-  ',this.formGroupName.value);
    console.log('this.formGroupName.root.value :-  ',this.formGroupName.root.value);

    // Get Entire Form object with all value and prototype
    console.log('this.formGroupName :-  ',this.formGroupName);

    // Get Values of specific Form Control
    console.log("this.formGroupName.get('FormControlName1')?.value :-  ", this.formGroupName.get('FormControlName1')?.value);
    console.log("this.formGroupName.get('FormControlName2')?.value :-  ", this.formGroupName.get('FormControlName2')?.value);
    console.log("this.formGroupName.get('FormControlName3')?.value :-  ", this.formGroupName.get('FormControlName3')?.value);



    // Get values on changes
    /* 
    when you are going to do valueChanges then 
            you have to do subscribe 
            or you haveé to pass data through pipe
    because valueChanges return observable

            1. when valueChanges  subscribe :- 

            this.formGroupName.valueChanges.subscribe(data=>{
                console.log(data)
                //data
            })

            2. when valueChanges  are passed through pipe

            this.formGroupName.valueChanges.pipe(
                map(element => {
                    //code
                })
            )
    */

   this.formGroupName.valueChanges.subscribe(data=>{
                console.log(data)
                //data
            })

    
    // to check form is valid or not
    console.log(this.formGroupName.valid)
    // if this.formGroupName.valid return true then form is valid
    // if this.formGroupName.valid return false then form is invalid
 
  }

}

```

### Example :-

**add-customer.component.html**


```html
<p>loan-types works!</p>

<div class="ByFormBulder">
    <h1> create the form with the help of FormBuilder For Set Purpous With The Help Of SetValue</h1>

    <form [formGroup]="formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue">
        <div><input type="text" formControlName="firstFormControlName"></div>
        <!--  formControlName = "key"   is manadatory for every   input,select&option,textarea,etc -->
        <div><textarea formControlName="secondFormControlName" ></textarea></div>
        <div><input type="checkbox" formControlName="thirdFormControlName"  > Accept all terms and condition</div>
        <div><input type="radio" formControlName="fourthFormControlName">   Radio</div>
    
        <div>
            <select formControlName="fifthFormControlName" >
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
                <option value="economic">Economic</option>
            </select>
        </div>
    
        
        <div>
            <mat-form-field appearance="outline" class=" _w-50  _ml-10">
                <mat-label>Status</mat-label>
                <mat-select  [multiple]="false" formControlName="sixthFormControlName" >
            
                    <mat-option *ngFor="let groupFilter of status" [value]="groupFilter.value">
                        {{groupFilter.name}}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
        
      
      <div>
        <mat-form-field appearance="outline" class="  _w-50 _ml-10">
            <mat-label>Pods</mat-label>
            <mat-select [multiple]="true" formControlName="seventhFormControlName" >
                <mat-option *ngFor="let groupFilter of pods" [value]="groupFilter.value">
                    {{groupFilter.name}}
                </mat-option>
            </mat-select>
        </mat-form-field>
      </div>
      
      <div>
            <mat-form-field appearance="outline">
            <mat-label>Favorite food</mat-label>
            <mat-select formControlName="eightthFormControlName"  >
              <mat-option *ngFor="let food of foods" [value]="food.value" >
                {{food.viewValue}}
              </mat-option>
            </mat-select>
          </mat-form-field>
      </div>
      
      <div>
        <mat-slide-toggle formControlName="ninethFormControlName" >Slide me!</mat-slide-toggle>
      </div>
    
        <div><button (click)="formGroupSubmitButtonForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue()">
            Submit Button Name For Set Purpous With The Help Of SetValue </button></div>
        <div><button (click)="formGroupSubmitButtonForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue()" [disabled]="!formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.valid">
            Submit Button Name For Set Purpous With The Help Of SetValue with disable feature </button></div>
        <div><button (click)="SetValueForFormBulderOnly()">set Button Name</button></div>
    </form>
</div>

```

**add-customer.component.ts**

```ts
 import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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


  formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue : FormGroup = this.fb.group({
    'firstFormControlName': new FormControl('12345678', [  Validators.minLength(4),   Validators.required , Validators.maxLength(8)] ),
    'secondFormControlName': new FormControl(' ',  Validators.compose([Validators.minLength(4),   Validators.required , Validators.maxLength(8)]) ),
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

  
  formGroupSubmitButtonForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue(){

    // to check form is valid or not
    console.log("this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.valid   :-  ",this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.valid)
    // if this.formGroupName.valid return true then form is valid
    // if this.formGroupName.valid return false then form is invalid

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

    // this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.setValue(settObj);
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
  }

}

```

## Reactive Forms Validations by  Angular.io

# Reactive Forms State and Validations

## Reactive Forms State and Validations by ARC

### Reactive Forms - Introduction

* **Reactive Forms are a way to create Forms** in Angular application
* What's different is how we implement, design and handle the form and the data
* All the form elements, user interactions and validations are handled in the component class
* We will make use of Angular's built in **formGroup** and **formControI**
* Using Reactive Forms we can control better data binding
* Exclusive define custom regular expression patterns of error handling
* We will need to import **ReactiveFormsModuIe** in our app module
> * Very flexible and allows users to define, develop complex requirements of forms
> * More logic in the component class and less in HTML mark up itself
* Angular maintains the state information of forms at all times
  * ng-touched
  * ng-untouched
  * ng-dirty
  * ng-pristine
  * ng-valid
  * ng-invalid

### Just Remember 3 important things in Reactive Forms

* FormControI
* FormGroup
* FormBuiIder

* `formControlName = "key"`   is manadatory for every   `input`,`select`&`option`,`textarea`,etc
* basically we are writing  `formControlName` instead of `name` attribute.

### Reactive Forms in 6 simple Steps

* We will learn and do hands-on exampels of the 6 simple steps

### How to use Reactive Forms

#### Step #1 — Import and Add in the ReactiveFormsModuIe in the app.module.ts

* For template driven forms — `ReactiveFormsModuIe` needs to be imported
* **If we do NOT import this — we will get error**
* Add the module into the array list of imports

#### Step #2 — Create the form in app.component.html

* `FormGroup`
  * We need to use the directive `FormGroup` for the entire form and give it a name
* `formControIName`
  * Every form field should have a "`formControlName`" attribute
  * basically we are writing  `formControlName` instead of `name` attribute of all `input`.
  


####  Step #3 — Create the form in app.component.html -

```html
<form [formGroup]="registerForm" (ngSubmit)="postData()">
    <input type="text" formControlName="firstname">
    <input type="text" formControlName="lastname">
    <input type="text" formControlName="email">
    <input type="submit" value="Post Data" [disabled]="!registerForm.valid">
</form>
```

#### Step #4 — In the component class — import the required modules

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators} from '@angular/forms';
```

#### Step #5 — Inject the FormBuiIder in the constructor

```ts
constructor(private formBuilder: FormBuilder)
```

#### Step #6 — Create the form instance

```ts
this.registerForm = formBuilder.group({
firstname: new FormControl(),
lastname: new FormControl()
})
```

### Setting values in Reactive Forms

#### Set the value of entire form in one go

```ts
this.formGroupName = new FormGroup({
                                          'FormControlName1' : new FormControl('Value Here'),
                                          'FormControlName2': new FormControl(('Value Here'),
                                          'FormControlName3': new FormControl(('Value Here')
                                    })
```

#### Setting the form values using `setValue`

```ts
const SetObj = {
                    FormControlName1 : 'Value Here',
                    FormControlName2: 'Value Here',
                    FormControlName3: 'Value Here'
                }
// when you do have to pass all "keys/ fields"
this.formGroupName.setValue(SetObj);

// The only difference is -> you do not have to pass all "keys/ fields"
// this.formGroupName.patchVa1ue(SetObj);
```


### Read Reactive Form Values

1. Get Value of Entire Form
   * `this.formGroupName.value`
   * `this.formGroupName.root.value`
2. Get Entire Form Object
   * `this.formGroupName`
3. Get Values of specific Form Control
   * `this.formGroupName.get('formControlName').value;`
   * `this.formGroupName.get('formControlName')?.value;` // if you get "Object is possibly 'null'" as error
4. Get values on changes
   * `this.formGroupName.valueChanges`

### Built-In Reactive Form Validations

#### Validations in `FormControl`

```ts
this.formGroupName = new FormGroup({

'formControlName' : new FormControl('some', [  
                                                Validators.minLength(10),   
                                                Validators.required 
                                            ])

})
```

#### Multiple Validations using `Validators.compose`

```ts
'formControlName' : new FormControl('some', [  
                                                Validators.minLength(10),   
                                                Validators.required 
                                                Validators.pattern('^[a-zA-Z]+$') 
                                                ])

```

#### Get the state of the form -> valid or not

```html
<button (click)="formGroupSubmitButton()" [disabled]="!formGroupName.valid">Add Loan Type</button>
```

#### Disable the form button

```ts
this.formGroupName.valid
```

#### to check form is valid or not
* `console.log(this.formGroupName.valid)`
  * if `this.formGroupName.valid` return true then form is valid
  * if `this.formGroupName.valid` return false then form is invalid

### Reactive Form — Form States

* `.ng-valid`
* `.ng-invalid`
* `.ng-pending`
* `.ng-pristine`
* `.ng-dirty`
* `.ng-untouched`
* `.ng-touched`
  

* `console.log(this.formGroupName.get('firstFormControlName'))` :- try it 
* ![this.formGroupName.get('firstFormControlName')](2022-12-20-17-36-08.png)  



##### Form is `valid` or not
Check if the form is valid or not
##### Form controls were edited — `Dirty`
For was modified by the user
##### Form fields are `Pristine`
Form was not been modified by the user
##### Form fields were `touched`
Form fields were touched

### syntax

**in html file**

```html
<form [formGroup]="formGroupName">
    <div><input type="text" formControlName="FormControlName1"></div>
    <!--Reactive form valiadation - required, minlength, maxlength -->
    <div *ngIf="formGroupName.get('FormControlName1')?.hasError('required')"> firstFormControlName is required </div>
    <div *ngIf="formGroupName.get('FormControlName1')?.hasError('minlength')"> firstFormControlName is minlength </div>
    <div *ngIf="formGroupName.get('FormControlName1')?.hasError('maxlength')"> firstFormControlName is maxlength </div>
    <!--Reactive form state - valid, invalid, pending, pristine, dirty, touched, untouched -->
    <div *ngIf="formGroupName.get('FormControlName1')?.valid"> firstFormControlName is valid </div>
    <div *ngIf="formGroupName.get('FormControlName1')?.invalid"> firstFormControlName is invalid </div>
    <div *ngIf="formGroupName.get('FormControlName1')?.pending"> firstFormControlName is pending </div>
    <div *ngIf="formGroupName.get('FormControlName1')?.pristine"> firstFormControlName is pristine </div>
    <div *ngIf="formGroupName.get('FormControlName1')?.dirty"> firstFormControlName is dirty </div>
    <div *ngIf="formGroupName.get('FormControlName1')?.touched"> firstFormControlName is touched </div>
    <div *ngIf="formGroupName.get('FormControlName1')?.untouched"> firstFormControlName is untouched </div>
    <!--Reactive form state & valiadation  -->
    <div 
    *ngIf="formGroupName.get('FormControlName1')?.hasError('required') && formGroupName.get('FormControlName1')?.touched" >
    firstFormControlName is required && touched</div>

        

    <div><input type="number" formControlName="FormControlName2"></div>
    <div><input type="date" formControlName="FormControlName3"></div>
    <!--  formControlName = "key"   is manadatory for every   input,select&option,textarea,etc -->
    <!-- basically we are writing  formControlName instead of name attribute -->

    <div><button (click)="formGroupSubmitButton()">Submit Button Name</button></div>

    <div><button (click)="formGroupSubmitButton()" [disabled]="!formGroupName.valid">
        Submit Button Name with disable feature according to validators</button>
    <!--    
        if formGroupName.valid return true then form is valid  
        if formGroupName.valid return false then form is invalid 
    -->
    </div>

    <div><button (click)="setForm()">Set Form</button></div>

</form>
```

**in ts file**

```ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {


// reactive form creation
// method-1
//  this FormGroup is created with the help of  FormGroup constructor
  formGroupName : FormGroup = new FormGroup({
    'FormControlName1': new FormControl(),
    'FormControlName2': new FormControl(),
    'FormControlName3': new FormControl(),
  }) ;

// method-2
//  this FormGroup is created with the help of  FormBuilder
  formGroupName : FormGroup = this.formBuilder.group({
    'FormControlName1': new FormControl(),
    'FormControlName2': new FormControl(),
    'FormControlName3': new FormControl(),
  }) ;





// set value in reactive form
// method-1 
//  SetValue  in reactive Form by formControl Constructor- FormGroup constructor method
formGroupName : FormGroup = new FormGroup({
                                          'FormControlName1' : new FormControl('Value Here'),
                                          'FormControlName2' : new FormControl('Value Here'),
                                          'FormControlName3' : new FormControl('Value Here')
                                    })
// method-2 
//  SetValue  in reactive Form by formControl Constructor- FormBuilder method
formGroupName : FormGroup = this.formBuilder.group({
                                          'FormControlName1' : new FormControl('Value Here'),
                                          'FormControlName2' : new FormControl('Value Here'),
                                          'FormControlName3' : new FormControl('Value Here')
                                    })
// method-3 
// SetValue  in reactive Form by set method - FormBuilder method & FormGroup constructor method
setForm() {
    let SetObj :any = {
      'FormControlName1' : 'Value Here',
      'FormControlName2' : 'Value Here',
      'FormControlName3' : 'Value Here'
    };
    // when you do have to pass all "keys/ fields"
    this.formGroupName.setValue(SetObj);

    // The only difference is -> you do not have to pass all "keys/ fields"
    // this.formGroupName.patchVa1ue(SetObj);
  }




  
// reactive form creation with validations
// method-1
//  this FormGroup is created with the help of  FormGroup constructor
  formGroupName : FormGroup = new FormGroup({
    'FormControlName1': new FormControl('Value Here',   [  
                                                            Validators.minLength(4),   
                                                            Validators.required , 
                                                            Validators.maxLength(8)
                                                        ] 
                                        ),
    // Validators.compose is used for re-use :- you can check on google
    'FormControlName2': new FormControl('Value Here',  Validators.compose([
                                                                            Validators.minLength(4),   
                                                                            Validators.required , 
                                                                            Validators.maxLength(8)
                                                                        ]) 
                                        ),

    'FormControlName3': new FormControl(),
  }) ;

// method-2
//  this FormGroup is created with the help of  FormBuilder
  formGroupName : FormGroup = this.formBuilder.group({
    'FormControlName1': new FormControl('Value Here',   [  
                                                            Validators.minLength(4),   
                                                            Validators.required , 
                                                            Validators.maxLength(8)
                                                        ] 
                                        ),
    // Validators.compose is used for re-use :- you can check on google
    'FormControlName2': new FormControl('Value Here',  Validators.compose([
                                                                            Validators.minLength(4),   
                                                                            Validators.required , 
                                                                            Validators.maxLength(8)
                                                                        ]) 
                                        ),
    'FormControlName3': new FormControl(),
  }) ;






  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }





  formGroupSubmitButton(){

    // Get Value of Entire Form
    console.log('this.formGroupName.value :-  ',this.formGroupName.value);
    console.log('this.formGroupName.root.value :-  ',this.formGroupName.root.value);

    // Get Entire Form object with all value and prototype
    console.log('this.formGroupName :-  ',this.formGroupName);

    // Get Values of specific Form Control
    console.log("this.formGroupName.get('FormControlName1')?.value :-  ", this.formGroupName.get('FormControlName1')?.value);
    console.log("this.formGroupName.get('FormControlName2')?.value :-  ", this.formGroupName.get('FormControlName2')?.value);
    console.log("this.formGroupName.get('FormControlName3')?.value :-  ", this.formGroupName.get('FormControlName3')?.value);



    // Get values on changes
    /* 
    when you are going to do valueChanges then 
            you have to do subscribe 
            or you haveé to pass data through pipe
    because valueChanges return observable

            1. when valueChanges  subscribe :- 

            this.formGroupName.valueChanges.subscribe(data=>{
                console.log(data)
                //data
            })

            2. when valueChanges  are passed through pipe

            this.formGroupName.valueChanges.pipe(
                map(element => {
                    //code
                })
            )
    */

   this.formGroupName.valueChanges.subscribe(data=>{
                console.log(data)
                //data
            })

    
    // to check form is valid or not
    console.log(this.formGroupName.valid)
    // if this.formGroupName.valid return true then form is valid
    // if this.formGroupName.valid return false then form is invalid

    // all below will be return boolean , 
    //you can validate with the help of  'valid, invalid, pending, pristine, dirty, touched, untouched' in if-condition
    console.log("this.formGroupName.valid   :-  ",this.formGroupName.valid)
    console.log("this.formGroupName.invalid   :-  ",this.formGroupName.invalid)
    console.log("this.formGroupName.pending   :-  ",this.formGroupName.pending)
    console.log("this.formGroupName.pristine   :-  ",this.formGroupName.pristine)
    console.log("this.formGroupName.dirty   :-  ",this.formGroupName.dirty)
    console.log("this.formGroupName.touched   :-  ",this.formGroupName.touched)
    console.log("this.formGroupName.untouched   :-  ",this.formGroupName.untouched)
 
  }

}

```

### Example :-

**add-customer.component.html**


```html
<p>loan-types works!</p>

<div class="ByFormBulder">
    <h1> create the form with the help of FormBuilder For Set Purpous With The Help Of SetValue</h1>

    <form [formGroup]="formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue">
        <div><input type="text" formControlName="firstFormControlName"></div>
        <div *ngIf="formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('firstFormControlName')?.hasError('required')" >
            firstFormControlName is required</div>
        <div *ngIf="formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('firstFormControlName')?.hasError('minlength')" >
            firstFormControlName is minlength</div>
        <div *ngIf="formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('firstFormControlName')?.hasError('maxlength')" >
            firstFormControlName is maxlength</div>
        <div 
            *ngIf="formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('firstFormControlName')?.hasError('required') && formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('firstFormControlName')?.touched" >
            firstFormControlName is required && touched</div>
        <!--  formControlName = "key"   is manadatory for every   input,select&option,textarea,etc -->
        <div><textarea formControlName="secondFormControlName" ></textarea></div>
        <div><input type="checkbox" formControlName="thirdFormControlName"  > Accept all terms and condition</div>
        <div><input type="radio" formControlName="fourthFormControlName">   Radio</div>
    
        <div>
            <select formControlName="fifthFormControlName" >
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
                <option value="economic">Economic</option>
            </select>
        </div>
    
        
        <div>
            <mat-form-field appearance="outline" class=" _w-50  _ml-10">
                <mat-label>Status</mat-label>
                <mat-select  [multiple]="false" formControlName="sixthFormControlName" >
            
                    <mat-option *ngFor="let groupFilter of status" [value]="groupFilter.value">
                        {{groupFilter.name}}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
        
      
      <div>
        <mat-form-field appearance="outline" class="  _w-50 _ml-10">
            <mat-label>Pods</mat-label>
            <mat-select [multiple]="true" formControlName="seventhFormControlName" >
                <mat-option *ngFor="let groupFilter of pods" [value]="groupFilter.value">
                    {{groupFilter.name}}
                </mat-option>
            </mat-select>
        </mat-form-field>
      </div>
      
      <div>
            <mat-form-field appearance="outline">
            <mat-label>Favorite food</mat-label>
            <mat-select formControlName="eightthFormControlName"  >
              <mat-option *ngFor="let food of foods" [value]="food.value" >
                {{food.viewValue}}
              </mat-option>
            </mat-select>
          </mat-form-field>
      </div>
      
      <div>
        <mat-slide-toggle formControlName="ninethFormControlName" >Slide me!</mat-slide-toggle>
      </div>
    
        <div><button (click)="formGroupSubmitButtonForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue()">
            Submit Button Name For Set Purpous With The Help Of SetValue </button></div>
        <div><button (click)="formGroupSubmitButtonForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue()" [disabled]="!formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.valid">
            Submit Button Name For Set Purpous With The Help Of SetValue with disable feature </button></div>
        <div><button (click)="SetValueForFormBulderOnly()">set Button Name</button></div>
    </form>
</div>
```

**add-customer.component.ts**

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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



  formGroupSubmitButtonForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue(){

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

    // this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.setValue(settObj);
    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.patchValue(settObj);
   
  }

}
```

## Reactive Forms State and Validations by  Angular.io

# Reactive Forms Reset Example

## Reactive Forms Reset Example by ARC

### Reactive Forms - Introduction

* **Reactive Forms are a way to create Forms** in Angular application
* What's different is how we implement, design and handle the form and the data
* All the form elements, user interactions and validations are handled in the component class
* We will make use of Angular's built in **formGroup** and **formControI**
* Using Reactive Forms we can control better data binding
* Exclusive define custom regular expression patterns of error handling
* We will need to import **ReactiveFormsModuIe** in our app module
> * Very flexible and allows users to define, develop complex requirements of forms
> * More logic in the component class and less in HTML mark up itself
* Angular maintains the state information of forms at all times
  * ng-touched
  * ng-untouched
  * ng-dirty
  * ng-pristine
  * ng-valid
  * ng-invalid

### Just Remember 3 important things in Reactive Forms

* FormControI
* FormGroup
* FormBuiIder

* `formControlName = "key"`   is manadatory for every   `input`,`select`&`option`,`textarea`,etc
* basically we are writing  `formControlName` instead of `name` attribute.

### Reactive Forms in 6 simple Steps

* We will learn and do hands-on exampels of the 6 simple steps

### How to use Reactive Forms

#### Step #1 — Import and Add in the ReactiveFormsModuIe in the app.module.ts

* For template driven forms — `ReactiveFormsModuIe` needs to be imported
* **If we do NOT import this — we will get error**
* Add the module into the array list of imports

#### Step #2 — Create the form in app.component.html

* `FormGroup`
  * We need to use the directive `FormGroup` for the entire form and give it a name
* `formControIName`
  * Every form field should have a "`formControlName`" attribute
  * basically we are writing  `formControlName` instead of `name` attribute of all `input`.
  


####  Step #3 — Create the form in app.component.html -

```html
<form [formGroup]="registerForm" (ngSubmit)="postData()">
    <input type="text" formControlName="firstname">
    <input type="text" formControlName="lastname">
    <input type="text" formControlName="email">
    <input type="submit" value="Post Data" [disabled]="!registerForm.valid">
</form>
```

#### Step #4 — In the component class — import the required modules

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators} from '@angular/forms';
```

#### Step #5 — Inject the FormBuiIder in the constructor

```ts
constructor(private formBuilder: FormBuilder)
```

#### Step #6 — Create the form instance

```ts
this.registerForm = formBuilder.group({
firstname: new FormControl(),
lastname: new FormControl()
})
```

### Setting values in Reactive Forms

#### Set the value of entire form in one go

```ts
this.formGroupName = new FormGroup({
                                          'FormControlName1' : new FormControl('Value Here'),
                                          'FormControlName2': new FormControl(('Value Here'),
                                          'FormControlName3': new FormControl(('Value Here')
                                    })
```

#### Setting the form values using `setValue`

```ts
const SetObj = {
                    FormControlName1 : 'Value Here',
                    FormControlName2: 'Value Here',
                    FormControlName3: 'Value Here'
                }
// when you do have to pass all "keys/ fields"
this.formGroupName.setValue(SetObj);

// The only difference is -> you do not have to pass all "keys/ fields"
// this.formGroupName.patchVa1ue(SetObj);
```


### Read Reactive Form Values

1. Get Value of Entire Form
   * `this.formGroupName.value`
   * `this.formGroupName.root.value`
2. Get Entire Form Object
   * `this.formGroupName`
3. Get Values of specific Form Control
   * `this.formGroupName.get('formControlName').value;`
   * `this.formGroupName.get('formControlName')?.value;` // if you get "Object is possibly 'null'" as error
4. Get values on changes
   * `this.formGroupName.valueChanges`

### Built-In Reactive Form Validations

#### Validations in `FormControl`

```ts
this.formGroupName = new FormGroup({

'formControlName' : new FormControl('some', [  
                                                Validators.minLength(10),   
                                                Validators.required 
                                            ])

})
```

#### Multiple Validations using `Validators.compose`

```ts
'formControlName' : new FormControl('some', [  
                                                Validators.minLength(10),   
                                                Validators.required 
                                                Validators.pattern('^[a-zA-Z]+$') 
                                                ])

```

#### Get the state of the form -> valid or not

```html
<button (click)="formGroupSubmitButton()" [disabled]="!formGroupName.valid">Add Loan Type</button>
```

#### Disable the form button

```ts
this.formGroupName.valid
```

#### to check form is valid or not
* `console.log(this.formGroupName.valid)`
  * if `this.formGroupName.valid` return true then form is valid
  * if `this.formGroupName.valid` return false then form is invalid

### Reactive Form — Form States

* `.ng-valid`
* `.ng-invalid`
* `.ng-pending`
* `.ng-pristine`
* `.ng-dirty`
* `.ng-untouched`
* `.ng-touched`
  

* `console.log(this.formGroupName.get('firstFormControlName'))` :- try it 
* ![this.formGroupName.get('firstFormControlName')](2022-12-20-17-36-08.png)  



##### Form is `valid` or not
Check if the form is valid or not
##### Form controls were edited — `Dirty`
For was modified by the user
##### Form fields are `Pristine`
Form was not been modified by the user
##### Form fields were `touched`
Form fields were touched

### syntax

**in html file**

```html
<form [formGroup]="formGroupName">
    <div><input type="text" formControlName="FormControlName1"></div>
    <!--Reactive form valiadation - required, minlength, maxlength -->
    <div *ngIf="formGroupName.get('FormControlName1')?.hasError('required')"> firstFormControlName is required </div>
    <div *ngIf="formGroupName.get('FormControlName1')?.hasError('minlength')"> firstFormControlName is minlength </div>
    <div *ngIf="formGroupName.get('FormControlName1')?.hasError('maxlength')"> firstFormControlName is maxlength </div>
    <!--Reactive form state - valid, invalid, pending, pristine, dirty, touched, untouched -->
    <div *ngIf="formGroupName.get('FormControlName1')?.valid"> firstFormControlName is valid </div>
    <div *ngIf="formGroupName.get('FormControlName1')?.invalid"> firstFormControlName is invalid </div>
    <div *ngIf="formGroupName.get('FormControlName1')?.pending"> firstFormControlName is pending </div>
    <div *ngIf="formGroupName.get('FormControlName1')?.pristine"> firstFormControlName is pristine </div>
    <div *ngIf="formGroupName.get('FormControlName1')?.dirty"> firstFormControlName is dirty </div>
    <div *ngIf="formGroupName.get('FormControlName1')?.touched"> firstFormControlName is touched </div>
    <div *ngIf="formGroupName.get('FormControlName1')?.untouched"> firstFormControlName is untouched </div>
    <!--Reactive form state & valiadation  -->
    <div 
    *ngIf="formGroupName.get('FormControlName1')?.hasError('required') && formGroupName.get('FormControlName1')?.touched" >
    firstFormControlName is required && touched</div>

        

    <div><input type="number" formControlName="FormControlName2"></div>
    <div><input type="date" formControlName="FormControlName3"></div>
    <!--  formControlName = "key"   is manadatory for every   input,select&option,textarea,etc -->
    <!-- basically we are writing  formControlName instead of name attribute -->

    <div><button (click)="formGroupSubmitButton()">Submit Button Name</button></div>

    <div><button (click)="formGroupSubmitButton()" [disabled]="!formGroupName.valid">
        Submit Button Name with disable feature according to validators</button>
    <!--    
        if formGroupName.valid return true then form is valid  
        if formGroupName.valid return false then form is invalid 
    -->
    </div>

    <div><button (click)="setForm()">Set Form</button></div>

</form>
```

**in ts file**

```ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {


// reactive form creation
// method-1
//  this FormGroup is created with the help of  FormGroup constructor
  formGroupName : FormGroup = new FormGroup({
    'FormControlName1': new FormControl(),
    'FormControlName2': new FormControl(),
    'FormControlName3': new FormControl(),
  }) ;

// method-2
//  this FormGroup is created with the help of  FormBuilder
  formGroupName : FormGroup = this.formBuilder.group({
    'FormControlName1': new FormControl(),
    'FormControlName2': new FormControl(),
    'FormControlName3': new FormControl(),
  }) ;





// set value in reactive form
// method-1 
//  SetValue  in reactive Form by formControl Constructor- FormGroup constructor method
formGroupName : FormGroup = new FormGroup({
                                          'FormControlName1' : new FormControl('Value Here'),
                                          'FormControlName2' : new FormControl('Value Here'),
                                          'FormControlName3' : new FormControl('Value Here')
                                    })
// method-2 
//  SetValue  in reactive Form by formControl Constructor- FormBuilder method
formGroupName : FormGroup = this.formBuilder.group({
                                          'FormControlName1' : new FormControl('Value Here'),
                                          'FormControlName2' : new FormControl('Value Here'),
                                          'FormControlName3' : new FormControl('Value Here')
                                    })
// method-3 
// SetValue  in reactive Form by set method - FormBuilder method & FormGroup constructor method
setForm() {
    let SetObj :any = {
      'FormControlName1' : 'Value Here',
      'FormControlName2' : 'Value Here',
      'FormControlName3' : 'Value Here'
    };
    // when you do have to pass all "keys/ fields"
    this.formGroupName.setValue(SetObj);

    // The only difference is -> you do not have to pass all "keys/ fields"
    // this.formGroupName.patchVa1ue(SetObj);
  }




  
// reactive form creation with validations
// method-1
//  this FormGroup is created with the help of  FormGroup constructor
  formGroupName : FormGroup = new FormGroup({
    'FormControlName1': new FormControl('Value Here',   [  
                                                            Validators.minLength(4),   
                                                            Validators.required , 
                                                            Validators.maxLength(8)
                                                        ] 
                                        ),
    // Validators.compose is used for re-use :- you can check on google
    'FormControlName2': new FormControl('Value Here',  Validators.compose([
                                                                            Validators.minLength(4),   
                                                                            Validators.required , 
                                                                            Validators.maxLength(8)
                                                                        ]) 
                                        ),

    'FormControlName3': new FormControl(),
  }) ;

// method-2
//  this FormGroup is created with the help of  FormBuilder
  formGroupName : FormGroup = this.formBuilder.group({
    'FormControlName1': new FormControl('Value Here',   [  
                                                            Validators.minLength(4),   
                                                            Validators.required , 
                                                            Validators.maxLength(8)
                                                        ] 
                                        ),
    // Validators.compose is used for re-use :- you can check on google
    'FormControlName2': new FormControl('Value Here',  Validators.compose([
                                                                            Validators.minLength(4),   
                                                                            Validators.required , 
                                                                            Validators.maxLength(8)
                                                                        ]) 
                                        ),
    'FormControlName3': new FormControl(),
  }) ;






  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }





  formGroupSubmitButton(){

    // Get Value of Entire Form
    console.log('this.formGroupName.value :-  ',this.formGroupName.value);
    console.log('this.formGroupName.root.value :-  ',this.formGroupName.root.value);

    // Get Entire Form object with all value and prototype
    console.log('this.formGroupName :-  ',this.formGroupName);

    // Get Values of specific Form Control
    console.log("this.formGroupName.get('FormControlName1')?.value :-  ", this.formGroupName.get('FormControlName1')?.value);
    console.log("this.formGroupName.get('FormControlName2')?.value :-  ", this.formGroupName.get('FormControlName2')?.value);
    console.log("this.formGroupName.get('FormControlName3')?.value :-  ", this.formGroupName.get('FormControlName3')?.value);



    // Get values on changes
    /* 
    when you are going to do valueChanges then 
            you have to do subscribe 
            or you haveé to pass data through pipe
    because valueChanges return observable

            1. when valueChanges  subscribe :- 

            this.formGroupName.valueChanges.subscribe(data=>{
                console.log(data)
                //data
            })

            2. when valueChanges  are passed through pipe

            this.formGroupName.valueChanges.pipe(
                map(element => {
                    //code
                })
            )
    */

   this.formGroupName.valueChanges.subscribe(data=>{
                console.log(data)
                //data
            })

    
    // to check form is valid or not
    console.log(this.formGroupName.valid)
    // if this.formGroupName.valid return true then form is valid
    // if this.formGroupName.valid return false then form is invalid

    // all below will be return boolean , 
    //you can validate with the help of  'valid, invalid, pending, pristine, dirty, touched, untouched' in if-condition
    console.log("this.formGroupName.valid   :-  ",this.formGroupName.valid)
    console.log("this.formGroupName.invalid   :-  ",this.formGroupName.invalid)
    console.log("this.formGroupName.pending   :-  ",this.formGroupName.pending)
    console.log("this.formGroupName.pristine   :-  ",this.formGroupName.pristine)
    console.log("this.formGroupName.dirty   :-  ",this.formGroupName.dirty)
    console.log("this.formGroupName.touched   :-  ",this.formGroupName.touched)
    console.log("this.formGroupName.untouched   :-  ",this.formGroupName.untouched)
 
  }

}

```

### Example :-

**add-customer.component.html**


```html
<p>loan-types works!</p>

<div class="ByFormBulder">
    <h1> create the form with the help of FormBuilder For Set Purpous With The Help Of SetValue</h1>

    <form [formGroup]="formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue">
        <div><input type="text" formControlName="firstFormControlName"></div>
        <div *ngIf="formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('firstFormControlName')?.hasError('required')" >
            firstFormControlName is required</div>
        <div *ngIf="formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('firstFormControlName')?.hasError('minlength')" >
            firstFormControlName is minlength</div>
        <div *ngIf="formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('firstFormControlName')?.hasError('maxlength')" >
            firstFormControlName is maxlength</div>
        <div 
            *ngIf="formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('firstFormControlName')?.hasError('required') && formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.get('firstFormControlName')?.touched" >
            firstFormControlName is required && touched</div>
        <!--  formControlName = "key"   is manadatory for every   input,select&option,textarea,etc -->
        <div><textarea formControlName="secondFormControlName" ></textarea></div>
        <div><input type="checkbox" formControlName="thirdFormControlName"  > Accept all terms and condition</div>
        <div><input type="radio" formControlName="fourthFormControlName">   Radio</div>
    
        <div>
            <select formControlName="fifthFormControlName" >
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
                <option value="economic">Economic</option>
            </select>
        </div>
    
        
        <div>
            <mat-form-field appearance="outline" class=" _w-50  _ml-10">
                <mat-label>Status</mat-label>
                <mat-select  [multiple]="false" formControlName="sixthFormControlName" >
            
                    <mat-option *ngFor="let groupFilter of status" [value]="groupFilter.value">
                        {{groupFilter.name}}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
        
      
      <div>
        <mat-form-field appearance="outline" class="  _w-50 _ml-10">
            <mat-label>Pods</mat-label>
            <mat-select [multiple]="true" formControlName="seventhFormControlName" >
                <mat-option *ngFor="let groupFilter of pods" [value]="groupFilter.value">
                    {{groupFilter.name}}
                </mat-option>
            </mat-select>
        </mat-form-field>
      </div>
      
      <div>
            <mat-form-field appearance="outline">
            <mat-label>Favorite food</mat-label>
            <mat-select formControlName="eightthFormControlName"  >
              <mat-option *ngFor="let food of foods" [value]="food.value" >
                {{food.viewValue}}
              </mat-option>
            </mat-select>
          </mat-form-field>
      </div>
      
      <div>
        <mat-slide-toggle formControlName="ninethFormControlName" >Slide me!</mat-slide-toggle>
      </div>
    
        <div><button (click)="formGroupSubmitButtonForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue()">
            Submit Button Name For Set Purpous With The Help Of SetValue </button></div>
        <div><button (click)="formGroupSubmitButtonForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue()" [disabled]="!formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.valid">
            Submit Button Name For Set Purpous With The Help Of SetValue with disable feature </button></div>
        <div><button (click)="SetValueForFormBulderOnly()">set Button Name</button></div>
    </form>
</div>
```

**add-customer.component.ts**

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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



  formGroupSubmitButtonForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue(){

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

    // this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.setValue(settObj);
    this.formGroupNameForFormBulderOnlyForSetPurpousWithTheHelpOfSetValue.patchValue(settObj);
   
  }

}
```

## Reactive Forms Reset Example by  Angular.io

Reactive Form — Example
```html

<form [formGroup]="form" (ngSubmit)="onSignln(form)">
  <div class="form-group">
    <input type="text" class="form-control" id="email" placeholder="Enter email" formControlName="email">
    <span class="text-muted" *nglf="form.getCemail').hasErrorCrequired') && form.getCemail').touched">Email is required</span>
  </div>
  <div class="form-group">
    <input tvpe="password" class="form-control" id="password" placeholder="Password"
    formControlName="password">
    <span class="text-muted" *nglf="form.get('password').hasError('required') && form.get('password').touched">Password is required</span>
    </div><button btn-primary btn-block" [disabled]="!form.valid">Sign ln</button></div>
  </div>
</form>
````