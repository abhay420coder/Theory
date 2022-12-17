# Forms

* Vital to business applications
  * Create an experience that guides the user elfficiently and effectively through the workflow
  * Developers
    * Data binding
    * Change tracking
    * Validation
    * Visual feedback
    * Error messages
    * Form submission

## Prerequisites

* HTML
* css
* JavaScript
* Angular —Templates, Components, Data Binding and Services

```JS
   -----------                  ---------                 -----------                    ----------
  |           |                |         |               |           |                  |          |
  |  Template |   =====>       |   Class |  ========>    | Service   |    =========>    |  Server  |
  |           |                |         |               |           |                  |          |
   -----------                  ---------                 -----------                    ---------- 
    Collect Data                Bind Data                Send Data

```

## Two approaches

1. Template Driven Forms
   * Heavy on the component template
2. Reactive Forms
   * Heavy on the component class

## Template Driven Forms (TDF)

* Easy to use and similar to Angular JS forms
* Two way data binding with ngModel
* Bulky HTML and minimal component code
* Automatically tracks the form and form elements state and validity
* Unit testing is a challenge
* Readability decreases with complex forms and validations
* Suitable for simple scenarios

# TDF :- Template Driven Forms

* Generate a new CLI project
* Add the form HTML
* Binding data
* Tracking state and validity
* Providing visual feedback
* Displaying error messages
* Posting data to a server

## setting up a new project

in CLI

```JS
Microsoft Windows [Version 10.0.19044.2130]
(c) Microsoft Corporation. All rights reserved.

D:\CODING\coedis.us\angular\Angular form>code .

D:\CODING\coedis.us\angular\Angular form> ng new tdf
'wmic.exe' is not recognized as an internal or external command,
operable program or batch file.
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss
 ]
CREATE tdf/angular.json (3081 bytes)
CREATE tdf/package.json (1034 bytes)
CREATE tdf/README.md (1057 bytes)
CREATE tdf/tsconfig.json (863 bytes)
CREATE tdf/.editorconfig (274 bytes)
CREATE tdf/.gitignore (548 bytes)
CREATE tdf/.browserslistrc (600 bytes)
CREATE tdf/karma.conf.js (1420 bytes)
CREATE tdf/tsconfig.app.json (287 bytes)
CREATE tdf/tsconfig.spec.json (333 bytes)
CREATE tdf/.vscode/extensions.json (130 bytes)
CREATE tdf/.vscode/launch.json (474 bytes)
CREATE tdf/.vscode/tasks.json (938 bytes)
CREATE tdf/src/favicon.ico (948 bytes)
CREATE tdf/src/index.html (289 bytes)
CREATE tdf/src/main.ts (372 bytes)
CREATE tdf/src/polyfills.ts (2338 bytes)
CREATE tdf/src/styles.scss (80 bytes)
CREATE tdf/src/test.ts (749 bytes)
CREATE tdf/src/assets/.gitkeep (0 bytes)
CREATE tdf/src/environments/environment.prod.ts (51 bytes)
CREATE tdf/src/environments/environment.ts (658 bytes)
CREATE tdf/src/app/app-routing.module.ts (245 bytes)
CREATE tdf/src/app/app.module.ts (393 bytes)
CREATE tdf/src/app/app.component.html (23115 bytes)
CREATE tdf/src/app/app.component.spec.ts (1064 bytes)
CREATE tdf/src/app/app.component.ts (208 bytes)
CREATE tdf/src/app/app.component.scss (0 bytes)
√ Packages installed successfully.
'git' is not recognized as an internal or external command,
operable program or batch file.

D:\CODING\coedis.us\angular\Angular form>cd tdf

D:\CODING\coedis.us\angular\Angular form\tdf>ng s
'wmic.exe' is not recognized as an internal or external command,
operable program or batch file.
? Would you like to share anonymous usage data about this project with the Angular Team at
Google under Google’s Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.io/analytics. Yes

Thank you for sharing anonymous usage data. Should you change your mind, the following
command will disable this feature entirely:

    ng analytics disable

'wmic.exe' is not recognized as an internal or external command,
operable program or batch file.
'wmic.exe' is not recognized as an internal or external command,
operable program or batch file.
'wmic.exe' is not recognized as an internal or external command,
operable program or batch file.
Global setting: enabled
Local setting: enabled
Effective status: enabled
'wmic.exe' is not recognized as an internal or external command,
operable program or batch file.
√ Browser application bundle generation complete.

Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   2.10 MB |
polyfills.js          | polyfills     | 318.04 kB |
styles.css, styles.js | styles        | 210.54 kB |
main.js               | main          |  50.16 kB |
runtime.js            | runtime       |   6.50 kB |

                      | Initial Total |   2.67 MB

Build at: 2022-11-09T06:28:14.152Z - Hash: 472df07bba428570 - Time: 25767ms

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


√ Compiled successfully.
```

