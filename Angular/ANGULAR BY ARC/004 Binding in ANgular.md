# topic

24. Data Binding in Angular
25. Interpolation in Angular
26. Property Binding in Angular
27. Attribute Binding in Angular
28. Event Binding in Angular
29. Two Way Data Binding in Angular

## important points

* **Interpolation**
  * Learn how to use interpolation and expressions in HTML.
* **Template statements**
  * Respond to events in your templates.
* **Binding syntax**
  * Use binding to coordinate values in your application.
* **Property binding**
  * Set properties of target elements or directive @Input() decorators.
* **Attribute, class, and style bindings**
  * Set the value of attributes, classes, and styles.
* **Event binding**
  * Listen for events and your HTML.
* **Two-way binding**
  * Share data between a class and its template.
* **Built-in directives**
  * Listen to and modify the behavior and layout of HTML.
* **Template reference variables**
  * Use special variables to reference a DOM element within a template.
* **Inputs and Outputs**
  * Share data between the parent context and child directives or components
* **Template expression operators**
  * Learn about the pipe operator (|), and protect against null or undefined values in your HTML.
* **SVG in templates**
  * Dynamically generate interactive graphics.

# Data Binding in Angular

## Data Biniding

### introduction

* Means to bind the data from view (Template) to Controller (Component class) and vice versa
* Data binding as the name suggest — interacting with data
* Defines how the data flows and how the data gets updated based on business logic

### types of Data Binding

* **One-way Data Binding**
  * Component to View
    * Interpolation
    * Property Binding
    * Style Binding
    * Attribute Binding
  * View to Component
  * Event Binding
* **Two-way Data Binding**
  * Data flows from view to component and back to component from the view

```js
D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM>ng g c users
CREATE src/app/users/users.component.html (20 bytes)
CREATE src/app/users/users.component.spec.ts (592 bytes)
CREATE src/app/users/users.component.ts (272 bytes)     
CREATE src/app/users/users.component.scss (0 bytes)
UPDATE src/app/app.module.ts (555 bytes)

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM>
```

1. Each component
    `users.component.html` -> view/HTML/UI
    `users.component.scss` -> classNames
    `users.component.ts` -> what data to be displayed/expressions
    `users.component.spec.ts`

2. Data is spread throughout these files

3. **Data Binding intercating with data of the component**

```JS
4. Data can be from component to template -> one way

5. Data can be from template to component -> one way 

6. Two way  to/from component 
            from/to   template

7. One way/Two way is nothing but representation of data flow 
    -> one way

    -> two-way 
    <-
```

### example :-

**user.component.html**

```html
<p>users works!</p>

<h1>    {{title}}   </h1>

<a href="#" (click)="updateValue()"> update something </a>
```

**user.component.ts**

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title : string = "This is user component"
  constructor() { }

  ngOnInit(): void {
  }

  updateValue(){
    
  }
}
```

## Data Biniding by Angulae.io

### Understanding binding

* In an Angular template,
  * a binding creates a live connection between a part of the UI created from a template (a DOM element, directive, or component) and the model (the component instance to which the template belongs).

* This connection can be used to synchronize the view with the model,
  * to notify the model
    * when an event or user action takes place in the view, or both.

* Angular's Change Detection algorithm is responsible for keeping the view and the model in sync.

* Examples of binding include:
  * text interpolations
  * property binding
  * event binding
  * two-way binding

* Bindings always have two parts:
  * a target which will receive the bound value,
  * and a template expression which produces a value from the model.

### Syntax

* Template expressions are similar to JavaScript expressions.

* Many JavaScript expressions are legal template expressions, with the following exceptions.

You can't use JavaScript expressions that have or promote side effects, including:

* Assignments (`=`, `+=`, `-=`, `...`)
* Operators such as `new`, `typeof`, or `instanceof`
* Chaining expressions with `;` or `,`
* The increment and decrement operators `++` and `--`
* Some of the ES2015+ operators

Other notable differences from JavaScript syntax include:

* No support for the bitwise operators such as `|` and `&`
* New template expression operators, such as `|`

### Expression context

* Interpolated expressions have a context—a particular part of the application to which the expression belongs.
* Typically, this context is the component instance.

* In the following snippet,
  * the expression `recommended` and the expression `itemImageUrl2` refer to properties of the `AppComponent`.

**src/app/app.component.html**

```html
<h4>{{recommended}}</h4>
<img alt="item 2" [src]="itemImageUrl2">
```

* An expression can also refer to properties of the template's context
  * such as a template input variable or a template reference variable.

* The following example uses a template input variable of `customer`.

**src/app/app.component.html (template input variable)**

```html
<ul>
  <li *ngFor="let customer of customers">{{customer.name}}</li>
</ul>
```

* This next example features a template reference variable, `#customerInput`.

**src/app/app.component.html (template reference variable)**

```html
<label>Type something:
  <input #customerInput>{{customerInput.value}}
</label>
```

* Template expressions cannot refer to anything in the global namespace, except `undefined`.

