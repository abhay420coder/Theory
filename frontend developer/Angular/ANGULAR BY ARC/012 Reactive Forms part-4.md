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

# Reactive Forms. FormArray

## Reactive Forms. FormArray by ARC



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
* ![this.formGroupName.get('firstFormControlName')](./image%20-%20009-012%20Reactive%20Forms/2022-12-20-17-36-08.png)  



##### Form is `valid` or not
Check if the form is valid or not
##### Form controls were edited — `Dirty`
For was modified by the user
##### Form fields are `Pristine`
Form was not been modified by the user
##### Form fields were `touched`
Form fields were touched

### Reactive Form — `Reset()`

* Reset Form — `reset()`
* We can Reset the entire form using `reset()` method
* Syntax:
  * `this.formGroupName.reset()`

### Reactive Form — Track Value Changes

* Reset Form — `valueChanges()`
* `valueChanges` is yet another important property of Forms or `FormControI`
* `valueChanges` returns an Observable
* We need to Subscribe to the Observable to read the value
* `valueChanges` is a property in `AbstractControl`
* `valueChanges` will emit an event every time there is any change in the values of the control changes
* Syntax:
    ```js
    this.registerForm.valueChanges()
    this.formName.get('email').valueChanges.subscribe(data => {
    Console.log(data);
    })

    // it tracks  ValueChanges in  particular form control
    this.formGroupName.get('FormControlName1')?.valueChanges.subscribe((data: any)=>{
      console.log("this.formGroupName.get('FormControlName1')?.valueChanges.subscribe     data " , data)
    })
    // it tracks  ValueChanges in full form
    this.formGroupName.valueChanges.subscribe((data: any)=>{
      console.log("this.formGroupName.valueChanges.subscribe     data " , data)
    })
    ```

### Reactive Form — Track state Changes

* Reactive Form — statusChanges()
* We can subscribe to status changes happening in the form at any time
* statusChanges is yet another important property of FormControl, FormGroup, and FormArray
* statusChanges returns an Observable. We need to Subscribe to the Observable to read the value
* statusChanges is a property in AbstractControI
* statusChanges will emit an event every time there is any change in the validation status of the control changes
* Syntax:
    ```ts
        this-formName.statusChanges();

        this-formName.statusChanges(data => {

        });

        this.formName.get('email').statusChanges.subscribe(data => {
          Console.log(data);
        })
        this.formName.get('fname').statusChanges.subscribe(data => {
          Console.log(data);
        })

        // it tracks  statusChanges in  particular form control
        this.formGroupName.get('FormControlName1')?.statusChanges.subscribe((data: any)=>{
          console.log("this.formGroupName.get('FormControlName1')?.statusChanges.subscribe     data " , data)
        })
        // it tracks  statusChanges in full form
        this.formGroupName.statusChanges.subscribe((data: any)=>{
          console.log("this.formGroupName.statusChanges.subscribe     data " , data)
        })

    ```

![track value changes](./image%20-%20009-012%20Reactive%20Forms/2022-12-22-07-25-05.png)
![track status changes](./image%20-%20009-012%20Reactive%20Forms/2022-12-22-07-21-11.png)

### Reactive Form — Form Array

* So far, we have learned and used `FormControl`, `FormGroup` and `FormBuilder`
* Helps in building basic form with form elements
* one of the most important feature working in Reactive Forms.
* **For complex forms, we will need Form Arrays**
* Almost all modern applications will need us to work with Form Arrays
* DOM interactions in Angular Reactive Forms are implemented using the Form Arrays
* Adding and Removing elements is very easily handled using `FormArrays`
* `FormArray` aggregates the values of the "child" `FormControl` into an Array
* The status of the `FormArray` is calculated by reducing the statuses of it's children.
* If any one of the controls is invalid, the entire array becomes invalid

