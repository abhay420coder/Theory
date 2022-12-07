# forms introduction

## Introduction to forms in Angular

* Handling user input with forms is the cornerstone of many common applications.

* Applications use forms
  * to enable users
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

* This guide provides information to help you decide which type of form works best for your situation.

* It introduces the common building blocks used by both approaches.
  
* It also summarizes the key differences between the two approaches,
  * and demonstrates those differences in the context of setup, data flow, and testing.

## Prerequisites

###### This guide assumes that you have a basic understanding of the following

* TypeScript and HTML5 programming
* Angular app-design fundamentals, as described in Angular Concepts
* The basics of Angular template syntax

## Choosing an approach

* Reactive forms and template-driven forms process and manage form data differently.
* Each approach offers different advantages.

###### Reactive forms

* Provide direct, explicit access to the underlying form's object model.
  
* Compared to template-driven forms,
  * they are more robust:
    * they're more
      1. scalable,
      2. reusable, and
      3. testable.
  
* If forms are a key part of your application,
  * or you're already using reactive patterns for building your application,
    * use reactive forms.

###### Template-driven forms

* Rely on directives in the template to create and manipulate the underlying object model.
  
* They are useful for adding a simple form to an app,
  * such as an email list signup form.
  
* They're straightforward to add to an app,
  * but they don't scale as well as reactive forms.
  
* If you have very basic form requirements and logic
  * that can be managed solely in the template,
  * template-driven forms could be a good fit.

### Key differences

The following table summarizes the key differences between reactive and template-driven forms.

```JS
                                        REACTIVE                                            TEMPLATE-DRIVEN
Setup of form model                     Explicit, created in component class                Implicit, created by directives
Data model                              Structured and immutable                            Unstructured and mutable
Data flow                               Synchronous                                         Asynchronous
Form validation                         Functions                                           Directives
```

### Scalability

* If forms are a central part of your application, scalability is very important.
* Being able to reuse form models across components is critical.

* Reactive forms are more scalable than template-driven forms.
* They (Reactive forms) provide direct access to the underlying form API,
  * and use synchronous data flow between the view and the data model,
  * which makes creating large-scale forms easier.
* Reactive forms require less setup for testing,
  * and testing does not require deep understanding of change detection to properly test form updates and validation.

* Template-driven forms focus on simple scenarios and are not as reusable.
* They (Template-driven forms) abstract away the underlying form API,
  * and use asynchronous data flow between the view and the data model.
* The abstraction of template-driven forms also affects testing.
* Tests are deeply reliant on manual change detection execution to run properly, and require more setup.

## Setting up the form model

* Both reactive and template-driven forms track value changes between the form input elements
  * that users interact with and the form data in your component model.
* The two approaches share underlying building blocks,
  * but differ in how you create and manage the common form-control instances.

### Common form foundation classes

Both reactive and template-driven forms are built on the following base classes.

```JS
BASE CLASSES                DETAILS
FormControl                 Tracks the value and validation status of an individual form control.
FormGroup                   Tracks the same values and status for a collection of form controls.
FormArray                   Tracks the same values and status for an array of form controls.
ControlValueAccessor        Creates a bridge between Angular FormControl instances and built-in DOM elements.
```

### Setup in reactive forms

* With reactive forms, you define the form model directly in the component class.
* The `[formControl]` directive links the explicitly created `FormControl` instance to a specific form element in the view,
  * using an internal value accessor.

* The following component implements an input field for a single control, using reactive forms.
  
* In this example, the form model is the FormControl instance.

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

* Figure 1 shows how,
  * in reactive forms,
    * the form model is the source of truth;
    * it provides the value and status of the form element at any given point in time,
      * through the `[formControl]` directive on the input element.

* Figure 1. Direct access to forms model in a reactive form.

![Figure 1.](./image/2022-11-15-01-08-52.png)

### Setup in template-driven forms

* In template-driven forms, the form model is implicit, rather than explicit. The directive NgModel creates and manages a FormControl instance for a given form element.

* The following component implements the same input field for a single control, using template-driven forms.

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

* In a template-driven form the source of truth is the template.
* You do not have direct programmatic access to the FormControl instance, as shown in Figure 2.

* Figure 2. Indirect access to forms model in a template-driven form.

![Figure 2.](./image/2022-11-15-01-11-53.png)

## Data flow in forms

* When an application contains a form, Angular must keep the view in sync with the component model and the component model in sync with the view. As users change values and make selections through the view, the new values must be reflected in the data model. Similarly, when the program logic changes values in the data model, those values must be reflected in the view.

* Reactive and template-driven forms differ in how they handle data flowing from the user or from programmatic changes. The following diagrams illustrate both kinds of data flow for each type of form, using the favorite-color input field defined above.

### Data flow in reactive forms

* In reactive forms each form element in the view is directly linked to the form model (a `FormControl` instance).

* Updates **from the view to the model** and **from the model to the view** are
  * synchronous and
  * do not depend on how the UI is rendered.

###### The view-to-model diagram shows how data flows when an input field's value is changed from the view through the following steps

1. The user types a value into the input element, in this case the favorite color Blue.
2. The form input element emits an "input" event with the latest value.
3. The control value accessor listening for events on the form input element immediately relays the new value to the `FormControl` instance.
4. The `FormControl` instance emits the new value through the `valueChanges` observable.
5. Any subscribers to the `valueChanges` observable receive the new value.

![REACTIVE FORMS - DATA FLOW (VIEW TO MODEL)](./image/2022-11-15-01-14-12.png)

###### The model-to-view diagram shows how a programmatic change to the model is propagated to the view through the following steps

1. The user calls the `favoriteColorControl.setValue()` method, which updates the `FormControl` value.
2. The `FormControl` instance emits the new value through the `valueChanges` observable.
3. Any subscribers to the `valueChanges` observable receive the new value.
4. The control value accessor on the form input element updates the element with the new value.

![REACTIVE FORMS - DATA FLOW (MODEL TO VIEW)](./image/2022-11-15-01-15-49.png)

### Data flow in template-driven forms

* In template-driven forms,
  * each form element is linked to a directive that manages the form model internally.

###### The view-to-model diagram shows how data flows when an input field's value is changed from the view through the following steps

1. The user types Blue into the input element.
2. The input element emits an "input" event with the value Blue.
3. The control value accessor attached to the input triggers the `setValue()` method on the `FormControl` instance.
4. The `FormControl` instance emits the new value through the `valueChanges` observable.
5. Any subscribers to the `valueChanges` observable receive the new value.
6. The control value accessor also calls the `NgModel.viewToModelUpdate()` method which emits an `ngModelChange` event.
7. Because the component template uses two-way data binding for the `favoriteColor` property, the `favoriteColor` property in the component is updated to the value emitted by the `ngModelChange` event (Blue).

![TEMPLATE-DRIVEN FORMS - DATA FLOW (VIEW TO MODEL)](./image/2022-11-15-01-17-25.png)

###### The model-to-view diagram shows how data flows from model to view when the `favoriteColor` changes from Blue to Red, through the following steps

1. The `favoriteColor` value is updated in the component.
2. Change detection begins.
3. During change detection, the `ngOnChanges` lifecycle hook is called on the `NgModel` directive instance because the value of one of its inputs has changed.
4. The `ngOnChanges()` method queues an async task to set the value for the internal `FormControl` instance.
5. Change detection completes.
6. On the next tick, the task to set the `FormControl` instance value is executed.
7. The `FormControl` instance emits the latest value through the `valueChanges` observable.
8. Any subscribers to the `valueChanges` observable receive the new value.
9. The control value accessor updates the form input element in the view with the latest `favoriteColor` value.

![TEMPLATE-DRIVEN FORMS - DATA FLOW (MODEL TO VIEW)](./image/2022-11-15-01-19-18.png)

### Mutability of the data model

The change-tracking method plays a role in the efficiency of your application.

###### Reactive forms

* Keep the data model pure by providing it
  * as an immutable data structure.

* Each time a change is triggered on the data model,
  * the `FormControl` instance returns a new data model
    * rather than updating the existing data model.

* This gives you the ability
  * to track unique changes
    * to the data model through the control's observable.

* Change detection is more efficient
  * because it only needs to update on unique changes.

* Because data updates follow reactive patterns,
  * you can integrate with observable operators to transform data.

###### Template-driven forms

* Rely on mutability with two-way data binding to update the data model in the component as changes are made in the template.

* Because there are no unique changes to track on the data model when using two-way data binding, change detection is less efficient at determining when updates are required.