* They can't refer to `window` or `document`.

* Additionally,
  * they can't call `console.log()` or `Math.max()` and are restricted to referencing members of the expression context.

### Preventing name collisions

* The context against which an expression evaluates is the union of the template variables,
  * the directive's context object—if it has one—and the component's members.

* If you reference a name that belongs to more than one of these namespaces,
  * Angular applies the following precedence logic to determine the context:

1. The template variable name.
2. A name in the directive's context.
3. The component's member names.

* To avoid variables shadowing variables in another context,
  * keep variable names unique.
  
* In the following example,
  * the `AppComponent` template greets the `customer`, `Padma`.

* An `ngFor` then lists each `customer` in the `customers` array.

**src/app/app.component.ts**

```ts
@Component({
  template: `   <div>
                <!-- Hello, Padma -->
                <h1>Hello, {{customer}}</h1>
                <ul>
                    <!-- Ebony and Chiho in a list-->
                    <li *ngFor="let customer of customers">{{ customer.value }}</li>
                </ul>
                </div>  `
})
class AppComponent {
  customers = [{value: 'Ebony'}, {value: 'Chiho'}];
  customer = 'Padma';
}
```

* The `customer` within the `ngFor` is in the context of an `<ng-template>`
  * and so refers to the `customer`
    * in the `customers` array,
      * in this case Ebony and Chiho.

* This list does not feature `Padma`
  * because `customer` outside of the `ngFor` is in a different context.

* Conversely,
  * `customer` in the `<h1>` doesn't include Ebony or Chiho
  * because the context for this `customer` is the class
  * and the class value for `customer` is Padma.

### Expression best practices

* When using a template expression, follow these best practices:

**Use short expressions**

* Use property names or method calls whenever possible.
* Keep application and business logic in the component,
  * where it is accessible to develop and test.

**Quick execution**

* Angular executes a template expression after every change detection cycle.
* Many asynchronous activities trigger change detection cycles,
  * such as
    * promise resolutions,
    * HTTP results,
    * timer events,
    * key presses, and
    * mouse moves.

* An expression should finish quickly to keep the user experience as efficient as possible, especially on slower devices.
* Consider caching values when their computation requires greater resources.

### No visible side effects

* According to Angular's unidirectional data flow model,
  * a template expression should not change any application state other than the value of the target property.

* Reading a component value should not change some other displayed value.

* The view should be stable throughout a single rendering pass.

#### IDEMPOTENT EXPRESSIONS REDUCE SIDE EFFECTS

* An idempotent expression is free of side effects and improves Angular's change detection performance. ** In Angular terms,
  * an idempotent expression always returns exactly the same thing until one of its dependent values changes.

* Dependent values should not change during a single turn of the event loop.
* If an idempotent expression returns a string or a number,
  * it returns the same string or number if you call it twice consecutively.
* If the expression returns an object, including an array,
  * it returns the same object reference if you call it twice consecutively.

# Interpolation in Angular

## Interpolation by Arc

### introduction

* Is a technique that allows the user to bind data from component to view( template)
* The data flow is only one-way i.e from component to view
* Can be used for integers, strings, objects, arrays and much more
* Syntax for defining Interpolation is double curly braces
    ` {{ variable _ name }} `

1. Common mistakes
    * qoutes/single/doubles around the variables
    ctrl+c

    * ngIf - interpolation
    * ngFor -> interpolation
    * ngSwitch -> Homework

2. same name should be given - whatever is given in component

### example :-

**app.component.html**

```html
<h1 class="c1">{{title}}</h1>

<div> {{ page_heading  }}  </div>
<div> page cout is :- {{ page_count  }}  </div>

<div> {{ user_object  }}  </div>
<div> user name is :- {{ user_object.firstName  }}  {{ user_object.lastName  }} </div>

<table>
  <tr>
    <th>contact ID</th>
    <th>First NAme</th>
    <th>Last Name</th>
  </tr>
  <tr *ngFor="let contact of contacts">
    <td>{{contact.contactld}}</td>
    <td>{{contact.firstName}}</td>
    <td>{{contact.lastName}}</td>
  </tr>
</table>

<router-outlet></router-outlet>
```

**app.component.ts**

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>{{title}}</h1>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'simpleCRM';

  page_heading = "Welcome to ARC Tutorials";  // string
  page_count = 10;  // number

  user_object = {  'firstName': 'ARC' , 'lastName': 'Tutorials'}  // object

  contacts =[
    { 'firstName': ' ARC' ,  'lastName': 'Tutorials' ,  'contactld'   :   1234     },
    { 'firstName': 'Mark' ,  'lastName': 'Hender'    ,  'contactld'   :   67674    },
    { 'firstName': 'Ben'  ,  'lastName': 'Stokes'    ,  'contactld'   :   3434     }
  ]
}
```

**app.component.css**

```css
    table,td,th{
        margin: 10px;
        padding: 10px;
        border: 2px solid;
    }
