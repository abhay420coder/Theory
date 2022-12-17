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

1. **Ctrl + Alt + v** = past image in md file which is saved in clipboard
2. **win + shift + s** = take partial screen shot
3. **win + shift + t** = take partial screen shot and covert into screen-shot

# 01. Introduction

## What is Angular

* Angular is a front-end framework that makes it easy to build applications for both web/mobile apps
* Angular is an open source project, sponsored and primarily maintained by Google
* Angular is a modern framework built entirely in TypeScript
* The Angular documentation not only supports TypeScript as a first-class citizen,
  * but uses it as its primary language
* Angular is a front-end framework that builds client-side applications.
* it is specially to build single-page-applications.
  
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

## why we choose angular

* Modular Approach
* Reusable Code
* Development Quicker and easier
* Unit testable
* Angular is using by TypeScript
  * Angular is developed and maintained by Google.
  * TypeScript is developed and maintained by Microsoft.
  * it means both (Angular & TypeScript) is maintained by believable company.

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

### Some Changes from Angular 2

* Animations being pulled out of@angular/core so as to remove the extra code being imported into our production bundle.
  * Though you can easily add animation by importing {BrowserAnimationsModule} from @angular/platform-browser/animations into NgModule.
* Renderer 2 in place of Renderer from same '@angular/core'.
* *nglf/else : Now you can use else clause as well
* No need to write a pattern for email validation in Angular 4.
* TypeScript 2.1 and 2.2 compatibility: Finally We can use typescript 2.1 or more earlier only upto typescript 1.8 was supported.

## Angular 5

Angular 5 was released in November 2017.

### Some Changes from Angular 4

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

### Some Changes from Angular 5

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

### Some Changes from Angular 6

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

### Some Changes from Angular 7

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
  
### Some Changes from Angular 8

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

### Some Changes from Angular 9

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

## ANgular Version Changes

* Generally Google upgrading Angular Twice a Year.

## Semantic Version

* Version a.b.c
  * a = Major Version Number  :- Changes function or add function
  * b = Minor Version Number :- added feature
  * c = Fix(Patch) :- bug fixes
* **If using Angular Material**
  * ng update @angular/material

* Each project and app are different and unique
* Each application will have its own unique way of implementation
* Get detailed info and steps on the Angular update portal
  * <https://upgrade.angular.io>

# 04. Install Angular CLI

## Angular : Prerequisites

* Operating System ( Windows/Mac/Linux)
* Node JS Node.JS is an open source, cross platform JavaScript run time environment
* NPM — Node package manager for JavaScript programming language. Is it automatically installed with node.js
* Visual Studio Code Code Editor

![check Version](./image%20-%20001%20introduction%20Angular/2022-11-03-16-21-28.png)

## Angular : Prerequisites knowledge

* HTML  (Hyper Text Markup Language)
* CSS (CaseCading Style Sheet)
* JS  (JavaScript)
* TS  (Typescript)

## Angular : How to Install

* First, step 1 is to install the Angular CLI globally

```JS
 npm i —g @angular/cli
```

![Angular : How to Install](./image%20-%20001%20introduction%20Angular/2022-11-03-22-40-15.png)

* Create new Angular application

```JS
ng new <project-name>
```

![Create new Angular application](./image%20-%20001%20introduction%20Angular/2022-11-03-22-43-29.png)
![Create new Angular application](./image%20-%20001%20introduction%20Angular/2022-11-03-22-45-12.png)

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

### creating a project using ANGULAR CLI :- by Abhay

1. Create an folder for angular application
2. From a terminal window(Comand prompt), navigate to the folder  :- just simply write **cmd** in path(you can see path near search in folder) you will dorectly enter in command prompt

3. rum following CLI in Command Prompt:-

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

### To install Angular CLI

```JS
    npm i -g @angular/cli // To install Angular CLI 
```

### To create new project

```JS
    ng new <project_name> //  it will generate all the required files, folders, test scripts to run a application 
```

* it will generate all the required files, folders, test scripts to run a application

### ng serve

* The application will be compiled here
* default port of Angular is 4200
* <http://localhost:4200>

3. Application is up and running

### All command