```js
FormArray
      Form
        Add Address -Y
          Multiple Addresses
            Multiple Addresses
                Address 1
                Address 2   
                State
                City
                Zipcode
        Add Multiple Files
          Gmail
            multiple files to an email
              New file

        Facebook
          Websites
        online Resume Builder
          Multiple colleges
            College Name
          Multiple Experiences
            Company Name
            Designation

        Invoice Builder
          Products
            Product Name
            price
            tax
            finalAmount

Form
  in previous 
    The forms pretty static
    We defined the formControl in our component/ FormBui1der
      that formControl will appear in Template

FormArray
  Dynamically adding FormControls to our form
  FormArray is an Array of FormControl, FormGroup ,FormArray

  its an Array
    FormControl
    FormGroup
    FormArray
    combination of FormControl, FormGroup ,FormArray

  FormArray is set of FormControl/FormGroup/FormArray , which is grouped together  

  Example of FormArray
    1. FormArray
        FormArray
        FormGroup
        FormControl
    2. FormArray
        FormControl
        FormControl
        FormControl
    3. FormArray
        FormGroup
          FormControl
          FormControl
          FormControl
        FormGroup
          FormControl
          FormControl
          FormControl
        FormGroup
          FormControl
          FormControl
          FormControl
    4. FormArray
        FormArray
        FormArray
        FormArray


```

### syntax

**in html file**