```

## Interpolation by Angulae.io

* Interpolation refers to embedding expressions into marked up text.
* By default, interpolation uses the double curly braces `{{` and `}}` as delimiters.

* To illustrate how interpolation works,
  * consider an Angular component that contains a `currentCustomer` variable:

```ts
currentCustomer = 'Maria';
```

* Use interpolation to display the value of this variable in the corresponding component template:

```html
<h3>Current customer: {{ currentCustomer }}</h3>
```

* Angular replaces `currentCustomer` with the string value of the corresponding component property.
  * In this case, the value is `Maria`.

* In the following example,
  * Angular evaluates the `title` and `itemImageUrl` properties to display some title text and an image.

```html
<p>{{title}}</p>
<div><img alt="item" src="{{itemImageUrl}}"></div>
```

# Property Binding in Angular

## Property Binding by ARC

### introduction :-

* Is a technique
  * that allows the user to bind properties of elements from component to view( `template`).
* The data flow is only one-way i.e `from component to view`
* Can be used for all properties like title, placeholder, innerHTML, src etc
* **Syntax for defining Interpolation** is double curly braces
  * `[propertyl="'expression'"`

### notes

1. We write the property in square brackets `[propterty_name]="..."
`
2. Its a one-data binding

3. We can bind any/multiple propeties to an DOM element

4.

innerHTML
src
alt
title

5. Go to w3schools.com -> HTML tutorial -> property HTML elements

6. Real Time use cases

   1. Dynamic table columns
       -> colCount

   2. Lining of Images from AWS s3 buckets
       ->

   3. Ofcourse binding of style propeties

### example :-

**app.componenet.ts**

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>{{title}}</h1>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'simpleCRM';

  page_heading = "Welcome to ARC Tutorials";  // string
  page_count = 10;  // number

  user_object = {  'firstName': 'ARC' , 'lastName': 'Tutorials'}  // object

  contacts =[
    { 'firstName': ' ARC' ,  'lastName': 'Tutorials' ,  'contactld'   :   1234     },
    { 'firstName': 'Mark' ,  'lastName': 'Hender'    ,  'contactld'   :   67674    },
    { 'firstName': 'Ben'  ,  'lastName': 'Stokes'    ,  'contactld'   :   3434     }
  ]

  isUserLoggedIn = true;

  imageUrl = "test.png" ;
  imageAlternativeName = "image alternative name"

  txtColor="red"
}
```

**app.component.html**

```html
<h1 class="c1">{{title}}</h1>

<div> {{ page_heading  }}  </div>
<div [style.color]="txtColor"> page cout is :- {{ page_count  }}  </div>

<a href="#">    this is a link  </a>

<div> <h2>property binding</h2></div>
<div *ngIf="isUserLoggedIn">
    <div [innerHTML]="user_object.firstName + '   ' + user_object.lastName"></div>
    <!-- here    [innerHTML]="user_object.firstName + '   ' + user_object.lastName"  is working as property-binding --> 
</div>

<img [src]="imageUrl" [alt]="imageAlternativeName">

<table>
  <tr>
    <th>contact ID</th>
    <th>First NAme</th>
    <th>Last Name</th>
  </tr>
  <tr *ngFor="let contact of contacts">
    <td [title]="contact.contactld">{{contact.contactld}}</td>
    <td [title]="contact.firstName">{{contact.firstName}}</td>
    <td [title]="contact.lastName">{{contact.lastName}}</td>
  </tr>
  <!-- here    [title]="contact.contactld"  is working as property-binding --> 
  <!-- here    [title]="contact.firstName"  is working as property-binding --> 
  <!-- here    [title]="contact.lastName"   is working as property-binding --> 
</table> 

<router-outlet></router-outlet>
```

![property binding view :- `<td [title]="contact.contactld">{{contact.contactld}}</td>`](./image%20-%20004%20Binding%20in%20ANgular/2022-11-23-18-21-07.png)
![property binding view :- `<td [title]="contact.firstName">{{contact.firstName}}</td>`](./image%20-%20004%20Binding%20in%20ANgular/2022-11-23-18-21-22.png)
![property binding view :- `<td [title]="contact.lastName">{{contact.lastName}}</td>`](./image%20-%20004%20Binding%20in%20ANgular/2022-11-23-18-21-33.png)

## Property Binding by Angulae.io

### introduction

* Property binding in Angular helps you set values for properties of HTML elements or directives.

* Use property binding to do things such as toggle button features,
  * set paths programmatically,
  * and share values between components.

### Understanding the flow of data

* Property binding moves a value in one direction,
  * **from** a component's property **into** a target element property.

* For more information on listening for events, see Event binding.

* To read a target element property or call one of its methods,
  * see the API reference for `ViewChild` and `ContentChild`.

### Binding to a property

* To bind to an element's property,
  * enclose it in square brackets, `[]`,
  * which identifies the property as a target property.

* A target property is the DOM property to which you want to assign a value.

* To assign a value to a target property for the image element's `src` property, type the following code:

**src/app/app.component.html**

```html
<img alt="item" [src]="itemImageUrl">
```

* In most cases, the target name is the name of a property, even when it appears to be the name of an attribute.

* In this example, `src` is the name of the `<img>` element property.

* The brackets, `[]`, cause Angular to evaluate the right-hand side of the assignment as a dynamic expression.

* Without the brackets, Angular treats the right-hand side as a string literal and sets the property to that static value.

* To assign a string to a property, type the following code:

**src/app.component.html**

```html
<app-item-detail childItem="parentItem"></app-item-detail>
```

* Omitting the brackets renders the string parentItem, not the value of parentItem.

### Setting an element property to a component property value
  
* To bind the `src` property of an `<img>` element to a component's property,
  * place `src` in square brackets followed by an equal sign and then the property.

* Using the property `itemImageUrl`, type the following code:

**src/app/app.component.html**

```html
<img alt="item" [src]="itemImageUrl">
```

* Declare the `itemImageUrl` property in the class, in this case `AppComponent`.

**src/app/app.component.ts**

```ts
itemImageUrl = '../assets/phone.png';
```

##### colspan and colSpan

* A common point of confusion is between the attribute, `colspan`, and the property, `colSpan`.

* Notice that these two names differ by only a single letter.

* To use property binding using `colSpan`, type the following:

**src/app/app.component.html**

```html
<!-- Notice the colSpan property is camel case -->
<tr><td [colSpan]="1 + 1">Three-Four</td></tr>
```

* To disable a button while the component's `isUnchanged` property is `true`, type the following:

**src/app/app.component.html**

```html
<!-- Bind button disabled state to `isUnchanged` property -->
<button type="button" [disabled]="isUnchanged">Disabled Button</button>
```

* To set a property of a directive, type the following:

**src/app/app.component.html**

```html
<p [ngClass]="classes">[ngClass] binding to the classes property making this blue</p>
```

* To set the model property of a custom component for parent and child components to communicate with each other, type the following:

**src/app/app.component.html**

```html
<app-item-detail [childItem]="parentItem"></app-item-detail>
```

#### Toggling button features

To use a Boolean value to disable a button's features, bind the disabled DOM attribute to a Boolean property in the class.

**src/app/app.component.html**

```html
<!-- Bind button disabled state to `isUnchanged` property -->
<button type="button" [disabled]="isUnchanged">Disabled Button</button>
```

* Because the value of the property isUnchanged is true in the AppComponent,
  * Angular disables the button.

**src/app/app.component.ts**

```ts
isUnchanged = true;
```

# Attribute Binding in Angular

## Attribute Binding by ARC

### introduction

* Is a technique that allows the user to bind attributes of elements from component to view( template)
* The data flow is only one-way i.e     **from component to view**
* Can be used for any existing properties or custom attributes
  
* **Syntax for defining attribute binding** is
  * `[attr.attribute_name]=" 'expression' "`

### example :-

**app.componenet.ts**

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'simpleCRM';

  page_heading = "Welcome to ARC Tutorials";  // string
  page_count = 10;  // number

  user_object = {  'firstName': 'ARC' , 'lastName': 'Tutorials'}  // object

  contacts =[
    { 'firstName': ' ARC' ,  'lastName': 'Tutorials' ,  'contactld'   :   1234     },
    { 'firstName': 'Mark' ,  'lastName': 'Hender'    ,  'contactld'   :   67674    },
    { 'firstName': 'Ben'  ,  'lastName': 'Stokes'    ,  'contactld'   :   3434     }
  ]

  isUserLoggedIn = true;

  imageUrl = "test.png" ;
  imageAlternativeName = "image alternative name"

  txtColor="red"

  colVal="2"
}
```

**app.component.html**

```html
<h1 class="c1">{{title}}</h1>

