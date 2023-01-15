# content

1. Introduction
2. Installation
3. Observable
4. Operators
5. Of Operator
6. From Operator
7. Difference Between From and Of Operator | Angular RxJS Tutorials
8. fromEvent Operator Tutorial | Angular RxJS Tutorials
9. Interval Operator Tutorial | Angular RxJS Tutorials
10. debounceTime Operator Tutorial | Angular RxJS Tutorials
11. take Operator Tutorial | Angular RxJS Tutorials
12. takeWhile Operator Tutorial | Angular RxJS Tutorials
13. takeLast Operator Tutorial | Angular RxJS Tutorials
14. First Operator Tutorial | Angular RxJS Tutorials
15. Last Operator Tutorial | Angular RxJS Tutorials
16. ElementAt Operator Tutorial | Angular RxJS Tutorials
17. Filter Operator Tutorial | Angular RxJS Tutorials
18. Distinct Operator Tutorial | Angular RxJS Tutorials
19. Skip Operator Tutorial | Angular RxJS Tutorials
20. Count Operator Tutorial | Angular RxJS Tutorials
21. Max Operator Tutorial | Angular RxJS Tutorials
22. Min Operator Tutorial | Angular RxJS Tutorials
23. Difference Between RxJS, Redux and NgRX | Angular RxJS Tutorials

# Introduction - RxJS

## What is Reactive Programming?

* Reactive programming is an asynchronous programming paradigm concerned with data streams and the propagation of change
* RxJS (Reactive Extensions for JavaScript) is a library
  * for reactive programming
  * using observables
    * that makes it easier to compose asynchronous or callback-based code

### In simple terms

* Reactive programming is just a different way of building software applications.
* Essentially,
  * our software is built to "react" to changes that happen (like click events, data being fetched, etc)
  * instead of the typical way of writing software
    * where we explicitly write code (aka "imperative" programming) to handle those changes.

## What is RxJS?

* RxJS is a library
  * for composing asynchronous
    * and event-based programs by using observable sequences
* It provides
  * one core type,
  * the Observable,
  * satellite types (Observer, Schedulers, Subjects) and
  * operators inspired by **Array#extras** (map, filter, reduce, every, etc)
    * to allow handling asynchronous events as collections

## What is an Observable?

* RxJS introduces Observables, a new Push system for JavaScript.
* An Observable is a Producer of multiple values, "pushing" them to Observers (Consumers).

### Notes :-

1. Reactive Programming is a new way of building apps
   * our app will react to changes and handle data streams rather than we writing each handling seperately.

2. RxJS is a library which helps us in making async calls and implement callback mechanism easily using observable.
   * where Obsevable will come .... we can use rxjs there.

3. RxJS consists of 3 main things.
   * Observables
   * Satelite Data Types- Observers , Schedulers ,Subjects
   * Operators -
     * Array Methods
       * map
       * filter
       * reduce
       * .........
   * Helps us in Data Streams.
  
### Observables

* it is a data Streams.
  * let's take an example :- in a e-commerce shopping cart application.
    * when user not placed an order then
      * orderStatus value - NULL
    * user comes and places an order
      * order status will change over time // continously changing
        * orderStatus = order placed
        * orderStatus = order received
        * orderStatus = order processing
        * orderStatus = order submited
      * needs to be informed to multipple apps.
      * it will keep sending to new data

* **subscriber** (when observable comes then we need to subscribe this)
  * it will listen to the Observable for data changes/updates
  * My App is DashBoard
    * orderStatus - latest value always - since we have subscribed to it

* Example = 2
  * Let's suppose we have an youtube channel
    * **Observale**
      * i keep on posting every day data(content)
      * Any changes that happen to my channel
      * content
        * video
        * community post/message
    * **subscribe**
      * and you have subscribed my channel
        * you get notified everytime when i post a video
        * because there is a change in data
    * **RxJS Operators**
      * filter :- initially i am doing filter
      * map :- and you are subcribing my data and reading all things so i am using mapping

## RxJS Important concepts

The essential concepts in RxJS which solve async event management are:

* **Observable**:
  * represents the idea of an invokable collection of future values or events.
* **Observer**:
  * is a collection of callbacks that knows how to listen to values delivered by the Observable.
* **Subscription**:
  * represents the execution of an Observable, is primarily useful for cancelling the execution.
* **Operators**:
  * are pure functions
  * that enable a functional programming style of dealing with collections with operations
    * like map, filter, concat, reduce, etc.
* **Subject**:
  * is the equivalent to an EventEmitter,
  * and the only way of multicasting a value or event to multiple Observers.
