# Topic

55. Angular Forms Tutorial
58. Angular Template Driven Forms Tutorial
59. Angular Forms Validation Tutorial
60. Angular Reset Forms Tutorial
61. Angular Set Form Value Tutorial

# Angular Forms Tutorial

## Angular Forms Tutorial by ARC

### Forms - Introduction

* Forms are a very integral and essential building blocks of "almost" apps
* Common form examples we can see are
  * Login
  * Forgot
  * Register
  * Checkout form
  * Contact Us
* Forms allows us to gather information and data from users
* Good way to interact with the users and almost all websites will need forms in some or other way
* We can use any CSS framework of our choice — Bootstrap or Material Design.

### Angular Support for Forms

* Two Data Binding
* Change Tracking
* Validations
* Error Handling
* Unit testing

### Types of Forms in Angular

* Static / Template Driven Forms
* Dynamic / Reactive Forms

### Static or Template Driven Forms

* Easy to use
* Template driven forms are simple and straight forward
* All the validations, form elements are all defined in the template file
* We will need to import **FormsModuIe** in app module to work with Template driven forms

### Dynamic or Reactive or Model Driven Forms

* All the form elements, user interactions and validations are handled in the component class
* We will make use of Angular's built in **formGroup** and **formControI**
* Can control better data binding
* Exclusive define custom regular expression patterns of error handling
* We will need to import **ReactiveFormsModuIe** in our app module
* Very flexible and allows users to define, develop complex requirements of forms
* More logic in the component class and less in HTML mark up itself.

### Which is better — Template driven Forms or Reactive Forms?

#### Template Driven Forms

• If your application forms are simple straight forward
• Fixed static form fields and elements
• No complex validations or pattern matching

#### Reactive Forms

• If your application forms are complex.
• Uses multiple dynamic components.
• Advanced validation requirements.
• Dependent form elements.
• Dynamic form generation based on user preferences.

## Angular Forms Tutorial by  Angular.io


# Angular Template Driven Forms Tutorial

## Angular Template Driven Forms Tutorial by ARC

### Template Driven Forms - Introduction

* Easy to use.
* Template driven forms are simple and straight forward.
* All the validations, form elements are all defined in the template file.
* Forms are tracked automatically.
* Tracked form data traverses via various states (pristine etc).
* Uses Two-Way Data Binding techniques to bind data.
* Most of the code resides in template file.
* Validations are mostly the default HTML5 validations.
* Minimal component code as most of the code is in template file.
* Unit testing will be a challenge.

### Step by Step Process for Template Driven Forms

#### Step #1 — Import and Add in the FormsModule in the app.module.ts

* For template driven forms — `FormsModule` needs to be imported
* If we do NOT import this — we will get error when doing two way data binding
* Add the module into the array list of imports
  
#### Step #2 — Create the form in app.component.html

* `ngForm`
  * Form name as template variable using for e.g #10ginForm
* `ngModel`
  * Every form field should have a -name- attribute and ngModel attached to it

### Add different Form Input Types

* Input type="text"
* Input type="radio"
* Input type="checkbox"
* Input type="email"
* Textarea
* Select Drop Down

### syntax :- 

**in html file**

```html
<form #FormName="ngForm" (submit)="submitFormFunctionName(FormName)">
    <div>
        <input type="text" name="inputName" [(ngModel)]="inputValue" > <br>  
        <!-- name = "key"  [(ngModel)]="value"          is manadatory for every input,select&option,textarea,etc-->
    </div>

    <input type="submit" name="SUBMIT" value="Submit Button Value" ><br>
    <!-- <button type="submit">Add customers</button> -->
</form>
```

**in ts file**

```ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class formComponent implements OnInit {

  inputValue:any;

  constructor() { }

  
  ngOnInit(): void {
  }

  submitFormFunctionName(formsValue:NgForm){
    console.log("formsValue.form.value  :-  ",formsValue.form.value)
    console.log("formsValue.value  :-  ",formsValue.value)

    // validations
    // data processing
    // then call API to save this data
  }

}
```

### example :- 

**add-customer.component.html**