add bootStrap in index.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Tdf</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  // add bootstrap link
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">


  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

in app.component.html

```html
<button class="btn btn-primary">Submit</button>

<router-outlet></router-outlet>
```

in view
![in view](./image%20-%20Angular%20forms%20code%20evolution%20001/2022-11-09-13-49-58.png)

## Adding form Html

1. Bootcamp Enrollment Form

**in app.component.html**

```html

 <!-- here container-fluid is bootstrap classes -->
<div class="container-fluid">
  <h1>Bootcamp Enrollment Form</h1>

  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control">
    </div>
    <!-- here form-group and form-control is bootstrap classes -->

    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control">
    </div>

    <div class="form-group">
      <label>Phone</label>
      <input type="tel" class="form-control">
    </div>

    <div class="form-group">
      <select class="custom-select">
        <option selected>l am interested in</option>
        <option *ngFor="let topic of topics"> {{topic}} </option>
      </select>
    </div>

    <div class="mb-3">
      <label>Time preference</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="timepreference" value="morning">
        <label class="form-check-1abe1">Morning (9AM - 12Pm)</label>
      </div>

      <!-- here form-check , form-check-input and form-check-label is bootstrap classes -->

      <div class="form-check">
        <input class="form-check-input" type="radio" name="timePreference" value="evening">
        <label class="form-check-IabeI">Evening (5PM - 8PM)</label>
      </div>
    </div>

    <div class="form-check mb-3">
      <input class="form-check-input" type="checkbox">
      <label class="form-check-label">Send me promotional offers </label>
    </div>

    <button class="btn btn-primary" type="submit">  Submit Form  </button>


  </form>

</div>


<router-outlet></router-outlet>
```

**in app.component.ts**

```TS
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdf';
  topics = ['Angular','React','Vue'];
}

```

in view

![Bootcamp Enrollment Form](./image%20-%20Angular%20forms%20code%20evolution%20001/2022-11-09-14-45-35.png)

## binding data with ngForm

add form module in your module

**in app.module.ts**

```TS
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // import form module
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // add form module in imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

2. add ngForm in form tag
3. add ngModel in input and select tag

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

**in app.component.html**

```HTML

<div class="container-fluid">
  <h1>Bootcamp Enrollment Form</h1>

  <form #userForm="ngForm">
    <!-- <form [ngForm]="userForm"></form> -->

    {{ userForm.value | json }}


    <div ngModelGroup="address">

      <div class="form-group">
        <label>Street</label>
        <input type="text" class="form-control" name="Street" ngModel>
      </div>

      <div class="form-group">
        <label>City</label>
        <input type="text" class="form-control" name="City" ngModel>
      </div>

      <div class="form-group">
        <label>state</label>
        <input type="text" class="form-control" name="state" ngModel>
      </div>

      <div class="form-group">
        <label>Postal Code</label>
        <input type="text" class="form-control" name="postalCode" ngModel>
      </div>

    </div>


    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" name="userName" ngModel>
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" name="userEmail" ngModel>
    </div>

    <div class="form-group">
      <label>Phone</label>
      <input type="tel" class="form-control" name="userPhone" ngModel>
    </div>

    <div class="form-group">
      <select class="custom-select" name="topic" ngModel>
        <option selected>l am interested in</option>
        <option *ngFor="let topic of topics"> {{topic}} </option>
      </select>
    </div>

    <div class="mb-3">
      <label>Time preference</label>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="timepreference" value="morning" ngModel>
        <label class="form-check-1abe1">Morning (9AM - 12Pm)</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="radio" name="timePreference" value="evening" ngModel>
        <label class="form-check-IabeI">Evening (5PM - 8PM)</label>
      </div>
    </div>

    <div class="form-check mb-3">
      <input class="form-check-input" name="subscribe" type="checkbox" ngModel>
      <label class="form-check-label">Send me promotional offers </label>
    </div>

    <button class="btn btn-primary" type="submit"> Submit Form </button>


  </form>