* **Schedulers**:
  * are centralized dispatchers to control concurrency,
  * allowing us to coordinate when computation happens on
    * e.g. setTimeout or requestAnimationFrame or others

# Installation  RxJS

* when you are creating angular project or angular CLI
  * then RxJS comes with angular like pre-built
  * so , you don't need to install angular seperately.
* but when you are creating another project like react , vue,
  * then you need to install seperately RxJS
  
> * we can use RxJS with mostly type of frontend project.

## What is RxJS ?

* RxJS is a library
  * for composing asynchronous
    * and event-based programs by using observable sequences
* It provides
  * one core type,
  * the Observable,
  * satellite types (Observer, Schedulers, Subjects) and
  * operators inspired by **Array#extras** (map, filter, reduce, every, etc)
    * to allow handling asynchronous events as collections

## What is an Observable ?

* RxJS introduces Observables, a new Push system for JavaScript.
* An Observable is a Producer of multiple values, "pushing" them to Observers (Consumers).

## How to Install RxJS?

* Multiple ways we can use RxJS
  * As a CDN link
    * `https://unpkg.com/@reactivex/rxjs@version/dist/global/Rx.umd.js`
  * As a ES6 Module
    * `npm i --save rxjs`
  * Angular internally uses RxJS — hence its already shipped with Angular apps/projects
    * check in package.json file

# Observable

## Observable - Introduction

* Observables emits data over a period of time
* Observables needs to be subscribed else it won't do anything on its own!
* when you subscribe observable , then you get a observer
* **An Observer has 3 methods namely** ->
  * next,
  * complete and
  * error
* Angular uses Observables extensively under the hood for Routing,
  * Forms and almost all features
  
* A sample observable is defined as follows

    ```ts
    agents = new Observable(
        function subscribe(subscriber){
            try{
                subscriber.next("Ram");
                subscriber.next("Mark");
            } 
            catch(e){
                subscriber.error(e);
            }
        }
    )
    ```

* Angular using observable for the routing , forms , etc.

Simple example for observable

**rx-js-learning.component.html**

```html


<p>rx-js-learning works!</p>

<p>agent Name = {{agentName}}</p>



```

**rx-js-learning.component.ts**

```ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rx-js-learning',
  templateUrl: './rx-js-learning.component.html',
  styleUrls: ['./rx-js-learning.component.scss']
})
export class RxJSLearningComponent implements OnInit {

  agents : Observable<string> | undefined;
  agentName: string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.agents = new Observable(
      function(observer){
        try{
          // observer.next('Ram');
          // observer.next('Mark');
          // observer.next('Sita');

          // you can see the observable returning all data

          setInterval(()=>{
            observer.next('Ram');
          },3000);
          
          setInterval(()=>{
            observer.next('Mark');
          },6000);

          setInterval(()=>{
            observer.next('Sita');
          },9000)

          /*
          wherever we have period of time , then we have emit 3 value.
          */
        }
        catch(e){
          // if there is something wrong here to get data then
          observer.error(e);

        }
      }
    )

    // observable is useless , unless you subcribe to it
    this.agents.subscribe(data => {
      console.log(data);
      this.agentName=data;
    })
  }

}

```

![wherever we have period of time , then we have emit 3 value](2023-01-05-23-21-40.png)

# Operators

## Operators - Introduction

* Operators are very important part of RxJS
* RxJS library provides a lot of useful operators 
  * which helps us 
    * write clean code and 
    * reduce lot of effort in writing custom logic — 
      * which leads to many bugs actually!

> * An operator is a pure function

#### What is a pure function?

* Afunction will also return same value when passed with same input value
* Has no side effects
  
> * An operator
>   * takes in Observable as Input and
>   * Output will also be an Observable.

* Most Operator (Not All operator) will be
  * taken observable as an input and
  * give an output as an Observable.

### Types of Operators

* There are a lot of operators to do various types of operations
* We have operators for below functioning
  * Creation
  * Mathematical
  * Join
  * Transformation
  * Filtering
  * Utility
  . Conditional
  * Multicasting
  * Error handling
  
### My advice to you

* You DO NOT NEED to master all — with time you will learn as you work real time on projects
* Start learning the basic 10-15 operators that should be very much handy for you

# RxJS - `Of` Operator

## Introduction - Of Operator

* Make observable from 
  * a **string** 
  * or **array** 
  * or an **object**
  
### Where to use it?

* Whenever we want to pass a variable which has to be Observable instead of Array or String, we use Of Operator

### Hands-On Examples

