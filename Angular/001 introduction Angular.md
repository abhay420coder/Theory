# TOPICS
* Introduction
* Version & Release History
* Upgrade to Angular 10
* Install Angular CLI
* Install Bootstrap in Angular Apps
* Install Angular Material in Angular App
* Folder Structure of Angular Apps
* Boot Process of Angular Apps
* Package.Json and Package-lock.json
* Angular CLI Tutorial
* App Architecture


1**Ctrl + Alt + v** = past image in md file which is saved in clipboard
2**win + shift + s** = take partial screen shot
3**win + shift + t** = take partial screen shot and covert into screen-shot


# 01. Introduction

## What is Angular
* Angular is a front-end framework that makes it easy to build applications for both web/mobile apps
* Angular is an open source project, sponsored and primarily maintained by Google
* Angular is a modern framework built entirely in TypeScript
* The Angular documentation not only supports TypeScript as a first-class citizen, 
  * but uses it as its primary language
  
## features
**Some of the striking features of Angular**

* Exceptional Scaling and Performance
* Cross Platform — Mobile, Web and Desktop
* Single Page Application
* TypeScript Language
* Declarative Templates
* Dependency Injection
* End to End tooling
* Modular-architecture of application
* Smaller Builds

## Technical overview of Angular
* Modules driven pattern
* Component-based architecture
* Templates
* Services
* Interpolation
* Data Binding
* Directives
  * Built-ln
  * Custom
* Pipes
  * Built-In
  * Custom
* Routing
* Http
* Testing


# 02. Version & Release History

## Angular 1.X
* AngularJS usually referred to as "Angular.js" or Angular I .x
* It is a JavaScript-based open-source front-end web application framework.
* It is mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.
* It aims to simplify both the development and the testing of applications by providing a framework for client-side model—view—controller (MVC) and model—view—viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications.
* It was initially released in Oct 2010 (7 years ago).
* Angular JS code is written in JavaScript
* Angular JS is now in Long Term Support(LTS) mode

## Angular 2
* Angular2 is a complete rewrite from the same team that built AngularJS.
* It is written entirely in TypeScript.
* Angular I .x was not built with mobile support in mind, where Angular 2 is mobile oriented.
* It was released in September 2016.
* It provides more choice for languages. You can use any of the language from ES5, ES6, TypeScript or Dart to write Angular2 code.

## Angular 3
* Angular 3 was Skipped
* Reason behind this is that version mismatch between @angular/core, @angular/compiler and @angular/router libraries.

## Angular 4
* Angular 4 was released in March 2017.
* This release is backwards compatible with 2.x.x for most applications.
* There is no major change in Angular 4 from Angular 2.
* Angular 4 is not a complete rewrite of Angular 2
* Angular team has laid emphasis on making angular apps more faster, compact .
* Under the hood changes: New changes reduced the size of the generated code for your components by around 60% in most cases.
* Faster Compilation
* Better Bug fixes Alert.
### Some Changes from Angular 2 :
* Animations being pulled out of@angular/core so as to remove the extra code being imported into our production bundle.
  * Though you can easily add animation by importing {BrowserAnimationsModule} from @angular/platform-browser/animations into NgModule.
* Renderer 2 in place of Renderer from same '@angular/core'.
* *nglf/else : Now you can use else clause as well
* No need to write a pattern for email validation in Angular 4.
* TypeScript 2.1 and 2.2 compatibility: Finally We can use typescript 2.1 or more earlier only upto typescript 1.8 was supported.

## Angular 5
Angular 5 was released in November 2017.

### Some Changes from Angular 4 :
* **Build Optimizer**: 
  * production builds created with the Angular CLI will now apply the build optimizer by default.
  
* Angular Universal State Transfer API and DOM Support.
  
* Compiler Improvements
  
* Internationalized Number, Date, and Currency Pipes
  
* **HttpCIient** : 
  * @angular/http is deprecated in Angular 5. It is replaced with @angular/common/http library.
  
* HttpModule is not more use in Angular 5. 
  * It is replaced by HttpClientModule of @angular/common/http library in each of your modules, 
    * inject the HttpClient service, 
    * and remove any map(res => res.json()) calls, which are no longer needed.
  
* Angular CLI vl .5 will generate v5 projects by default.
  
* Angular Forms adds updateOn Blur / Submit
  
* RxJS 5.5 support
  
* **New Router Lifecycle Events** : 
  1. GuardsCheckStart, 
  2. ChildActivationStart, 
  3. ActivationStart, 
  4. GuardsCheckEnd, 
  5. ResolveStart, 
  6. ResolveEnd, 
  7. ActivationEnd, 
  8. ChildActivationEnd


## Angular 6
Angular 6.0.0 was released on May 2018. It was released with Angular CLI 6 and Material 6.
### Some Changes from Angular 5 :
* Two new angular cli commands added : ng update and ng add
* Angular Elements
* Component Dev Kit (CDK)
* Angular Material Starter Components
* CLI Workspaces
* Schematics
* Library Support
* Tree Shakable Providers
* Animations Performance Improvements
* RxJS v6


## Angular 7
Angular 7.0.0 was released on Oct 2018, synchronized released with Angular CLI 7 and Angular Material 7.
### Some Changes from Angular 6 :
* CLI Prompts: The CLI will now prompt users when running common commands like ng new or ng add @angular/material to help you discover built-in features like routing or SCSS support. 
  * CLI Prompts are also added in Schematics.

* Bundle budgets in CLI.
* Angular Material & CDK
* Virtual Scrolling
* Drag and Drop
* Content Projection support in Angular Elements
* Dependency updates :
* TypeScript 3.1
* RxJS 6.3
* Added support for Node 10

