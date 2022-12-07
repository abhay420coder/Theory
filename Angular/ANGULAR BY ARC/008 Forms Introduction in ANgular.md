# Topic

55. Angular Forms Tutorial
56. Setting up the form model
57. Data flow in forms
58. Angular Template Driven Forms Tutorial
59. Angular Forms Validation Tutorial
60. Angular Reset Forms Tutorial
61. Angular Set Form Value Tutorial

# 1. Angular Forms Tutorial

## Forms - Introduction

* Forms are a very integral and essential building blocks of "almost" apps.
  
* Common form examples we can see are
  * Login
  * Forgot
  * Register
  * Checkout form
  * Contact Us
  
* Forms allows us to gather information and data from users
  
* Good way to interact with the users and almost all websites will need forms in some or other way
  
* We can use any CSS framework of our choice — Bootstrap or Material Design

## Introduction to forms in Angular :- Angular.io
* Handling user input with forms is the cornerstone of many common applications. 
  
* Applications use forms to enable users 
  * to log in, 
  * to update a profile, 
  * to enter sensitive information, 
  * and to perform many other data-entry tasks.

* Angular provides two different approaches to handling user input through forms: 
  * reactive and 
  * template-driven. 
  
* Both 
  * capture user input events from the view, 
  * validate the user input, 
  * create a form model and data model to update, 
  * and provide a way to track changes.

## Angular Support for Forms

* Two Data Binding
* Change Tracking
* Validations
* Error Handling
* Unit testing

## Types of Forms in Angular

* Static / Template Driven Forms
* Dynamic / Reactive Forms

### Static or Template Driven Forms

* Easy to use
* Template driven forms are simple and straight forward
* All the validations, form elements are all defined in the template file
* We will need to import FormsModuIe in app module to work with Template driven forms

### Dynamic or Reactive or Model Driven Forms

* All the form elements, user interactions and validations are handled in the component class
* We will make use of Angular's built in formGroup and formControI
* Can control better data binding
* Exclusive define custom regular expression patterns of error handling
* We will need to import ReactiveFormsModule in our app module
* Very flexible and allows users to define, develop complex requirements of forms
* More logic in the component class and less in HTML mark up itself

## Which is better — Template driven Forms or Reactive Forms?

### Template Driven Forms

* If your application forms are simple straight forward
* Fixed static form fields and elements
* No complex validations or pattern matching

### Reactive Forms

* If your application forms are complex
* Uses multiple dynamic components
* Advanced validation requirements
* Dependent form elements
* Dynamic form generation based on user preferences

## Choosing an approach

* Reactive forms and template-driven forms process and manage form data differently. 
* Each approach offers different advantages.

### Reactive forms	

Provide direct, explicit access to the underlying form's object model. 
Compared to template-driven forms, they are more robust: they're more scalable, reusable, and testable. 
If forms are a key part of your application, or you're already using reactive patterns for building your application, use reactive forms.

### Template-driven forms	

Rely on directives in the template to create and manipulate the underlying object model. 
They are useful for adding a simple form to an app, such as an email list signup form. 
They're straightforward to add to an app, but they don't scale as well as reactive forms. 
If you have very basic form requirements and logic that can be managed solely in the template, template-driven forms could be a good fit.

## Key differences
The following table summarizes the key differences between reactive and template-driven forms.

```JS
                                REACTIVE	                                        TEMPLATE-DRIVEN
    Setup of form model	        Explicit, created in component class	            Implicit, created by directives
    Data model	                Structured and immutable	                        Unstructured and mutable
    Data flow	                Synchronous	                                        Asynchronous
    Form validation	            Functions	                                        Directives
```

## Scalability

* If forms are a central part of your application, scalability is very important. 
* Being able to reuse form models across components is critical.

### Reactive forms
* Reactive forms are more scalable than template-driven forms. 

* They provide direct access to the underlying form API, 
  * and use synchronous data flow between the view and the data model, 
  * which makes creating large-scale forms easier. 

* Reactive forms require less setup for testing, 
  * and testing does not require deep understanding of change detection to properly test form updates and validation.

### Template-driven forms

* Template-driven forms focus on simple scenarios and are not as reusable. 

* They abstract away the underlying form API, 
  * and use asynchronous data flow between the view and the data model. 

* The abstraction of template-driven forms also affects testing. 

* Tests are deeply reliant on manual change detection execution to run properly, 
  * and require more setup.

# 2. Setting up the form model

* Both reactive and template-driven forms track value changes between the form input elements 
  * that users interact with and the form data in your component model. 
  
* The two approaches share underlying building blocks, 
  * but differ in how you create and manage the common form-control instances.

## Common form foundation classes
Both reactive and template-driven forms are built on the following base classes.

