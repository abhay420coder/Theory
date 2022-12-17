# Contents

17. Directives in Angular
18. Structural Directives in Angular
19. ngIf in Angular
20. ngFor in Angular
21. ngSwitch in Angular
22. ngStyle in Angular
23. ngClass in Angular

# Directives in Angular

## What is an Angular Directive?

* Angular directives are used to extend the power of the HTML by giving it new syntax.
  
* Directives can extend, change or modify behavior of the DOM.

## There are 3 types of Directives

### 1. Component Directives

* Every Angular application must have at least 1 component
* Have it's own templates
* Events attached

### 2. Structural Directives

* Updates structure of the view
* ngFor, nglf and ngSwitch

### 3. Attribute Directives

* ngStyle, ngClass

## How to generate directives

* `ng generate component <component-name>`
* `ng generate directive <directive-name>`

## Directives

1. Directive is a way to extend our HTML including both view as well as behaviour

2. Directives are used to extend the power of HTML

3. Mainly 3 types of directives

   * Component Directive

   * Structural Directive
     * ngIf
     * ngFor
     * ngSwitch

   * Attribute Directive
     * ngClass
     * ngStyle

   * Examples
     * AppComponent -> Componnt Directive

   * Custom Directives
     * `ng g directive highlight`
       * This is an advanced topic
       * We will revisit this topic again once we have our foundations better
       
       ```ts
        D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM>ng g directive highlight
        CREATE src/app/highlight.directive.spec.ts (236 bytes)
        CREATE src/app/highlight.directive.ts (147 bytes)
        UPDATE src/app/app.module.ts (477 bytes)
       ```

**highlight.directive.ts**

```ts
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }

}
```

**highlight.directive.spec.ts**

```ts
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective();
    expect(directive).toBeTruthy();
  });
});
```

# Structural Directives in Angular

## What are Structural Directives?

* Structural directives are responsible for HTML layout.
  * They shape or reshape the DOM's structure, typically by adding, removing, or manipulating elements
  
* As with other directives, you apply a structural directive to a host element.
  * The directive then does whatever it's supposed to do with that host element and its descendants
  
* Structural directives are easy to recognize.
  * An asterisk (*) precedes the directive attribute name as in this example.

* Structrual Directives will help us in extending, adding or removing elements from the HTML page

* DOM Mainupulation

* asterisk (*) means its a built in Structrual directive

* E.g. **ngIf**
    `<div *ngIf="<condition>"> Value 1</div>`

## Types of Structural Directives

* ngIf
* ngFor
* ngSwitch

## What are Structural Directives? by angular.io

* **Structural directives are directives which change the DOM layout by adding and removing DOM elements.**

* When **structural directives** are applied they **generally are prefixed by an asterisk, * ,** such as*ngIf.
  * This convention is shorthand that Angular interprets and converts into a longer form.
    * Angular transforms the asterisk in front of a structural directive into an `<ng-template>` that surrounds the host element and its descendants.

###### src/app/app.component.html (asterisk)

```HTML
    <div *ngIf="hero" class="name">{{hero.name}}</div>
```

###### explanation for `*ngIf` & `[ngIf]`

* Angular creates an `<ng-template>` element
  * and applies the `*ngIf` directive onto it
    * where it becomes a property binding in square brackets, `[ngIf]`.
  
* The rest of the `<div>`, including its class attribute, is then moved inside the `<ng-template>`:

###### src/app/app.component.html (ngif-template)

```html
    <ng-template [ngIf]="hero">
    <div class="name">{{hero.name}}</div>
    </ng-template>
```

###### src/app/app.component.html (inside-ngfor)

```html
    <div
    *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById"
    [class.odd]="odd">
    ({{i}}) {{hero.name}}
    </div>

    <ng-template ngFor let-hero [ngForOf]="heroes"
    let-i="index" let-odd="odd" [ngForTrackBy]="trackById">
    <div [class.odd]="odd">
        ({{i}}) {{hero.name}}
    </div>
    </ng-template>
```

**explanation for `*ngFor` directive :- above example (src/app/app.component.html (inside-ngfor))**