###### The difference is demonstrated in the previous examples that use the favorite-color input element

* With reactive forms,
  * the `FormControl` **instance** always returns
    * a new value when the control's value is updated.
  
* With template-driven forms,
  * the **favorite color property** is always modified to its new value

## Form validation

* Validation is an integral part of managing any set of forms.

* Whether you're checking for required fields or querying an external API for an existing username,
  * Angular provides a set of built-in validators as well as the ability to create custom validators.

###### Reactive forms

Define custom validators as **functions** that receive a control to validate

###### Template-driven forms

Tied to template **directives**, and must provide custom validator directives that wrap validation functions

## Testing

* Testing plays a large part in complex applications.

* A simpler testing strategy is useful
  * when validating that your forms function correctly.

* Reactive forms and template-driven forms have different levels of reliance on rendering the UI to perform assertions based on form control and form field changes.

* The following examples
  * demonstrate the process of testing forms with reactive and template-driven forms.

### Testing reactive forms

* Reactive forms provide
  * a relatively straightforward testing strategy
  * because they provide synchronous access to the form and data models,
  * and they can be tested without rendering the UI.

* In these tests,
  * status and data are queried and manipulated through the control without interacting with the change detection cycle.

The following tests use the favorite-color components from previous examples to verify the view-to-model and model-to-view data flows for a reactive form.

#### Testing reactive forms :-  view to model test.:- Verifying view-to-model data flow

##### The first example performs the following steps to verify the view-to-model data flow

1. Query the view for the form input element, and create a custom "input" event for the test.
2. Set the new value for the input to Red, and dispatch the "input" event on the form input element.
3. Assert that the component's `favoriteColorControl` value matches the value from the input.

###### Favorite color test - view to model

```JS
it('should update the value of the input field', () => {
  const input = fixture.nativeElement.querySelector('input');
  const event = createNewEvent('input');

  input.value = 'Red';
  input.dispatchEvent(event);

  expect(fixture.componentInstance.favoriteColorControl.value).toEqual('Red');
});
```

#### Testing reactive forms :-  model to view test

##### The next example performs the following steps to verify the model-to-view data flow

1. Use the `favoriteColorControl`, a `FormControl` instance, to set the new value.
2. Query the view for the form input element.
3. Assert that the new value set on the control matches the value in the input.

###### Favorite color test - model to view

```JS
it('should update the value in the control', () => {
  component.favoriteColorControl.setValue('Blue');

  const input = fixture.nativeElement.querySelector('input');

  expect(input.value).toBe('Blue');
});
```

### Testing template-driven forms

* Writing tests with template-driven forms
  * requires
    * a detailed knowledge of the change detection process and
    * an understanding of how directives run on each cycle
      * to ensure that elements are queried, tested, or changed at the correct time.

* The following tests use the favorite color components mentioned earlier to verify the data flows from view to model and model to view for a template-driven form.

#### Testing template-driven forms :-  view to model test

The following test verifies the data flow from view to model.

###### Favorite color test - view to model

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

##### Here are the steps performed in the view to model test

1. Query the view for the form input element, and create a custom "input" event for the test.
2. Set the new value for the input to Red, and dispatch the "input" event on the form input element.
3. Run change detection through the test fixture.
4. Assert that the component `favoriteColor` property value matches the value from the input.

#### Testing template-driven forms :-  model to view test

The following test verifies the data flow from model to view.

###### Favorite color test - model to view

```JS
it('should update the favorite color on the input field', fakeAsync(() => {
     component.favoriteColor = 'Blue';

     fixture.detectChanges();

     tick();

     const input = fixture.nativeElement.querySelector('input');

     expect(input.value).toBe('Blue');
   }));
```

##### Here are the steps performed in the model to view test

1. Use the component instance to set the value of the `favoriteColor` property.
2. Run change detection through the test fixture.
3. Use the `tick()` method to simulate the passage of time within the `fakeAsync()` task.
4. Query the view for the form input element.
5. Assert that the input value matches the value of the `favoriteColor` property in the component instance.

# Reactive forms

* Reactive forms provide a model-driven approach
  * to handling form inputs
    * whose values change over time.

* This guide shows you
  * how to
    * create and update a basic form control,
      * progress to using multiple controls in a group,
      * validate form values, and
      * create dynamic forms
        * where you can add or remove controls at run time.

## Prerequisites

Before going further into reactive forms, you should have a basic understanding of the following:

1. TypeScript programming
2. Angular application-design fundamentals, as described in Angular Concepts
3. The form-design concepts that are presented in Introduction to Forms

## Overview of reactive forms

* Reactive forms use an explicit and immutable approach
  * to managing the state of a form at a given point in time.

* Each change to the form state returns a new state,
  * which maintains the integrity of the model between changes.
  
* Reactive forms are built around observable streams,
  * where form inputs and values are provided as streams of input values,
  * which can be accessed synchronously.

* Reactive forms also provide a straightforward path to testing
  * because you are assured that
    * your data is consistent and predictable when requested.

* Any consumers of the streams have access to manipulate that data safely.

* Reactive forms differ from template-driven forms in distinct ways.
  
* Reactive forms provide
  * synchronous access to the data model,
  * immutability with observable operators, and
  * change tracking through observable streams.

* Template-driven forms let direct access modify data in your template,
  * but are less explicit than reactive forms
  * because they rely on directives embedded in the template,
    * along with mutable data to track changes asynchronously.

* See the Forms Overview for detailed comparisons between the two paradigms.

## Adding a basic form control

###### There are three steps to using form controls

1. Register the reactive forms module in your application.
   * This module declares the reactive-form directives that you need to use reactive forms.
2. Generate a new `FormControl` instance and save it in the component.
3. Register the `FormControl` in the template.

* You can then display the form by adding the component to the template.

##### The following examples show how to add a single form control

* In the example,
  * the user
    * enters their name into an input field,
    * captures that input value,
    * and displays the current value of the form control element.

###### ACTION :- Register the reactive forms module

* To use reactive form controls,
  * import `ReactiveFormsModule` from the `@angular/forms` package and
  * add it to your NgModule's `imports` array.

**src/app/app.module.ts (excerpt)**

```JS
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    // other imports ...
    ReactiveFormsModule
  ],
})
export class AppModule { }
```

###### ACTION :- Generate a new `FormControl`

* Use the CLI command `ng generate` 
  * to generate a component in your project to host the control.

**src/app/name-editor/name-editor.component.ts**

```JS
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  name = new FormControl('');
}
```

* Use the constructor of `FormControl` 
  * to set its initial value, 
    * which in this case is an empty string.

* By creating these controls in your component class,
  * you get immediate access to listen for, update, and validate the state of the form input.

###### ACTION :- Register the control in the template

* After you create the control in the component class,
  * you must associate it with a form control element in the template.

* Update the template with the form control
  * using the `formControl` binding provided by `FormControlDirective`,
  * which is also included in the `ReactiveFormsModule`.

**src/app/name-editor/name-editor.component.html**

```html
<label for="name">Name: </label>
<input id="name" type="text" [formControl]="name">
```

* For a summary of the classes and directives provided by `ReactiveFormsModule`,
  * see the following **Reactive forms API** section

* For complete syntax details of these classes and directives,
  * see the API reference documentation for the **Forms package**

* Using the template binding syntax,
  * the form control is now registered to the `name` input element in the template.

* The form control and DOM element communicate with each other:
  * the view reflects changes in the model,
  * and the model reflects changes in the view.

###### ACTION :- Display the component

* The form control assigned to `name` is displayed
  * when the component is added to a template.

**src/app/app.component.html (name editor)**

```html
<app-name-editor></app-name-editor>
```

![Display the component :- Reactive form](./image/2022-11-15-03-30-27.png)

### Displaying a form control value

_**You can display the value in the following ways.**_

1. Through the `valueChanges` observable
   * where you can listen for changes in the form's value
     * in the template using `AsyncPipe` or
     * in the component class
       * using the `subscribe()` method
2. With the `value` property,
   * which gives you a snapshot of the current value

* _**The following example shows you**_
  * how to display the current value using interpolation in the template.

**src/app/name-editor/name-editor.component.html (control value)**

```html
<p>Value: {{ name.value }}</p>
```

* The displayed value changes as you update the form control element.

* Reactive forms provide access to information about a given control
  * through properties and methods provided with each instance.

* These properties and methods of the underlying `AbstractControl` class are used to
  * control form state and
  * determine when to display messages when handling **input validation**.

