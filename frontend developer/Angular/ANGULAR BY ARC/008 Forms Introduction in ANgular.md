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

## Angular Template Driven Forms Tutorial by  Angular.io

# Angular Forms Validation Tutorial

## Angular Forms Validation Tutorial by ARC

## Angular Forms Validation Tutorial by  Angular.io

# Angular Reset Forms Tutorial

## Angular Reset Forms Tutorial by ARC

## Angular Reset Forms Tutorial by  Angular.io

# Angular Set Form Value Tutorial

## Angular Set Form Value Tutorial by ARC

## Angular Set Form Value Tutorial by  Angular.io