```html
<p>add-customer works!</p>

<form #FormName="ngForm" (submit)="submitFormFunctionName(FormName)">
    <div>
        <input type="text" name="FirstName" [(ngModel)]="firstName" > <br>  
        <!-- name = "key"  [(ngModel)]="value"          is manadatory for every input,select&option,textarea,toggle,etc

formsValue.value : {Check : true, FirstName : " raj ", LastName :  " singh", PodsValue : ['zeroReady', 'partialReady'], Radio : undefined, StatusValue :  "FAILED", customerType : "economic", toggle : true }

formsValue.form.value : {Check : true, FirstName : " raj ", LastName :  " singh", PodsValue : ['zeroReady', 'partialReady'], Radio : undefined, StatusValue :  "FAILED", customerType : "economic", toggle : true }

formsValue.form.value : {
                            Check : true,
                            FirstName : " raj ",
                            LastName :  " singh",
                            PodsValue : ['zeroReady', 'partialReady'],
                            Radio : undefined,
                            StatusValue :  "FAILED",
                            customerType : "economic",
                            toggle : true,
                            [[Prototype]] : Object
                        }
formsValue.value :    {
                          Check : true,
                          FirstName : " raj ",
                          LastName :  " singh",
                          PodsValue : ['zeroReady', 'partialReady'],
                          Radio : undefined,
                          StatusValue :  "FAILED"
                          customerType : "economic",
                          toggle : true,
                          [[Prototype]] : Object
                      }
-->
    </div>
    <div>
        <input type="text"  name="LastName" [(ngModel)]="lastName">
    </div>
    <div>
        <input type="checkbox" name="Check" [(ngModel)]="OK">
    </div>
    <div>
        <input type="radio" name="Radio" [(ngModel)]="radio">
    </div>

    <div>
        <select name="customerType" [(ngModel)]="customerType">
            <option value="premium">Premium</option>
            <option value="vip">VIP</option>
            <option value="economic">Economic</option>
        </select>
    </div>

    <div>
        <mat-form-field appearance="outline" class=" _w-50  _ml-10">
            <mat-label>Status</mat-label>
            <mat-select  [multiple]="false" name="StatusValue" [(ngModel)]="statusArr">
        
                <mat-option *ngFor="let groupFilter of status" [value]="groupFilter.value">
                    {{groupFilter.name}}
                </mat-option>
            </mat-select>
        </mat-form-field>
    </div>
    
  
  <div>
    <mat-form-field appearance="outline" class="  _w-50 _ml-10">
        <mat-label>Pods</mat-label>
        <mat-select [multiple]="true" name="PodsValue" [(ngModel)]="podsArr">
            <mat-option *ngFor="let groupFilter of pods" [value]="groupFilter.value">
                {{groupFilter.name}}
            </mat-option>
        </mat-select>
    </mat-form-field>
  </div>
  
  <div>
        <mat-form-field appearance="outline">
        <mat-label>Favorite food</mat-label>
        <mat-select>
          <mat-option *ngFor="let food of foods" [value]="food.value">
            {{food.viewValue}}
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
    <mat-slide-toggle name="toggle" [(ngModel)]="togglevalue">Slide me!</mat-slide-toggle>
  </div>

    <input type="submit" name="SUBMIT" value="Add customers submit"><br>
    <!-- <button type="submit">Add customers</button> -->
</form>

your input is {{firstName}}


<!-- name = "key"  [(ngModel)]="value"          is manadatory for every     input,select&option,textarea,toggle,etc

formsValue.value : {Check : true, FirstName : " raj ", LastName :  " singh", PodsValue : ['zeroReady', 'partialReady'], Radio : undefined, StatusValue :  "FAILED", customerType : "economic", toggle : true }

formsValue.form.value : {Check : true, FirstName : " raj ", LastName :  " singh", PodsValue : ['zeroReady', 'partialReady'], Radio : undefined, StatusValue :  "FAILED", customerType : "economic", toggle : true }

formsValue.form.value : {
                            Check : true,
                            FirstName : " raj ",
                            LastName :  " singh",
                            PodsValue : ['zeroReady', 'partialReady'],
                            Radio : undefined,
                            StatusValue :  "FAILED",
                            customerType : "economic",
                            toggle : true,
                            [[Prototype]] : Object
                        }
formsValue.value :    {
                          Check : true,
                          FirstName : " raj ",
                          LastName :  " singh",
                          PodsValue : ['zeroReady', 'partialReady'],
                          Radio : undefined,
                          StatusValue :  "FAILED"
                          customerType : "economic",
                          toggle : true,
                          [[Prototype]] : Object
                      }
-->
```

![this is the form](./image%20-%20008%20Forms%20Introduction%20in%20ANgular/2022-12-18-13-47-03.png)
![when you click on submit you will be get this one](./image%20-%20008%20Forms%20Introduction%20in%20ANgular/2022-12-18-13-45-47.png)

**add-customer.component.ts**

```ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  firstName :string=" ";
  lastName :string=" ";
  OK :string="OK"
  radio:string="Radio Button";
  podsArr:any;
  statusArr:any;
  customerType:any;
  togglevalue=false;
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
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor() { }

  
  ngOnInit(): void {
  }

  submitFormFunctionName(formsValue:NgForm){
    console.log("formsValue.form.value  :-  ",formsValue.form.value)
    console.log("formsValue.value  :-  ",formsValue.value)

    // validations
    // data processing
    // then call API to save this data
  }

}
```

**customer.module.ts**

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule } from '@angular/forms';


// all angular material API imported  started
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
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
// all angular material API imported  ended

@NgModule({
  declarations: [
    CustomersComponent,AddCustomerComponent
  ],
  imports: [
    CommonModule,CustomersRoutingModule,FormsModule,

    // all angular material module imported started
    MatAutocompleteModule,MatBadgeModule,MatBottomSheetModule,MatButtonModule,MatButtonToggleModule,
    MatCardModule,MatCheckboxModule,MatChipsModule,MatCommonModule,MatDatepickerModule,MatDialogModule,
    MatDividerModule,MatExpansionModule,MatFormFieldModule,MatGridListModule,MatIconModule,MatInputModule,
    MatListModule,MatMenuModule,MatPaginatorModule,MatProgressBarModule,MatProgressSpinnerModule,
    MatRadioModule,MatRippleModule,MatSelectModule,MatSidenavModule,MatSlideToggleModule,MatSliderModule,
    MatSnackBarModule,MatSortModule,MatStepperModule,MatTableModule,MatTabsModule,MatToolbarModule,MatTooltipModule,
    MatTreeModule,
    // all angular material module imported started

  ]
})
export class CustomersModule { }