* Here, everything related to the `ngFor` structural directive is moved to the `<ng-template>`.
  * All other bindings and attributes on the element apply to the `<div>` element within the <ng-template>`.
* Other modifiers on the host element, in addition to the ngFor string, remain in place as the element moves inside the `<ng-template>`. In this example, the `[class.odd]="odd"` stays on the `<div>`.

* The `let` keyword declares a template input variable that you can reference within the template.
  * The input variables in this example are `hero`, `i`, and `odd`.
  * The parser translates `let hero`, `let i`, and `let odd` into variables named `let-hero`, `let-i`, and `let-odd`.
  * The `let-i` and `let-odd` variables become `let i=index` and `let odd=odd`.
  * Angular sets `i` and `odd` to the current value of the context's index and odd properties.

* The parser applies PascalCase to all directives and prefixes them with the directive's attribute name, such as `ngFor`.
  * For example, the `ngFor` input properties, `of` and `trackBy`, map to `ngForOf` and `ngForTrackBy`.

* As the NgFor directive loops through the list, it sets and resets properties of its own context object.
  * These properties can include, but aren't limited to, index, odd, and a special property named `$implicit`.

* Angular sets `let-hero` to the value of the context's `$implicit` property, which `NgFor` has initialized with the hero for the current iteration.

# `ngIf` in Angular

## nglf

* Is a built-in structural directive that can add or remove elements
* Add * symbol in nglf in template
* Conditionally includes a template based on an expression
* Resolves to true or else result of any given expression
* Add or remove an element dynamically
* Example code: `<div *nglf="condition"></div>`

## *nglf with Else statement

* Used along with **nglf** statement

* **Else** statement will show the block based on false condition of the if statement.

* For using **else** statement — we need to use `<ng-template>` and pass **template reference variable** along with it

###### For e,g

```html
<div *nglf="showVaIue; else showMessage">
                                            Show value
</div>


<ng-template #showMessage>
                                Showing else msg
</ng-template>
```

**app.component.html**

```html
<h1 class="c1">{{title}}</h1>

<div style="background-color: aquamarine;"  *ngIf="ConditionOnlyIf1">  only ngIF  1 </div>
<br>
<div style="background-color: aquamarine;"  *ngIf="OrConditionOnlyIfT1 || OrConditionOnlyIfT2">  only ngIF  OR 1  :- both condition true  </div>
<br>
<div style="background-color: aquamarine;"  *ngIf="OrConditionOnlyIfT1 || OrConditionOnlyIfF3">  only ngIF  OR 2  :- first condition is true , second condition is false  </div>
<br>
<div style="background-color: aquamarine;"  *ngIf="OrConditionOnlyIfF4 || OrConditionOnlyIfT1">  only ngIF  OR 3  :- second  condition is true ,  first condition is false  </div>
<br>
<div style="background-color: aquamarine;"  *ngIf="OrConditionOnlyIfF3 || OrConditionOnlyIfF4">  only ngIF  OR 4  :- both condition false </div>
<br>
<div style="background-color: aquamarine;"  *ngIf="AndConditionOnlyIfT1 && AndConditionOnlyIfT2">  only ngIF  And 1 :- both condition true  </div>
<br>
<div style="background-color: aquamarine;"  *ngIf="AndConditionOnlyIfT1 && AndConditionOnlyIfF3">  only ngIF  And 2 :- first condition is true , second condition is false  </div>
<br>
<div style="background-color: aquamarine;"  *ngIf="AndConditionOnlyIfF4 && AndConditionOnlyIfT1">  onlyngIF  And 3:- second  condition is true ,  first condition is false  </div>
<br>
<div style="background-color: aquamarine;"  *ngIf="AndConditionOnlyIfF3 && AndConditionOnlyIfF4">  only ngIF  And 4 :- both condition false </div>
<br>
<div style="background-color: aquamarine;"  *ngIf="ConditionOnlyIfElse1 ; else elseWork ">  ngIF and else  1 </div>
<ng-template #elseWork >if   " ngIF and else  1" will not work else it will work</ng-template>
<br>
<div style="background-color: aquamarine;"  *ngIf="ConditionOnlyIfElse1 ;then thenWork else elseWork ">  ngIF and else  1  </div>
<ng-template #thenWork >  if   " ngIF and else  1" will not work then it will work  </ng-template>
<ng-template #elseWork >  if   " ngIF and else  1" will not work else it will work  </ng-template>

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

  ConditionOnlyIf1 = true;
  OrConditionOnlyIfT1 = true;
  OrConditionOnlyIfT2 = true;
  OrConditionOnlyIfF3 = false;
  OrConditionOnlyIfF4 = false;
  AndConditionOnlyIfT1 = true;
  AndConditionOnlyIfT2 = true;
  AndConditionOnlyIfF3 = false;
  AndConditionOnlyIfF4 = false;

  ConditionOnlyIfElse1 = false;
}
```
![view](./image%20-%20003%20Directives%20in%20ANgular/2022-11-21-18-20-59.png)

## syntax for *ngIf  by Angular.io

#### Simple form with shorthand syntax:-

```html
    <div *ngIf="condition">
        Content to render when condition is true.
    </div>
