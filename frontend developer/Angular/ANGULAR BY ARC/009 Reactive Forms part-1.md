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

# Reactive Forms Complete Tutorial

## Reactive Forms Complete Tutorial by ARC

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

### Reactive Forms - Misconception

* Reactive Forms are tough.
* Reactive forms are very complex.
* Reactive forms are difficult to learn and implement.
* Reactive forms are only for "complex" applications.
* Adding custom validations are tricky in Reactive Forms.

## Reactive Forms Complete Tutorial by  Angular.io

# Reactive Forms. FormGroup, FormControl For Beginners| Angular 10 Tutorial

## Reactive Forms. FormGroup, FormControl For Beginners by ARC

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
### important notes

```js

AppModule

    UsersModu1es -> ReactiveFormModu1e
        add-user -> component
            Reactive

Reactive Forms
    Form
        Elements
            Input   -> FormControl
            Textarea   -> FormControl
            buttons   -> FormControl
            checkbox   -> FormControl
            radio   -> FormControl
            select    -> FormControl
            image   -> FormControl
    FormGroup
        Each element is a FormControl
        when one or more formControl are grouped together - we call it formGroup
    Form
        FormControlName


    formControlName = "key"   is manadatory for every   input,select&option,textarea,etc
    basically we are writing  formControlName instead of name attribute

    Form
        FormControlName

    FormBuilder 
        - its an abstraction layer which makes it easy to design and builď out forms  
        - FormBuilder to work when complex from structure
            Add / Remove
            Array of FormControls

        - FormBuilder has 3 important things
            FormGroup
            FormArray
            FormControl

        - `FormBuiIder` is the preferred one
        - `FormBui1der` break down your form into smaller pieces of code
          - which is reusable and simple to maintain
        
```

* Example #1 -  Basic Form
    * Input type text
    * textarea
* Example #2 -  `FormBui1der`
  * Input type radio
  * Input type checkbox
* Example #3 -  Select Checkbox
* Example #4 -  Dynamic Elements
  * Add new FormContr01
  * Remove FormContor1
* Example #5 -  Arrays



### syntax

**in html file**

```html
<p>loan-types works!</p>

<form [formGroup]="formGroupName">
    <div><input type="text" formControlName="FormControlName"></div>
    <!--  formControlName = "key"   is manadatory for every   input,select&option,textarea,etc -->
    <!-- basically we are writing  formControlName instead of name attribute -->

    <div><button (click)="formGroupSubmitButton()">Submit Button Name</button></div>
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

  formGroupName : FormGroup = new FormGroup({
    'FormControlName': new FormControl(),
  }) ;

  constructor() { }

  ngOnInit(): void {
  }

  formGroupSubmitButton(){
    console.log('this.formGroupName.value :-  ',this.formGroupName.value)
    console.log('this.formGroupName :-  ',this.formGroupName)
    console.log('this.formGroupName.root.value :-  ',this.formGroupName.root.value)
  }

}

```

### example

**loan-types.component.html**

```html
<p>loan-types works!</p>

<form [formGroup]="formGroupName">
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
  
  <div><mat-slide-toggle formControlName="ninethFormControlName" >Slide me!</mat-slide-toggle></div>

    <div><button (click)="formGroupSubmitButton()">Submit Button Name</button></div>
</form>


<!-- formControlName = "key"           is manadatory for every     input,select&option,textarea,toggle,etc

this.formGroupName.root.value :{eightthFormContr01Name : "tacos -2",fifth FormContr01Name : "vip",firstFormContr01Name: "vs",fourth FormContr01Name : undefined,ninethFormContr01Name: true,second FormContr01Name: "dadasa",seventhFormContr01Name : ['zeroReady',' partialReady ' ],sixth FormContr01Name : "FAILED",thirdFormContr01Name: true }

this.formGroupName.value :{eightthFormContr01Name : "tacos -2",fifth FormContr01Name : "vip",firstFormContr01Name: "vs",fourth FormContr01Name : undefined,ninethFormContr01Name: true,second FormContr01Name: "dadasa",seventhFormContr01Name : ['zeroReady',' partialReady ' ],sixth FormContr01Name : "FAILED",thirdFormContr01Name: true }

this.formGroupName.value :          {
                                        eightthFormContr01Name : "tacos -2",
                                        fifth FormContr01Name : "vip",
                                        firstFormContr01Name: "vs",
                                        fourth FormContr01Name : undefined,
                                        ninethFormContr01Name: true,
                                        second FormContr01Name: "dadasa",
                                        seventhFormContr01Name : ['zeroReady',' partialReady ' ],
                                        sixth FormContr01Name : "FAILED",
                                        thirdFormContr01Name: true,
                                        [[Prototype]] : Object,
                                    }
this.formGroupName.root.value :    {
                                        eightthFormContr01Name : "tacos -2",
                                        fifth FormContr01Name : "vip",
                                        firstFormContr01Name: "vs",
                                        fourth FormContr01Name : undefined,
                                        ninethFormContr01Name: true,
                                        second FormContr01Name: "dadasa",
                                        seventhFormContr01Name : ['zeroReady',' partialReady ' ],
                                        sixth FormContr01Name : "FAILED",
                                        thirdFormContr01Name: true,
                                        [[Prototype]] : Object,
                                    }
-->

```