</div>


<router-outlet></router-outlet>
```

![view :- before fill the form ](./image%20-%20Angular%20forms%20code%20evolution%20001/2022-11-10-03-41-17.png)

![view :- after fill the form ](./image%20-%20Angular%20forms%20code%20evolution%20001/2022-11-10-03-46-09.png)

**output of "userForm.value | json"**

```JS
{ 
  "address": { 
                "Street": "poari", 
                "City": "biharsharif", 
                "state": "bihar", 
                "postalCode": "803110" 
              }, 

  "userName": "Abhay Kumar", 
  "userEmail": "kabil@gmail.com", 
  "userPhone": "7050581271", 
  "topic": "Vue", 
  "timepreference": "morning", 
  "timePreference": "evening", 
  "subscribe": true 
  }
```

## Binding Data To a Model

**how to generate a class in angular**
> syntax:- `ng generate class className`

in CMD

```JS
Microsoft Windows [Version 10.0.19044.2130]
(c) Microsoft Corporation. All rights reserved.

D:\CODING\coedis.us\angular\Angular form\tdf>ng generate class user
CREATE src/app/user.spec.ts (146 bytes)
CREATE src/app/user.ts (22 bytes)

D:\CODING\coedis.us\angular\Angular form\tdf>
```

**create constructor in User class**

**user.ts**

```JS
            export class User {
                constructor(
                    public name: string,
                    public email: string,
                    public phone: number,
                    public topic: string,
                    public timePreference: string,
                    public subscribe: boolean
                ) { }

            }
```

**in app.component.ts**

```JS
      import { Component } from '@angular/core';
      import { User } from './user';

      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
      })
      export class AppComponent {
        title = 'tdf';
        topics = ['Angular','React','Vue'];

        userModel = new User( 'Rob','rob@test.com',5556665566,'','morning',true);
      }
```

**in app.component.html**

```HTML

<div class="container-fluid">
  <h1>Bootcamp Enrollment Form</h1>

  <form #userForm="ngForm">

    userForm.value | json :- {{ userForm.value | json }}
    <hr>
    userModel  | json  :-  {{userModel | json}}

    <h1>use Of With UserModel </h1>
    <div ngModelGroup="useOfWithUserModel">

      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" name="userName" [(ngModel)]="userModel.name">
      </div>
  
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" name="userEmail" [(ngModel)]="userModel.email">
      </div>
  
      <div class="form-group">
        <label>Phone</label>
        <input type="tel" class="form-control" name="userPhone" [(ngModel)]="userModel.phone">
      </div>
  
      <div class="form-group">
        <select class="custom-select" name="topic" [(ngModel)]="userModel.topic">
          <option value="">l am interested in</option>
          <option *ngFor="let topic of topics"> {{topic}} </option>
        </select>
      </div>

      <div class="mb-3">
        <label>Time preference</label>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="timepreference" value="morning" [(ngModel)]="userModel.timePreference">
          <label class="form-check-1abe1">Morning (9AM - 12Pm)</label>
        </div>
  
        <div class="form-check">
          <input class="form-check-input" type="radio" name="timePreference" value="evening" [(ngModel)]="userModel.timePreference">
          <label class="form-check-IabeI">Evening (5PM - 8PM)</label>
        </div>
      </div>
  
      <div class="form-check mb-3">
        <input class="form-check-input" name="subscribe" type="checkbox" [(ngModel)]="userModel.subscribe">
        <label class="form-check-label">Send me promotional offers </label>
      </div>

    </div>


    <h1>use Of Without UserModel </h1>

    <div ngModelGroup="useOfWithoutUserModel">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" name="userName" ngModel>
      </div>
  
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" name="userEmail" ngModel>
      </div>
  
      <div class="form-group">
        <label>Phone</label>
        <input type="tel" class="form-control" name="userPhone" ngModel>
      </div>
  
      <div class="form-group">
        <select class="custom-select" name="topic" ngModel>
          <option selected>l am interested in</option>
          <option *ngFor="let topic of topics"> {{topic}} </option>
        </select>
      </div>
  
      <div class="mb-3">
        <label>Time preference</label>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="timepreference" value="morning" ngModel>
          <label class="form-check-1abe1">Morning (9AM - 12Pm)</label>
        </div>
  
        <div class="form-check">
          <input class="form-check-input" type="radio" name="timePreference" value="evening" ngModel>
          <label class="form-check-IabeI">Evening (5PM - 8PM)</label>
        </div>
      </div>
  
      <div class="form-check mb-3">
        <input class="form-check-input" name="subscribe" type="checkbox" ngModel>
        <label class="form-check-label">Send me promotional offers </label>
      </div>
    </div>
    
    <button class="btn btn-primary" type="submit"> Submit Form </button>

  </form>