```

#### Simple form with expanded syntax:-

```html
<ng-template [ngIf]="condition">
    <div>
        Content to render when condition is true.
    </div>
</ng-template>
```

#### Form with an "else" block:-

```html
<div *ngIf="condition; else elseBlock">
    Content to render when condition is true.
</div>


<ng-template #elseBlock>
    Content to render when condition is false.
</ng-template>
```

#### Shorthand form with "then" and "else" blocks:-

```html
<div *ngIf="condition; then thenBlock else elseBlock">

</div>


<ng-template #thenBlock>
    Content to render when condition is true.
</ng-template>


<ng-template #elseBlock>
    Content to render when condition is false.
</ng-template>
```

#### Form with storing the value locally:-

```html
<div *ngIf="condition as value; else elseBlock">
    {{value}}
</div>


<ng-template #elseBlock>
    Content to render when value is null.
</ng-template>
```

#### *ngIf directive is most commonly used to conditionally show an inline template

```html
@Component({
  selector: 'ng-if-simple',
  template: `
    <button (click)="show = !show">{{show ? 'hide' : 'show'}}</button>
    show = {{show}}
    <br>
    <div *ngIf="show">Text to show</div>
`
})
export class NgIfSimple {
  show = true;
}
```

#### Showing an alternative template using else

* To display a template when expression evaluates to **false**, use an else template binding as shown in the following example.
* The else binding points to an `<ng-template>` element labeled #elseBlock.
* The template can be defined anywhere in the component view, but is typically placed right after ngIf for readability.

```html
@Component({
  selector: 'ng-if-else',
  template: `
    <button (click)="show = !show">{{show ? 'hide' : 'show'}}</button>
    show = {{show}}
    <br>
    <div *ngIf="show; else elseBlock">Text to show</div>
    <ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>
`
})
export class NgIfElse {
  show = true;
}
```

#### Using an external then template

* In the previous example (Showing an alternative template using else),
  * the then-clause template is specified inline,
  * as the content of the tag that contains the ngIf directive.
  
* You can also specify a template
  * that is defined externally, by referencing a labeled `<ng-template>` element.
  
* When you do this,
  * you can change which template to use at runtime,
  * as shown in the following example.
  
```html
@Component({
  selector: 'ng-if-then-else',
  template: `
    <button (click)="show = !show">{{show ? 'hide' : 'show'}}</button>
    <button (click)="switchPrimary()">Switch Primary</button>
    show = {{show}}
    <br>
    <div *ngIf="show; then thenBlock; else elseBlock">this is ignored</div>
    <ng-template #primaryBlock>Primary text to show</ng-template>
    <ng-template #secondaryBlock>Secondary text to show</ng-template>
    <ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>
`
})
export class NgIfThenElse implements OnInit {
  thenBlock: TemplateRef<any>|null = null;
  show = true;

  @ViewChild('primaryBlock', {static: true}) primaryBlock: TemplateRef<any>|null = null;
  @ViewChild('secondaryBlock', {static: true}) secondaryBlock: TemplateRef<any>|null = null;

  switchPrimary() {
    this.thenBlock = this.thenBlock === this.primaryBlock ? this.secondaryBlock : this.primaryBlock;
  }