* Read about other `FormControl` properties and methods in the **API Reference**.

### Replacing a form control value

* Reactive forms have methods to change a control's value programmatically,
  * which gives you the flexibility to update the value without user interaction.

* A form control instance provides a `setValue()` method
  * that updates the value of the form control and
  * validates the structure of the value provided against the control's structure.

* For example,
  * when retrieving form data from a backend API or service,
    * use the `setValue()` method
      * to update the control to its new value,
      * replacing the old value entirely.

* The following example
  * adds a method to the component class
    * to update the value of the control
      * to Nancy using the `setValue()` method.

**src/app/name-editor/name-editor.component.ts (update value)**

```TS
updateName() {
  this.name.setValue('Nancy');
}
```

* Update the template with a button to simulate a name update.

* When you click the **Update Name** button,
  * the value entered in the form control element is reflected as its current value.

**src/app/name-editor/name-editor.component.html (update value)**

```html
<button type="button" (click)="updateName()">Update Name</button>
```

* The form model is the source of truth for the control,
  * so when you click the button,
    * the value of the input is changed within the component class,
    * overriding its current value.

![Update Name](./image/2022-11-15-04-02-19.png)

###### NOTE

* In this example, you're using a single control.
  * When using the `setValue()` method with a **form group** or **form array** instance,
    * the value needs to match the structure of the group or array.

## Grouping form controls

* Forms typically contain several related controls.
* Reactive forms provide two ways of grouping multiple related controls into a single input form.

#### Form group

* Defines a form with a fixed set of controls that you can manage together.
* Form group basics are discussed in this section.
* You can also **nest form groups** to create more complex forms.

#### Form array

* Defines a dynamic form, where you can add and remove controls at run time.
* You can also nest form arrays to create more complex forms.
* For more about this option, see **Creating dynamic forms**.

###### note

* Just as a form control
  * instance gives you control over a single input field,
  * a form group instance tracks the form state of a group of form control instances (for example, a form).
* Each control in a form group instance is tracked by name when creating the form group.
  
* The following example shows how to manage multiple form control instances in a single group.

* Generate a `ProfileEditor` component and import the `FormGroup` and `FormControl` classes from the `@angular/forms` package.

> ng generate component ProfileEditor

**src/app/profile-editor/profile-editor.component.ts (imports)**

```JS
import { FormGroup, FormControl } from '@angular/forms';
```

_**To add a form group to this component, take the following steps.**_

1. Create a `FormGroup` instance.
2. Associate the `FormGroup` model and view.
3. Save the form data.

###### ACTION :- Create a FormGroup instance

* Create a property in the component class named `profileForm` 
  * and set the property to a new form group instance. 
  
* To initialize the form group, 
  * provide the constructor with an object of named keys mapped to their control.
  
For the profile form, add two form control instances with the names `firstName` and `lastName`.

**src/app/profile-editor/profile-editor.component.ts (form group)**

```ts
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}
```

The individual form controls are now collected within a group. A `FormGroup` instance provides its model value as an object reduced from the values of each control in the group. A form group instance has the same properties (such as `value` and `untouched`) and methods (such as `setValue()`) as a form control instance.

###### ACTION :- Associate the `FormGroup` model and view

A form group tracks the status and changes for each of its controls, so if one of the controls changes, the parent control also emits a new status or value change. The model for the group is maintained from its members. After you define the model, you must update the template to reflect the model in the view.

**src/app/profile-editor/profile-editor.component.html (template form group)**

```html
<form [formGroup]="profileForm">

  <label for="first-name">First Name: </label>
  <input id="first-name" type="text" formControlName="firstName">

  <label for="last-name">Last Name: </label>
  <input id="last-name" type="text" formControlName="lastName">

</form>
```

**NOTE:-**
Just as a form group contains a group of controls, the profileForm `FormGroup` is bound to the `form` element with the `FormGroup` directive, creating a communication layer between the model and the form containing the inputs.

The `formControlName` input provided by the `FormControlName` directive binds each individual input to the form control defined in `FormGroup`. The form controls communicate with their respective elements. They also communicate changes to the form group instance, which provides the source of truth for the model value.

###### ACTION :- Save form data

The `ProfileEditor` component accepts input from the user, but in a real scenario you want to capture the form value and make available for further processing outside the component. The `FormGroup` directive listens for the `submit` event emitted by the `form` element and emits an `ngSubmit` event that you can bind to a callback function. Add an `ngSubmit` event listener to the `form` tag with the `onSubmit()` callback method.

**src/app/profile-editor/profile-editor.component.html (submit event)**

```html
<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
```

The `onSubmit()` method in the `ProfileEditor` component captures the current value of `profileForm`. Use `EventEmitter` to keep the form encapsulated and to provide the form value outside the component. The following example uses `console.warn` to log a message to the browser console.

**src/app/profile-editor/profile-editor.component.ts (submit method)**

```ts
onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}
```

The `submit` event is emitted by the `form` tag using the built-in DOM event. You trigger the event by clicking a button with `submit` type. This lets the user press the **Enter** key to submit the completed form.
Use a `button` element to add a button to the bottom of the form to trigger the form submission.

**src/app/profile-editor/profile-editor.component.html (submit button)**

```html
<p>Complete the form to enable button.</p>
<button type="submit" [disabled]="!profileForm.valid">Submit</button>
```

**NOTE:-**
The button in the preceding snippet also has a `disabled` binding attached to it to disable the button when `profileForm` is invalid. You aren't performing any validation yet, so the button is always enabled. Basic form validation is covered in the Validating form input section.

###### ACTION :- Display the component

To display the `ProfileEditor` component that contains the form, add it to a component template.

**src/app/app.component.html (profile editor)**

```html
<app-profile-editor></app-profile-editor>
```

`ProfileEditor` lets you manage the form control instances for the `firstName` and `lastName` controls within the form group instance.

![Display the component](./image/2022-11-15-04-21-25.png)

### Creating nested form groups

Form groups can accept both individual form control instances and other form group instances as children. This makes composing complex form models easier to maintain and logically group together.

When building complex forms, managing the different areas of information is easier in smaller sections. Using a nested form group instance lets you break large forms groups into smaller, more manageable ones.

To make more complex forms, use the following steps.
1. Create a nested group.
2. Group the nested form in the template.

Some types of information naturally fall into the same group. A name and address are typical examples of such nested groups, and are used in the following examples.

###### ACTION   :-  Create a nested group

To create a nested group in `profileForm`, add a nested `address` element to the form group instance.

**src/app/profile-editor/profile-editor.component.ts (nested form group)**

```ts
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
}
```

In this example, `address group` combines the current `firstName` and `lastName` controls with the new `street`, `city`, `state`, and `zip` controls. Even though the `address` element in the form group is a child of the overall `profileForm` element in the form group, the same rules apply with value and status changes. Changes in status and value from the nested form group propagate to the parent form group, maintaining consistency with the overall model.

###### ACTION   :-  Group the nested form in the template

After you update the model in the component class, update the template to connect the form group instance and its input elements. Add the `address` form group containing the `street`, `city`, `state`, and `zip` fields to the `ProfileEditor` template.

**src/app/profile-editor/profile-editor.component.html (template nested form group)**

```html
<div formGroupName="address">
  <h2>Address</h2>

  <label for="street">Street: </label>
  <input id="street" type="text" formControlName="street">

  <label for="city">City: </label>
  <input id="city" type="text" formControlName="city">

  <label for="state">State: </label>
  <input id="state" type="text" formControlName="state">

  <label for="zip">Zip Code: </label>
  <input id="zip" type="text" formControlName="zip">
</div>
```

The `ProfileEditor` form is displayed as one group, but the model is broken down further to represent the logical grouping areas.

![src/app/profile-editor/profile-editor.component.html (template nested form group)](./image/2022-11-17-12-09-50.png)

**TIP:-**
Display the value for the form group instance in the component template using the `value` property and `JsonPipe`.

### Updating parts of the data model

When updating the value for a form group instance that contains multiple controls, you might only want to update parts of the model. This section covers how to update specific parts of a form control data model.

**There are two ways(methods) to update the model value:**

###### 1.  METHODS :- ` setValue()`	
Set a new value for an individual control. The `setValue()` method strictly adheres to the structure of the form group and replaces the entire value for the control.

###### 2. METHODS :- ` patchValue()`
Replace any properties defined in the object that have changed in the form model.

The strict checks of the `setValue()` method help catch nesting errors in complex forms, while `patchValue()` fails silently on those errors.

