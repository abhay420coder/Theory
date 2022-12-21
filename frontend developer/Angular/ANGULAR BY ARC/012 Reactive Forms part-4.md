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
Subscribe and Ask your do
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
    }
    this.formGroupName.setValue(SetObj);
  }



  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  formGroupSubmitButton(){
    console.log('this.formGroupName.value :-  ',this.formGroupName.value)
    console.log('this.formGroupName :-  ',this.formGroupName)
    console.log('this.formGroupName.root.value :-  ',this.formGroupName.root.value)
  }

}

```

## Reactive Forms. Read Form Values by  Angular.io

# Reactive Forms Validations

## Reactive Forms Validations by ARC

## Reactive Forms Validations by  Angular.io

# Reactive Forms State and Validations

## Reactive Forms State and Validations by ARC

## Reactive Forms State and Validations by  Angular.io

# Reactive Forms Reset Example

## Reactive Forms Reset Example by ARC

## Reactive Forms Reset Example by  Angular.io

# Reactive Forms Value Changes

## Reactive Forms Value Changes by ARC

## Reactive Forms Value Changes by  Angular.io

# Reactive Forms State Changes

## Reactive Forms State Changes by ARC

## Reactive Forms State Changes by  Angular.io

# Reactive Forms. FormArray

## Reactive Forms. FormArray by ARC

## Reactive Forms. FormArray by  Angular.io

# Reactive Forms Add Remove FormControl

## Reactive Forms Add Remove FormControl by ARC

## Reactive Forms Add Remove FormControl by  Angular.io

# Component Communication Tutorial

## Component Communication Tutorial by ARC

## Component Communication Tutorial by  Angular.io

# Angular Material Design Layout Tutorial | Angular Layout Template Tutorial | Angular Starter Project

## Angular Material Design Layout Tutorial by ARC

## Angular Material Design Layout Tutorial by  Angular.io



