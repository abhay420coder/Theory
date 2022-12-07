# Topic

12. Modules
13. Components
14. Component Lifecycle Hooks
15. Component Communication
16. Templates in Angular Component

# Modules

* Modules in Angular
* **Create Module using ng command**
  * `ng generate module <module_name>`

1. **Angular is a modular-based architecture**
    * There are lot of modules which are built-in
  
    * Examples
        * BrowserModule
        * BrowserAnimationsModule

    * Angular Material Library
        * MatButtonModule
        * MatDropDownModule

2. All the code and functionality is grouped in a module

3. Whenever you see a `@` symbol - it's a **decorator**

4. What modules consist
    * **declarations**
        * this is where we will **add all the components , pipes** of the module
    * **imports**
        * we can **import modules** inside a module

    * **providers**
        * services that we need will be injected here

    * **Bootstrap**
        * what is **the first component, the module should load**

    * **exports**
        * is to export and expose the component outside of the module  

5. > Every Angular application should have atleast 1 module

6. > By default, the Angular framework provides us with AppModule

7. **The AppModule will have a component by the name**
    * AppComponent

8. **Whenever we are building Angular applications**
    * We will always think of Modules first

```ts
    E.g     
        Contacts
        Users 
        Leads
        Opportunites
        Settings 
        Profile 
        Authenctication

    Free User 
        Contacts
        Users 

    Premium User 
        Contacts
        Users 
        Leads
        Opportunites

    Enterprise Users 
        Contacts
        Users 
        Leads
        Opportunites
        Settings 
        Profile 
        Authenctication
```

9. **Feature Modules**
    * You can turn on or off the modules based on conditions

10. **Modules - Grouping**

    * components
    * services
    * pipes
    * directives

12. **Create a custom Module**

    ```ts
        ng generate module contacts
        ng generate module leads
        ng generate module settings
        ng generate module Opportunites
        ng generate module authentication 
    ```

```js

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM>ng generate module contacts
CREATE src/app/contacts/contacts.module.ts (194 bytes)

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM>ng generate module leads   
CREATE src/app/leads/leads.module.ts (191 bytes)

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM>ng generate module settings
CREATE src/app/settings/settings.module.ts (194 bytes)

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM>ng generate module Opportunites
CREATE src/app/opportunites/opportunites.module.ts (198 bytes)

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM>ng generate module authentication 
CREATE src/app/authentication/authentication.module.ts (200 bytes)
```

# Components in Angular

## Create Components using ng command

```JS
  ng generate component <component_name>
```

1. Components are the most important and basic building blocks of Angular apps

2. Authentication Module
    * new-user
    * login
    * forgot-password
    * reset-password

3. Component is a smallest functionality that you will implement in your application

4. When we group multiple Components it becomes a module

5. We can have parent-child relationship of components

6. We can have components inside components

7. Tree-herirachy of components

```JS
    Dashboard
        display-contact-list
            contact-grid
                contact-import
                contact-export  
            contact-options
```

8. lets create some custom components

   ```JS
    ng g component add-contact
    ng g component edit-contact
    ng g component list-contacts
    ng g component delete-contact
    ```

```JS

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM>cd src

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src>cd app

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src\app>cd contacts

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src\app\contacts>ng g component add-contact  
CREATE src/app/contacts/add-contact/add-contact.component.html (26 bytes)
CREATE src/app/contacts/add-contact/add-contact.component.spec.ts (628 bytes)
CREATE src/app/contacts/add-contact/add-contact.component.ts (295 bytes)
CREATE src/app/contacts/add-contact/add-contact.component.scss (0 bytes)
UPDATE src/app/contacts/contacts.module.ts (296 bytes)

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src\app\contacts>ng g component delete-component
CREATE src/app/contacts/delete-component/delete-component.component.html (31 bytes)
CREATE src/app/contacts/delete-component/delete-component.component.spec.ts (663 bytes)
CREATE src/app/contacts/delete-component/delete-component.component.ts (315 bytes)
CREATE src/app/contacts/delete-component/delete-component.component.scss (0 bytes)
UPDATE src/app/contacts/contacts.module.ts (416 bytes)

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src\app\contacts>ng g component edit-component      
CREATE src/app/contacts/edit-component/edit-component.component.html (29 bytes)
CREATE src/app/contacts/edit-component/edit-component.component.spec.ts (649 bytes)
CREATE src/app/contacts/edit-component/edit-component.component.ts (307 bytes)
CREATE src/app/contacts/edit-component/edit-component.component.scss (0 bytes)
UPDATE src/app/contacts/contacts.module.ts (528 bytes)

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src\app\contacts>ng g component list-component 
CREATE src/app/contacts/list-component/list-component.component.html (29 bytes)
CREATE src/app/contacts/list-component/list-component.component.spec.ts (649 bytes)
CREATE src/app/contacts/list-component/list-component.component.ts (307 bytes)
CREATE src/app/contacts/list-component/list-component.component.scss (0 bytes)
UPDATE src/app/contacts/contacts.module.ts (640 bytes)

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src\app\contacts>ng g component view-component 
CREATE src/app/contacts/view-component/view-component.component.html (29 bytes)
CREATE src/app/contacts/view-component/view-component.component.spec.ts (649 bytes)
CREATE src/app/contacts/view-component/view-component.component.ts (307 bytes)
CREATE src/app/contacts/view-component/view-component.component.scss (0 bytes)
UPDATE src/app/contacts/contacts.module.ts (752 bytes)

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src\app\contacts>
```