```html
<!-- #FormName="ngForm" is not manadatory in reactive form , 
if you want, you can keep otherwise you can remove -->
  <!-- with  (ngSubmit)="formSubmitButton() -->
<form #FormName="ngForm" [formGroup]="formGroupName" (ngSubmit)="formGroupSubmitButton()">
  <!-- with  (ngSubmit)="formSubmitButton(formGroupName) -->
<form #FormName="ngForm" [formGroup]="formGroupName" (ngSubmit)="formGroupSubmitButton(formGroupName)">
  <!-- without  (ngSubmit)="formSubmitButton() or (ngSubmit)="formSubmitButton(formGroupName) -->
<form #FormName="ngForm" [formGroup]="formGroupName">



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
    <!-- this is for tracks  ValueChanges -->
    <!-- if you define ValueChanges inside ngOnInit method ,  
    then you don't need create a seperate event function -->
    <!-- <div><input type="number" formControlName="FormControlName2"  (blur)="formChangesTrack()"></div> -->
    <!-- <div><input type="number" formControlName="FormControlName2"  (keyup)="formChangesTrack()"></div> -->
    <!-- <div><input type="number" formControlName="FormControlName2"  (keypress)="formChangesTrack()"></div> -->

    <div><input type="date" formControlName="FormControlName3"></div>
    <!--  formControlName = "key"   is manadatory for every   input,select&option,textarea,etc -->
    <!-- basically we are writing  formControlName instead of name attribute -->


     <ng-container formArrayName="FormArray1">
                <ng-container *ngFor="let FormGroup1ForFormArray1 of FormArray1.controls; let index = index" >
                    <!-- <ng-container *ngFor="let empDetails of employeeForm.controls.employeeDetails.controls; let index = index"> -->
                    <div [formGroupName]="index">
                      <div><input type="text" formControlName="FormControlName1ForFormArray1"></div>
                      <div><input type="number" formControlName="FormControlName2ForFormArray1"></div>
                      <div><input type="email" formControlName="FormControlName3ForFormArray1"></div>  
                      <div><button  (click)="deleteControlFromFormArray1(index)">delete Control From Form Array1</button></div>
                    </div>
                </ng-container>

            </ng-container>

  <!-- without  (ngSubmit)="formSubmitButton() or (ngSubmit)="formSubmitButton(formGroupName) -->
    <div><button (click)="formGroupSubmitButton()">Submit Button Name</button></div>

    <div><button (click)="formGroupSubmitButton()" [disabled]="!formGroupName.valid">
        Submit Button Name with disable feature according to validators</button>
    <!--    if formGroupName.valid return true then form is valid   if formGroupName.valid return false then form is invalid  -->
    </div>


  <!-- with  (ngSubmit)="formSubmitButton() or (ngSubmit)="formSubmitButton(formGroupName) -->
    <div><button type="submit">Submit Button Name</button></div>
    <div><button type="submit" [disabled]="!formGroupName.valid">
        Submit Button Name with disable feature according to validators</button></div>
<!-- or     :-  you can add 'type="submit"'   or        you can't add 'type="submit"'-->

  <!-- with  (ngSubmit)="formSubmitButton() or (ngSubmit)="formSubmitButton(formGroupName) -->
    <div><button >Submit Button Name</button></div>
    <div><button  [disabled]="!formGroupName.valid">
        Submit Button Name with disable feature according to validators</button></div>



<!-- set form button -->
    <div><button (click)="setForm()">Set Form</button></div>


<!-- Reset form button -->
        <div><button (click)="formGroupName.reset()">Reset Button Name</button></div>
        <!-- or -->
        <div><button (click)="resetForm()">Reset Button Name by function</button></div>

</form>
<div><button  (click)="addFormControlIntoFormArray1()">add Form Control Into Form Array1</button></div>
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

// method-1
//  this FormArray is created underFormGroup
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

    'FormArray1' : new FormArray([]),
    'FormArray2' : new this.formBuilder.array([]),

  }) ;






  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {



    // tracks  ValueChanges
    // it tracks  ValueChanges in  particular form control
    this.formGroupName.get('FormControlName1')?.valueChanges.subscribe((data: any)=>{
      console.log("this.formGroupName.get('FormControlName2')?.valueChanges.subscribe     data " , data)
    })
    // it tracks  ValueChanges in full form
    this.formGroupName.valueChanges.subscribe((data: any)=>{
      console.log("this.formGroupName.valueChanges.subscribe     data " , data)
    })



    // tracks  statusChanges
    // it tracks  statusChanges in  particular form control
    this.formGroupName.get('FormControlName1')?.statusChanges.subscribe((data: any)=>{
      console.log("this.formGroupName.get('FormControlName2')?.statusChanges.subscribe     data " , data)
    })
    // it tracks  statusChanges in full form
    this.formGroupName.statusChanges.subscribe((data: any)=>{
      console.log("this.formGroupName.statusChanges.subscribe     data " , data)
    })

  }

  // tracks  ValueChanges and statusChanges
  // if you define ValueChanges/statusChanges inside ngOnInit method ,  
  // then you don't need create a seperate event function
  formChangesTrack(): void {
    console.log("value changed")
    // tracks  ValueChanges
    // it tracks  ValueChanges in  particular form control
    this.formGroupName.get('FormControlName1')?.valueChanges.subscribe((data: any)=>{
      console.log("this.formGroupName.get('FormControlName2')?.valueChanges.subscribe     data " , data)
    })
    // it tracks  ValueChanges in full form
    this.formGroupName.valueChanges.subscribe((data: any)=>{
      console.log("this.formGroupName.valueChanges.subscribe     data " , data)
    })



    // tracks  statusChanges
    // it tracks  statusChanges in  particular form control
    this.formGroupName.get('FormControlName1')?.statusChanges.subscribe((data: any)=>{
      console.log("this.formGroupName.get('FormControlName2')?.statusChanges.subscribe     data " , data)
    })
    // it tracks  statusChanges in full form
    this.formGroupName.statusChanges.subscribe((data: any)=>{
      console.log("this.formGroupName.statusChanges.subscribe     data " , data)
    })
  }




// submit button of form


  // with  (ngSubmit)="formSubmitButton(formGroupName)"  in html file
  formGroupSubmitButton(formGroupName: { value: any; }){
    console.log("formGroupName.value  :-  ",formGroupName.value)

  // with  (ngSubmit)="formSubmitButton()"  in html file      or
  // without  (ngSubmit)="formSubmitButton()"  or (ngSubmit)="formSubmitButton(formGroupName)"    in html file   
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

    // after submitting form then resetted form  :- if you want you can use
    this.formGroupName.reset()
 
    // 
  }


  // Reset form  by function
  resetForm(){
    this.formGroupName.reset();
  }


// Form Array
    // getter for FormArray
   get FormArray1() :FormArray{ // this is  to get formArray  from form Group
    return this.formGroupName.controls["FormArray1"] as FormArray; // it works as an array , it means  we are getting an array 
  }


  // add  formContrls to  form Array
  addFormControlIntoFormArray1(){
    let formArr = this.formGroupName.get('FormArray1') as FormArray // or let empArr = this.FormArray1

    let FormGroup1ForFormArray1 = this.fb.group({
    'FormControlName1ForFormArray1': new FormControl('Value Here',   [  Validators.minLength(4),Validators.required ,Validators.maxLength(8) ] 
                                        ),
    // Validators.compose is used for re-use :- you can check on google
    'FormControlName2ForFormArray1': new FormControl('Value Here',  Validators.compose([
                                                                            Validators.minLength(4),   
                                                                            Validators.required , 
                                                                            Validators.maxLength(8)
                                                                        ]) 
                                        ),
    'FormControlName3ForFormArray1': new FormControl(),
    })
    formArr.push(FormGroup1ForFormArray1);  // or this.employeeDetails.push(empDetails)
  }
  // remove  formContrls to  form Array
  deleteControlFromFormArray1(Index: number) {
    this.FormArray1.removeAt(Index);
  }

}

```