<div> {{ page_heading  }}  </div>
<div [style.color]="txtColor"> page cout is :- {{ page_count  }}  </div>

<a href="#">    this is a link  </a>

<div> <h2>property binding</h2></div>
<div *ngIf="isUserLoggedIn">
    <div [innerHTML]="user_object.firstName + '   ' + user_object.lastName"></div>
    <!-- here    [innerHTML]="user_object.firstName + '   ' + user_object.lastName"  is working as property-binding --> 
</div>

<img [src]="imageUrl" [alt]="imageAlternativeName">

 <div> <h1>attribute binding </h1></div>

<table style="background-color:#ddd">
  <tr>
    <th>contact ID</th>
    <th>First NAme</th>
    <th>Last Name</th>
  </tr>
  <tr *ngFor="let contact of contacts"  >
    <td [title]="contact.contactld" [attr.colspan]="colVal">{{contact.contactld}}</td>
    <td [title]="contact.firstName">{{contact.firstName}}</td>
    <td [title]="contact.lastName">{{contact.lastName}}</td>
  </tr>
    <!-- here    [title]="contact.contactld"  is working as property-binding --> 
    <!-- here    [title]="contact.firstName"  is working as property-binding --> 
    <!-- here    [title]="contact.lastName"   is working as property-binding --> 
    <!-- here    [attr.colspan]="colVal"   is working as attribute-binding --> 