```

**customers-routing.odule.ts**

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path:'add' , component:AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

```

**app.module.ts**

```ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';  //  importing routing module
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
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
    AppComponent,HighlightDirective,UsersComponent,LoansComponent,LoanTypesComponent,AddLoansComponent,P1Component,P2Component,P3Component,P4Component,ProductComponent,ClientsComponent,ProfileComponent,SearchComponent,PageNotFoundComponent,AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // routing module add in  imports array
    FormsModule,
    BrowserAnimationsModule,
    
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

**app.component.html**

```html
<h1 class="c1">{{title}}</h1>

<div>
  <mat-slide-toggle>Slide me!</mat-slide-toggle>
</div>
<a [routerLink]="'/customers/add'">Add customers</a>
<br>
<router-outlet></router-outlet>  <!-- primary outlet --> 

```


## Angular Template Driven Forms Tutorial by  Angular.io

# Angular Forms Validation Tutorial

## Angular Forms Validation Tutorial by ARC

### Template Driven Forms - Introduction

* Easy to use.
* Template driven forms are simple and straight forward.
* All the validations, form elements are all defined in the template file.
* Forms are tracked automatically.
* Tracked form data traverses via various states (pristine etc).
* Uses Two-Way Data Binding techniques to bind data.
* Most of the code resides in template file.
* Validations are mostly the default HTML5 validations.
* Minimal component code as most of the code is in template file.
* Unit testing will be a challenge.

### Step by Step Process for Template Driven Forms

#### Step #1 — Import and Add in the FormsModule in the app.module.ts

* For template driven forms — `FormsModule` needs to be imported
* If we do NOT import this — we will get error when doing two way data binding
* Add the module into the array list of imports
  
#### Step #2 — Create the form in app.component.html

* `ngForm`
  * Form name as template variable using for e.g #10ginForm
* `ngModel`
  * Every form field should have a -name- attribute and ngModel attached to it

### Add different Form Input Types

* Input type="text"
* Input type="radio"
* Input type="checkbox"
* Input type="email"
* Textarea
* Select Drop Down

### Adding Validations in Template Driven Forms

* Disable the form
  * Disable the form if the form is not valid
* HTML5 validations
  * Required
  * minLength
  * maxLength
  * checked

* if form not validate all thing then form-submit will be disabled
* if form validate all things then form-submit will be enabled
* use `[disabled]="!FormName.valid"` into submit button

### syntax :- 

**in html file**

```html
<form #FormName="ngForm" (submit)="submitFormFunctionName(FormName)">
    <div>
        <input type="text" name="inputName" [(ngModel)]="inputValue" required minlength="10" maxlength="20"> <br>  
        <!-- name = "key"  [(ngModel)]="value"          is manadatory for every input,select&option,textarea,etc-->
    </div>

    <input type="submit" name="SUBMIT" value="Submit Button Value" [disabled]="!FormName.valid"><br>
    <!-- <button type="submit">Add customers</button> -->
</form>
```

**in ts file**

```ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class formComponent implements OnInit {

  inputValue:any;

  constructor() { }

  
  ngOnInit(): void {
  }

  submitFormFunctionName(formsValue:NgForm){
    console.log("formsValue.form.value  :-  ",formsValue.form.value)
    console.log("formsValue.value  :-  ",formsValue.value)

    // validations
    // data processing
    // then call API to save this data
  }

}
```

### example :- 

**add-customer.component.html**

```html
<p>add-customer works!</p>

<form #FormName="ngForm" (submit)="submitFormFunctionName(FormName)">
    <div>
        <input type="text" name="FirstName" [(ngModel)]="firstName" required minlength="10"> <br>  
        <!-- name = "key"  [(ngModel)]="value"          is manadatory for every input,select&option,textarea,etc-->
    </div>
    <div>
        <input type="text"  name="LastName" [(ngModel)]="lastName" required>
    </div>
    <div>
        <input type="checkbox" name="Check" [(ngModel)]="OK"  required> Accept all terms and condition
    </div>
    <div>
        <input type="radio" name="Radio" [(ngModel)]="radio">   Radio
    </div>

    <div>
        <select name="customerType" [(ngModel)]="customerType" required>
            <option value="premium">Premium</option>
            <option value="vip">VIP</option>
            <option value="economic">Economic</option>
        </select>
    </div>

    
    <div>
        <mat-form-field appearance="outline" class=" _w-50  _ml-10">
            <mat-label>Status</mat-label>
            <mat-select  [multiple]="false" name="StatusValue" [(ngModel)]="statusArr" [required]="true">
        
                <mat-option *ngFor="let groupFilter of status" [value]="groupFilter.value">
                    {{groupFilter.name}}
                </mat-option>
            </mat-select>
        </mat-form-field>
    </div>
    
  
  <div>
    <mat-form-field appearance="outline" class="  _w-50 _ml-10">
        <mat-label>Pods</mat-label>
        <mat-select [multiple]="true" name="PodsValue" [(ngModel)]="podsArr" [required]="true">
            <mat-option *ngFor="let groupFilter of pods" [value]="groupFilter.value">
                {{groupFilter.name}}
            </mat-option>
        </mat-select>
    </mat-form-field>
  </div>
  
  <div>
        <mat-form-field appearance="outline">
        <mat-label>Favorite food</mat-label>
        <mat-select name="foodValue" [(ngModel)]="foodArr" [required]="true" >
          <mat-option *ngFor="let food of foods" [value]="food.value" >
            {{food.viewValue}}
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
    <mat-slide-toggle name="toggle" [(ngModel)]="togglevalue" >Slide me!</mat-slide-toggle>
  </div>


    <input type="submit" name="SUBMIT" value="Add customers submit" [disabled]="!FormName.valid"><br>
    <!-- <button type="submit">Add customers</button> -->