**loan-types.component.ts**

```ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


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

  formGroupName : FormGroup = new FormGroup({
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
  constructor() { }

  ngOnInit(): void {
    
  }

  formGroupSubmitButton(){
    console.log('this.formGroupName.value :-  ',this.formGroupName.value)
    console.log('this.formGroupName :-  ',this.formGroupName)
    console.log('this.formGroupName.root.value :-  ',this.formGroupName.root.value)
  }

}

```

**app-routing.module.ts**

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ClientsComponent } from './clients/clients.component';
import { LeadsGridComponent } from './leads/leads-listing/leads-grid/leads-grid.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { LoansComponent } from './loans/loans.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PreferencesCheckGuard } from './preferences-check.guard';
import { ProductComponent } from './product/product.component';
import { ResolverGuard } from './resolver.guard';
import { SearchComponent } from './search/search.component';
import { SuperAdminGuard } from './super-admin.guard';
import { UnsavedGuard } from './unsaved.guard';



const routes: Routes = [
 
  { 
    path:'product/:id' , 
    component:ProductComponent
  } ,
  { 
    path:'loan/types' , 
    component:LoanTypesComponent
  } ,
  { 
    path:'product/:productId/photos/:photoId' , 
    component:ProductComponent
  } ,
  {
    path:'clients',
    component: ClientsComponent,
    canActivate:[AuthGuard]  // it takes more than one routes
  },
  
  {
    path:'leads',
    component:LeadsGridComponent,
    // canActivate:[AuthGuard , AdminGuard]  // it takes more than one routes // all guard should return access(means true)
    resolve:{
      data:ResolverGuard , // whenever this path is trying to be loaded before route is activated
    }
    //  when i will be launch this route ResolverGuard will be resolve f irst then this route will be initiated
  },
  {
    path:'search',
    component:SearchComponent,
    canDeactivate:[UnsavedGuard]
  },

  // CanActivateChile Auth Guard
  {
    path:'admin',
    canActivate:[SuperAdminGuard] ,// http://localhost:4300/app1#/admin will work if SuperAdminGuard will give Access.
    children:[
      { path:'', component:AdminComponent }, //  http://localhost:4300/app1#/admin will work
      {
        path:'',
        canActivateChild:[AdminAccessGuard],
        children:[
          { path:'manage', component:AdminManageComponent }, //  http://localhost:4300/app1#/admin/manage will work
          { path:'delete', component:AdminDeleteComponent }, //  http://localhost:4300/app1#/admin/delete will work
          { path:'edit', component:AdminEditComponent }, //  http://localhost:4300/app1#/admin/edit will work
        ]
      },
    ]
  },
 
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },  // lazy modules
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },  // lazy modules
 


  { path: 'preferences', 
     canLoad:[PreferencesCheckGuard],
    loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule) 
  },  // lazy modules



  {
    path:'**',
    component:PageNotFoundComponent
  }
];


@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

**app.module.ts**

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';  //  importing routing module
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component'  
import { HashLocationStrategy, LocationStrategy , PathLocationStrategy } from '@angular/common';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component'; // import routing strategy here