</table> 

<router-outlet></router-outlet>
```

![ attribute binding view](./image%20-%20004%20Binding%20in%20ANgular/2022-11-23-18-51-23.png)

### notes :-

1. Attribute binbing is a unidirectional - one-way data binding

2. Syntax -> `[attr.attribute_name]="expression"`

3. The functionality may seem almost similar to property binding

4. one of the most important Q asked in interviews is

    -> what is the difference between property binding and attr binding

        `[ngClass]="expression" // property binding`

        `[attr.className]="c1" // attribute binding `

    -> some attributes are not natively supported for elements

        -> `[colspan]="colVal" // error `
        -> `[attr.colspan]="colVal" `

    -> Angular encourages to use property binding
        -> attrbute binding

## Attribute Binding by Angulae.io

### introduction

* Attribute binding in Angular helps you set values for attributes directly.
* With attribute binding,
  * you can :-  
    * improve accessibility,
    * style your application dynamically,
    * and manage multiple CSS classes or styles simultaneously.

### Syntax

* Attribute binding syntax resembles property binding,
  * but instead of an element property between brackets,
  * you precede the name of the attribute with the prefix `attr`, followed by a dot.
  
* Then, you set the attribute value with an expression that resolves to a string.

```html
<p [attr.attribute-you-are-targeting]="expression"></p>
```

* When the expression resolves to `null` or `undefined`,
  * Angular removes the attribute altogether.

### Binding ARIA attributes

* One of the primary use cases for attribute binding is to set ARIA attributes.

To bind to an ARIA attribute, type the following:

**src/app/app.component.html**

```html
<!-- create and set an aria attribute for assistive technology -->
<button type="button" [attr.aria-label]="actionName">{{actionName}} with Aria</button>
```

### Binding to `colspan`

* Another common use case for attribute binding is with the `colspan` attribute in tables.

* Binding to the `colspan` attribute helps you to keep your tables programmatically dynamic.

* Depending on the amount of data that your application populates a table with, the number of columns that a row spans could change.

To use attribute binding with the `<td>` attribute `colspan`

1. Specify the `colspan` attribute by using the following syntax: `[attr.colspan]`.
2. Set `[attr.colspan]` equal to an expression.

In the following example, you bind the `colspan` attribute to the expression `1 + 1`.

**src/app/app.component.html**

```html
<!--  expression calculates colspan=2 -->
<tr><td [attr.colspan]="1 + 1">One-Two</td></tr>
```

This binding causes the `<tr>` to span two columns.

#### Note:-

* Sometimes there are differences between the name of property and an attribute.

* `colspan` is an attribute of `<td>`, while `colSpan` with a capital `"S"` is a property.
* When using attribute binding, use `colspan` with a lowercase `"s"`.

* For more information on how to bind to the colSpan property,
  * see the colspan and colSpan section of Property Binding.

# Class and style binding in Angular

## Class and style binding by Angulae.io

### introduction

* Use class and style bindings
  * to add and remove CSS class names from an element's class attribute
  * and to set styles dynamically.

### Binding to a single CSS class

To create a single class binding, type the following:

```ts
[class.sale]="onSale"
```

* Angular adds the class
  * when the bound expression,
  * `onSale` is truthy,
  * and it removes the class when the expression is falsy—with the exception of `undefined`.

See styling delegation for more information

### Binding to multiple CSS classes

To bind to multiple classes, type the following:

```ts
[class]="classExpression"
```

* The expression can be one of:
  * A space-delimited string of class names.
  * An object with class names as the keys and truthy or falsy expressions as the values.
  * An array of class names.

* With the object format, Angular adds a class only if its associated value is truthy.

> * **Note  :-**
>   * With any object-like expression—
>     * such as `object`, `Array`, `Map`, or `Set` —the identity of the object must change for Angular to update the class list.
>   * Updating the property without changing object identity has no effect.

* If there are multiple bindings to the same class name,
  * Angular uses styling precedence to determine which binding to use.

**The following table summarizes class binding syntax.**

```ts
BINDING TYPE             SYNTAX                         INPUT TYPE                                     EXAMPLE INPUT VALUES
Single class binding     [class.sale]="onSale"         boolean | undefined | null                     true, false
Multi-class binding         [class]="classExpression"     string                                         "my-class-1 my-class-2 my-class-3"
Multi-class binding         [class]="classExpression"     Record<string, boolean | undefined | null>     {foo: true, bar: false}
Multi-class binding         [class]="classExpression"     Array<string>                                 ['foo', 'bar']
```

### Binding to a single style

* To create a single style binding, use the prefix `style` followed by a dot and the name of the CSS style.

* For example, to set the `width` style, type the following: `[style.width]="width"`

* Angular sets the property to the value of the bound expression, which is usually a string.
* Optionally, you can add a unit extension like `em` or `%`, which requires a number type.

  1. To write a style in dash-case, type the following:

        ```html
        <nav [style.background-color]="expression"></nav>
        ```

  2. To write a style in camelCase, type the following:

        ```html
        <nav [style.backgroundColor]="expression"></nav>
        ```