In `ProfileEditorComponent`, use the `updateProfile` method with the following example to update the first name and street address for the user.

**src/app/profile-editor/profile-editor.component.ts (patch value)**

```ts
updateProfile() {
  this.profileForm.patchValue({
    firstName: 'Nancy',
    address: {
      street: '123 Drew Street'
    }
  });
}
```

Simulate an update by adding a button to the template to update the user profile on demand.

**src/app/profile-editor/profile-editor.component.html (update value)**

```html
<button type="button" (click)="updateProfile()">Update Profile</button>
```

When a user clicks the button, the `profileForm` model is updated with new values for `firstName` and `street`. Notice that `street` is provided in an object inside the `address` property. This is necessary because the `patchValue()` method applies the update against the model structure. `PatchValue()` only updates properties that the form model defines.

## Using the FormBuilder service to generate controls

Creating form control instances manually can become repetitive when dealing with multiple forms. The `FormBuilder` service provides convenient methods for generating controls.

Use the following steps to take advantage of this service.
1. Import the `FormBuilder` class.
2. Inject the `FormBuilder` service.
3. Generate the form contents.

The following examples show how to refactor the `ProfileEditor` component to use the form builder service to create form control and form group instances.

###### Action :- Import the FormBuilder class

Import the `FormBuilder` class from the `@angular/forms` package.

**src/app/profile-editor/profile-editor.component.ts (import)**

```ts
import { FormBuilder } from '@angular/forms';
```

###### Action :- Inject the FormBuilder service

The `FormBuilder` service is an injectable provider that is provided with the reactive forms module. Inject this dependency by adding it to the component constructor.

**src/app/profile-editor/profile-editor.component.ts (constructor)**

```ts
constructor(private fb: FormBuilder) { }
```

###### Action :- Generate form controls

The `FormBuilder` service has three methods: `control()`, `group()`, and `array()`. These are factory methods for generating instances in your component classes including form controls, form groups, and form arrays. Use the `group` method to create the `profileForm` controls.

**src/app/profile-editor/profile-editor.component.ts (form builder)**
```ts
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  constructor(private fb: FormBuilder) { }
}
```
In the preceding example, you use the `group()` method with the same object to define the properties in the model. The value for each control name is an array containing the initial value as the first item in the array.

**TIP:-**
You can define the control with just the initial value, but if your controls need sync or async validation, add sync and async validators as the second and third items in the array.

Compare using the form builder to creating the instances manually.

**src/app/profile-editor/profile-editor.component.ts (instances)**

```ts
profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl('')
  })
});
```

**src/app/profile-editor/profile-editor.component.ts (form builder)**

```ts
profileForm = this.fb.group({
  firstName: [''],
  lastName: [''],
  address: this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: ['']
  }),
});
```

## Validating form input

`Form validation` is used to ensure that user input is complete and correct. This section covers adding a single validator to a form control and displaying the overall form status. Form validation is covered more extensively in the **Form Validation** guide.

Use the following steps to add form validation.
1. Import a validator function in your form component.
2. Add the validator to the field in the form.
3. Add logic to handle the validation status.

The most common validation is making a field required. The following example shows how to add a required validation to the `firstName` control and display the result of validation.

###### ACTION   :-  Import a validator function

Reactive forms include a set of validator functions for common use cases. These functions receive a control to validate against and return an error object or a null value based on the validation check.
Import the `Validators` class from the `@angular/forms` package.

**src/app/profile-editor/profile-editor.component.ts (import)**
```TS
import { Validators } from '@angular/forms';
```

###### ACTION   :-  Make a field required

In the `ProfileEditor` component, add the `Validators.required` static method as the second item in the array for the `firstName` control.

**src/app/profile-editor/profile-editor.component.ts (required validator)**

```TS
profileForm = this.fb.group({
  firstName: ['', Validators.required],
  lastName: [''],
  address: this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: ['']
  }),
});
```

###### ACTION   :-  Display form status

When you add a required field to the form control, its initial status is invalid. This invalid status propagates to the parent form group element, making its status invalid. Access the current status of the form group instance through its `status` property.
Display the current status of `profileForm` using interpolation.

**src/app/profile-editor/profile-editor.component.html (display status)**
```HTML
<p>Form Status: {{ profileForm.status }}</p>
```
![src/app/profile-editor/profile-editor.component.html (display status)](./image/2022-11-17-11-12-38.png)

The Submit button is disabled because `profileForm` is invalid due to the required `firstName` form control. After you fill out the `firstName` input, the form becomes valid and the **Submit** button is enabled.
For more on form validation, visit the **Form Validation** guide.

## Creating dynamic forms

`FormArray` is an alternative to `FormGroup` for managing any number of unnamed controls. As with form group instances, you can dynamically insert and remove controls from form array instances, and the form array instance value and validation status is calculated from its child controls. However, you don't need to define a key for each control by name, so this is a great option if you don't know the number of child values in advance.

To define a dynamic form, take the following steps.
1. Import the `FormArray` class.
2. Define a `FormArray` control.
3. Access the `FormArray` control with a getter method.
4. Display the form array in a template.

The following example shows you how to manage an array of aliases in `ProfileEditor`.

###### ACTION :-   Import the FormArray class

Import the `FormArray` class from` @angular/forms` to use for type information. The `FormBuilder` service is ready to create a `FormArray` instance.

**src/app/profile-editor/profile-editor.component.ts (import)**

```TS
import { FormArray } from '@angular/forms';
```

###### ACTION :-  Define a FormArray control 

You can initialize a form array with any number of controls, from zero to many, by defining them in an array. Add an `aliases` property to the form group instance for `profileForm` to define the form array.
Use the `FormBuilder.array()` method to define the array, and the `FormBuilder.control()` method to populate the array with an initial control.
**src/app/profile-editor/profile-editor.component.ts (aliases form array)**

```TS
profileForm = this.fb.group({
  firstName: ['', Validators.required],
  lastName: [''],
  address: this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: ['']
  }),
  aliases: this.fb.array([
    this.fb.control('')
  ])
});
```

The aliases control in the form group instance is now populated with a single control until more controls are added dynamically.

###### ACTION :-  Access the `FormArray` control 

A getter provides access to the aliases in the form array instance compared to repeating the `profileForm.get()` method to get each instance. The form array instance represents an undefined number of controls in an array. It's convenient to access a control through a getter, and this approach is straightforward to repeat for additional controls.
Use the getter syntax to create an `aliases` class property to retrieve the alias's form array control from the parent form group.

**src/app/profile-editor/profile-editor.component.ts (aliases getter)**

```ts
get aliases() {
  return this.profileForm.get('aliases') as FormArray;
}
```

**NOTE:-**

* Because the returned control is of the type `AbstractControl`, you need to provide an explicit type to access the method syntax for the form array instance.

* Define a method to dynamically insert an alias control into the alias's form array. The `FormArray.push()` method inserts the control as a new item in the array.

**src/app/profile-editor/profile-editor.component.ts (add alias)**

```ts
addAlias() {
  this.aliases.push(this.fb.control(''));
}
```

In the template, each control is displayed as a separate input field.


###### ACTION :-   Display the form array in the template

To attach the aliases from your form model, you must add it to the template. Similar to the `formGroupName` input provided by `FormGroupNameDirective`, `formArrayName` binds communication from the form array instance to the template with `FormArrayNameDirective`.

Add the following template HTML after the `<div>` closing the `formGroupName` element.

**src/app/profile-editor/profile-editor.component.html (aliases form array template)**

```html
<div formArrayName="aliases">
  <h2>Aliases</h2>
  <button type="button" (click)="addAlias()">+ Add another alias</button>

  <div *ngFor="let alias of aliases.controls; let i=index">
    <!-- The repeated alias template -->
    <label for="alias-{{ i }}">Alias:</label>
    <input id="alias-{{ i }}" type="text" [formControlName]="i">
  </div>
</div>
```

The `*ngFor` directive iterates over each form control instance provided by the aliases form array instance. Because form array elements are unnamed, you assign the index to the `i` variable and pass it to each control to bind it to the `formControlName` input.

![ Display the form array in the template](./image/2022-11-15-11-45-51.png)

Each time a new alias instance is added, the new form array instance is provided its control based on the index. This lets you track each individual control when calculating the status and value of the root control.

###### ACTION :-   Add an alias

Initially, the form contains one `Alias` field. To add another field, click the Add **Alias** button. You can also validate the array of aliases reported by the form model displayed by `Form Value` at the bottom of the template.