</form>

your input is :-        {{firstName}} 

<!-- name = "key"  [(ngModel)]="value"          is manadatory for every     input,select&option,textarea,toggle,etc

formsValue.value : {Check : true, FirstName : " raj shinghania ", LastName :  " singh", PodsValue : ['zeroReady', 'partialReady'], Radio : undefined, StatusValue :  "FAILED", customerType : "economic", foodValue : "steak-0" , toggle : true }

formsValue.form.value : {Check : true, FirstName : " raj shinghania ", LastName :  " singh", PodsValue : ['zeroReady', 'partialReady'], Radio : undefined, StatusValue :  "FAILED", customerType : "economic", foodValue : "steak-0" , toggle : true }

formsValue.form.value : {
                            Check : true,
                            FirstName : " raj shinghania " ,
                            LastName :  " singh",
                            PodsValue : ['zeroReady', 'partialReady'],
                            Radio : false,
                            StatusValue :  "FAILED",
                            customerType : "economic",
                            foodValue : "steak-0" ,
                            toggle : true,
                            [[Prototype]] : Object
                        }
formsValue.value :    {
                          Check : true,
                          FirstName : " raj shinghania ",
                          LastName :  " singh",
                          PodsValue : ['zeroReady', 'partialReady'],
                          Radio : false,
                          StatusValue :  "FAILED"
                          customerType : "economic",
                          foodValue : "steak-0" ,
                          toggle : true,
                          [[Prototype]] : Object
                      }
-->

```

![this is the form](./image%20-%20008%20Forms%20Introduction%20in%20ANgular/2022-12-18-21-59-04.png)
![when you click on submit you will be get this one](./image%20-%20008%20Forms%20Introduction%20in%20ANgular/2022-12-18-21-58-34.png)

**add-customer.component.ts**

```ts

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  firstName :any;
  lastName :any;
  OK:any;
  radio:any=false;
  podsArr:any;
  statusArr:any;
  foodArr:any;
  customerType:any;
  togglevalue:any;
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
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor() { }

  
  ngOnInit(): void {
  }

  submitFormFunctionName(formsValue:NgForm){
    console.log("formsValue.form.value  :-  ",formsValue.form.value)
    console.log("formsValue.value  :-  ",formsValue.value)

    // validations
    // data processing
    // then call API to save this data
  }

}

```


## Angular Forms Validation Tutorial by  Angular.io

# Angular Reset Forms Tutorial

## Angular Reset Forms Tutorial by ARC

### Template Driven Forms - Introduction

* Easy to use.
* Template driven forms are simple and straight forward.
* All the validations, form elements are all defined in the template file.
* Forms are tracked automatically.
* Tracked form data traverses via various states (pristine etc).
* Uses Two-Way Data Binding techniques to bind data.
* Most of the code resides in template file.
* Validations are mostly the default HTML5 validations.
* Minimal component code as most of the code is in template file.
* Unit testing will be a challenge.

### Step by Step Process for Template Driven Forms

#### Step #1 — Import and Add in the FormsModule in the app.module.ts

* For template driven forms — `FormsModule` needs to be imported
* If we do NOT import this — we will get error when doing two way data binding
* Add the module into the array list of imports
  
#### Step #2 — Create the form in app.component.html

* `ngForm`
  * Form name as template variable using for e.g #10ginForm
* `ngModel`
  * Every form field should have a -name- attribute and ngModel attached to it

### Add different Form Input Types

* Input type="text"
* Input type="radio"
* Input type="checkbox"
* Input type="email"
* Textarea
* Select Drop Down

### Adding Validations in Template Driven Forms

* Disable the form
  * Disable the form if the form is not valid
* HTML5 validations
  * Required
  * minLength
  * maxLength
  * checked

* if form not validate all thing then form-submit will be disabled
* if form validate all things then form-submit will be enabled
* use `[disabled]="!FormName.valid"` into submit button

### Reset Template Driven Forms

* Reset the form using
  * Reset method
  * `Form.reset();`


### syntax :- 

**in html file**

```html
<form #FormName="ngForm" (submit)="submitFormFunctionName(FormName)">
    <div>
        <input type="text" name="inputName" [(ngModel)]="inputValue" required minlength="10" maxlength="20"> <br>  
        <!-- name = "key"  [(ngModel)]="value"          is manadatory for every input,select&option,textarea,etc-->
    </div>

    <input type="submit" name="SUBMIT" value="Submit Button Value" [disabled]="!FormName.valid"><br>
    <!-- <button type="submit">Add customers</button> -->

   <button  (click)="resetForm(FormName)">Reset Form</button>