// all angular material API imported  started
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatCommonModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// all angular material API imported  ended


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UsersComponent,
    LoansComponent,
    LoanTypesComponent,
    AddLoansComponent,
    P1Component,
    P2Component,
    P3Component,
    P4Component,
    ProductComponent,
    ClientsComponent,
    ProfileComponent,
    SearchComponent,
    PageNotFoundComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // routing module add in  imports array
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
        // all angular material module imported started
        MatAutocompleteModule,MatBadgeModule,MatBottomSheetModule,MatButtonModule,MatButtonToggleModule,
        MatCardModule,MatCheckboxModule,MatChipsModule,MatCommonModule,MatDatepickerModule,MatDialogModule,
        MatDividerModule,MatExpansionModule,MatFormFieldModule,MatGridListModule,MatIconModule,MatInputModule,
        MatListModule,MatMenuModule,MatPaginatorModule,MatProgressBarModule,MatProgressSpinnerModule,
        MatRadioModule,MatRippleModule,MatSelectModule,MatSidenavModule,MatSlideToggleModule,MatSliderModule,
        MatSnackBarModule,MatSortModule,MatStepperModule,MatTableModule,MatTabsModule,MatToolbarModule,MatTooltipModule,
        MatTreeModule,
        // all angular material module imported started
    
  ],
  providers: [
    {provide: LocationStrategy , useClass:HashLocationStrategy} , // add routing strategy in providers array
    // {provide: LocationStrategy , useClass:PathLocationStrategy} // add routing strategy in providers array
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

```

**app.component.html**

```html
<h1 class="c1">{{title}}</h1>

<div>
  <mat-slide-toggle>Slide me!</mat-slide-toggle>
</div>
<a [routerLink]="'/customers/add'">Add customers - template form</a>
<br>
<a [routerLink]="'/loan/types'">Loan types  - reactive form</a>
<br>
<router-outlet></router-outlet>  <!-- primary outlet --> 

```

![reactive form field](2022-12-19-12-05-43.png)
![after filled data into form then get value in console](2022-12-19-12-06-02.png)

## Reactive Forms. FormGroup, FormControl For Beginners by  Angular.io

# Reactive Forms. FormBuilder

## Reactive Forms. FormBuilder by ARC

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

### syntax

**in html file**

```html
<form [formGroup]="formGroupName">
    <div><input type="text" formControlName="FormControlName"></div>
    <!--  formControlName = "key"   is manadatory for every   input,select&option,textarea,etc -->
    <!-- basically we are writing  formControlName instead of name attribute -->

    <div><button (click)="formGroupSubmitButton()">Submit Button Name</button></div>
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

// method-1
//  this FormGroup is created with the help of  FormGroup constructor
  formGroupName : FormGroup = new FormGroup({
    'FormControlName': new FormControl(),
  }) ;

// method-2
//  this FormGroup is created with the help of  FormBuilder
  formGroupName : FormGroup = this.formBuilder.group({
    'FormControlName': new FormControl(),
  }) ;



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

### example :- 

**loan-types.component.html**

```html
<p>loan-types works!</p>

<div class="ByFormGroupOnly">
    <form [formGroup]="formGroupNameForFormGroupOnly">
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
    
        <div><button (click)="formGroupSubmitButtonForFormGroupOnly()">Submit Button Name</button></div>
    </form>
</div>



<!-- formControlName = "key"           is manadatory for every     input,select&option,textarea,toggle,etc

this.formGroupName.root.value :{eightthFormContr01Name : "tacos -2",fifth FormContr01Name : "vip",firstFormContr01Name: "vs",fourth FormContr01Name : undefined,ninethFormContr01Name: true,second FormContr01Name: "dadasa",seventhFormContr01Name : ['zeroReady',' partialReady ' ],sixth FormContr01Name : "FAILED",thirdFormContr01Name: true }

this.formGroupName.value :{eightthFormContr01Name : "tacos -2",fifth FormContr01Name : "vip",firstFormContr01Name: "vs",fourth FormContr01Name : undefined,ninethFormContr01Name: true,second FormContr01Name: "dadasa",seventhFormContr01Name : ['zeroReady',' partialReady ' ],sixth FormContr01Name : "FAILED",thirdFormContr01Name: true }

this.formGroupName.value :          {
                                        eightthFormContr01Name : "tacos -2",
                                        fifth FormContr01Name : "vip",
                                        firstFormContr01Name: "vs",
                                        fourth FormContr01Name : undefined,
                                        ninethFormContr01Name: true,
                                        second FormContr01Name: "dadasa",
                                        seventhFormContr01Name : ['zeroReady',' partialReady ' ],
                                        sixth FormContr01Name : "FAILED",
                                        thirdFormContr01Name: true,
                                        [[Prototype]] : Object,
                                    }
this.formGroupName.root.value :    {
                                        eightthFormContr01Name : "tacos -2",
                                        fifth FormContr01Name : "vip",
                                        firstFormContr01Name: "vs",
                                        fourth FormContr01Name : undefined,
                                        ninethFormContr01Name: true,
                                        second FormContr01Name: "dadasa",
                                        seventhFormContr01Name : ['zeroReady',' partialReady ' ],
                                        sixth FormContr01Name : "FAILED",
                                        thirdFormContr01Name: true,
                                        [[Prototype]] : Object,
                                    }


-->


<div class="ByFormBulder">
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


```

**loan-types.component.ts**

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

```


## Reactive Forms. FormBuilder by  Angular.io

# Reactive Forms. Set Form Values

## Reactive Forms. Set Form Values by ARC


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
    <div><input type="text" formControlName="FormControlName"></div>
    <!--  formControlName = "key"   is manadatory for every   input,select&option,textarea,etc -->
    <!-- basically we are writing  formControlName instead of name attribute -->

    <div><button (click)="formGroupSubmitButton()">Submit Button Name</button></div>
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

// method-1
//  this FormGroup is created with the help of  FormGroup constructor
  formGroupName : FormGroup = new FormGroup({
    'FormControlName': new FormControl(),
  }) ;

// method-2
//  this FormGroup is created with the help of  FormBuilder
  formGroupName : FormGroup = this.formBuilder.group({
    'FormControlName': new FormControl(),
  }) ;



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

## Reactive Forms. Set Form Values by  Angular.io

# Reactive Forms. Read Form Values

## Reactive Forms. Read Form Values by ARC

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