**NOTE:-**
Instead of a form control instance for each alias, you can compose another form group instance with additional fields. The process of defining a control for each item is the same.

## Reactive forms API summary

The following table lists the base classes and services used to create and manage reactive form controls. For complete syntax details, see the API reference documentation for the Forms package.

### Classes

###### CLASS    :-  	`AbstractControl`	
The abstract base class for the concrete form control classes `FormControl`, `FormGroup`, and `FormArray`. It provides their common behaviors and properties.

###### CLASS    :-  	`FormControl`	
Manages the value and validity status of an individual form control. It corresponds to an HTML form control such as `<input>` or `<select>`.

###### CLASS    :-  	`FormGroup`	
Manages the value and validity state of a group of `AbstractControl` instances. The group's properties include its child controls. The top-level form in your component is `FormGroup`.

###### CLASS    :-  	`FormArray`	
Manages the value and validity state of a numerically indexed array of `AbstractControl` instances.

###### CLASS    :-  	`FormBuilder`	
An injectable service that provides factory methods for creating control instances.

### Directives


###### DIRECTIVE    :-  	`FormControlDirective`	
Syncs a standalone `FormControl` instance to a form control element.

###### DIRECTIVE    :-  	`FormControlName`	
Syncs `FormControl` in an existing `FormGroup` instance to a form control element by name.

###### DIRECTIVE    :-  	`FormGroupDirective`	
Syncs an existing `FormGroup` instance to a DOM element.

###### DIRECTIVE    :-  	`FormGroupName`	
Syncs a nested `FormGroup` instance to a DOM element.

###### DIRECTIVE    :-  	`FormArrayName`	
Syncs a nested `FormArray` instance to a DOM element.

# Typed Forms

As of Angular 14, reactive forms are strictly typed by default.

## Prerequisites

As background for this guide, you should already be familiar with Angular Reactive Forms.

## Overview of Typed Forms

With Angular reactive forms, you explicitly specify a _form model_. As a simple example, consider this basic user login form:

```ts
const login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
});
```

Angular provides many APIs for interacting with this `FormGroup`. For example, you may call `login.value`, `login.controls`, `login.patchValue`, etc. (For a full API reference, see the `API documentation`.)

In previous Angular versions, most of these APIs included `any` somewhere in their types, and interacting with the structure of the controls, or the values themselves, was not type-safe. For example: you could write the following invalid code:

```ts
const emailDomain = login.value.email.domain;
```

With strictly typed reactive forms, the above code does not compile, because there is no `domain` property on `email`.

In addition to the added safety, the types enable a variety of other improvements, such as better autocomplete in IDEs, and an explicit way to specify form structure.

These improvements currently apply only to reactive forms (not `template-driven forms`).

## Automated Untyped Forms Migration

When upgrading to Angular 14, an included migration will automatically replace all the forms classes in your code with corresponding untyped versions. For example, the snippet from above would become:

```ts
const login = new UntypedFormGroup({
    email: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
});
```

Each `Untyped` symbol has exactly the same semantics as in previous Angular versions, so your application should continue to compile as before. By removing the `Untyped` prefixes, you can incrementally enable the types.

## `FormControl`: Getting Started

The simplest possible form consists of a single control:

```ts
const email = new FormControl('angularrox@gmail.com');
```

This control will be automatically inferred to have the type `FormControl<string|null>`. TypeScript will automatically enforce this type throughout the `FormControl` API, such as `email.value`, `email.valueChanges`, `email.setValue(...)`, etc.

### Nullability

You might wonder: why does the type of this control include `null`? This is because the control can become `null` at any time, by calling reset:

```ts
const email = new FormControl('angularrox@gmail.com');
email.reset();
console.log(email.value); // null
```

TypeScript will enforce that you always handle the possibility that the control has become `null`. If you want to make this control non-nullable, you may use the `nonNullable` option. This will cause the control to reset to its initial value, instead of `null`:

```ts
const email = new FormControl('angularrox@gmail.com', {nonNullable: true});
email.reset();
console.log(email.value); // angularrox@gmail.com
```

To reiterate, this option affects the runtime behavior of your form when `.reset()` is called, and should be flipped with care.

### Specifying an Explicit Type

It is possible to specify the type, instead of relying on inference. Consider a control that is initialized to `null`. Because the initial value is `null`, TypeScript will infer F`ormControl<null>`, which is narrower than we want.

```ts
const email = new FormControl(null);
email.setValue('angularrox@gmail.com'); // Error!
```

To prevent this, we explicitly specify the type as `string|null`:

```ts
const email = new FormControl<string|null>(null);
email.setValue('angularrox@gmail.com');
```

## `FormArray`: Dynamic, Homogenous Collections

A `FormArray` contains an open-ended list of controls. The type parameter corresponds to the type of each inner control:

```ts
const names = new FormArray([new FormControl('Alex')]);
names.push(new FormControl('Jess'));
```

This `FormArray` will have the inner controls type `FormControl<string|null>`.

If you want to have multiple different element types inside the array, you must use `UntypedFormArray`, because TypeScript cannot infer which element type will occur at which position.

## `FormGroup` and `FormRecord`

Angular provides the `FormGroup` type for forms with an enumerated set of keys, and a type called `FormRecord`, for open-ended or dynamic groups.

### Partial Values

Consider again a login form:

```ts
const login = new FormGroup({
    email: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true}),
});
```

On any `FormGroup`, it is possible to disable controls. Any disabled control will not appear in the group's value.

As a consequence, the type of `login.value` is `Partial<{email: string, password: string}>`. The `Partial` in this type means that each member might be undefined.

More specifically, the type of `login.value.email` is `string|undefined`, and TypeScript will enforce that you handle the possibly undefined value (if you have `strictNullChecks` enabled).

If you want to access the value including disabled controls, and thus bypass possible `undefined` fields, you can use `login.getRawValue()`.

### Optional Controls and Dynamic Groups

Some forms have controls that may or may not be present, which can be added and removed at runtime. You can represent these controls using optional fields:

```ts
interface LoginForm {
    email: FormControl<string>;
    password?: FormControl<string>;
}

const login = new FormGroup<LoginForm>({
    email: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true}),
});

login.removeControl('password');
```

In this form, we explicitly specify the type, which allows us to make the `password` control optional. TypeScript will enforce that only optional controls can be added or removed.

### `FormRecord`

Some `FormGroup` usages do not fit the above pattern because the keys are not known ahead of time. The `FormRecord` class is designed for that case:

```ts
const addresses = new FormRecord<FormControl<string|null>>({});
addresses.addControl('Andrew', new FormControl('2340 Folsom St'));
```

Any control of type `string|null` can be added to this `FormRecord`.

If you need a `FormGroup` that is both dynamic (open-ended) and heterogeneous (the controls are different types), no improved type safety is possible, and you should use `UntypedFormGroup`.

A `FormRecord` can also be built with the `FormBuilder`:

```ts
const addresses = fb.record({'Andrew': '2340 Folsom St'});
```

## FormBuilder and NonNullableFormBuilder

The FormBuilder class has been upgraded to support the new types as well, in the same manner as the above examples.

Additionally, an additional builder is available: `NonNullableFormBuilder`. This type is shorthand for specifying `{nonNullable: true}` on every control, and can eliminate significant boilerplate from large non-nullable forms. You can access it using the `nonNullable` property on a `FormBuilder` :

```ts
const fb = new FormBuilder();
const login = fb.nonNullable.group({
    email: '',
    password: '',
});
```

On the above example, both inner controls will be non-nullable (i.e. nonNullable will be set).

You can also inject it using the name `NonNullableFormBuilder`.

# Validating form input

You can improve overall data quality by validating user input for accuracy and completeness. This page shows how to validate user input from the UI and display useful validation messages, in both reactive and template-driven forms.

## Prerequisites

Before reading about form validation, you should have a basic understanding of the following.

* TypeScript and HTML5 programming
* Fundamental concepts of Angular application design
* The two types of forms that Angular supports
* Basics of either Template-driven Forms or Reactive Forms

## Validating input in template-driven forms

To add validation to a template-driven form, you add the same validation attributes as you would with native HTML form validation. Angular uses directives to match these attributes with validator functions in the framework.

Every time the value of a form control changes, Angular runs validation and generates either a list of validation errors that results in an `INVALID` status, or null, which results in a VALID status.

You can then inspect the control's state by exporting `ngModel` to a local template variable. The following example exports `NgModel` into a variable called `name`:

**template/hero-form-template.component.html (name)**