  ngOnInit() {
    this.thenBlock = this.primaryBlock;
  }
}
```

#### Storing a conditional result in a variable

* You might want to show a set of properties from the same object.
  
* If you are waiting for asynchronous data, the object can be undefined.
  
* In this case,
  * you can use **ngIf** and
    * store the result of the condition in a local variable
      * as shown in the following example.
  
```html
@Component({
  selector: 'ng-if-as',
  template: `
    <button (click)="nextUser()">Next User</button>
    <br>
    <div *ngIf="userObservable | async as user; else loading">
      Hello {{user.last}}, {{user.first}}!
    </div>
    <ng-template #loading let-user>Waiting... (user is {{user|json}})</ng-template>
`
})
export class NgIfAs {
  userObservable = new Subject<{first: string, last: string}>();
  first = ['John', 'Mike', 'Mary', 'Bob'];
  firstIndex = 0;
  last = ['Smith', 'Novotny', 'Angular'];
  lastIndex = 0;

  nextUser() {
    let first = this.first[this.firstIndex++];
    if (this.firstIndex >= this.first.length) this.firstIndex = 0;
    let last = this.last[this.lastIndex++];
    if (this.lastIndex >= this.last.length) this.lastIndex = 0;
    this.userObservable.next({first, last});
  }
}
```

###### explanation:-

* This code uses only one AsyncPipe, so only one subscription is created.
  * The conditional statement stores the result of userStream|async in the local variable user.
  * You can then bind the local user repeatedly.

* The conditional displays the data only if userStream returns a value,
  * so you don't need to use the safe-navigation-operator (?.) to guard against null values
    * when accessing properties.
  
* You can display an alternative template while waiting for the data.

# `ngFor` in Angular

## `ngFor` by ARC

### introduction
* Similar to for statements in other programming languages
* Is a built-in structural directive — which modifies the DOM structure
* Loop the elements to display the array data in the template
* Syntax : `<div *ngFor="Iet ele of collection"> </div>`
* **Provides local variables in the array data**
  * Index — gets the current index of the current element in iteration
  * First — returns true if the current element is the first element in iteration
  * Last — returns true if the current element is the last element in iteration
  * Even — returns true if the current element is the even element in iteration
  * Odd — returns true if the current element is the odd element in iteration

**app.component.html**
```html
<h1 class="c1">{{title}}</h1>

<ul>
  <h1> element oƒ your iteration 1</h1>
  <li *ngFor="let contact of contacts">
    {{ contact }}
  </li>
</ul>

<ul>
  <h1> element oƒ your iteration 2 </h1>
  <li *ngFor="let contact of contacts ; index as i ; first as f ; last as l , odd as o , even as e">
    <div  *ngIf="f" style="background-color:coral"> {{ i }} :-  {{contact.firstName}} {{contact.lastName}} </div>
    <div *ngIf="l" style="background-color:rgb(0, 197, 211)" >{{ i }} :-  {{contact.firstName}} {{contact.lastName}}</div>
  </li>
</ul>

<ul>
  <h1> element oƒ your iteration 2 </h1>
  <li *ngFor="let contact of contacts ; index as i ; first as f ; last as l , odd as o , even as e">
    <div *ngIf="o" style="background-color:darkviolet" >{{ i }} :-  {{contact.firstName}} {{contact.lastName}}</div>
    <div *ngIf="e" style="background-color:rgb(0, 211, 158)" >{{ i }} :-  {{contact.firstName}} {{contact.lastName}}</div>
  </li>
</ul>
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

  contacts =[
    {
      'firstName': ' ARC',
      'lastName': 'Tutorials' ,
    ' contact ld' : 1234
    },
    {
      'firstName': 'Mark',
      'lastName': 'Hender' ,
    ' contact ld' : 67674
    },
    {
      'firstName': 'Ben',
      'lastName': 'Stokes' ,
    ' contactld' : 3434
    }
  ]

}
```

![view](./image%20-%20003%20Directives%20in%20ANgular/2022-11-22-02-28-34.png)

## syntax for `*ngFor`  by Angular.io

* The `ngForOf` directive is generally used in the **shorthand form** `*ngFor`.
  
* In this form, the template to be rendered for each iteration is the content of an anchor element containing the directive.

* The following example shows the shorthand syntax with some options, contained in an `<li>` element.

```html
<li *ngFor="let item of items; index as i; trackBy: trackByFn">     ...     </li>
```

* The shorthand form expands into a long form that uses the `ngForOf` selector on an `<ng-template>` element.
  
* The content of the `<ng-template>` element is the `<li>` element that held the short-form directive.

```html
<ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">

  <li>...</li>

