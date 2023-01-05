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
* 