</form>
```

**in ts file**

```ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class formComponent implements OnInit {

  inputValue:any;

  constructor() { }

  
  ngOnInit(): void {
  }

  submitFormFunctionName(formsValue:NgForm){
    console.log("formsValue.form.value  :-  ",formsValue.form.value)
    console.log("formsValue.value  :-  ",formsValue.value)

    // validations
    // data processing
    // then call API to save this data
  }

  resetForm(formsValue:NgForm){
    // formsValue.reset();
    // or
    formsValue.resetForm();
  }

}
```


### Example :-

**add-customer.component.html**

```html
<p>add-customer works!</p>

<form #FormName="ngForm" (submit)="submitFormFunctionName(FormName)">
    <div>
        <input type="text" name="FirstName" [(ngModel)]="firstName" required minlength="10"> <br>  
        <!-- name = "key"  [(ngModel)]="value"          is manadatory for every input,select&option,textarea,etc-->
    </div>
    <div>
        <input type="text"  name="LastName" [(ngModel)]="lastName" required>
    </div>
    <div>
        <input type="checkbox" name="Check" [(ngModel)]="OK"  required> Accept all terms and condition
    </div>
    <div>
        <input type="radio" name="Radio" [(ngModel)]="radio">   Radio
    </div>

    <div>
        <select name="customerType" [(ngModel)]="customerType" required>
            <option value="premium">Premium</option>
            <option value="vip">VIP</option>
            <option value="economic">Economic</option>
        </select>
    </div>

    
    <div>
        <mat-form-field appearance="outline" class=" _w-50  _ml-10">
            <mat-label>Status</mat-label>
            <mat-select  [multiple]="false" name="StatusValue" [(ngModel)]="statusArr" [required]="true">
        
                <mat-option *ngFor="let groupFilter of status" [value]="groupFilter.value">
                    {{groupFilter.name}}
                </mat-option>
            </mat-select>
        </mat-form-field>
    </div>
    
  
  <div>
    <mat-form-field appearance="outline" class="  _w-50 _ml-10">
        <mat-label>Pods</mat-label>
        <mat-select [multiple]="true" name="PodsValue" [(ngModel)]="podsArr" [required]="true">
            <mat-option *ngFor="let groupFilter of pods" [value]="groupFilter.value">
                {{groupFilter.name}}
            </mat-option>
        </mat-select>
    </mat-form-field>
  </div>
  
  <div>
        <mat-form-field appearance="outline">
        <mat-label>Favorite food</mat-label>
        <mat-select name="foodValue" [(ngModel)]="foodArr" [required]="true" >
          <mat-option *ngFor="let food of foods" [value]="food.value" >
            {{food.viewValue}}
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
    <mat-slide-toggle name="toggle" [(ngModel)]="togglevalue" >Slide me!</mat-slide-toggle>
  </div>


    <input type="submit" name="SUBMIT" value="Add customers submit" [disabled]="!FormName.valid"><br>
    <!-- <button type="submit">Add customers</button> -->

    <!-- <input type="submit" ><br> -->
   <button  (click)="resetForm(FormName)">Reset Form</button>
</form>

your input is :-        {{firstName}} 






<!-- name = "key"  [(ngModel)]="value"          is manadatory for every     input,select&option,textarea,toggle,etc

formsValue.value : {Check : true, FirstName : " raj shinghania ", LastName :  " singh", PodsValue : ['zeroReady', 'partialReady'], Radio : undefined, StatusValue :  "FAILED", customerType : "economic", foodValue : "steak-0" , toggle : true }

formsValue.form.value : {Check : true, FirstName : " raj shinghania ", LastName :  " singh", PodsValue : ['zeroReady', 'partialReady'], Radio : undefined, StatusValue :  "FAILED", customerType : "economic", foodValue : "steak-0" , toggle : true }

formsValue.form.value : {
                            Check : true,
                            FirstName : " raj shinghania " ,
                            LastName :  " singh",
                            PodsValue : ['zeroReady', 'partialReady'],
                            Radio : false,
                            StatusValue :  "FAILED",
                            customerType : "economic",
                            foodValue : "steak-0" ,
                            toggle : true,
                            [[Prototype]] : Object
                        }
formsValue.value :    {
                          Check : true,
                          FirstName : " raj shinghania ",
                          LastName :  " singh",
                          PodsValue : ['zeroReady', 'partialReady'],
                          Radio : false,
                          StatusValue :  "FAILED"
                          customerType : "economic",
                          foodValue : "steak-0" ,
                          toggle : true,
                          [[Prototype]] : Object
                      }