9. Every component has 4 files auto-generated with it
    * `component.html`
      * view or html or template file
        * UI

    * `component.ts`  
      * it will be a class file which will have methods  
        * Logic
    * `component.spec.ts`  
      * It will have the unit test script for component

    * `component.scss`
      * stylesheet of the component

* HOMEWORK
  * verify all the components generated and go through the code

1. Component decorator inside the `component.ts` file

    * selector
      * unique identifier for the component
      * id of the component
      * using this selector we will use the component

    * templateUrl
      * your HTML code
      * component.html file
  
    * styleURLS
      * for linking your component stylesheet
      * `component.scss`

# Component Lifecycle Hooks

## 8 Lifecycle Hooks

* `ngOnChanges()`
* `ngOnlnit()`
* `ngDoCheck()`
* `ngAfterContentlnit()`
* `ngAfterContentChecked()`
* `ngAfterViewlnit()`
* `ngAfterViewChecked()`
* `ngOnDestroy()`

### `ngOnChanges()`

* Used in pretty much any component that has an input.
* Called whenever an input value changes
* Is called the first time before ngOnlnit
  
### `ngOnInit()`

* Used to initialize data in a component.
* Called after input values are set when a component is initialized.
* Added to every component by default by the Angular CLI.
* Called only once

### `ngDoCheck()`

* Called during all change detection runs
* A run through the view by Angular to update/detect changes

### `ngAfterContentlnit()`

* Called only once after first `ngDoCheck()`
* Called after the first run through of initializing content

### `ngAfterContentChecked()`

* Called after every `ngDoCheck()`
* Waits till after `ngAfterContentlnit()` on first run through

### `ngAfterViewInit()`

* Called after Angular initializes component and child component content.
* Called only once after view is initialized

### `ngAfterViewChecked()`

* Called after all the content is initialized and checked. (Component and child components).
* First call is after `ngAfterViewlnit()`
* Called after every `ngAfterContentChecked()` call is completed

### `ngOnDestroy()`

* Used to clean up any necessary code when a component is removed from the DOM.
* Fairly often used to unsubscribe from things like services.
* Called only once just before component is removed from the DOM.

## In my experience some of the most used ones are

* `ngOnChanges()`
* `ngOnlnit()`
* `ngAfterViewlnit()`
* `ngOnDestory()`

### points

1. By default we have `ngonit`

2. Whichever lifecycle hooks we want to use
    1. import it in the class

       ```JS
            import { Component, OnInit , OnChanges, OnDestroy } from '@angular/core';

            @Component({
            selector: 'app-add-contact',
            templateUrl: './add-contact.component.html',
            styleUrls: ['./add-contact.component.scss']
            })
            export class AddContactComponent implements OnInit , OnChanges , OnDestroy {

            constructor() { }

            ngOnDestroy(): void {
                throw new Error('Method not implemented.');
            }

            ngOnInit(): void {
            }

            ngOnChanges() : void{

            }

            }
       ```

    2. Extend the implements interface
    3. Implement the method  

3. We can have any number of lifecycle hooks implemented

4. Its too early for us to implement all of them today

    * We will revisit this topic again component communication

    * Component Communication
        * Between components
            Parent to Child
            Child to Parent

5. I am here to teach to end to end- to help you master Angular

# Component Communication

## Component Communication in Angular

* via Parent to Child ( `@lnput` )
* via Child to Parent
  * ViewChiId
  * `@Output` / Event Emitter
* Between different components
  * via Services  

* Communication between various Angular components

* Contacts -> Module

  * contact-listing -> parent component
    * contact-grid -> child component
    * contact-tools -> child component
      * download-pdf -> sub-child component
      * download-excel

* Leads -> Module
  * leads-listing -> parent component

* Components are hierarchial
* Parent-child relationship

* parent1
  * child1
    * sub-child1
  * child2
* parent2
  * parent2-child1

1. Communications between the related components
    * parent component -> child components
        * `@Input`
    * parent components <- child components
        * `@Output`

    * Leads Module
        * leads-listing
            * leads-grid
            * leads-tools
                * download-excel
                * download-pdf