```JS
BASE CLASSES	            DETAILS
FormControl	                Tracks the value and validation status of an individual form control.
FormGroup	                Tracks the same values and status for a collection of form controls.
FormArray	                Tracks the same values and status for an array of form controls.
ControlValueAccessor	    Creates a bridge between Angular FormControl instances and built-in DOM elements.
```

## Setup in reactive forms

* With reactive forms, you define the form model directly in the component class. 
  
* The `[formControl]` directive links the explicitly created FormControl instance to a specific form element in the view, 
  * using an internal value accessor.


###### The following component implements an input field for a single control, using reactive forms. 
In this example, the form model is the FormControl instance.

```JS
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl">
  `
})
export class FavoriteColorComponent {
  favoriteColorControl = new FormControl('');
}
```

* Following Figure shows how, 
    * in reactive forms, the form model is the source of truth; 

    * it provides the value and status of the form element at any given point in time, 
      * through the [formControl] directive on the input element.
    
![ Direct access to forms model in a reactive form.](./image%20-%20008%20Forms%20Introduction%20in%20ANgular/2022-11-08-14-14-34.png)

## Setup in template-driven forms
* In template-driven forms, the form model is implicit, rather than explicit. 
* The directive NgModel creates and manages a FormControl instance for a given form element.

###### The following component implements the same input field for a single control, using template-driven forms.

```JS
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-favorite-color',
  template: `
    Favorite Color: <input type="text" [(ngModel)]="favoriteColor">
  `
})
export class FavoriteColorComponent {
  favoriteColor = '';
}
```

In a template-driven form the source of truth is the template. 
You do not have direct programmatic access to the FormControl instance, as shown in below Figure 

![ Indirect access to forms model in a template-driven form.](./image%20-%20008%20Forms%20Introduction%20in%20ANgular/2022-11-08-14-26-37.png)

# 3. Data flow in forms

* When an application contains a form, 
  * Angular must keep the view in sync with the component model 
  * and the component model in sync with the view. 

* As users change values and make selections through the view, 
  * the new values must be reflected in the data model.   

* Similarly, 
  * when the program logic changes values in the data model, 
  * those values must be reflected in the view.

* Reactive and template-driven forms differ in how they handle data flowing from the user or from programmatic changes. 

The following diagrams illustrate both kinds of data flow for each type of form, using the favorite-color input field defined above.


## Data flow in reactive forms
* In reactive forms each form element in the view is directly linked to the form model (a `FormControl` instance). 
  
* Updates from the view to the model and from the model to the view are synchronous and do not depend on how the UI is rendered.

> ###### The **view-to-model diagram** shows how data flows when an input field's value is changed from the view **through the following steps**:-
> 
> 1. The user types a value into the input element, in this case the favorite color Blue.
> 2. The form input element emits an "input" event with the latest value.
> 3. The control value accessor listening for events on the form input element immediately relays the new value to the `FormControl` instance.
> 4. The `FormControl` instance emits the new value through the `valueChanges` observable.
> 5. Any subscribers to the `valueChanges` observable receive the new value.

![Reactive Forms - Data Flow(View To Model)](./image%20-%20008%20Forms%20Introduction%20in%20ANgular/2022-11-08-14-44-45.png)

> ###### The **model-to-view diagram** shows how a programmatic change to the model is propagated to the view **through the following steps**.
> 
> 1. The user calls the `favoriteColorControl.setValue()` method, which updates the `FormControl` value.
> 2. The `FormControl` instance emits the new value through the `valueChanges` observable.
> 3. Any subscribers to the `valueChanges` observable receive the new value.
> 4. The control value accessor on the form input element updates the element with the new value.

![Reactive Forms - Data Flow(Model To View)](./image%20-%20008%20Forms%20Introduction%20in%20ANgular/2022-11-08-14-50-51.png)


## Data flow in template-driven forms

* In template-driven forms, each form element is linked to a directive that manages the form model internally.

> ###### The **view-to-model diagram** shows how data flows when an input field's value is changed from the view **through the following steps**.
> 
> 1. The user types Blue into the input element.
> 2. The input element emits an "input" event with the value Blue.
> 3. The control value accessor attached to the input triggers the `setValue()` method on the `FormControl` instance.
> 4. The `FormControl` instance emits the new value through the `valueChanges` observable.
> 5. Any subscribers to the `valueChanges` observable receive the new value.
> 6. The control value accessor also calls the `NgModel.viewToModelUpdate()` method which emits an `ngModelChange` event.
> 7. Because the component template uses two-way data binding for the `favoriteColor` property, the `favoriteColor` property in the component is updated to the value emitted by the `ngModelChange` event (Blue).

![Template-Driven Forms - Data Flow(View To Model)](./image%20-%20008%20Forms%20Introduction%20in%20ANgular/2022-11-08-14-59-34.png)

###### The **model-to-view diagram** shows how data flows from model to view when the favoriteColor changes from Blue to Red, **through the following steps**

1. The `favoriteColor` value is updated in the component.
2. Change detection begins.
3. During change detection, the `ngOnChanges` lifecycle hook is called on the `NgModel` directive instance because the value of one of its inputs has changed.
4. The `ngOnChanges()` method queues an async task to set the value for the internal `FormControl` instance.
5. Change detection completes.
6. On the next tick, the task to set the `FormControl` instance value is executed.
7. The `FormControl` instance emits the latest value through the `valueChanges` observable.
8. Any subscribers to the `valueChanges` observable receive the new value.
9. The control value accessor updates the form input element in the view with the latest `favoriteColor` value.

![Template-Driven Forms - Data Flow(Model To View)](./image%20-%20008%20Forms%20Introduction%20in%20ANgular/2022-11-08-15-03-32.png)

## Mutability of the data model
The change-tracking method plays a role in the efficiency of your application.

### Reactive forms	

* Keep the data model pure by providing it as an immutable data structure. 

* Each time a change is triggered on the data model, 
  * the FormControl instance returns a new data model rather than updating the existing data model. 

* This gives you the ability to track unique changes to the data model through the control's observable. 

* Change detection is more efficient because it only needs to update on unique changes. 

* Because data updates follow reactive patterns, 
  * you can integrate with observable operators to transform data.

### Template-driven forms	

* Rely on mutability with two-way data binding to update the data model in the component as changes are made in the template. 

* Because there are no unique changes to track on the data model 
  * when using two-way data binding,
  * change detection is less efficient at determining when updates are required.


### The difference is demonstrated in the previous examples that use the favorite-color input element.

* With reactive forms, the `FormControl` instance always returns a new value when the control's value is updated

* With template-driven forms, the favorite color property is always modified to its new value

# 4. Basic introduction of Form validation & Testing

## Form validation

* Validation is an integral part of managing any set of forms. 

* Whether you're checking for required fields or querying an external API for an existing username, Angular provides a set of built-in validators as well as the ability to create custom validators.

### Reactive forms	

* Define custom validators as functions that receive a control to validate

### Template-driven forms	

* Tied to template directives, and must provide custom validator directives that wrap validation functions

## Testing

Testing plays a large part in complex applications. 
A simpler testing strategy is useful when validating that your forms function correctly. 
Reactive forms and template-driven forms have different levels of reliance on rendering the UI to perform assertions based on form control and form field changes. 

### The following examples demonstrate the process of testing forms with reactive and template-driven forms.

#### Testing reactive forms
Reactive forms provide a relatively straightforward testing strategy because they provide synchronous access to the form and data models, and they can be tested without rendering the UI. In these tests, status and data are queried and manipulated through the control without interacting with the change detection cycle.

The following tests use the favorite-color components from previous examples to verify the view-to-model and model-to-view data flows for a reactive form.

##### Verifying view-to-model data flow

> The first example performs the following steps to verify the view-to-model data flow.
> 
> 1. Query the view for the form input element, and create a custom "input" event for the test.
> 2. Set the new value for the input to Red, and dispatch the "input" event on the form input element.
> 3. Assert that the component's favoriteColorControl value matches the value from the input.

**Favorite color test - view to model**

```JS
    it('should update the value of the input field', () => {
    const input = fixture.nativeElement.querySelector('input');
    const event = createNewEvent('input');

    input.value = 'Red';
    input.dispatchEvent(event);

    expect(fixture.componentInstance.favoriteColorControl.value).toEqual('Red');
    });