-->

```

![if all input filled pr form filled](./image%20-%20008%20Forms%20Introduction%20in%20ANgular/2022-12-18-22-42-48.png)
![after clicking on reset button](./image%20-%20008%20Forms%20Introduction%20in%20ANgular/2022-12-18-22-43-31.png)

**add-customer.component.ts**

```ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  firstName :any;
  lastName :any;
  OK:any;
  radio:any=false;
  podsArr:any;
  statusArr:any;
  foodArr:any;
  customerType:any;
  togglevalue:any;
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
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor() { }

  
  ngOnInit(): void {
  }

  submitFormFunctionName(formsValue:NgForm){
    console.log("formsValue.form.value  :-  ",formsValue.form.value)
    console.log("formsValue.value  :-  ",formsValue.value)

    // validations
    // data processing
    // then call API to save this data
  }
  resetForm(formsValue:NgForm){
    // formsValue.reset();
    formsValue.resetForm();
  }
}
```

## Angular Reset Forms Tutorial by  Angular.io

# Angular Set Form Value Tutorial

## Angular Set Form Value Tutorial by ARC

### Template Driven Forms - Introduction

* Easy to use.
* Template driven forms are simple and straight forward.
* All the validations, form elements are all defined in the template file.
* Forms are tracked automatically.
* Tracked form data traverses via various states (pristine etc).
* Uses Two-Way Data Binding techniques to bind data.
* Most of the code resides in template file.
* Validations are mostly the default HTML5 validations.
* Minimal component code as most of the code is in template file.
* Unit testing will be a challenge.

### Step by Step Process for Template Driven Forms

#### Step #1 — Import and Add in the FormsModule in the app.module.ts

* For template driven forms — `FormsModule` needs to be imported
* If we do NOT import this — we will get error when doing two way data binding
* Add the module into the array list of imports
  
#### Step #2 — Create the form in app.component.html

* `ngForm`
  * Form name as template variable using for e.g #10ginForm
* `ngModel`
  * Every form field should have a -name- attribute and ngModel attached to it

### Add different Form Input Types

* Input type="text"
* Input type="radio"
* Input type="checkbox"
* Input type="email"
* Textarea
* Select Drop Down


### Adding Validations in Template Driven Forms

* Disable the form
  * Disable the form if the form is not valid
* HTML5 validations
  * Required
  * minLength
  * maxLength
  * checked

* if form not validate all thing then form-submit will be disabled
* if form validate all things then form-submit will be enabled
* use `[disabled]="!FormName.valid"` into submit button

### Reset Template Driven Forms

* Reset the form using
  * Reset method
  * `Form.reset();`

### Set Form Value in Template Driven Forms

* Set the form using
  * `Form.setValue()`

### remind points :- ngForm & ngModel & ngModelGroup

> **ngForm**
> Creates a top-level `FormGroup` instance and binds it to a `<form>` element to track aggregated form value and validation status.
> As soon as you import `FormsModule`, this directive becomes active by default on all `<form>` tags.
> You don't need to add a special selector.
>
> * NgForm is used to create a top-level form group Instance, and it binds the form to the given form value.
>
> * Approach:-
>   * Create the Angular app to be used
>   * In app.module.ts import FormsModule.
>   * In app.component.html make a form and store its value in ngForm variable and show its value in a JSON form.
>   * Serve the angular app using ng serve to see the output.

> **ngModel**
>
> * Reconciles value changes in the attached form element with changes in the data model, allowing you to respond to user input with input validation and error handling.
> * The ngModel directive is a directive **that is used to bind the values of the HTML controls** (input, select, and textarea) or any custom form controls, and stores the required user value in a variable and we can use that variable whenever we require that value.
> * It also is used during form validations.

> **ngModelGroup**
>
> * Creates and binds a FormGroup instance to a DOM element
> * The NgModelGroup is used to create a top-level form group Instance, and it binds the form to the given form value.

### syntax :- 

**in html file**

```html
<form #FormName="ngForm" (submit)="submitFormFunctionName(FormName)">
        <div ngModelGroup="ngModel_Group_Name">
          <input type="text"  name="inputName1_With_ngModelGroup" ngModel>
          <!-- name = "key"  [(ngModel)]="value"/ngModel         is manadatory for every input,select&option,textarea,etc-->
          <input type="text"  name="inputName2_With_ngModelGroup" [(ngModel)]="inputValue2_With_ngModelGroup">
          <input type="text"  name="inputName3_With_ngModelGroup" ngModel>
          <input type="text"  name="inputName4_With_ngModelGroup" [(ngModel)]="inputValue4_With_ngModelGroup">
    </div>
    <div>
        <input type="text" name="inputName1_Without_ngModelGroup" [(ngModel)]="inputValue1_Without_ngModelGroup" required minlength="10" maxlength="20"> <br>  
        <input type="text" name="inputName2_Without_ngModelGroup"  ngModel required minlength="10" maxlength="20"> <br>  
        <input type="text" name="inputName3_Without_ngModelGroup" [(ngModel)]="inputValue3_Without_ngModelGroup" required minlength="10" maxlength="20"> <br>  
        <input type="text" name="inputName4_Without_ngModelGroup"  ngModel required minlength="10" maxlength="20"> <br>  
        <!-- name = "key"  [(ngModel)]="value"/ngModel         is manadatory for every input,select&option,textarea,etc-->
    </div>

    <!-- if  (submit)="submitFormFunctionName(FormName)" will use in form tag then use below-->
    <input type="submit" name="SUBMIT" value="Submit Button Value" [disabled]="!FormName.valid"><br>
    <!-- <button type="submit">Submit Button Value</button> -->

    <!-- if  (submit)="submitFormFunctionName(FormName)" will not use in form tag then use below-->
    <!-- <input type="submit" name="SUBMIT" value="Submit Button Value" (click)="formSubmitButton(formName)" [disabled]="!FormName.valid"><br> -->
    <!-- <button type="submit" (click)="formSubmitButton(formName)">Submit Button Value</button> -->


   <button  (click)="resetForm(FormName)">Reset Form</button>

   <button  (click)="setForm(FormName)">Set Form</button>