* viewers:  `Observable<string[]> = of(['welcome', 'to', 'arc', 'tutorials']);`

**rx-js-learning.component.ts**

```ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rx-js-learning',
  templateUrl: './rx-js-learning.component.html',
  styleUrls: ['./rx-js-learning.component.scss']
})
export class RxJSLearningComponent implements OnInit {

  // studentsListObservable : Observable<String[]> = of(['MarK' , 'Ram' , 'Sita',  'Lisa']);
  // or
  students_List_For_Of_Operator = ['MarK' , 'Ram' , 'Sita',  'Lisa'];
  students_List_Observable_For_Of_Operator : Observable<String[]> = of(this.students_List_For_Of_Operator);

  students_String_For_Of_Operator = 'Arc Tutorial';
  students_String_Observable_For_Of_Operator : Observable<String> = of(this.students_String_For_Of_Operator);

  // in enterPrise we are using $ at the end of object-variable-name like 
  // students_Object_For_Of_Operator$
  students_Object_For_Of_Operator = {Ram:'Boy', Sita:'Girl' , Mark:'Boy'};
  students_Object_Observable_For_Of_Operator : Observable<Object> = of(this.students_Object_For_Of_Operator);
  // students_Object_Observable_For_Of_Operator : Observable<any> = of(this.students_Object_For_Of_Operator);
  // if you are using <Object>  then it will take only Object 
  // if you use <any>    then it will take any :- Array ,String Object ,.. etc

  constructor() { }

  ngOnInit(): void {

    // Of Observable
    this.students_List_Observable_For_Of_Operator.subscribe(data=>{
      console.log("students_List_Observable_For_Of_Operator :-  " , data);
    })
    this.students_String_Observable_For_Of_Operator.subscribe(data=>{
      console.log("students_String_Observable_For_Of_Operator :- " , data);
    })
    this.students_Object_Observable_For_Of_Operator.subscribe(data=>{
      console.log("students_Object_Observable_For_Of_Operator :- " , data);
    })
    
  }
// ngOnInit end

}

```

![For_Of_Operator](2023-01-06-01-08-20.png)


# RxJS - `From` Operator 

## From Operator - Introduction

* From operator will create an observable from an array, an array-like object, a promise, an iterable object, or an observable-like object.
* Remember it will always take Array or Array like
* Lot of people will confuse "from" operator and "of' operator — I will explain difference in next episode in detail
* Hands-On Examples
  * `students2: Observable<string> = from(['welcome', 'to', 'arc', 'tutorials']);`

**rx-js-learning.component.ts**

```ts
import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rx-js-learning',
  templateUrl: './rx-js-learning.component.html',
  styleUrls: ['./rx-js-learning.component.scss']
})
export class RxJSLearningComponent implements OnInit {

  // students_List_For_From_Operator : Observable<String> = from(['Fashion' , 'Electronics' , 'Mobile',  'HouseHold']);
  // or
  students_List_For_From_Operator = ['Fashion' , 'Electronics' , 'Mobile',  'HouseHold'];
  students_List_Observable_For_From_Operator : Observable<String> = from(this.students_List_For_From_Operator);

  constructor() { }

  ngOnInit(): void {
    // from Observable
    this.students_List_Observable_For_From_Operator.subscribe(data=>{
      console.log("students_List_Observable_For_From_Operator :- " , data);
    })
 
  }
// ngOnInit end

}

```

![For_From_Operator](2023-01-06-01-12-17.png)

# Difference Between `from` And `of` operator

## Difference Between `from` and `of` Operator

* From operator will create an observable from an array, an array-like object, a promise, an iterable object, or an observable-like object.
* Of operator can create observable from a string, object or Array
  * Specially useful when working with Models or interfaces
* Hands-On Examples
  * `students3: Observable<User> = of(this.userObj);` // Observable of interface
  * `studentsl: Observable<string> = of('welcome');`// Observable of string
  * `students2: Observable<string> = from(['welcome', 'to', 'arc', 'tutorials']);` // Observable from array
* when  you are passing array , then you can use either `from` operator or `of` operator
  
# `fromEvent` Operator

## FromEvent Operator - Introduction

* Creates an Observable that emits events of a specific type coming from the given event target.
* We can bind Target Elements and methods to make sure we get Observable as output
* Angular Specific -> We will use ViewChild, NativeElement as target element and bind events
* create an Observable from event.
* Hands-On Examples

  ```ts
  const students4 = fromEvent(this.validateBtn?.nativeElement, 'click');
  console.log(students4);
  students4.subscribe(data => {
  console.log(data);
  })
  ```