### Binding to multiple styles

* To toggle multiple styles, bind to the `[style]` attribute—for example, `[style]="styleExpression"`.
* The styleExpression can be one of:
  * A string list of styles such as `"width: 100px; height: 100px; background-color: cornflowerblue;"`.
  * An object with style names as the keys and style values as the values, such as `{width: '100px', height: '100px', backgroundColor: 'cornflowerblue'}`.
  
> Note that binding an array to `[style]` is not supported.

> * **Note  :-**
>   * When binding `[style]` to an object expression,
>     * the identity of the object must change for Angular to update the class list.
>   * Updating the property without changing object identity has no effect.

### Single and multiple-style binding example

**nav-bar.component.ts**

```ts
@Component({
  selector: 'app-nav-bar',
  template: `
<nav [style]='navStyle'>
  <a [style.text-decoration]="activeLinkStyle">Home Page</a>
  <a [style.text-decoration]="linkStyle">Login</a>
</nav>`
})
export class NavBarComponent {
  navStyle = 'font-size: 1.2rem; color: cornflowerblue;';
  linkStyle = 'underline';
  activeLinkStyle = 'overline';
  /* . . . */
}
```

* If there are multiple bindings to the same style attribute,
  * Angular uses styling precedence to determine which binding to use.

**The following table summarizes style binding syntax.**

```ts
BINDING TYPE                    SYNTAX                         INPUT TYPE                                 EXAMPLE INPUT VALUES
Single style binding            [style.width]="width"         string | undefined | null                 "100px"
Single style binding with units    [style.width.px]="width"         number | undefined | null                 100
Multi-style binding                [style]="styleExpression"     string                                     "width: 100px; height: 100px"
Multi-style binding                [style]="styleExpression"     Record<string, string | undefined | null> {width: '100px', height: '100px'}
```

### Styling precedence

* A single HTML element can have its CSS class list and style values bound to multiple sources (for example, host bindings from multiple directives).

# Event Binding in Angular

## Event Binding by ARC

### introduction :-

* Is a technique that allows the user to bind events of elements from view/template to component
* The data flow is only one-way i.e **from view to component**
* Can be used for all available events
* **Syntax for defining attribute binding** is
  * `<button (event_name) ="function()"> Example </button>`

### notes :-

1. Event binding is one way data binding

2. From view/template to Component

3. We can call any event
    -> event is nothing but JavaScript events like
        -> onclick
        -> onmouseover
        -> onfocus
        -> onblur

4. Syntax is

    `<button (click)="method()"></button>`

5. we can apply events to any element

6. If you are coming from programming
    -> functions

    f1(){

    }

7. Practice - calling events on various elements
    -> different events than I have used

    -> try creating few methods
        -> single parameter
        -> multiple parameter

### example :-

**app.componenet.ts**

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'simpleCRM';

  page_heading = "Welcome to ARC Tutorials";  // string
  page_count = 10;  // number

  user_object = {  'firstName': 'ARC' , 'lastName': 'Tutorials'}  // object

  contacts =[
    { 'firstName': ' ARC' ,  'lastName': 'Tutorials' ,  'contactld'   :   1234     },
    { 'firstName': 'Mark' ,  'lastName': 'Hender'    ,  'contactld'   :   67674    },
    { 'firstName': 'Ben'  ,  'lastName': 'Stokes'    ,  'contactld'   :   3434     }
  ]

  isUserLoggedIn = true;

  imageUrl = "test.png" ;
  imageAlternativeName = "image alternative name"

  txtColor="red"

  colVal="2"

  eventBinding = false;
  sayHello(){
    console.log("Hello from ARC tutorial")
    this.eventBinding = !this.eventBinding
  }
  eventBindingForHighlight = false;
  higlightBlock =""
  highlightColor(){
    this.eventBindingForHighlight = !this.eventBindingForHighlight
    if(this.eventBindingForHighlight){
      this.higlightBlock=""
    }
    else{
      this.higlightBlock="c12"
    }
    console.log("i am beingğhighlighted")
  }

  inputBox(){
    console.log("this is input box");
  }
}
```

**app.component.html**

```html
<h1 class="c1">{{title}}</h1>

<div> {{ page_heading  }}  </div>
<div [style.color]="txtColor"> page cout is :- {{ page_count  }}  </div>

<a >this is a link</a>

<div> <h2>property binding</h2></div>
<div *ngIf="isUserLoggedIn">
<div [innerHTML]="user_object.firstName + '   ' + user_object.lastName"></div>
</div>

<img [src]="imageUrl" [alt]="imageAlternativeName">

<div> <h1>event binding </h1></div>

<button (click)="sayHello()">event binding</button>

