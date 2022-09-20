# what is Interpolation

1. Interpolation refers to embedding expressions into marked up text. 
2. By default, interpolation uses the double curly braces **{{ and }}** as delimiters.
3. syntax:- **{{variableName}}**
4. Use interpolation to display the value of this variable in the corresponding component template.
5. Example:-    

            import { Component, OnInit } from '@angular/core';

            @Component({
                selector: 'app-test',
                template:  `<h2>welcome {{name}}</h2> `,
                styles: []
            })

            export class TestComponent implements OnInit {

                public name : string="Abhay"

                constructor() { }

                ngOnInit(): void {
                }

            }

# What You can do in Interpolation
1. In interopolation you can use any **variableName** .
2. In interopolation you can perform any **expression**.
3. In interopolation you can perform any **JS method**.
4. In interopolation you can perform any **string concatination**
5. In interopolation you can call any **method(function)** that function defined in the component class.

**Example :-**

            import { Component, OnInit } from '@angular/core';

            @Component({
                selector: 'app-test',
                template:  `<h2>welcome {{name}}</h2>  // variableName
                            <h2>{{2+2}}</h2>            // expression
                            <h2>{{"hi may name is " + name}}</h2>   //  string concatination
                            <h2>{{name.length}}</h2>    //  JS method
                            <h2>{{name.toUpperCase()}}</h2>     // JS method
                            <h2>{{welcomeUser()}}</h2>      //  method(function)
                            `
                            ,
                styles: []
            })
            export class TestComponent implements OnInit {
                public name : string="Abhay"
                constructor() { }

                ngOnInit(): void {
                }

                welcomeUser(){
                    return "most welocme "+ this.name;
                }

            }


# What You can not do in Interpolation
1. you can not assign the result of an expression to a variable within  double curly braces **{{ and }}**. 
    1. Assignments are not possible

2. Example:-    

            import { Component, OnInit } from '@angular/core';

            @Component({
                selector: 'app-test',
                template:  `<h2>{{2+2}}</h2> `, // error
                styles: []
            })

            export class TestComponent implements OnInit {

                public name : string="Abhay"

                constructor() { }

                ngOnInit(): void {
                }

            }

3. You can not access the Js global variable in Interpolation. 
    1. Tempelate are not aware of Js Global Variable ex:- window,screen,document,etc.
4. Example:-    

            import { Component, OnInit } from '@angular/core';

            @Component({
                selector: 'app-test',
                template:  `<h2>{{window.location.href}}</h2> `,
                styles: []
            })

            export class TestComponent implements OnInit {

                public name : string="Abhay"

                constructor() { }

                ngOnInit(): void {
                }

            }

1. **if You need to access JS global variable :-** you can do it in the class and then bind it to the tempelate.
    1. Example:- 

                import { Component, OnInit } from '@angular/core';

                @Component({
                    selector: 'app-test',
                    template:  `<h2>welcome {{name}}</h2>
                                <h2>{{2+2}}</h2>
                                <h2>{{"hi may name is " + name}}</h2>
                                <h2>{{name.length}}</h2>
                                <h2>{{name.toUpperCase()}}</h2>
                                <h2>{{welcomeUser()}}</h2>
                                <h2>{{siteUrl}}</h2>
                                `
                                ,
                    styles: []
                })
                export class TestComponent implements OnInit {
                    public name : string="Abhay"
                    public siteUrl = window.location.href;
                    constructor() { }

                    ngOnInit(): void {
                    }

                    welcomeUser(){
                        return "most welocme "+ this.name;
                    }

                }

# Property-Binding
## Attribute VS Property

1. Property binding moves a value in one direction, from a component's property into a target element property.

For more information on listening for events, see Event binding.

To read a target element property or call one of its methods, see the API reference for ViewChild and ContentChild.

Binding to a property
To bind to an element's property, enclose it in square brackets, [], which identifies the property as a target property.

A target property is the DOM property to which you want to assign a value.

To assign a value to a target property for the image element's src property, type the following code:

src/app/app.component.html
content_copy
<img alt="item" [src]="itemImageUrl">
In most cases, the target name is the name of a property, even when it appears to be the name of an attribute.

In this example, src is the name of the <img> element property.

The brackets, [], cause Angular to evaluate the right-hand side of the assignment as a dynamic expression.

Without the brackets, Angular treats the right-hand side as a string literal and sets the property to that static value.

To assign a string to a property, type the following code:

src/app.component.html
content_copy
<app-item-detail childItem="parentItem"></app-item-detail>
Omitting the brackets renders the string parentItem, not the value of parentItem.