### Example :-

**add-customer.component.html**


```html
<p>loan-types works!</p>

<!-- 
   with  (ngSubmit)="formSubmitButton(FormBulder)
 -->

<div class="ByFormBulder">
    <h1> create the form with the help of FormBuilder For Set Purpous With The Help Of SetValue</h1>
    <h1>    with """'(ngSubmit)="formSubmitButtonWithNgSubmit(formGroupName)"'"" </h1>

    <!-- <form #form="ngForm" [formGroup]="FormBulder" (ngSubmit)="formSubmitButtonWithNgSubmit()"> -->
    <form #form="ngForm" [formGroup]="FormBulder" (ngSubmit)="formSubmitButtonWithNgSubmit(FormBulder)" >
        <!-- <div><input type="text" formControlName="firstFormControlName"  (blur)="formValueChanges()"></div> -->
        <!-- <div><input type="text" formControlName="firstFormControlName"  (keyup)="formValueChanges()"></div> -->
        <!-- <div><input type="text" formControlName="firstFormControlName"  (keypress)="formValueChanges()"></div> -->
        <div><input type="text" formControlName="firstFormControlName"></div>
        <div *ngIf="FormBulder.get('firstFormControlName')?.hasError('required')" >
            firstFormControlName is required</div>
        <div *ngIf="FormBulder.get('firstFormControlName')?.hasError('minlength')" >
            firstFormControlName is minlength</div>
        <div *ngIf="FormBulder.get('firstFormControlName')?.hasError('maxlength')" >
            firstFormControlName is maxlength</div>
        <div *ngIf="FormBulder.get('firstFormControlName')?.hasError('required') && FormBulder.get('firstFormControlName')?.touched" >firstFormControlName is required && touched</div>
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
    

    <!--    without       <form [formGroup]="form" (ngSubmit)="onSignln(form)"> ... </form>     -->
        <!-- <div><button (click)="formSubmitButtonWithoutNgSubmit()">
            Submit Button Name For Set Purpous With The Help Of SetValue </button></div>
        <div><button (click)="formSubmitButtonWithoutNgSubmit()" [disabled]="!FormBulder.valid">
            Submit Button Name For Set Purpous With The Help Of SetValue with disable feature </button></div> -->

    <!--    with       <form [formGroup]="form" (ngSubmit)="onSignln(form)"> ... </form>     -->
        <div><button type="submit">
            Submit Button Name For Set Purpous With The Help Of SetValue </button></div>
        <div><button type="submit" [disabled]="!FormBulder.valid">
            Submit Button Name For Set Purpous With The Help Of SetValue with disable feature </button></div>


        <div><button (click)="SetValueButton()">set Button Name</button></div>



        <div><button (click)="FormBulder.reset()">Reset Button Name</button></div>
        <div><button (click)="resetForm()">Reset Button Name by function</button></div>
    </form>
</div>
```

**add-customer.component.ts**

```ts
import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


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
    this.FormBulder.get('firstFormControlName')?.valueChanges.subscribe((data: any)=>{
      console.log("this.FormBulder.valueChanges.subscribe     data " , data)
    })

    // it tracks  statusChanges in full form
    this.FormBulder.statusChanges.subscribe(data=>{
      console.log("this.FormBulder.statusChanges.subscribe     data " , data)
    })

    // it tracks  statusChanges in  particular form control
    this.FormBulder.get('firstFormControlName')?.statusChanges.subscribe((data: any)=>{
      console.log("this.FormBulder.get('firstFormControlName')?.statusChanges.subscribe      data " , data)
    })
  }

  ngOnInit(): void {
    // it tracks  valueChanges in full form
    // this.FormBulder.valueChanges.subscribe(data=>{
    //   console.log("this.FormBulder.valueChanges.subscribe     data " , data)
    // })

    // it tracks  valueChanges in  particular form control
    this.FormBulder.get('firstFormControlName')?.valueChanges.subscribe((data: any)=>{
      console.log("this.FormBulder.valueChanges.subscribe     data " , data)
    })

    // it tracks  statusChanges in full form
    this.FormBulder.statusChanges.subscribe(data=>{
      console.log("this.FormBulder.statusChanges.subscribe     data " , data)
    })

    // it tracks  statusChanges in  particular form control
    this.FormBulder.get('firstFormControlName')?.statusChanges.subscribe((data: any)=>{
      console.log("this.FormBulder.get('firstFormControlName')?.statusChanges.subscribe      data " , data)
    })
  }


  // formSubmitButtonWithNgSubmit(){
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
    this.FormBulder.reset()

  
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
   
  }

  resetForm(){
    this.FormBulder.reset();
  }


}

```



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