</div>

<router-outlet></router-outlet>
```

![use Of With UserModel](./image%20-%20Angular%20forms%20code%20evolution%20001/2022-11-10-14-54-33.png)

![use Of WithOut UserModel](./image%20-%20Angular%20forms%20code%20evolution%20001/2022-11-10-14-29-08.png)

**output of userForm.value | json     with useOfWithUserModel & useOfWithUserModel**

```JS
userForm.value | json :- { 
                            "useOfWithUserModel": { 
                                                    "userName": "Rob", 
                                                    "userEmail": "rob@test.com", 
                                                    "userPhone": 5556665566, 
                                                    "topic": "", 
                                                    "timepreference": "morning", 
                                                    "timePreference": "morning", 
                                                    "subscribe": true 
                                                  }, 

                            "useOfWithoutUserModel": { 
                                                        "userName": "", 
                                                        "userEmail": "", 
                                                        "userPhone": "", 
                                                        "topic": "", 
                                                        "timepreference": "", 
                                                        "timePreference": "", 
                                                        "subscribe": "" 
                                                      } 

                          }
```

**output of userModel | json**

```JS
      userModel | json :- { 
                            "name": "Rob", 
                            "email": "rob@test.com", 
                            "phone": 5556665566, 
                            "topic": "", 
                            "timePreference": "morning", 
                            "subscribe": true 
                          }
```

![after fill the form :- use Of With UserModel](./image%20-%20Angular%20forms%20code%20evolution%20001/2022-11-10-15-16-20.png)
![after fill the form :- use Of Without UserModel](./image%20-%20Angular%20forms%20code%20evolution%20001/2022-11-10-15-17-22.png)

**after fill the form :-    output of userForm.value | json     with useOfWithUserModel & useOfWithUserModel**

```JS
userForm.value | json :- { 
                            "useOfWithUserModel": { 
                                                    "userName": "ABhay", 
                                                    "userEmail": "rob@test.com", 
                                                    "userPhone": "9564854", 
                                                    "topic": "", 
                                                    "timepreference": "morning", 
                                                    "timePreference": "evening", 
                                                    "subscribe": true 
                                                  }, 
                                                  
                              "useOfWithoutUserModel": { 
                                                    "userName": "Amu_2021", 
                                                    "userEmail": "ak8294836065@gmail.com", 
                                                    "userPhone": "08969789931", 
                                                    "topic": "React", 
                                                    "timepreference": "", 
                                                    "timePreference": "evening", 
                                                    "subscribe": false 
                                                  } 
                          }
```



## a good example for ngModel by GeeksforGeeks

**Approach:**

* Create the Angular app to be used
* In app.component.ts make a variable that gives value to the input field.
* In app.component.html make a form and use ngModel to get the value of the input.
* Serve the angular app using ng serve to see the output.

**in app.component.ts**

```JS

  import { Component, Inject } from '@angular/core';
  import { PLATFORM_ID } from '@angular/core';
  import { isPlatformWorkerApp } from '@angular/common';
  
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
  })
  export class AppComponent  {
    gfg: string = '';
  
    setValue() {
      this.gfg = 'GeeksforGeeks';
    }
  }