```html
<input type="text" id="name" name="name" class="form-control"
      required minlength="4" appForbiddenName="bob"
      [(ngModel)]="hero.name" #name="ngModel">

<div *ngIf="name.invalid && (name.dirty || name.touched)"
    class="alert">

  <div *ngIf="name.errors?.['required']">
    Name is required.
  </div>
  <div *ngIf="name.errors?.['minlength']">
    Name must be at least 4 characters long.
  </div>
  <div *ngIf="name.errors?.['forbiddenName']">
    Name cannot be Bob.
  </div>

</div>
```

Notice the following features illustrated by the example.

The `<input>` element carries the HTML validation attributes: `required` and `minlength`. It also carries a custom validator directive, `forbiddenName`. For more information, see the **Custom validators** section.

`#name="ngModel"` exports `NgModel` into a local variable called `name`. `NgModel` mirrors many of the properties of its underlying `FormControl` instance, so you can use this in the template to check for control states such as `valid` and `dirty`. For a full list of control properties, see the `AbstractControl` API reference.

The `*ngIf` on the `<div>` element reveals a set of nested message `divs` but only if the `name` is invalid and the control is either `dirty` or `touched`.

Each nested `<div>` can present a custom message for one of the possible validation errors. There are messages for `required`, `minlength`, and `forbiddenName`.


To prevent the validator from displaying errors before the user has a chance to edit the form, you should check for either the `dirty` or `touched` states in a control.

When the user changes the value in the watched field, the control is marked as "dirty"
When the user blurs the form control element, the control is marked as "touched"

## Validating input in reactive forms

In a reactive form, the source of truth is the component class. Instead of adding validators through attributes in the template, you add validator functions directly to the form control model in the component class. Angular then calls these functions whenever the value of the control changes.

### Validator functions

Validator functions can be either synchronous or asynchronous.

###### VALIDATOR TYPE :- Sync validators

Synchronous functions that take a control instance and immediately return either a set of validation errors or `null`. Pass these in as the second argument when you instantiate a `FormControl`.

###### VALIDATOR TYPE :- Async validators

Asynchronous functions that take a control instance and return a Promise or Observable that later emits a set of validation errors or `null`. Pass these in as the third argument when you instantiate a `FormControl`.

###### note:-

For performance reasons, Angular only runs async validators if all sync validators pass. Each must complete before errors are set.

### Built-in validator functions

You can choose to write your own validator functions, or you can use some of Angular's built-in validators.

The same built-in validators that are available as attributes in template-driven forms, such as `required` and `minlength`, are all available to use as functions from the `Validators` class. For a full list of built-in validators, see the Validators API reference.

To update the hero form to be a reactive form, use some of the same built-in validators —this time, in function form, as in the following example.

**reactive/hero-form-reactive.component.ts (validator functions)**

```ts
ngOnInit(): void {
  this.heroForm = new FormGroup({
    name: new FormControl(this.hero.name, [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    ]),
    alterEgo: new FormControl(this.hero.alterEgo),
    power: new FormControl(this.hero.power, Validators.required)
  });

}

get name() { return this.heroForm.get('name'); }

get power() { return this.heroForm.get('power'); }
```

In this example, the `name` control sets up two built-in validators —`Validators.required` and `Validators.minLength(4)`— and one custom validator, `forbiddenNameValidator`. (For more details see custom validators.)

All of these validators are synchronous, so they are passed as the second argument. Notice that you can support multiple validators by passing the functions in as an array.

This example also adds a few getter methods. In a reactive form, you can always access any form control through the `get` method on its parent group, but sometimes it's useful to define getters as shorthand for the template.

If you look at the template for the `name` input again, it is fairly similar to the template-driven example.

**reactive/hero-form-reactive.component.html (name with error msg)**

```html
<input type="text" id="name" class="form-control"
      formControlName="name" required>

<div *ngIf="name.invalid && (name.dirty || name.touched)"
    class="alert alert-danger">

  <div *ngIf="name.errors?.['required']">
    Name is required.
  </div>
  <div *ngIf="name.errors?.['minlength']">
    Name must be at least 4 characters long.
  </div>
  <div *ngIf="name.errors?.['forbiddenName']">
    Name cannot be Bob.
  </div>
</div>
```

This form differs from the template-driven version in that it no longer exports any directives. Instead, it uses the `name` getter defined in the component class.

Notice that the `required` attribute is still present in the template. Although it's not necessary for validation, it should be retained to for accessibility purposes.

## Defining custom validators

The built-in validators don't always match the exact use case of your application, so you sometimes need to create a custom validator.

Consider the `forbiddenNameValidator` function from **previous reactive-form examples**. Here's what the definition of that function looks like.

**shared/forbidden-name.directive.ts (forbiddenNameValidator)**

```ts
/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
```

The function is a factory that takes a regular expression to detect a specific forbidden name and returns a validator function.

In this sample, the forbidden name is "bob", so the validator rejects any hero name containing "bob". Elsewhere it could reject "alice" or any name that the configuring regular expression matches.

The `forbiddenNameValidator` factory returns the configured validator function. That function takes an Angular control object and returns either null if the control value is valid or a validation error object. The validation error object typically has a property whose name is the validation key, `'forbiddenName'`, and whose value is an arbitrary dictionary of values that you could insert into an error message, `{name}`.

Custom async validators are similar to sync validators, but they must instead return a Promise or observable that later emits null or a validation error object. In the case of an observable, the observable must complete, at which point the form uses the last value emitted for validation.

### Adding custom validators to reactive forms

In reactive forms, add a custom validator by passing the function directly to the `FormControl`.

**reactive/hero-form-reactive.component.ts (validator functions)**

```ts
this.heroForm = new FormGroup({
  name: new FormControl(this.hero.name, [
    Validators.required,
    Validators.minLength(4),
    forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
  ]),
  alterEgo: new FormControl(this.hero.alterEgo),
  power: new FormControl(this.hero.power, Validators.required)
});
```

### Adding custom validators to template-driven forms

In template-driven forms, add a directive to the template, where the directive wraps the validator function. For example, the corresponding `ForbiddenValidatorDirective` serves as a wrapper around the `forbiddenNameValidator`.

Angular recognizes the directive's role in the validation process because the directive registers itself with the `NG_VALIDATORS` provider, as shown in the following example. `NG_VALIDATORS` is a predefined provider with an extensible collection of validators.

**shared/forbidden-name.directive.ts (providers)**

```ts
providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
```

The directive class then implements the `Validator` interface, so that it can easily integrate with Angular forms. Here is the rest of the directive to help you get an idea of how it all comes together.

**shared/forbidden-name.directive.ts (directive)**

```ts
@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
                              : null;
  }
}
```

Once the `ForbiddenValidatorDirective` is ready, you can add its selector, `appForbiddenName`, to any input element to activate it. For example:

**template/hero-form-template.component.html (forbidden-name-input)**

```html
<input type="text" id="name" name="name" class="form-control"
      required minlength="4" appForbiddenName="bob"
      [(ngModel)]="hero.name" #name="ngModel">
```

###### note:-

Notice that the custom validation directive is instantiated with `useExisting` rather than `useClass`. The registered validator must be this instance of the `ForbiddenValidatorDirective` —the instance in the form with its `forbiddenName` property bound to "bob".

If you were to replace `useExisting` with `useClass`, then you'd be registering a new class instance, one that doesn't have a `forbiddenName`.

## Control status CSS classes

Angular automatically mirrors many control properties onto the form control element as CSS classes. Use these classes to style form control elements according to the state of the form. The following classes are currently supported.

* `.ng-valid`
* `.ng-invalid`
* `.ng-pending`
* `.ng-pristine`
* `.ng-dirty`
* `.ng-untouched`
* `.ng-touched`
* `.ng-submitted` (enclosing form element only)

In the following example, the hero form uses the `.ng-valid` and `.ng-invalid` classes to set the color of each form control's border.

**forms.css (status classes)**

```css
.ng-valid[required], .ng-valid.required  {
  border-left: 5px solid #42A948; /* green */
}

.ng-invalid:not(form)  {
  border-left: 5px solid #a94442; /* red */
}

.alert div {
  background-color: #fed3d3;
  color: #820000;
  padding: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: .5rem;
}

select {
  width: 100%;
  padding: .5rem;
}
```

## Cross-field validation

A cross-field validator is a custom validator that compares the values of different fields in a form and accepts or rejects them in combination. For example, you might have a form that offers mutually incompatible options, so that if the user can choose A or B, but not both. Some field values might also depend on others; a user might be allowed to choose B only if A is also chosen.