# Reactive  form example  by cordis:- 

**crate-update-deployment-lock.component.html**

```html
<div class="overlay _w-100 _h-100" [ngClass]="{'overlay-show': canShow}" (click)="close(false)"></div>
<div class="sidebar _flex-column _pt-10 _pl-15 _pr-15" [ngClass]="{'sidebar-show': canShow}">
    <div class="_flex-box _jc-sb _mt-10 _mb-10">
        <div class="_mb-0 _heading_1">{{rtDeployment?.deploymentNamespace}} - {{rtDeployment?.isLocked?"Unlock":"Lock"}} Deployment</div>
        <button mat-icon-button (click)="close(false)" class="_close-icon"></button>
    </div>
    <div class="_flex-1">
        <form #form="ngForm" [formGroup]="lockForm" (ngSubmit)="onSubmit()" class="_h-100 _flex-column">
            <div class="_flex-1 _mt-15">
                <div class="_flex-box _jc-sb _mb-10">
                    <mat-form-field appearance="outline" class="_w-45">
                        <mat-label>Desired Action</mat-label>
                        <mat-select 
                            formControlName="action"
                            required>
                            <mat-option value="lock" [disabled]="rtDeployment?.isLocked&&lockForm.get('actionType').value==='indefinite'">Lock</mat-option>
                            <mat-option value="unlock" [disabled]="!rtDeployment?.isLocked&&lockForm.get('actionType').value==='indefinite'">Unlock</mat-option>
                        </mat-select>
                        <mat-error *ngIf="lockForm.get('action').hasError('required')">This field is required</mat-error>
                    </mat-form-field>
                    <mat-form-field appearance="outline" class="_w-45">
                        <mat-label>Action Type</mat-label>
                        <mat-select 
                            formControlName="actionType"
                            (selectionChange)="onActionTypeSelect($event)"
                            required>
                            <mat-option value="indefinite">Indefinite</mat-option>
                            <mat-option value="duration">Scheduled</mat-option>
                            <mat-option value="cronJob" disabled>Cron Job</mat-option>
                        </mat-select>
                        <mat-error *ngIf="lockForm.get('actionType').hasError('required')">This field is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="_w-100" *ngIf="lockForm.get('actionType').value==='duration'">
                    <h4 class="_mb-10">Time range</h4>
                    <mat-form-field appearance="outline" class="_mr-10 _w-100">
                        <mat-label>From</mat-label>
                        <input 
                            matInput 
                            placeholder="Choose a date" 
                            formControlName="fromDateTime"
                            [ngxMatDatetimePicker]="fromPicker" 
                            [min]="minDateTime"
                            readonly>
                        <mat-datepicker-toggle 
                            matSuffix 
                            [for]="fromPicker"></mat-datepicker-toggle>
                        <ngx-mat-datetime-picker 
                            #fromPicker 
                            [showSeconds]="true" 
                            [enableMeridian]="true"></ngx-mat-datetime-picker>
                        <mat-error *ngIf="lockForm.get('fromDateTime').hasError('required')">This field is required</mat-error>
                    </mat-form-field>
                    <mat-form-field appearance="outline" class="_mr-10 date-time-picker _w-100">
                        <mat-label>To</mat-label>
                        <input 
                            matInput 
                            placeholder="Choose a date" 
                            formControlName="toDateTime"
                            [ngxMatDatetimePicker]="toPicker" 
                            [min]="minDateTime"
                            readonly> 
                        <mat-datepicker-toggle 
                            matSuffix 
                            [for]="toPicker"></mat-datepicker-toggle>
                        <ngx-mat-datetime-picker 
                            #toPicker 
                            [showSeconds]="true" 
                            [enableMeridian]="true"></ngx-mat-datetime-picker>
                        <mat-error *ngIf="lockForm.get('toDateTime').hasError('required')">This field is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="_w-100">
                    <mat-form-field class="_w-100" appearance="outline">
                        <mat-label>Action Description</mat-label>
                        <textarea matInput 
                            type="text"
                            name="lockDescription" 
                            class="textareaLockDescription" 
                            placeholder="Action description" 
                            formControlName="description"
                            required
                        ></textarea>
                        <mat-error *ngIf="lockForm.get('description').hasError('required')">This field is required</mat-error>
                        <mat-error *ngIf="lockForm.get('description').hasError('invalidContent')">Please put valid description</mat-error>
                      </mat-form-field>
                </div>
            </div>
            <div class="footer _flex-box _jc-r _pt-10 _pb-10">
                <button mat-stroked-button 
                    type="submit"
                    class="_flex-box _jc-c"
                    [disabled]="lockForm.invalid||isSaving" 
                >
                    <div *ngIf="isSaving" class="_pt-10 _pb-10">
                        <mat-spinner diameter='20' ></mat-spinner>
                    </div>
                    <div *ngIf="!isSaving">Done</div>
                </button>
            </div>

        </form>
    </div>
</div>
```