</form>

<!-- 
  FormName.value :-   {{FormName.value|json}} :- 
  FormName.value :-   {
                          "ngModel_Group_Name":{
                              "inputName1_With_ngModelGroup":"fsfsf",
                              "inputName2_With_ngModelGroup":"sfsfs",
                              "inputName3_With_ngModelGroup":"sfsfsfs",
                              "inputName4_With_ngModelGroup":"sfsfsgsfs"
                          },
                          "inputName1_Without_ngModelGroup":"gsgsgsgsgsg",
                          "inputName2_Without_ngModelGroup":"sgsgg",
                          "inputName3_Without_ngModelGroup":"gsgsg",
                          "inputName4_Without_ngModelGroup":"sgsg"
                      }
 -->

```

**in ts file**

```ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class formComponent implements OnInit {

  inputValue2_With_ngModelGroup:any;
  inputValue4_With_ngModelGroup:any;
  inputValue1_Without_ngModelGroup:any;
  inputValue3_Without_ngModelGroup:any;

  constructor() { }

  
  ngOnInit(): void {
  }

  submitFormFunctionName(formsValue:NgForm){
    console.log("formsValue.form.value  :-  ",formsValue.form.value)
    console.log("formsValue.value  :-  ",formsValue.value)

    // validations
    // data processing
    // then call API to save this data
  }

  resetForm(formsValue:NgForm){
    // formsValue.reset();
    // or
    formsValue.resetForm();
  }

  setForm(formsValue: NgForm) {
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
  }

}
```

### Example :-

**add-customer.component.html**

```html
<p>add-customer works!</p>

<form #FormName="ngForm" (submit)="submitFormFunctionName(FormName)">
    <div>
        <input type="text" name="FirstName" [(ngModel)]="firstName" required minlength="10"> <br>  
        <!-- name = "key"  [(ngModel)]="value"          is manadatory for every input,select&option,textarea,etc-->
    </div>
    <div>
        <input type="text"  name="LastName" [(ngModel)]="lastName" required>
    </div>
    <div>
        <input type="checkbox" name="Check" [(ngModel)]="OK"  required> Accept all terms and condition
    </div>
    <div>
        <input type="radio" name="Radio" [(ngModel)]="radio">   Radio
    </div>

    <div>
        <select name="customerType" [(ngModel)]="customerType" required>
            <option value="premium">Premium</option>
            <option value="vip">VIP</option>
            <option value="economic">Economic</option>
        </select>
    </div>

    
    <div>
        <mat-form-field appearance="outline" class=" _w-50  _ml-10">
            <mat-label>Status</mat-label>
            <mat-select  [multiple]="false" name="StatusValue" [(ngModel)]="statusArr" [required]="true">
        
                <mat-option *ngFor="let groupFilter of status" [value]="groupFilter.value">
                    {{groupFilter.name}}
                </mat-option>
            </mat-select>
        </mat-form-field>
    </div>
    
  
  <div>
    <mat-form-field appearance="outline" class="  _w-50 _ml-10">
        <mat-label>Pods</mat-label>
        <mat-select [multiple]="true" name="PodsValue" [(ngModel)]="podsArr" [required]="true">
            <mat-option *ngFor="let groupFilter of pods" [value]="groupFilter.value">
                {{groupFilter.name}}
            </mat-option>
        </mat-select>
    </mat-form-field>
  </div>
  
  <div>
        <mat-form-field appearance="outline">
        <mat-label>Favorite food</mat-label>
        <mat-select name="foodValue" [(ngModel)]="foodArr" [required]="true" >
          <mat-option *ngFor="let food of foods" [value]="food.value" >
            {{food.viewValue}}
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
    <mat-slide-toggle name="toggle" [(ngModel)]="togglevalue" >Slide me!</mat-slide-toggle>
  </div>


    <input type="submit" name="SUBMIT" value="Add customers submit" [disabled]="!FormName.valid"><br>
    <!-- <button type="submit">Add customers</button> -->

    <!-- <input type="submit" ><br> -->
   <button  (click)="resetForm(FormName)">Reset Form</button>
   <button  (click)="setForm(FormName)">Set Form</button>
