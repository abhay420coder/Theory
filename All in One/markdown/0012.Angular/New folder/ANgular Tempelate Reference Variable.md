# Template Reference Variable

## why we require Template Reference Variable
1. when there is a user interaction , we might some data to flow from the view(Tempelate) to class to perform operation.
2. For example :- we may require the value in a inputField to perform some validation.
3. so , to easily access DOM elements and their property , Angular provides us Tempelate reference variable .
4. Reference variable can be used to refer an HTML element and all of its DOM properties.
5. when you create a reference variable is using the **#** symbol followed by a variableName. 


## what is Template Reference Variable

1. **Template Reference Variable** in angular is used to access all the properties of any element inside DOM. 
2. It can also be a reference to an Angular component or directive or a web component.
3. Template variables help you use data from one part of a template in another part of the template.
4. Use template variables to perform tasks such as respond to user input or finely tune your application's forms.

5. Template Reference Variable can refer to the following :– 
    1. a DOM element within a template
    2. a directive
    3. a Angular Component
    4. a TemplateRef from an ng-template
    5. Web Component


6. Approach :-
    1. Create an Angular app to be used.
    2. Create the input element and add the template reference to this input field using **#** tag.
    3. Bind this template reference inside the button click method “**changeTitle()**”.
    4. Now inside the changeTitle method, we have full access to this input field and here we have set the input field value and focus properties.


5. Syntax :- Use # tag before variable name. :- **#variableName**  example – #myVariable

            <element #variableName  > </element>


6. Example:- 

                import { Component, OnInit } from '@angular/core';

                @Component({
                    selector: 'app-test',
                    template:  `
                                <!-- tempelate reference variable -->
                                <h2>welcome {{name}}</h2>
                                <input #myInput1 type="text" name="input1" id="">
                                <button (click)="logMessage(myInput1.value)">Log1</button> <!-- when we enter button then we allow to see the inputValue  in console -->

                                <input #myInput2 type="text" name="input2" id="">
                                <button (click)="logMessage(myInput2)">Log2</button> <!-- when we enter button then we allow to see about input element  in console -->
                    `,
                    styles: []
                })


                export class TestComponent implements OnInit {
                    public name : string="Abhay";

                    /* tempelate reference variable */

                    logMessage(value:any){
                    console.log(value);
                    }
                    constructor() {

                    }

                    ngOnInit(): void {

                    }
                }



## How Angular assigns values to template variables
1. Angular assigns a template variable a value based on where you declare the variable:

    1. If you declare the variable on a component, the variable refers to the component instance.
    2. If you declare the variable on a standard HTML tag, the variable refers to the element.
    3. If you declare the variable on an <ng-template> element, the variable refers to a TemplateRef instance which represents the template. 

## Variable specifying a name
1. If the variable specifies a name on the right-hand side, such as #var="ngModel", 
2. the variable refers to the directive or component on the element with a matching exportAs name.

### Using NgForm with template variables
1. In most cases, Angular sets the template variable's value to the element on which it occurs. 
2. In the previous example, **phone** refers to the phone number **<input>**. 
3. The button's click handler passes the **<input>** value to the component's **callPhone()** method.

4. The **NgForm** directive demonstrates getting a reference to a different value by referencing a directive's **exportAs** name. 
5. In the following example, the template variable, **itemForm**, appears three times separated by HTML.

6. Example :- in src/app/hero-form.component.html

        <form #itemForm="ngForm" (ngSubmit)="onSubmit(itemForm)">
        <label for="name">Name</label>
        <input type="text" id="name" class="form-control" name="name" ngModel required />
        <button type="submit">Submit</button>
        </form>

        <div [hidden]="!itemForm.form.valid">
        <p>{{ submitMessage }}</p>
        </div>

7. Without the **ngForm** attribute value, the reference value of **itemForm** would be the HTMLFormElement, **<form>**. 
8. If an element is an Angular Component, a reference with no attribute value will automatically reference the component instance. 
9. Otherwise, a reference with no value will reference the DOM element, even if the element has one or more directives applied to it.

## Template variable scope

1. Just like variables in JavaScript or TypeScript code, template variables are scoped to the template that declares them.

2. Similarly, Structural directives such as ***ngIf and *ngFor, or <ng-template>** declarations create a new nested template scope, much like JavaScript's control flow statements like if and for create new lexical scopes. 
3. You cannot access template variables within one of these structural directives from outside of its boundaries.

4. **Note:-** Define a variable only once in the template so the runtime value remains predictable.

### Accessing in a nested template
1. An inner template can access template variables that the outer template defines.

2. In the following example, changing the text in the **<input>** changes the value in the **<span>** because Angular immediately updates changes through the template variable, **ref1**.

3. Example :- in src/app/app.component.html

        <input #ref1 type="text" [(ngModel)]="firstExample" />
        <span *ngIf="true">Value: {{ ref1.value }}</span>

4. In this case, the ***ngIf on <span>** creates a new template scope, which includes the **ref1** variable from its parent scope.

5. However, accessing a template variable from a child scope in the parent template doesn't work:

        <input *ngIf="true" #ref2 type="text" [(ngModel)]="secondExample" />
        <span>Value: {{ ref2?.value }}</span> <!-- doesn't work -->

6. Here, ref2 is declared in the child scope created by *ngIf, and is not accessible from the parent template.

## Template input variable
1. A template input variable is a variable with a value that is set when an instance of that template is created. 
2. Template input variables can be seen in action in the long-form usage of **NgFor**:

3. 
        <ul>
        <ng-template ngFor let-hero [ngForOf]="heroes">
            <li>{{hero.name}}
        </ng-template>
        </ul>

4. The NgFor directive will instantiate this once for each hero in the **heroes** array, and will set the **hero** variable for each instance accordingly.

5. When an **<ng-template>** is instantiated, multiple named values can be passed which can be bound to different template input variables. 
6. The right-hand side of the **let-** declaration of an input variable can specify which value should be used for that variable.

7. **NgFor** for example also provides access to the **index** of each hero in the array:

        <ul>
        <ng-template ngFor let-hero let-i="index" [ngForOf]="heroes">
            <li>Hero number {{i}}: {{hero.name}}
        </ng-template>
        </ul>