```JS
ctrl+backtick ( upper top left side)  // To get the terminal in Visual Studio Code

node -v // check for node version by running the command 
npm -v //Check for the npm version
npm i -g @angular/cli // To install Angular CLI 
ng new <project_name> //  it will generate all the required files, folders, test scripts to run a application 
ng serve   //this is for server the application on random port :- The application will be compiled here :- default port of Angular is 4200 :- http://localhost:4200
ng s   // :- shortcut of ng serve 
ng serve --port 4200   //this is for server the application on  port 4200
ng s --port 4200   // :- shortcut of ng serve --port 4200
ng serve --host example.com --port 4200    //this is for server the application on  port 4200 with host:- example.com
ng s --host example.com --port 4200    // :- shortcut of ng serve --host example.com --port 4200

```

# 05. Install Bootstrap in Angular Apps

## Different ways to include/lnstall Bootstrap in Angular application

* Using CDN Network
* Using NPM package manager

### Using CDN Network

* Take the CDN URL of styles and scripts and link in the html files

![in index.html - Using CDN Network](./image%20-%20001%20introduction%20Angular/2022-11-03-23-14-11.png)
![in app.component.html - Using CDN Network](./image%20-%20001%20introduction%20Angular/2022-11-03-23-16-05.png)
![in view - Using CDN Network](./image%20-%20001%20introduction%20Angular/2022-11-03-23-18-49.png)

### Using NPM Package manager

##### Step #1

* For Bootstrap 4
*

```JS
npm i bootstrap jquery popper --save
```

![in index.html - For Bootstrap 4](./image%20-%20001%20introduction%20Angular/2022-11-03-23-22-15.png)
![in package.json - For Bootstrap 4](./image%20-%20001%20introduction%20Angular/2022-11-03-23-24-36.png)
![in angular.json - For Bootstrap 4 , architect-> build->styles,scripts](./image%20-%20001%20introduction%20Angular/2022-11-03-23-28-58.png)

* For Bootstrap 5
  
```JS
npm i bootstrap popper --save
```

##### step #2

Update the styles and scripts in Angular.json

#### NPM package manager

```JS
npm i bootstrap jquery popper --save // Bootstrap v4 
npm i bootstrap popper --save   // Bootstrap 5 
```

##### package.json

![in package.json - For Bootstrap 4](./image%20-%20001%20introduction%20Angular/2022-11-03-23-24-36.png)

##### update angular.json   :- DO NOT MISS THIS STEP

![in angular.json - For Bootstrap 4 , architect-> build->styles,scripts](./image%20-%20001%20introduction%20Angular/2022-11-03-23-28-58.png)

RESTART your application

# 06. Install Angular Material in Angular App

**How to Install Angular Material in Angular application**

* Install using ng command

```JS
ng add @angular/material
```

![Install Angular Material in Angular application](./image%20-%20001%20introduction%20Angular/2022-11-04-06-43-04.png)

![Install Angular Material bootstarp in angular.json](./image%20-%20001%20introduction%20Angular/2022-11-04-08-29-17.png)

**in app.module.ts**

```TS
import {BrowserModu1e } from '@angular/platform-browser';
import { NgModu1e } from '@angular/core';
import { AppRoutingModu1e } from ' Mapp-routing. module' ;
import { AppComponent } from ' ./app.component ' ;
import { BrowserAnimationsModu1e } from '@angular/platform-browser/animations ' ;
import { MatButtonModu1e } from '@angular/material/button' ; // this is :- you can import any module from angular material which is available in angular , material

@NgModu1e({

declarations: [
              AppComponent
]
imports : [
  BrowserModu1e,
  AppRoutingModuIe,
  MatButtonModule,  // you should import here also all module 
  BrowserAnimationsModu1e
]

providers :
bootstrap: [AppComponent ]
})

export class AppModuIe { }
```

**in app.component.html**

```JS
  <button mat-buttony Primary < / button>

  <router-outlet> </router-outlet>
  <button mat-button> Primary </button>
<button mat-button color="primary"> primary </button>
<button mat-button color="accent"> accent </button>
< router-outlet></router-outlet>
```

![mat-button in view](./image%20-%20001%20introduction%20Angular/2022-11-04-09-51-18.png)

# 07. Folder Structure of Angular Apps

#### In this episode we will learn all about

* Folder Structure
* Boot process

1.

```JS
Project folder <simp1eCRM>
ng new <project-name>
```

2. e2e

* Protractor framework
  * by default
* end to end test scripts
* will end with .e2e-spec.ts extension
  
* src
  * app. e2e-spec. ts
  * login.e2e-spec.ts
  