</form>

your input is :-        {{firstName}} 






<!-- name = "key"  [(ngModel)]="value"          is manadatory for every     input,select&option,textarea,toggle,etc

formsValue.value : {Check : true, FirstName : " raj shinghania ", LastName :  " singh", PodsValue : ['zeroReady', 'partialReady'], Radio : undefined, StatusValue :  "FAILED", customerType : "economic", foodValue : "steak-0" , toggle : true }

formsValue.form.value : {Check : true, FirstName : " raj shinghania ", LastName :  " singh", PodsValue : ['zeroReady', 'partialReady'], Radio : undefined, StatusValue :  "FAILED", customerType : "economic", foodValue : "steak-0" , toggle : true }

formsValue.form.value : {
                            Check : true,
                            FirstName : " raj shinghania " ,
                            LastName :  " singh",
                            PodsValue : ['zeroReady', 'partialReady'],
                            Radio : false,
                            StatusValue :  "FAILED",
                            customerType : "economic",
                            foodValue : "steak-0" ,
                            toggle : true,
                            [[Prototype]] : Object
                        }
formsValue.value :    {
                          Check : true,
                          FirstName : " raj shinghania ",
                          LastName :  " singh",
                          PodsValue : ['zeroReady', 'partialReady'],
                          Radio : false,
                          StatusValue :  "FAILED"
                          customerType : "economic",
                          foodValue : "steak-0" ,
                          toggle : true,
                          [[Prototype]] : Object
                      }
-->

```

![before clicking on `Set Form` button](./image%20-%20008%20Forms%20Introduction%20in%20ANgular/2022-12-18-23-29-34.png)
![after clicking on `Set Form` button](./image%20-%20008%20Forms%20Introduction%20in%20ANgular/2022-12-18-23-30-04.png)


**add-customer.component.ts**

```ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  firstName: any;
  lastName: any;
  OK: any;
  radio: any = false;
  podsArr: any;
  statusArr: any;
  foodArr: any;
  customerType: any;
  togglevalue: any;
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

  submitFormFunctionName(formsValue: NgForm) {
    console.log("formsValue.form.value  :-  ", formsValue.form.value)
    console.log("formsValue.value  :-  ", formsValue.value)

    // validations
    // data processing
    // then call API to save this data
  }
  resetForm(formsValue: NgForm) {
    // formsValue.reset();
    formsValue.resetForm();
  }
  setForm(formsValue: NgForm) {
    let userDetails = {
      Check: true,
      FirstName: " raj shinghania ",
      LastName: " singh",
      PodsValue: ['zeroReady', 'partialReady'],
      Radio: false,
      StatusValue: "FAILED",
      customerType: "economic",
      foodValue: "steak-0",
      toggle: true,
    }

    formsValue.setValue(userDetails);
  }
}

```

## Angular Set Form Value Tutorial by  Angular.io




## another method

```html
    <!-- <form #formName="ngForm"> -->
    <form #formName="ngForm" (ngSubmit)="formSubmitButton(formName)">
    <!-- <form #formName="ngForm"> -->
  
        <div ngModelGroup="use_Of_With_UserModel">
          <input type="text"  name="inputName1_With_ngModelGroup_And_With_UserModel" [(ngModel)]="userModel.name1">
          <input type="text"  name="inputName2_With_ngModelGroup_And_With_UserModel" [(ngModel)]="userModel.name2">
          <input type="text"  name="inputName3_With_ngModelGroup_And_With_UserModel" [(ngModel)]="userModel.name3">
          <input type="text"  name="inputName4_With_ngModelGroup_And_With_UserModel" [(ngModel)]="userModel.name4">
        </div>
        <div ngModelGroup="use_Of_Without_UserModel">
          <input type="text"  name="inputName1_With_ngModelGroup_And_Without_UserModel" ngModel>
          <input type="text"  name="inputName2_With_ngModelGroup_And_Without_UserModel" ngModel>
          <input type="text"  name="inputName3_With_ngModelGroup_And_Without_UserModel" ngModel>
          <input type="text"  name="inputName4_With_ngModelGroup_And_Without_UserModel" ngModel>
        </div>
        <div>
          <input type="text"  name="inputName1_Without_ngModelGroup" ngModel>
          <input type="text"  name="inputName2_Without_ngModelGroup" ngModel>
          <input type="text"  name="inputName3_Without_ngModelGroup" ngModel>
          <input type="text"  name="inputName4_Without_ngModelGroup" ngModel>
        </div>
          <input type="text"  name="inputName5_Without_ngModelGroup" ngModel>
          <input type="text"  name="inputName6_Without_ngModelGroup" ngModel>
          <input type="text"  name="inputName7_Without_ngModelGroup" ngModel>
          <input type="text"  name="inputName8_Without_ngModelGroup" ngModel>
      
      <button class="btn btn-primary" type="submit"> Submit Form  Without ngModelGroup</button>
      <!-- <button class="btn btn-primary" type="submit" (click)="formSubmitButton(formName)"> Submit Form  Without ngModelGroup</button> -->
  
    </form>
```