**crate-update-deployment-lock.component.ts**

```ts
import { Component, Input, OnInit, ChangeDetectorRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { DateTimeService } from 'src/app/services/date-time.service';
import { globalUrls } from '../../urls';

@Component({
  selector: 'crate-update-deployment-lock',
  templateUrl: './crate-update-deployment-lock.component.html',
  styleUrls: ['./crate-update-deployment-lock.component.scss']
})
export class CrateUpdateDeploymentLockComponent implements OnInit {

  @Input() canShow: boolean = false;
  @Input() rtDeployment: any;
  @Output() onPanelClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild("form") form;

  lockForm = new FormGroup({
    actionType: new FormControl("indefinite"),
    action: new FormControl(""),
    description: new FormControl("", [Validators.required, contentValidator]),
    fromDateTime: new FormControl(),
    toDateTime: new FormControl()
  });

  isSaving: boolean = false;
  minDateTime;

  constructor(
    private cd: ChangeDetectorRef,
    private api: ApiService,
    private snackbar: MatSnackBar,
    private dateTime: DateTimeService
  ) { }

  ngOnInit(): void {
    this.minDateTime = new Date();
  }

  close(response: boolean){
    this.onPanelClose.emit(response);
    this.lockForm.reset();
    this.form.resetForm();
    this.lockForm.patchValue({
      actionType: "indefinite"
    });
  }

  onSubmit(){
    if (this.lockForm.invalid) return;
    this.isSaving=true;

    let payload: any = {
      "deploymentId": this.rtDeployment.deploymentId,
      "desiredAction": this.lockForm.get("action").value,
      "actionType": this.lockForm.get("actionType").value,
      "actionDescription": this.lockForm.get("description").value,
    }

    if(this.lockForm.get('actionType').value==='duration'){
      payload["actionStartTime"] = this.dateTime.getISOString(this.lockForm.get("fromDateTime").value);
      payload["actionEndTime"] = this.dateTime.getISOString(this.lockForm.get("toDateTime").value);
    }
    
    this.api.postData(globalUrls.rtDeploymentHasLockUnlockCreateUpdate, payload).subscribe((data: any) => {
      this.snackbar.open("Operation Successful", "Close", {duration: 3000});
      this.isSaving = false;
      this.close(true)
    }, err => {
      this.isSaving = false;
      this.snackbar.open('There was an error! Please try again', 'Close', { duration: 3000 })
    });
  }

  onActionTypeSelect(event: any){
    if(event?.value === "duration"){
      // this.lockForm.patchValue({
      //   action: "unlock"
      // });
      // this.lockForm.get("action").disable();
      this.lockForm.get('fromDateTime').setValidators([Validators.required]);
      this.lockForm.get('toDateTime').setValidators([Validators.required]);
    } else {
      // this.lockForm.patchValue({
      //   action: ""
      // });
      // this.lockForm.get("action").enable();
      this.lockForm.get('fromDateTime').clearValidators();
      this.lockForm.get('toDateTime').clearValidators();
    }
    this.lockForm.get('fromDateTime').updateValueAndValidity();
    this.lockForm.get('toDateTime').updateValueAndValidity();
    this.cd.detectChanges();
  }

}

export function contentValidator(control: AbstractControl) {
  if(control?.value!==""&&control?.value?.trim()===""){
    return {invalidContent: true};
  }
  return null;
}
```