```JS

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src\app\contacts>cd ../

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src\app>cd leads

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src\app\leads>ng g component leads-listing
CREATE src/app/leads/leads-listing/leads-listing.component.html (28 bytes)
CREATE src/app/leads/leads-listing/leads-listing.component.spec.ts (642 bytes)
CREATE src/app/leads/leads-listing/leads-listing.component.ts (303 bytes)
CREATE src/app/leads/leads-listing/leads-listing.component.scss (0 bytes)
UPDATE src/app/leads/leads.module.ts (301 bytes)

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src\app\leads>cd "leads-listing"

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src\app\leads\leads-listing>ng g component leads-grid
CREATE src/app/leads/leads-listing/leads-grid/leads-grid.component.html (25 bytes)
CREATE src/app/leads/leads-listing/leads-grid/leads-grid.component.spec.ts (621 bytes)
CREATE src/app/leads/leads-listing/leads-grid/leads-grid.component.ts (291 bytes)
CREATE src/app/leads/leads-listing/leads-grid/leads-grid.component.scss (0 bytes)
UPDATE src/app/leads/leads.module.ts (411 bytes)

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src\app\leads\leads-listing>ng g component leads-tools
CREATE src/app/leads/leads-listing/leads-tools/leads-tools.component.html (26 bytes)
CREATE src/app/leads/leads-listing/leads-tools/leads-tools.component.spec.ts (628 bytes)
CREATE src/app/leads/leads-listing/leads-tools/leads-tools.component.ts (295 bytes)
CREATE src/app/leads/leads-listing/leads-tools/leads-tools.component.scss (0 bytes)
UPDATE src/app/leads/leads.module.ts (525 bytes)

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src\app\leads\leads-listing>cd "leads-tools"

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src\app\leads\leads-listing\leads-tools>ng g component download-pdf
CREATE src/app/leads/leads-listing/leads-tools/download-pdf/download-pdf.component.html (27 bytes)
CREATE src/app/leads/leads-listing/leads-tools/download-pdf/download-pdf.component.spec.ts (635 bytes)
CREATE src/app/leads/leads-listing/leads-tools/download-pdf/download-pdf.component.ts (299 bytes)
CREATE src/app/leads/leads-listing/leads-tools/download-pdf/download-pdf.component.scss (0 bytes)
UPDATE src/app/leads/leads.module.ts (655 bytes)

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src\app\leads\leads-listing\leads-tools>ng g component download-excel
CREATE src/app/leads/leads-listing/leads-tools/download-excel/download-excel.component.html (29 bytes)
CREATE src/app/leads/leads-listing/leads-tools/download-excel/download-excel.component.spec.ts (649 bytes)
CREATE src/app/leads/leads-listing/leads-tools/download-excel/download-excel.component.ts (307 bytes)
CREATE src/app/leads/leads-listing/leads-tools/download-excel/download-excel.component.scss (0 bytes)
UPDATE src/app/leads/leads.module.ts (793 bytes)

D:\theory\Angular\ANGULAR BY ARC\project\simpleCRM\src\app\leads\leads-listing\leads-tools>
```

2. communication between totally unrealted components
    `Component1 -> Services <-   Component2`

* **services**
  * is a common reusable piece of functionality shared between different components  

# Templates in Angular Component

## Templates in Components

## Different ways to include templates in components

## How to style component templates

* whenever we generate a component
  * 4 files
    * template file ( `.html` )
    * `style.scss` ( stylesheet)
    * class (`component.ts` file )
    * spec ( unit test file)

1. This is totally based on the choice at installing Angular app
    * if you selected scss
        * `style.scss`
    * if you selected css
        * `style.css`

1. `<comp_name>.component.html`
    * It works!

2. `<comp_name>.component.ts` file

3. Decorator it gives definitinion and meaning to the
    `@`- it has prefix of `@`

    ```JS
        @Component({
        selector: 'app-add-contact',
        templateUrl: './add-contact.component.html',
        styleUrls: ['./add-contact.component.scss']
        })
    ```

4. by default Angular will add "app" as prefix
    * selector -> "app-leads-listing"
    * unique identifier to identify this component
    * `<app-leads-listing>`

   * Question :-  Can you change the default "app" prefix?
     * YES - we can change it throughout the app
     * "app" -> "arc-tutorials"
     * `angular.json` -> change prefix
   * Question :-  what will happen if i change?
     * ? Nothing happenns. Only thing you change, make sure you update with latest info
   * Question :-  will your app work or will it crash?
     * If you have updated the necessary components with latest prefix

5. Templates in Components

    * **Two ways of using templates in Components**
        * `templateUrl`   :-
            * link the html file

        * `template`

    * `templateUrl`
        * is always 1 single html file

    * `template`
        * we will pass the template itself instead of a html file
        * we just the HTML code that we want the component to display
        * we will use "backtick" and NOT single quote
            * backtick (``) key can be found on left top side `
            ```ts
                import { Component } from '@angular/core';

                @Component({
                selector: 'app-root',
                // templateUrl: './app.component.html',
                template: `<h1>{{title}}</h1>`,
                styleUrls: ['./app.component.scss']
                })
                export class AppComponent {
                title = 'simpleCRM';
                }

            ```
6. `stylesURL`
    * is an array
    * it can take multple stylesheets as input
    * it can be one or more stylesheets

7. Hands-on examples
    * `Profile -> Modules`
        * `list-profile -> component`