<div *ngIf="eventBinding">
  <div> <h1> display by event binding </h1></div>

 <table style="background-color:#ddd">
  <tr>
    <th>contact ID</th>
    <th>First NAme</th>
    <th>Last Name</th>
  </tr>
  <tr *ngFor="let contact of contacts"  >
    <td [title]="contact.contactld" [attr.colspan]="colVal">{{contact.contactld}}</td>
    <td [title]="contact.firstName">{{contact.firstName}}</td>
    <td [title]="contact.lastName">{{contact.lastName}}</td>
  </tr>
</table> 

</div>

<h1 (mouseover)="highlightColor()" [class]="higlightBlock"> highlight event binding on  mouse hover </h1>

<input type="text" (focus)="inputBox();">
<router-outlet></router-outlet>
```

![event binding view :- ](./image%20-%20004%20Binding%20in%20ANgular/2022-11-23-20-55-13.png)
![event binding view :- ](./image%20-%20004%20Binding%20in%20ANgular/2022-11-23-20-55-45.png)
![event binding view :- ](./image%20-%20004%20Binding%20in%20ANgular/2022-11-23-20-56-11.png)

## Event Binding by Angulae.io

### introduction

* Event binding lets you listen for and respond to user actions
  * such as
    * keystrokes,
    * mouse movements,
    * clicks,
    * and touches.

### Binding to events

* To bind to an event you use the Angular event binding syntax.

* This syntax consists of a target event name within parentheses to the left of an equal sign, and a quoted template statement to the right.

* Create the following example;
  * the target event name is `click`
  * and the template statement is `onSave()`.

**Event binding syntax**

```html
<button (click)="onSave()">Save</button>
```

* The event binding listens for the button's click events and calls the component's `onSave()` method whenever a click occurs.

![Event binding syntax](./image%20-%20004%20Binding%20in%20ANgular/2022-11-23-14-08-05.png)

#### Determining an event target

* To determine an event target,
  * Angular checks if the name of the target event matches an event property of a known directive.

* Create the following example  :-
  * (Angular checks to see if `myClick` is an event on the custom `ClickDirective`)

**src/app/app.component.html**

```html
<h4>myClick is an event on the custom ClickDirective:</h4>
<button type="button" (myClick)="clickMessage=$event" clickable>click with myClick</button>
{{clickMessage}}
```

* If the target event name, `myClick` fails to match an output property of `ClickDirective`,
  * Angular will instead bind to the `myClick` event on the underlying DOM element.

### Binding to passive events

* This is an advanced technique that is not necessary for most applications.
* You may find this useful if you want to optimize frequently occurring events that are causing performance problems.

* Angular also supports passive event listeners. For example, use the following steps to make a scroll event passive.
  1. Create a file `zone-flags.ts` under `src` directory.
  2. Add the following line into this file.

        ```html
            (window as any)['__zone_symbol__PASSIVE_EVENTS'] = ['scroll'];
        ```

  3. In the src/polyfills.ts file, before importing zone.js, import the newly created zone-flags.

        ```ts
        import './zone-flags';
        import 'zone.js';  // Included with Angular CLI.
        ```

After those steps, if you add event listeners for the `scroll` event, the listeners will be `passive`.

### Binding to keyboard events

* You can bind to keyboard events using Angular's binding syntax.
* You can specify the `key` or `code` that you would like to bind to keyboard events.
* They `key` and `code` fields are a native part of the browser keyboard event object.
* By default, event binding assumes you want to use the `key` field on the keyboard event.
* You can also use the `code` field.

* Combinations of keys can be separated by a `.` (period). For example, `keydown.enter` will allow you to bind events to the `enter` key.
* You can also use modifier keys, such as `shift`, `alt`, `control`, and the `command` keys from Mac.
* The following example shows how to bind a keyboard event to `keydown.shift.t`.

```html
<input (keydown.shift.t)="onKeydown($event)" />
```

* Depending on the operating system,
  * some key combinations might create special characters instead of the key combination that you expect.
  
* MacOS, for example,
  * creates special characters
    * when you use the option and shift keys together.

* If you bind to `keydown.shift.alt.t`, on macOS,
  * that combination produces a `ˇ` character instead of a `t`,
  * which doesn't match the binding and won't trigger your event handler.
* To bind to `keydown.shift.alt.t` on macOS, use the `code` keyboard event field to get the correct behavior, such as `keydown.code.shiftleft.altleft.keyt` shown in this example.

```html
<input (keydown.code.shiftleft.altleft.keyt)="onKeydown($event)" />
```

* The `code` field is more specific than the `key` field.

* The `key` field always reports `shift`,
  * whereas the `code` field will specify `leftshift` or `rightshift`.

* When using the `code` field,
  * you might need to add separate bindings to catch all the behaviors you want.

* Using the `code` field avoids the need to handle OS specific behaviors
  * such as the `shift + option` behavior on macOS.

For more information, visit the full reference for key and code to help build out your event strings.

# Two Way Data Binding in Angular

## Two Way Data Binding by ARC

### introduction :-

* Is a technique that
  * allows the user to bind events of elements from view/template to component and vice versa.
  
* The data flow is only both ways i.e **from view to component** and **from component to view**.
  
* Two-way data binding is a combination of Property Binding and Event Binding.
  
* We bind data using ngModel — square brackets of property binding with parentheses of event binding in a single notation.
  
* **Syntax for defining attribute binding** is
  * `<input [(ngModel)]='data' />`  .

### notes   :-  

1. Its a technique which helps us send data flow from template to component and vice versa

2. Data from Component -> To template -> To component -> To Template

3. Two way data binding is a combination
    * Alternative of writing ngModel
    * Property Binding and Event Binding on the same element

    E.g `<input [value]="data1" (input)="$event.target.value" />`

4. Angular provides a built-in directive called "ngModel"
    * using ngModel - it will handle both Property binding and event binding on an element

5. `<input [(ngModel)]="username" />`

    * Banana Syntax -> `[()]`
    * the name of the ngModel should be declared in the component class
        * if you don't declare this variable - it will give you error
            * Error => property does not exist on AppComponent

6. Very very important error
    --------------------------------------------------

"Can't bind to ngModel since it isnt a known property of input"
    --------------------------------------------------

   * you have not imported FormsModule in our AppModule
    -> How to fix it?
        Import FormsModule in our AppModule

### exaple :-

**app.component.html**

```html
<h1 class="c1">{{title}}</h1>
<input type="text"  [(ngModel)]="userName">
<h1> userName :-  {{ userName }}</h1>
```

**app.component.ts**

```ts
userName = "";
```

![two-way-binding :- view](./image%20-%20004%20Binding%20in%20ANgular/2022-11-24-02-14-31.png)

## Two Way Data Binding by Angulae.io

### introduction

* Two-way binding gives components in your application a way to share data.
* Use two-way binding to listen for events and update values simultaneously between parent and child components.

### Adding two-way data binding

* Angular's two-way binding syntax is **a combination of square brackets and parentheses**, `[()]`.
* The `[()]` syntax combines
  * the brackets of property binding, `[]`,
  * with the parentheses of event binding, `()`, as follows.

**src/app/app.component.html**

```html
<app-sizer [(size)]="fontSizePx"></app-sizer>
```

### How two-way binding works

* For two-way data binding to work,
  * the `@Output()` property must use the pattern, `inputChange`,
  * where `input` is the name of the `@Input()` property.

* For example,
  * if the `@Input()` property is `size`,
  * the `@Output()` property must be `sizeChange`.

* The following `sizerComponent` has a `size` value property and a `sizeChange` event.

* The `size` property is an `@Input()`,
  * so data can flow into the `sizerComponent`.

* The `sizeChange` event is an `@Output()`,
  * which lets data flow out of the `sizerComponent` to the parent component.

* Next, there are two methods,
  * `dec()` to decrease the font size and
  * `inc()` to increase the font size.
  
* These two methods use `resize()` to change the value of the `size` property within min/max value constraints,
  * and to emit an event that conveys the new `size` value.

**src/app/sizer.component.ts**

```ts
export class SizerComponent {