The following cross validation examples show how to do the following:

* Validate reactive or template-based form input based on the values of two sibling controls,
* Show a descriptive error message after the user interacted with the form and the validation failed.

The examples use cross-validation to ensure that heroes do not reveal their true identities by filling out the Hero Form. The validators do this by checking that the hero names and alter egos do not match.

### Adding cross-validation to reactive forms

**The form has the following structure:-**

```ts
const heroForm = new FormGroup({
  'name': new FormControl(),
  'alterEgo': new FormControl(),
  'power': new FormControl()
});
```

Notice that the `name` and `alterEgo` are sibling controls. To evaluate both controls in a single custom validator, you must perform the validation in a common ancestor control: the `FormGroup`. You query the `FormGroup` for its child controls so that you can compare their values.

**To add a validator to the `FormGroup`, pass the new validator in as the second argument on creation.**

```ts
const heroForm = new FormGroup({
  'name': new FormControl(),
  'alterEgo': new FormControl(),
  'power': new FormControl()
}, { validators: identityRevealedValidator });
```

The validator code is as follows.

**shared/identity-revealed.directive.ts**
```ts
/** A hero's name can't match the hero's alter ego */
export const identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const name = control.get('name');
  const alterEgo = control.get('alterEgo');

  return name && alterEgo && name.value === alterEgo.value ? { identityRevealed: true } : null;
};
```
The `identity` validator implements the `ValidatorFn` interface. It takes an Angular control object as an argument and returns either null if the form is valid, or `ValidationErrors` otherwise.

The validator retrieves the child controls by calling the `FormGroup`'s get method, then compares the values of the `name` and `alterEgo` controls.

If the values do not match, the hero's identity remains secret, both are valid, and the validator returns null. If they do match, the hero's identity is revealed and the validator must mark the form as invalid by returning an error object.

To provide better user experience, the template shows an appropriate error message when the form is invalid.

**reactive/hero-form-template.component.html**

```html
<div *ngIf="heroForm.errors?.['identityRevealed'] && (heroForm.touched || heroForm.dirty)" class="cross-validation-error-message alert alert-danger">
    Name cannot match alter ego.
</div>
```

This `*ngIf` displays the error if the `FormGroup` has the cross validation error returned by the `identityRevealed` validator, but only if the user finished **interacting with the form**.

### Adding cross-validation to template-driven forms

For a template-driven form, you must create a directive to wrap the validator function. You provide that directive as the validator using the NG_VALIDATORS token, as shown in the following example.

**shared/identity-revealed.directive.ts**

```ts
@Directive({
  selector: '[appIdentityRevealed]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IdentityRevealedValidatorDirective, multi: true }]
})
export class IdentityRevealedValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return identityRevealedValidator(control);
  }
}
```

You must add the new directive to the HTML template. Because the validator must be registered at the highest level in the form, the following template puts the directive on the form tag.

**template/hero-form-template.component.html**

```html
<form #heroForm="ngForm" appIdentityRevealed>
```

To provide better user experience, an appropriate error message appears when the form is invalid.

**template/hero-form-template.component.html**

```html
<div *ngIf="heroForm.errors?.['identityRevealed'] && (heroForm.touched || heroForm.dirty)" class="cross-validation-error-message alert">
    Name cannot match alter ego.
</div>
```

This is the same in both template-driven and reactive forms.

## Creating asynchronous validators

Asynchronous validators implement the `AsyncValidatorFn` and `AsyncValidator` interfaces. These are very similar to their synchronous counterparts, with the following differences.

The `validate()` functions must return a Promise or an observable,
The observable returned must be finite, meaning it must complete at some point. To convert an infinite observable into a finite one, pipe the observable through a filtering operator such as `first`, `last`, `take`, or `takeUntil`.

Asynchronous validation happens after the synchronous validation, and is performed only if the synchronous validation is successful. This check lets forms avoid potentially expensive async validation processes (such as an HTTP request) if the more basic validation methods have already found invalid input.

After asynchronous validation begins, the form control enters a `pending` state. Inspect the control's `pending` property and use it to give visual feedback about the ongoing validation operation.

A common UI pattern is to show a spinner while the async validation is being performed. The following example shows how to achieve this in a template-driven form.

```html
<input [(ngModel)]="name" #model="ngModel" appSomeAsyncValidator>
<app-spinner *ngIf="model.pending"></app-spinner>
```

### Implementing a custom async validator

In the following example, an async validator ensures that heroes pick an alter ego that is not already taken. New heroes are constantly enlisting and old heroes are leaving the service, so the list of available alter egos cannot be retrieved ahead of time. To validate the potential alter ego entry, the validator must initiate an asynchronous operation to consult a central database of all currently enlisted heroes.

The following code creates the validator class, `UniqueAlterEgoValidator`, which implements the `AsyncValidator` interface.

```ts
@Injectable({ providedIn: 'root' })
export class UniqueAlterEgoValidator implements AsyncValidator {
  constructor(private heroesService: HeroesService) {}

  validate(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return this.heroesService.isAlterEgoTaken(control.value).pipe(
      map(isTaken => (isTaken ? { uniqueAlterEgo: true } : null)),
      catchError(() => of(null))
    );
  }
}
```
The constructor injects the `HeroesService`, which defines the following interface.

```ts
interface HeroesService {
  isAlterEgoTaken: (alterEgo: string) => Observable<boolean>;
}
```

In a real world application, the `HeroesService` would be responsible for making an HTTP request to the hero database to check if the alter ego is available. From the validator's point of view, the actual implementation of the service is not important, so the example can just code against the `HeroesService` interface.

As the validation begins, the `UniqueAlterEgoValidator` delegates to the `HeroesService` `isAlterEgoTaken()` method with the current control value. At this point the control is marked as `pending` and remains in this state until the observable chain returned from the `validate()` method completes.

The `isAlterEgoTaken()` method dispatches an HTTP request that checks if the alter ego is available, and returns `Observable<boolean>` as the result. The `validate()` method pipes the response through the `map` operator and transforms it into a validation result.

The method then, like any validator, returns `null` if the form is valid, and `ValidationErrors` if it is not. This validator handles any potential errors with the `catchError` operator. In this case, the validator treats the `isAlterEgoTaken()` error as a successful validation, because failure to make a validation request does not necessarily mean that the alter ego is invalid. You could handle the error differently and return the `ValidationError` object instead.

After some time passes, the observable chain completes and the asynchronous validation is done. The `pending` flag is set to `false`, and the form validity is updated.

### Adding async validators to reactive forms

To use an async validator in reactive forms, begin by injecting the validator into the constructor of the component class.

```ts
constructor(private alterEgoValidator: UniqueAlterEgoValidator) {}
```

Then, pass the validator function directly to the `FormControl` to apply it.

In the following example, the `validate` function of `UniqueAlterEgoValidator` is applied to `alterEgoControl` by passing it to the control's `asyncValidators` option and binding it to the instance of `UniqueAlterEgoValidator` that was injected into `HeroFormReactiveComponent`. The value of `asyncValidators` can be either a single async validator function, or an array of functions. To learn more about `FormControl` options, see the `AbstractControlOptions` API reference.

```ts
const alterEgoControl = new FormControl('', {
  asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
  updateOn: 'blur'
});
```

### Adding async validators to template-driven forms

To use an async validator in template-driven forms, create a new directive and register the `NG_ASYNC_VALIDATORS` provider on it.

In the example below, the directive injects the `UniqueAlterEgoValidator` class that contains the actual validation logic and invokes it in the `validate` function, triggered by Angular when validation should happen.

```ts
@Directive({
  selector: '[appUniqueAlterEgo]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueAlterEgoValidatorDirective),
      multi: true
    }
  ]
})
export class UniqueAlterEgoValidatorDirective implements AsyncValidator {
  constructor(private validator: UniqueAlterEgoValidator) {}

  validate(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return this.validator.validate(control);
  }
}
```

Then, as with synchronous validators, add the directive's selector to an input to activate it.

**template/hero-form-template.component.html (unique-alter-ego-input)**

```html
<input type="text"
         id="alterEgo"
         name="alterEgo"
         #alterEgo="ngModel"
         [(ngModel)]="hero.alterEgo"
         [ngModelOptions]="{ updateOn: 'blur' }"
         appUniqueAlterEgo>
```

### Optimizing performance of async validators