* protractor. conf. js
  * configuration settings for running the end to end test scripts.

    * tsconfig.json
      * basic typescript setting

3. src

* entire source code of your application is inside src
* app
  * app. module. ts
  * app component
    * app. component. html  ->  view/ui/html code
    * app.component.scss    ->  stylesheet
    * app.component.spec.ts ->  unit test script
    * app.component.ts      ->  class file

* assets
  * images
  * mock data
  * apis

* environments
  * local
  * dev
  * qa
  * uat
  * prod

* favicon.ico
  
* index. html
  * Single Page Application
    * index. html
      * `< app- root >`

* main. ts
  * bootstrapModuIe
    * AppModuIe
  * Starting point of your application
  * Any other module in our Bootstrap
    * No mandatory that it should be AppModu1e

* polyfills. ts
  * supporting older browsers
  
* styles.scss
  * global/common stylesheet for elements

        ```JS
          a{

          }
        ```

* test. ts
  * test script for the main. ts file
  * testing the main. ts file code
  
* angular.json
  * backbone of your application
    * scripts
    * ports
    * settings
    * schematics
      * angular cli
      * build
      * test

* karma. conf.js
  * spec. ts
  * test script runner
  * running or executing all our test scripts

* tsconfig
  * build output directory
  * sourmap

* tslint
  * enforce coding standards

# 08. Boot Process of Angular Apps

* ng serve
  * compiling the app
  * main. ts
    * bootstrapModu1e
      * AppModu1e
        * AppComponent
      * AuthModuIe
        * Login
        * CheckAuthentication
        * Forgot
        * NewUser
        * Loggedln
  * test. ts
    * test scripts for main. ts
  * index. htmll
    * AppModuIe
      * AppComponent
        * `<app-root>`

* Whenever we do a ng serve/buil/test
  * Compile your typescript into Javascript code
    * Transpiling
    * 
    * main. js
    * polyfills.js
    * vendor.js
    * style.js
    * runtime.js


       

# 09. Package.Json and Package-lock.json
1. in package.Json
```JS
{
  "name": "pushcord-devops",        //app name :- "Your project name",
  "version": "0.0.0", // app version :- "Your project version",
  "scripts": {    // when you called "npm run scriptName" // internally it will start scriptValue
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": { // all dependencies
  // The packages listed in the dependencies section of package.json are essential to running applications.
    "@angular-material-components/datetime-picker": "^8.0.0",
    "@angular/animations": "^14.2.2",
    ......
    ......
    
  },
  "devDependencies": {  // The packages listed in the devDependencies section of package.json help you develop the application on your local machine. You don't deploy them with the production application.
                  /*
                  To add a new devDependency, use either one of the following commands:
                  npm install --save-dev <package-name>
                        or
                  yarn add --dev <package-name>
                */
    "@angular-devkit/build-angular": "^14.2.3",
    "@angular/cli": "^14.2.3",
    "@angular/compiler-cli": "^14.2.2",
    .....
    .....
  }
}
```
2. package-lock.Json
```
{
  "name": "pushcord-devops",
  "version": "0.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "name": "pushcord-devops",
      "version": "0.0.0",
      "dependencies": { // The packages listed in the dependencies section of package.json are essential to running applications.
        "@angular-material-components/datetime-picker": "^8.0.0",
        "@angular/animations": "^14.2.2",
        ......
        ......
      },
      "devDependencies": {  // The packages listed in the devDependencies section of package.json help you develop the application on your local machine. You don't deploy them with the production application.
                    /*
                    To add a new devDependency, use either one of the following commands:
                    npm install --save-dev <package-name>
                          or
                    yarn add --dev <package-name>
                  */
          "@angular-devkit/build-angular": "^14.2.3",
          "@angular/cli": "^14.2.3",
          "@angular/compiler-cli": "^14.2.2",
          .....
          .....
        }
    },
    "@modules/packages": {
      /* @modules :-  node_modules @angular-devkit , @babel , @npmcli , 
      @scarf , @schematics , @socket.io  , @types , @tootallnate , 
      @webassemblyjs , @xtuc , @yarnpkg , etc  

      if only packages is available independently , so you can write directly packageName instead of "@modules/packages"
      */
      "version": "package-version",
      "resolved": "resolveLink",
      "integrity": "integrityKey",
      "dev": "booleanValue",
      "requires": {  // requirement plugIn or  package
        "@ampproject/remapping": "2.2.0",
        "@angular-devkit/architect": "0.1402.3",
        ....
       
      },
      "dependencies": { // all deendencies required for angular
        "@angular-devkit/core": "14.2.3",
        ......
      },
      "engines": { // all required engines
        "node": "^14.15.0 || >=16.10.0",
        "npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
        "yarn": ">= 1.13.0"
        .......
      }
      "bin": {
        "semver": "bin/semver.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      },
      "optionalDependencies": {
        "esbuild": "0.15.5"
      },
      "peerDependencies": { // all peerDependencies
        "@angular/compiler-cli": "^14.0.0",
        "@angular/localize": "^14.0.0",
        ......
        ......
      },
      "peerDependenciesMeta": { // all peerDependenciesMeta 
        "@angular/localize": {
          "optional": true
        },
        "@angular/service-worker": {
          "optional": true
        },
        .........
        .........
      }
      
    },
    
    "packages": {
      /* packages :-  abab , abbrev , callsites , chalk , connect-history-api-fallback ,  etc.
      */
      "version": "package-version",
      "resolved": "resolveLink",
      "integrity": "integrityKey",
      "dev": "booleanValue",
      "requires": {  // requirement plugIn or  package
        "@ampproject/remapping": "2.2.0",
        "@angular-devkit/architect": "0.1402.3",
        ....
       
      },
      "dependencies": { // all deendencies required for angular
        "@angular-devkit/core": "14.2.3",
        ......
      },
      "engines": { // all required engines
        "node": "^14.15.0 || >=16.10.0",
        "npm": "^6.11.0 || ^7.5.6 || >=8.0.0",
        "yarn": ">= 1.13.0"
        .......
      }
      "bin": {
        "semver": "bin/semver.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      },
      "optionalDependencies": {
        "esbuild": "0.15.5"
      },
      "peerDependencies": { // all peerDependencies
        "@angular/compiler-cli": "^14.0.0",
        "@angular/localize": "^14.0.0",
        ......
        ......
      },
      "peerDependenciesMeta": { // all peerDependenciesMeta 
        "@angular/localize": {
          "optional": true
        },
        "@angular/service-worker": {
          "optional": true
        },
        .........
        .........
      }
      
    },
  }
}

```