  @Input()  size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
```

* The `sizerComponent` template has two buttons that each bind the `click` event to the `inc()` and `dec()` methods.

* When the user clicks one of the buttons, the `sizerComponent` calls the corresponding method.

* Both methods, `inc()` and `dec()`, call the `resize()` method with a `+1` or `-1`,
  * which in turn raises the `sizeChange` event with the new size value.

**src/app/sizer.component.html**

```html
<div>
  <button type="button" (click)="dec()" title="smaller">-</button>
  <button type="button" (click)="inc()" title="bigger">+</button>
  <span [style.font-size.px]="size">FontSize: {{size}}px</span>
</div>
```

* In the `AppComponent` template,
  * `fontSizePx` is two-way bound to the `SizerComponent`.

**src/app/app.component.html**

```html
<app-sizer [(size)]="fontSizePx"></app-sizer>
<div [style.font-size.px]="fontSizePx">Resizable Text</div>
```

* In the `AppComponent`,
  * `fontSizePx` establishes the initial `SizerComponent.size` value by setting the value to `16`.

**src/app/app.component.ts**

```ts
fontSizePx = 16;
```

* Clicking the buttons updates the `AppComponent.fontSizePx`.
* The revised `AppComponent.fontSizePx` value updates the style binding,
  * which makes the displayed text bigger or smaller.

* The two-way binding syntax is shorthand for a combination of property binding and event binding.
* The `SizerComponent` binding as separate property binding and event binding is as follows.

**src/app/app.component.html (expanded)**

```html
<app-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></app-sizer>
```

* The `$event` variable contains the data of the `SizerComponent.sizeChange event`. Angular assigns the `$event` value to the `AppComponent.fontSizePx` when the user clicks the buttons.

#### TWO-WAY BINDING IN FORMS

* Because no built-in HTML element follows the `x` value and `xChange` event pattern,
  * two-way binding with form elements requires `NgModel`.

* For more information on how to use two-way binding in forms, see Angular `NgModel`.