```

##### Verifying model-to-view data flow

> The next example performs the following steps to verify the model-to-view data flow.
> 
> 1. Use the favoriteColorControl, a FormControl instance, to set the new value.
> 2. Query the view for the form input element.
> 3. Assert that the new value set on the control matches the value in the input.

**Favorite color test - model to view**

```JS
    it('should update the value in the control', () => {
    component.favoriteColorControl.setValue('Blue');

    const input = fixture.nativeElement.querySelector('input');

    expect(input.value).toBe('Blue');
    });

```

#### Testing template-driven forms

Writing tests with template-driven forms requires a detailed knowledge of the change detection process and an understanding of how directives run on each cycle to ensure that elements are queried, tested, or changed at the correct time.

The following tests use the favorite color components mentioned earlier to verify the data flows from view to model and model to view for a template-driven form.

##### Verifying view-to-model data flow

> Here are the steps performed in the view to model test.
> 
> 1. Query the view for the form input element, and create a custom "input" event for the test.
> 2. Set the new value for the input to Red, and dispatch the "input" event on the form input element.
> 3. Run change detection through the test fixture.
> 4. Assert that the component favoriteColor property value matches the value from the input.


The following test verifies the data flow from view to model.

**Favorite color test - view to model**

```JS
    it('should update the favorite color in the component', fakeAsync(() => {
        const input = fixture.nativeElement.querySelector('input');
        const event = createNewEvent('input');

        input.value = 'Red';
        input.dispatchEvent(event);

        fixture.detectChanges();

        expect(component.favoriteColor).toEqual('Red');
    }));