</ng-template>
```

#### iterate conditionally

When using the shorthand syntax, Angular allows only one structural directive on an element. If you want to iterate conditionally, for example, put the *ngIf on a container element that wraps the *ngFor element. 

#### Local variables

###### The following exported values can be aliased to local variables:

```html
    <li *ngFor="let user of users; index as i; first as isFirst">

    {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
    
    </li>
```

###### The following exported values can be aliased to local variables:-

```java

$implicit   : T             : The value of the individual items in the iterable (ngForOf).
ngForOf     : NgIterable<T> : The value of the iterable expression. Useful when the expression is more complex then a property access, for example when using the async pipe (userStreams | async).
index       : number        : The index of the current item in the iterable.
count       : number        : The length of the iterable.
first       : boolean       : True when the item is the first item in the iterable.
last        : boolean       : True when the item is the last item in the iterable.
even        : boolean       : True when the item has an even index in the iterable.
odd         : boolean       : True when the item has an odd index in the iterable.

```

###### Change propagation

* When the contents of the iterator changes, **NgForOf** makes the corresponding changes to the DOM:

  * When an item is added, a new instance of the template is added to the DOM.
  * When an item is removed, its template instance is removed from the DOM.
  * When items are reordered, their respective templates are reordered in the DOM.

```html

```

# `ngSwitch` in Angular

## `*ngSwitch` by ARC

### introduction

* It's a built-in directive and starts with the `[]` bracket symbol
* Very similar to switch statements in any other programming languages
* Allows element to be shown or hidden based on a condition expression
* Unlike if statement — switch can take multiple value parameters for condition check
* We can also define a default action for the switch
* There are mainly 3 important elements of `ngSwitch`
  * `ngSwitch`
  * `ngSwitchCase`
  * `ngSwitchDefault`

### `ngSwitch` Example
It's a built-in directive and starts with the * symbol
```html
<div [ngSwitch]="switch_expression">
<div *ngSwitchCase="match_expression_1 ">...</div>
<div *ngSwitchCase="match_expression_2">...</div>
<div *ngSwitchCase="match_expression_3">...</div>
<div *ngSwitchDefault>...</div>
</div>
```

### example

**app.component.html**

```html
<h1 class="c1">{{title}}</h1>

<h4>Learning ngSwitch</h4>
<div [ngSwitch]="superHero">
  <div *ngSwitchCase="'SuperWomen' "> my superHero is Super Women</div>
  <div *ngSwitchCase="'SpiderMan' "> my superHero is Spider Man</div>
  <div *ngSwitchCase="'HeMan' "> my superHero is He Man</div>
  <div *ngSwitchCase="'SuperMan' "> my superHero is Super Man</div>
</div>
<div [ngSwitch]="category">
  <div *ngSwitchCase="'clothing' "> my category is clothing</div>
  <div *ngSwitchCase="'mobiles' "> my category is mobiles</div>
  <div *ngSwitchDefault> my category is Default</div>
</div>
<div [ngSwitch]="tax">
  <div *ngSwitchCase="30"> my tax is 30</div>
  <div *ngSwitchCase="50"> my tax is 50</div>
  <div *ngSwitchDefault> my tax is Default</div>
</div>
<div [ngSwitch]="color">
  <div *ngSwitchCase="'red'"> my tax is 30</div>
  <div *ngSwitchCase="'green'"> my tax is 50</div>
  <div *ngSwitchDefault> my tax is Default</div>
</div>

<router-outlet></router-outlet>

```

**app.component.ts**

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'simpleCRM';

  superHero = "SuperWomen"  ;
  category = "mobiles"  ;
  tax = 30  ;
  color = "yellow"  ;
}
```

![view](./image%20-%20003%20Directives%20in%20ANgular/2022-11-22-05-29-31.png)

## syntax for `*ngSwitch`  by Angular.io

### introduction  :-  

* The `[ngSwitch]` directive on a container specifies an expression to match against. 
* The expressions to match are provided by `ngSwitchCase` directives on views within the container.

  * Every view that matches is rendered.
  * If there are no matches, 
    * a view with the `ngSwitchDefault` directive is rendered.
  * Elements within the `[NgSwitch]` statement 
    * but outside of any `NgSwitchCase` or `ngSwitchDefault` directive are preserved at the location.

### syntax

* Define a container element for the directive, and specify the switch expression to match against as an attribute :-

```html
<container-element [ngSwitch]="switch_expression">
```

* Within the container, `*ngSwitchCase` statements specify the match expressions as attributes. 
* Include `*ngSwitchDefault` as the final case.
  
```html
<container-element [ngSwitch]="switch_expression">
   <some-element *ngSwitchCase="match_expression_1">...</some-element>
    ...
<some-element *ngSwitchDefault>...</some-element>
</container-element>
```

### usage examples

```html
<container-element [ngSwitch]="switch_expression">
  <!-- the same view can be shown in more than one case -->
  <some-element *ngSwitchCase="match_expression_1">...</some-element>
  <some-element *ngSwitchCase="match_expression_2">...</some-element>
  <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
  <!--default case when there are no matches -->
  <some-element *ngSwitchDefault>...</some-element>
</container-element>
```

### nested examples

```html
<container-element [ngSwitch]="switch_expression">
      <some-element *ngSwitchCase="match_expression_1">...</some-element>
      <some-element *ngSwitchCase="match_expression_2">...</some-element>
      <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
      <ng-container *ngSwitchCase="match_expression_3">
        <!-- use a ng-container to group multiple root nodes -->
        <inner-element></inner-element>
        <inner-other-element></inner-other-element>
      </ng-container>
      <some-element *ngSwitchDefault>...</some-element>
    </container-element>
```

# `ngStyle` in Angular

## ngStyIe

### introduction  :-  

* The `ngStyIe` directives lets you set a given DOM elements style properties.
* We can pass dynamic values via variables
* For e.g `<div [ngStyle]="'background-color':value">Example l</div>`

### Points  :-  

* `ngStyle` is a built in directive used to set style/css properties 

* `[ngStyle]` 

* Any/All css properties using `ngStyle` 

* more than 1 property on any DOM element 

* We can also pass dynamic values to `ngStyle` 

* `ngStyle` - hands-on examples 
  * basic use case of `ngStyle` - setting a value using `ngStyle` 
  * dynamic value from component 
  * `ngStyle` with conditional operators 

* Common mistakes 
  * Not giving correct `{}` braces 
  * Not putting correct double/single qoutes where required 
  * Spelling mistakes in defining the css properties 
  * DO NOT put qoutes for the variables - it will become strings

### example

**app.component.html**

```html
<h1 class="c1">{{title}}</h1>

<div [ngStyle]="{'background-color':'green' , 'color':'#fff'}"> This is Green DIV with ngStyle </div>

<div style="background-color:green"> This is Green DIV with Style attribute </div>
<div [ngStyle]="{'background-color':styleProp}"> This is Dynamic color DIV  with ngStyle </div>
<div [ngStyle]="{'color':txtColor1==='blue'?'blue':'red'}"> This is conditional color DIV  with ngStyle 1</div>
<div [ngStyle]="{'color':txtColor2==='blue'?'blue':'red'}"> This is conditional color DIV  with ngStyle 2</div>

<router-outlet></router-outlet>
```

**app.component.ts**

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'simpleCRM';

  styleProp = "purple"  ;
  txtColor1 = 'blue' ;
  txtColor2 = 'green' ;

}
```

![view](./image%20-%20003%20Directives%20in%20ANgular/2022-11-22-07-51-22.png)

## syntax for `*ngStyle`  by Angular.io

### introduction

* An attribute directive that updates styles for the containing HTML element. 
* Sets one or more style properties, specified as colon-separated key-value pairs. 
* The key is a style name, with an optional .`<unit>` suffix (such as 'top.px', 'font-style.em'). 
* The value is an expression to be evaluated. 
* The resulting non-null value, expressed in the given unit, is assigned to the given style property. 
* If the result of evaluation is null, the corresponding style is removed.

### syntax

* Set the font of the containing element to the result of an expression.

```html
<some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
```

* Set the width of the containing element to a pixel value returned by an expression.

```html
<some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
```

* Set a collection of style values using an expression that returns key-value pairs.

```html
<some-element [ngStyle]="objExp">...</some-element>
```

# `ngClass` in Angular

## by ARC tutorial

### introduction

ngCIass
ARC Tutorials
* The ngClass directives lets us set a class name for the element.
  
* We can pass dynamic values via variables
  * ngCIass with string
  * ngCIass with array
  * ngCIass with object
  * ngCIass with component method
  
* Examples  :-
  
```html
<div [ngCIass]="'one"'>Using ngClass with string example</div>
<div 'one':true, 'two': false}">With multiple class names</div>
```

### important points


1. `ngClass` is a directive used for setting the class name of DOM elements 

2. we can provide more than 1 class names using `ngClass` 
    -> we can re-use the code for multiple DOM elements 

3. We can pass strings

4. we can pass array values

5. we can pass objects 

6. Common mistakes 
    - Not writing in correct qoutes 
    - not putting ngClass in square brackets 
    - using quotes for variables

7. hands-on examples:

```html
<div [ngClass]="'c1'">This is ngClass example</div>