By default, all validators run after every form value change. With synchronous validators, this does not normally have a noticeable impact on application performance. Async validators, however, commonly perform some kind of HTTP request to validate the control. Dispatching an HTTP request after every keystroke could put a strain on the backend API, and should be avoided if possible.

You can delay updating the form validity by changing the `updateOn` property from `change` (default) to `submit` or `blur`.

With template-driven forms, set the property in the template.

```html
<input [(ngModel)]="name" [ngModelOptions]="{updateOn: 'blur'}">
```

With reactive forms, set the property in the `FormControl` instance.

```ts
new FormControl('', {updateOn: 'blur'});
```

## Interaction with native HTML form validation

By default, Angular disables **native HTML form validation** by adding the `novalidate` attribute on the enclosing `<form>` and uses directives to match these attributes with validator functions in the framework. If you want to use native validation **in combination** with Angular-based validation, you can re-enable it with the `ngNativeValidate` directive. See the **API docs** for details.

# Building dynamic forms

* Many forms, such as questionnaires, can be very similar to one another in format and intent. 
* To make it faster and easier to generate different versions of such a form, you can create a dynamic form template based on metadata that describes the business object model. 
* Then, use the template to generate new forms automatically, according to changes in the data model.

* The technique is particularly useful when you have a type of form whose content must change frequently to meet rapidly changing business and regulatory requirements. 
* A typical use-case is a questionnaire. 
* You might need to get input from users in different contexts. 
* The format and style of the forms a user sees should remain constant, while the actual questions you need to ask vary with the context.

* In this tutorial you will build a dynamic form that presents a basic questionnaire. 
* You build an online application for heroes seeking employment. 
* The agency is constantly tinkering with the application process, but by using the dynamic form you can create the new forms on the fly without changing the application code.

* **The tutorial walks you through the following steps.**
  1. Enable reactive forms for a project.
  2. Establish a data model to represent form controls.
  3. Populate the model with sample data.
  4. Develop a component to create form controls dynamically.
  
* The form you create uses input validation and styling to improve the user experience. 
* It has a Submit button that is only enabled when all user input is valid, and flags invalid input with color coding and error messages.

* The basic version can evolve to support a richer variety of questions, more graceful rendering, and superior user experience.

## Prerequisites

Before doing this tutorial, you should have a basic understanding to the following.

* TypeScript and HTML5 programming
* Fundamental concepts of Angular app design
* Basic knowledge of reactive forms

## Enable reactive forms for your project
* Dynamic forms are based on reactive forms. To give the application access reactive forms directives, the **root module** imports `ReactiveFormsModule` from the `@angular/forms` library.

The following code from the example shows the setup in the root module.
**app.module.ts**

```ts
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
```

**main.ts**

```ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
```


## Create a form object model
A dynamic form requires an object model that can describe all scenarios needed by the form functionality. The example hero-application form is a set of questions —that is, each control in the form must ask a question and accept an answer.

The data model for this type of form must represent a question. The example includes the `DynamicFormQuestionComponent`, which defines a question as the fundamental object in the model.

The following `QuestionBase` is a base class for a set of controls that can represent the question and its answer in the form.

**src/app/question-base.ts**

```ts
export class QuestionBase<T> {
  value: T|undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: {key: string, value: string}[];

  constructor(options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      options?: {key: string, value: string}[];
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
  }
}
```

### Define control classes

From this base, the example derives two new classes, `TextboxQuestion` and `DropdownQuestion`, that represent different control types. When you create the form template in the next step, you instantiate these specific question types in order to render the appropriate controls dynamically.

###### CONTROL TYPE :- `TextboxQuestion` control type

Presents a question and lets users enter input.

**src/app/question-textbox.ts**

```ts
import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}
```

The `TextboxQuestion` control type is represented in a form template using an `<input>` element. The `type` attribute of the element is defined based on the `type` field specified in the `options` argument (for example `text`, `email`, `url`).

###### CONTROL TYPE :- `DropdownQuestion` control type

Presents a list of choices in a select box.

**src/app/question-dropdown.ts**

```ts
import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
}
```

### Compose form groups

A dynamic form uses a service to create grouped sets of input controls, based on the form model. The following `QuestionControlService` collects a set of `FormGroup` instances that consume the metadata from the question model. You can specify default values and validation rules.

**src/app/question-control.service.ts**

```ts
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
```

## Compose dynamic form contents

The dynamic form itself is represented by a container component, which you add in a later step. Each question is represented in the form component's template by an `<app-question>` tag, which matches an instance of `DynamicFormQuestionComponent`.

The `DynamicFormQuestionComponent` is responsible for rendering the details of an individual question based on values in the data-bound question object. The form relies on a `[formGroup]` directive to connect the template HTML to the underlying control objects. The `DynamicFormQuestionComponent` creates form groups and populates them with controls defined in the question model, specifying display and validation rules.

**dynamic-form-question.component.html**

```ts
<div [formGroup]="form">
  <label [attr.for]="question.key">{{question.label}}</label>

  <div [ngSwitch]="question.controlType">

    <input *ngSwitchCase="'textbox'" [formControlName]="question.key"
            [id]="question.key" [type]="question.type">

    <select [id]="question.key" *ngSwitchCase="'dropdown'" [formControlName]="question.key">
      <option *ngFor="let opt of question.options" [value]="opt.key">{{opt.value}}</option>
    </select>

  </div>

  <div class="errorMessage" *ngIf="!isValid">{{question.label}} is required</div>
</div>
```

**dynamic-form-question.component.ts**

```ts
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
```

The goal of the `DynamicFormQuestionComponent` is to present question types defined in your model. You only have two types of questions at this point but you can imagine many more. The `ngSwitch` statement in the template determines which type of question to display. The switch uses directives with the `formControlName` and `formGroup` selectors. Both directives are defined in `ReactiveFormsModule`.

### Supply data
Another service is needed to supply a specific set of questions from which to build an individual form. For this exercise you create the `QuestionService` to supply this array of questions from the hard-coded sample data. In a real-world app, the service might fetch data from a backend system. The key point, however, is that you control the hero job-application questions entirely through the objects returned from `QuestionService`. To maintain the questionnaire as requirements change, you only need to add, update, and remove objects from the `questions` array.

The `QuestionService` supplies a set of questions in the form of an array bound to `@Input()` questions.

**src/app/question.service.ts**

```ts
import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
```

## Create a dynamic form template

The `DynamicFormComponent` component is the entry point and the main container for the form, which is represented using the `<app-dynamic-form>` in a template.

The `DynamicFormComponent` component presents a list of questions by binding each one to an `<app-question>` element that matches the `DynamicFormQuestionComponent`.

**dynamic-form.component.html**

```html
<div>
  <form (ngSubmit)="onSubmit()" [formGroup]="form">

    <div *ngFor="let question of questions" class="form-row">
      <app-question [question]="question" [form]="form"></app-question>
    </div>

    <div class="form-row">
      <button type="submit" [disabled]="!form.valid">Save</button>
    </div>
  </form>

  <div *ngIf="payLoad" class="form-row">
    <strong>Saved the following values</strong><br>{{payLoad}}
  </div>
</div>
```

**dynamic-form.component.ts**

```ts
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
```

### Display the form

To display an instance of the dynamic form, the `AppComponent` shell template passes the `questions` array returned by the `QuestionService` to the form container component, `<app-dynamic-form>`.

**app.component.ts**

```ts
import { Component } from '@angular/core';

import { QuestionService } from './question.service';
import { QuestionBase } from './question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
```

The example provides a model for a job application for heroes, but there are no references to any specific hero question other than the objects returned by `QuestionService`. This separation of model and data lets you repurpose the components for any type of survey, as long as it's compatible with the question object model.

### Ensuring valid data
The form template uses dynamic data binding of metadata to render the form without making any hardcoded assumptions about specific questions. It adds both control metadata and validation criteria dynamically.

To ensure valid input, the Save button is disabled until the form is in a valid state. When the form is valid, click Save and the application renders the current form values as JSON.

The following figure shows the final form.
![Ensuring valid data](./image/2022-11-15-08-13-05.png)

## Next steps

###### STEPS:- Different types of forms and control collection

This tutorial shows how to build a questionnaire, which is just one kind of dynamic form. The example uses `FormGroup` to collect a set of controls. For an example of a different type of dynamic form, see the section **Creating dynamic forms** in the Reactive Forms guide. That example also shows how to use `FormArray` instead of `FormGroup` to collect a set of controls.

###### STEPS:- Validating user input

* The section Validating form input introduces the basics of how input validation works in reactive forms.
* The Form validation guide covers the topic in more depth.