```

##### Verifying model-to-view data flow

> Here are the steps performed in the model to view test.
> 
> 1. Use the component instance to set the value of the favoriteColor property.
> 2. Run change detection through the test fixture.
> 3. Use the tick() method to simulate the passage of time within the fakeAsync() task.
> 4. Query the view for the form input element.
> 5. Assert that the input value matches the value of the favoriteColor property in the component instance.

The following test verifies the data flow from model to view.

**Favorite color test - model to view**

```JS
    it('should update the favorite color on the input field', fakeAsync(() => {
        component.favoriteColor = 'Blue';

        fixture.detectChanges();

        tick();

        const input = fixture.nativeElement.querySelector('input');

        expect(input.value).toBe('Blue');
    }));
```


# 2. Angular Template Driven Forms Tutorial


## Template Driven Forms - Introduction

* Easy to use
* Template driven forms are simple and straight forward
* All the validations, form elements are all defined in the template file
* Forms are tracked automatically
* Tracked form data traverses via various states (pristine etc)
* Uses Two-Way Data Binding techniques to bind data
* Most of the code resides in template file
* Validations are mostly the default HTML5 validations
* Minimal component code as most of the code is in template file
* Unit testing will be a challenge

## How to use Template Forms

### Step by Step Process for Template Driven Forms

#### Step #1 — Import and Add in the FormsModule in the app.module.ts

* For template driven forms — FormsModule needs to be imported
* If we do NOT import this —we will get error when doing two way data binding
* Add the module into the array list of imports

#### Step #2 — Create the form in app.component.html

* ngForm
  * Form name as template variable using "#' for e.g #10ginForm
* ngModeI
  * Every form field should have a "name" attribute and ngModel attached to it

## Different input elements

### Add different Form Input Types

* Input type = "text"
* Input type = "radio"
* Input type = "checkbox"
* Input type = "email"
* Textarea
* Select Drop Down


# 3. Angular Forms Validation Tutorial

# 4. Angular Reset Forms Tutorial

# 5. Angular Set Form Value Tutorial


# Reactive forms
* Reactive forms provide a model-driven approach to handling form inputs whose values change over time. 

* This guide shows you 
  * how to create and update a basic form control, 
  * progress to using multiple controls in a group, 
  * validate form values, 
  * and create dynamic forms where you can add or remove controls at run time.

## Overview of reactive forms

* Reactive forms use an explicit and immutable approach to managing the state of a form at a given point in time. 
  
* Each change to the form state returns a new state, 
  * which maintains the integrity of the model between changes. 
  
* Reactive forms are built around observable streams, 
  * where form inputs and values are provided as streams of input values, 
  * which can be accessed synchronously.

* Reactive forms also provide a straightforward path to testing because you are assured that your data is consistent and predictable when requested. 
  
* Any consumers of the streams have access to manipulate that data safely.

* Reactive forms differ from template-driven forms in distinct ways. 
  
* Reactive forms provide synchronous access to the data model, 
  * immutability with observable operators, 
  * and change tracking through observable streams.

* Template-driven forms let direct access modify data in your template, 
  * but are less explicit than reactive forms because they rely on directives embedded in the template, 
  * along with mutable data to track changes asynchronously. 
 
See the Forms Overview for detailed comparisons between the two paradigms.

## Adding a basic form control

> **There are three steps to using form controls.**
>
> 1. Register the reactive forms module in your application. This module declares the reactive-form directives that you need to use reactive forms.
> 
> 2. Generate a new `FormControl` instance and save it in the component.
> 
> 3. Register the `FormControl` in the template.
 
* You can then display the form by adding the component to the template.


#### The following examples show how to add a single form control. 
In the example, 
  * the user enters their name into an input field, 
  * captures that input value, 
  * and displays the current value of the form control element.

##### Register the reactive forms module
##### Generate a new `FormControl`
##### Register the control in the template
##### Display the component










### Displaying a form control value

#### The following example shows you how to display the current value using interpolation in the template.

### Replacing a form control value

#### The following example adds a method to the component class to update the value of the control to Nancy using the `setValue()` method.

#### Update the template with a button to simulate a name update. 

When you click the Update Name button, the value entered in the form control element is reflected as its current value.

## Grouping form controls
### Creating nested form groups
### Updating parts of the data model
## Using the FormBuilder service to generate controls
## Validating form input
## Creating dynamic forms
## Reactive forms API summary