## Angular 8
* Angular 8 is released in May 2019. synchronized released with Angular CLI 8 and Angular Material 8
### Some Changes from Angular 7 :
* **Differential Loading by Default:** 
    * It is a process by which the browser chooses between modern or legacy JavaScript based on its own capabilities.
  
* Dynamic Imports for Route Configurations.
  
* Builder APIs in CLI: It is an exciting feature, using this we can customize angular CLI commands like ng build, ng test,and ng run.
  
* Workspace APIs in the CLI
  
* Web Worker Support
  
* Angular CLI 8.3.0 has added new UX for an initial app created using ng new.
  
* ng deploy is added in Angular CLI 8.3.0
  
## Angular 9
* Angular 9 is released in Feb 2020. 
* It is the synchronized major release with Angular CLI 9 and Angular Material 9.
* Angular 9 came up with the most awaited Ivy compiler. 
  
### Some Changes from Angular 8:

* Ivy Compiler: From version 9 all applications are moved to Ivy compiler and runtime by default. (In angular 8 it was in opt-in mode). 
* It provides the following advantages:-  
  * Smaller Bundle Size
  * Faster Testing, Better Debugging
  * Improved CSS class and style binding 
  * Improved Type Checking, Improved build errors
  * Improved build times, enabling AOT on by default
  * Improved Internationalization
  * New Options for providedln property in @lnjectable Decorator, 
    * In addition to the previous root and module options, you have two additional options.
  * platform : Specifying providedln: 'platform' makes the service available in a special singleton platform injector that is shared by all applications on the page.
  * any : Provides a unique instance in every module (including lazy modules) that injects the token.
  * Component harnesses
  * Angular Material New Component
      * Youtube Player Component
      * Google Maps Component
      * TypeScript 3.7 Support

## Angular 10
Angular 10 is the latest major version released in Jun 2020. 

This is a smaller release comparison to other major releases because of just a four-month time from the previous major release v9.

It is the synchronized major release with Angular CLI 10 and Angular Material 10..
### Some Changes from Angular 9:
* New Angular Material Component
  
* Date Range Picker : Checkout this blog to see how to use angular material data range picker .
  
* **Warnings about CommonJS imports**: 
  * When you use a dependency that is packaged with CommonJS, 
    * it can result in larger slower applications. 
  * Starting with version 10, we now warn you when your build pulls in one of these bundles.
* Optional Stricter Settings
* TypeScript 3.9
* TSLib has been updated to v2.O
* TSLint has been updated to v6
* New Default Browser Configuration


# 03. Upgrade to Angular 10
* **How to upgrade from Angular 9 to Angular 10?**
  * ng update @angular/cli @angular/core
  
* **If using Angular Material**
  * ng update @angular/material

* Each project and app are different and unique
* Each application will have its own unique way of implementation
* Get detailed info and steps on the Angular update portal
  * https://upgrade.angular.io    
# 04. Install Angular CLI
## Angular : Prerequisites

Operating System ( Windows/Mac/Linux)
Node JS Node.JS is an open source, cross platform JavaScript run time environment
NPM — Node package manager for JavaScript programming language. Is it automatically installed with node.js
Visual Studio Code Code Editor

![check Version](./image%20-%20001%20introduction%20Angular/2022-11-03-16-21-28.png)

## Angular : How to Install
* First, step 1 is to install the Angular CLI globally
```JS
 npm i —g @angular/cli
```
* Create new Angular application
```JS
ng new <project-name>
```
* Run the application
```JS
 ng serve
 ```

![Angular How to install](./image%20-%20001%20introduction%20Angular/2022-11-03-16-24-00.png)

### creating a project using ANGULAR CLI :- by Abhay

1. Create an folder for angular application 
2. From a terminal window, navigate to the folder  :- just simply write **cmd** in path(you can see path near search in folder)
3. rum following CLI:-
    ```JS
        ng new <project-name>   //  where <project-name> is the name of your Angular application.
    ```

### To serve(Run) your project run using one of the following CLI :- by Abhay
```JS
 ng serve   //this is for server the application on random port
 ng s   // :- shortcut of ng serve 
 ng serve --port 4200   //this is for server the application on  port 4200
 ng s --port 4200   // :- shortcut of ng serve --port 4200
 ng serve --host example.com --port 4200    //this is for server the application on  port 4200 with host:- example.com
 ng s --host example.com --port 4200    // :- shortcut of ng serve --host example.com --port 4200
```
### what is CLI

* CLI stands for Command Line Interface
* In the terminal - you can run commands and get most of the work done easily
* It provides some commands and schematics which helps us with faster code generation.

### To get the terminal in Visual Studio Code

The short cut is "**ctrl+backtick ( upper top left side)**".

### check for node version by running the command 

```JS
node -v // check for node version by running the command 
```

### Check for the npm version 
```js
    npm -v //Check for the npm version
```

To install Angular CLI 
```JS
    npm i -g @angular/cli 
```

4. To create new project 
```JS
    ng new <project_name>
```

    - it will generate all the required files, folders, test scripts to run a application 

6. We will deep dive and explore each and every folder/file to understand the Angular project in detail 
    - In the next episode 
        -> 
7. cd simpleCRM 

8. ng serve
    -> The application will be compiled here
    -> default port of Angular is 4200 

    -> http://localhost:4200

9. Application is up and running 

# 05. Install Bootstrap in Angular Apps
# 06. Install Angular Material in Angular App
# 07. Folder Structure of Angular Apps
# 08. Boot Process of Angular Apps
# 09. Package.Json and Package-lock.json
# 10. Angular CLI Tutorial
# 11. App Architecture