<div [ngClass]="'c1 c2 c3 c4'">This is ngClass Multiple classes example</div>

<div [ngClass]="styleClsProp">This is ngClass using dynamic variable example</div>

<div [ngClass]="conditionClsProp === 'c4'? 'c4' : 'c5'">This is ngClass using conditional check example</div>

<div [ngClass]="{c4: true, c5: false}">This is ngClass using Object example</div>
```

1. Try out the method returning class name to `[ngClass]`

### example

**app.component.html**

```html
<h1 class="c1">{{title}}</h1>

<div [ngClass]="'c1'" > This is ngCIass example c1</div>
<div [ngClass]="'c1 c2'" > This is ngCIass multi-classes example c1 c2</div>
<div [ngClass]="styleClsProp" > This is ngCIass class variable example c3 </div>
<div [ngClass]="conditionClsProp1 ==='c4'?'c4':'c5'" > This is ngCIass class condition example c4 </div>
<div [ngClass]="conditionClsProp2 ==='c4'?'c4':'c5'" > This is ngCIass class condition example c5 </div>

<div [ngClass]="{c6:true , c7:true}" > This is ngCIass class condition example c5 2 </div>
<div [ngClass]="{c6:false , c7:true}" > This is ngCIass class condition example c5 3 </div>

<div [ngClass]="getClsProp()" > This is ngCIass class method example c8 </div>

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

  styleClsProp='c3'
  conditionClsProp1='c4'
  conditionClsProp2='c6'

  getClsProp(){
    return 'c8'
  }

}
```

**app.component.css**

```css
.c1{
    background-color: aqua;
    color: #222;
}
.c2{
    background-color: blue;
    font-size: 30px;
}

.c3{
    background-color: darksalmon;
    color: #222;
}

.c4{
    background-color: antiquewhite;
    color: #222;
}

.c5{
    background-color: blueviolet;
    color: #222;
}

.c6{
    background-color: cadetblue;
    color: #222;
}
.c7{
    font-size: 70px;
}

.c8{
    background-color: red;
    color: #222;
}
```

## syntax for `*ngClass`  by Angular.io

### introduction

* Adds and removes CSS classes on an HTML element.

### Description

The CSS classes are updated as follows, depending on the type of the expression evaluation:

* `string` - the CSS classes listed in the string (space delimited) are added,
* `Array` - the CSS classes declared as Array elements are added,
* `Object` - keys are CSS classes that get added when the expression given in the value evaluates to a truthy value, otherwise they are removed.

```html
<some-element [ngClass]="'first second'">...</some-element>

<some-element [ngClass]="['first', 'second']">...</some-element>

<some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>

<some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>

<some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
```