**package.json**
  * name of app
  * version of app
  * scripts
    * "npm run start"
      * ng serve
        * angular.json

   * can we add more scripts to package.json ?
     * YES YES YES

   * scripts are your starting point of learning
     * existing projects

  * dependencies
    * all the modules/ libraries you MUST have to run in prod env
    * the prod code will mostly be optimized/minimum
  
  * devDependencies
    * all the modules/ libraries you MUST have to develop your app
    * we may add packages/modules but we may not use them

**package-lock.json**


# 10. Angular CLI Tutorial
Angular CLI - Command Line Interface 

* schematics -> angular.json / package.json 
  * ng serve 
  * ng build
  * ng test 
  * ng lint 
  * ng e2e 
* commands 
  ```JS
    ng new <project_name>
    ng generate component <component_name>
    ng generate module <module_name>
    ng generate pipe <pipe_name>
    ng generate directive 
  ```
    
* angular.json 

  * demo 
    * ng serve 
    * ng test 
      * test and run all our unit test scripts 

    * ng e2e 
      * test and run all our end to end tests 

    * ng lint 

    * ng build 
      * build your app and make it ready for production env deployment
        * `dist <simpleCRM>`
          * vendor.js
          * main.js 
          * style.css

    * ng generate   // or  (ng g )
      * components 
      * pipes
      * modules 
      * services 
      * directives 
      * applications 
        

# 11. App Architecture

1. **Angular App Architecture — Blue Print**
   * Modular Based Architecture
   * Components mapped inside modules
   * Common libs for shared components
   * Multiple Apps inside the repo

```JS
CRM Application
    src 
        contacts -> Module
            add-contact -> components inside module 
            edit-contact -> components inside module 
            delete-contact -> components inside module 
            view-contact -> components inside module 
        users
            add-user -> components inside module 
        orders
        leads
        reports
        settings
        profile

        shared
            auth
            tokens

        services -> HTTP/ Resuable code
            contact-service.ts 
            user-service.ts

        assets
            images
            mock-data 

        pipes 
            highlight-pipe 
```

