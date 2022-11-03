# What is component

1. Components are the main building block for Angular applications

2. Each component consists of:
    1. An **HTML template** that declares what renders on the page
    2. A **TypeScript class** that defines behavior
    3. A **CSS selector** that defines how the component is used in a template

3. A component is made up of three component
    1. **template** :- 
        1. which repersents **view**. 
        2. it created by using **html** and will b e the user interfaces of your applications.

    2. **class** :- 
        1. is **typeScript codes** that supports the view . 
        2. it contains Data and Methods that can be used to **control the logic of the view**.

    3. **metaData** :- 
        1. this is the information that angular needs to decide if particular class infact angular angular component or a regular class.
        2. this metaData is define using decorator (**@decorator-name**) which is a feature in typeScript.
        3. **decorator** :- A decorator is a function that provides information about the class attach to it. Example:- for component we used component deccorator :- @Component

4. Component :- Tempelate + class + metaData

# Prerequisites
To create a component, verify that you have met the following prerequisites:

1. Install the Angular CLI.
2. Create an Angular workspace with initial application. If you don't have a project, create one 

# creating a project using ANGULAR CLI
1. Create an folder for angular application 
2. From a terminal window, navigate to the folder  :- just simply write **cmd** in path(you can see path near search in folder)
3. rum following CLI:-
        ng new <project-name>

        where <project-name> is the name of your Angular application.

# serve your project 
1. To serve(Run) your project run using one of the following CLI
    1. ng serve
    2. ng s
    3. ng serve --port 4200
    4. ng s --port 4200
    5. ng serve --host example.com --port 4200
    6. ng s --host example.com --port 4200

2. if another project is running on 4200 then you can use another port like 4201,4202,...so on using one of the following CLI
    1. ng serve --port 4201
    2. ng s --port 4201
    3. ng serve --host example.com --port 4201
    4. ng s --host example.com --port 4201

# creating a component using ANGULAR CLI
To create a component using the Angular CLI:
1. From a terminal window, navigate to the directory containing your application.
2. Run one of the following CLI
```JS
    1. ng generate component <component-name> 
    2. ng g c <component-name> 
          where <component-name> is the name of your new component.
```
# Creating a component manually
1. Navigate to your Angular project directory.

2. Create a new file, 

```js
        <component-name>.component.ts
```

3. At the top of the file, add the following import statement.

```JS
        import { Component } from '@angular/core';
```

1. After the import statement, add a **@Component** decorator.

```JS
        @Component({
            
        })
```

5. Choose a CSS selector for the component.

```JS
        @Component({
        selector: 'app-component-overview',
        })
```

6. Define the HTML template that the component uses to display information. In most cases, this template is a separate HTML file.

```JS
        @Component({
        selector: 'app-component-overview',
        templateUrl: './component-overview.component.html',
        })
```

7. Select the styles for the component's template. In most cases, you define the styles for your component's template in a separate file.

```JS
        @Component({
        selector: 'app-component-overview',
        templateUrl: './component-overview.component.html',
        styleUrls: ['./component-overview.component.css']
        })
```

8. Add a class statement that includes the code for the component.

```JS
        export class ComponentOverviewComponent {

        }
```