```

**in app.component.html**

```html
  <h1>GeeksforGeeks</h1>
    
  <input [(ngModel)]="gfg" #ctrl="ngModel" required>
    
  <p>Value: {{ gfg }}</p>

  <button (click)="setValue()">Set value</button>
```

**output**

![click set value then you set the value](./image%20-%20Angular%20forms%20code%20evolution%20001/2022-11-14-10-18-42.png)


## Tracking state and validity

```JS
State                                         Class if true                       Class if false

The control has been visited.                 ng-touched                          ng-untouched
The control's value has changed.              ng-dirty                            ng-pristine 
The control's value is valid.                 ng-valid                            ng- invalid 
```

![Tracking state and validity](./image%20-%20Angular%20forms%20code%20evolution%20001/2022-11-10-15-31-17.png)

```JS
State                                              Class if true                       Class if false

if users visited the form-control.                 ng-touched                          ng-untouched
if users has changed value of the form-control.    ng-dirty                            ng-pristine 
if user-value is valid.                             ng-valid                            ng- invalid 
```

**ngModeI properties**

```JS
Class                             Property

ng-untouched                      untouched
ng-touched                        touched
ng-pristine                       pristine
ng-dirty                          dirty
ng-valid                          Valid
ng-invalid                        invalid
```

**user.ts**

```JS
            export class User {
                constructor(
                    public name: string,
                    public email: string,
                    public phone: number,
                    public topic: string,
                    public timePreference: string,
                    public subscribe: boolean
                ) { }

            }
```

**in app.component.ts**

```JS
      import { Component } from '@angular/core';
      import { User } from './user';

      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
      })
      export class AppComponent {
        title = 'tdf';
        topics = ['Angular','React','Vue'];

        userModel = new User( 'Rob','rob@test.com',5556665566,'','morning',true);
      }
```

**in app.component.html**

```HTML
<div class="container-fluid">
  <h1>Bootcamp Enrollment Form</h1>

  <form #userForm="ngForm">

    userForm.value | json :- {{ userForm.value | json }}
    <hr>
    userModel  | json  :-  {{userModel | json}}

      <div class="form-group">
        <label>Name1</label>
        <input type="text" required  #controlName class="form-control" name="userName" [(ngModel)]="userModel.name">
      </div>
  

      <b>class applied on 'controlName' control : <i>{{controlName.className}}</i></b>  

      <div class="form-group">
        <label>Name2</label>
        <input type="text" required  #controlNameSpecific="ngModel" class="form-control" name="userName" [(ngModel)]="userModel.name">
      </div>

      <b>class applied on 'controlNameSpecific' control : <i>{{controlNameSpecific.untouched}}</i></b>  

      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" name="userEmail" [(ngModel)]="userModel.email">
      </div>
  
      <div class="form-group">
        <label>Phone</label>
        <input type="tel" class="form-control" name="userPhone" [(ngModel)]="userModel.phone">
      </div>
  
      <div class="form-group">
        <select class="custom-select" name="topic" [(ngModel)]="userModel.topic">
          <option value="">l am interested in</option>
          <option *ngFor="let topic of topics"> {{topic}} </option>
        </select>
      </div>

      <div class="mb-3">
        <label>Time preference</label>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="timepreference" value="morning" [(ngModel)]="userModel.timePreference">
          <label class="form-check-1abe1">Morning (9AM - 12Pm)</label>
        </div>
  
        <div class="form-check">
          <input class="form-check-input" type="radio" name="timePreference" value="evening" [(ngModel)]="userModel.timePreference">
          <label class="form-check-IabeI">Evening (5PM - 8PM)</label>
        </div>
      </div>
  
      <div class="form-check mb-3">
        <input class="form-check-input" name="subscribe" type="checkbox" [(ngModel)]="userModel.subscribe">
        <label class="form-check-label">Send me promotional offers </label>
      </div>

    <button class="btn btn-primary" type="submit"> Submit Form </button>

  </form>

</div>

<router-outlet></router-outlet>
```

![without touched Name1 & Name2 input](./image%20-%20Angular%20forms%20code%20evolution%20001/2022-11-10-17-14-00.png)

## Validation with Visual Feedback



