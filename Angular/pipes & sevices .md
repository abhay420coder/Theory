# pipes 

## introduction 
1. pipe operator ( | ) is transformed the data only for the view. it does not change the value of property in the class
2. Use pipes to transform strings, currency amounts, dates, and other data for display. 
3. Pipes are simple functions to use in template expressions to accept an input value and return a transformed value. 
4. Pipes are useful because you can use them throughout your application, while only declaring each pipe once. 
5. For example, you would use a pipe to show a date as April 15, 1988 rather than the raw string format.


## types of pipe 
1. string pipe
2. JSON pipe
2. number pipe
3. percentage pipe
4. currency pipe
5. date pipe

## syntax :- 
 variableName | pipeName

###  string pipe

#### lowercase pipe
1. syntax :-    variableName | lowercase 
    1. in lowercase pipe every letter of word in lower case

#### uppercase pipe
1. syntax :-    variableName | uppercase    
    1. in uppercase pipe every letter of word in upper case

#### titlecase pipe
1. syntax :-    variableName | titlecase    
    1. in titlecase pipe first letter of every word in upper case , rest are in lower case

#### slice pipe
1. syntax :-    variableName | slice:startingIndex:endingIndex    
    1. here ending index is not included but  starting index is included 
    2. slice from starting index to ending index

2. syntax :-    variableName | slice:startingIndex
    1. slice from starting index to last index

3. syntax :-    variableName | slice::endingIndex
    1. slice from 0 to ending index




###  JSON pipe
1. syntax :-    objectVariableName | json
    1. JSON repersentation of that particular object

###  number pipe

1. syntax :-    variableName | number:'numOfDigBefDec.minNumOfDigAfDec-maxNumOfDigAfDec' 
    1. numOfDigBefDec      :-  numberOfDigitsBeforeDecimal
    2. minNumOfDigAfDec    :-  minimumNumberOfDigitsAfterDecimal
    3. maxNumOfDigAfDec    :-  maximumNumberOfDigitsAfterDecimal
    4. you can put directly value instead of variableName

2. syntax :-    variableName | number:'numberOfDigitsBeforeDecimal.minimumNumberOfDigitsAfterDecimal-maximumNumberOfDigitsAfterDecimal'

    2. you can put directly value instead of variableName

###  percentage pipe
1. syntax :-    variableName | percent 
    1. in percent pipe value is multiplied into 100 :- value*100  
    2. you can put directly value instead of variableName
    
###  currency pipe

#### default currency
1. syntax :-    variableName | currency
    1. default currency is US Dollar
    2. you can put directly value instead of variableName

#### ISO currency
1. syntax :-    variableName | currency : 'isoCurrencyCode'
    1. then your value is view in with that currency sysmbol of isoCurrencyCode
    2. for currencycode please search in google iso currency codes or  visit  https://en.wikipedia.org/wiki/ISO_4217
    3. you can put directly value instead of variableName

#### Custom symbol for currency
1. syntax :-    variableName | currency : 'symbol' : 'code'
    1. if you want to show your currency with particular symbol then use
    2. you can put directly value instead of variableName


###  date pipe
1. syntax :-    variableName | date:'format'
    1. where format is short , shortDate , shortTime , medium , mediumDate , mediumTime , long , longDate , longTime 
    
#### short date pipe
1. syntax :-    variableName | date:'short'

#### medium date pipe
1. syntax :-    variableName | date:'medium'

#### long date pipe
1. syntax :-    variableName | date:'long'

#### shortDate date pipe
1. syntax :-    variableName | date:'shortDate'

#### mediumDate date pipe
1. syntax :-    variableName | date:'mediumDate'

#### longDate date pipe
1. syntax :-    variableName | date:'longDate'

#### shortTime date pipe
1. syntax :-    variableName | date:'shortTime'

#### mediumTime date pipe
1. syntax :-    variableName | date:'mediumTime'

#### longTime date pipe
1. syntax :-    variableName | date:'longTime'



## Using a pipe in a template

### string pipe

            import { Component, OnInit } from '@angular/core';

            @Component({
            selector: 'app-test',
            template:  `
                        <h2>welcome {{name}}</h2>                   <!-- AbhayKumar -->
                        <h2>welcome {{name | lowercase }}</h2>      <!-- abhaykumar -->
                        <h2>welcome {{name | uppercase }}</h2>      <!-- ABHAYKUMAR -->
                        <h2>welcome {{message | titlecase }}</h2>   <!-- Welcome Abhay Kumar -->
                        <h2>welcome {{name | slice:3:5 }}</h2>      <!-- ABHAYKUMAR -->

                        <!-- in lowercase pipe every letter of word in lower case -->
                        <!-- in uppercase pipe every letter of word in upper case -->
                        <!-- in titlecase pipe first letter of every word in upper case , rest are in lower case -->

                        <!-- in slice pipe :-  slice:startingIndex:endingIndex :- here ending index is not included but  starting index is sincluded 
                        slice:startingIndex:endingIndex   :- slice from starting index to ending index
                        slice:startingIndex   :- slice from starting index to last index
                        slice::endingIndex   :- slice from 0 to ending index-->
                        `,
            styles: [ ]
            })


            export class TestComponent implements OnInit {
            public name : string="AbhayKumar";
            public name : string="welcome aBHAY Kumar";

            constructor() {   }

            ngOnInit(): void {  }

            }



### JSON pipe

            import { Component, OnInit } from '@angular/core';

            @Component({
            selector: 'app-test',
            template:  `
                        <!-- JSON pipe -->
                        <h2>welcome {{person | json}}</h2>      <!-- { "firstName" : "john","lastName" : "doe" } -->
                        <!-- JSON repersentation of that particular object -->


                        `,
            styles: [ ]
            })


            export class TestComponent implements OnInit {
            public person = {
                "firstName" : "john",
                "lastName" : "doe"
            }

            constructor() {   }

            ngOnInit(): void {  }

            }


### numbers pipe


            import { Component, OnInit } from '@angular/core';

            @Component({
            selector: 'app-test',
            template:  `
                        <!-- numbers pipe -->
                        <h2> {{5.678 | number:'1.2-3' }}</h2>      <!-- 5.678 -->
                        <h2> {{5.678 | number:'3.4-5' }}</h2>      <!-- 005.6780 -->
                        <h2> {{5.678 | number:'3.1-2' }}</h2>      <!-- 005.68 -->

                        <!--  in number pipe
                        number:'numberOfDigitsBeforeDecimal.minimumNumberOfDigitsAfterDecimal-maximumNumberOfDigitsAfterDecimal' -->

                        <!-- number:'numOfDigBefDec.minNumOfDigAfDec-maxNumOfDigAfDec' 
                        numOfDigBefDec      :-  numberOfDigitsBeforeDecimal
                        minNumOfDigAfDec    :-  minimumNumberOfDigitsAfterDecimal
                        maxNumOfDigAfDec    :-  maximumNumberOfDigitsAfterDecimal
                        -->

                        `,
            styles: [ ]
            })


            export class TestComponent implements OnInit {

            constructor() {   }

            ngOnInit(): void {  }

            }


### percent pipe


            import { Component, OnInit } from '@angular/core';

            @Component({
            selector: 'app-test',
            template:  `
                        <!-- percent pipe -->
                        <h2> {{0.25 | percent }}</h2>      <!--25% -->
                        <!-- in percent pipe value is multiplied into 100 :- value*100 -->

                        `,
            styles: [ ]
            })


            export class TestComponent implements OnInit {

            constructor() {   }

            ngOnInit(): void {  }

            }


### currency pipe


            import { Component, OnInit } from '@angular/core';

            @Component({
            selector: 'app-test',
            template:  `
                        <!-- currency pipe -->
                        <h2> {{0.25 | currency }}</h2>      <!--$0.25   because default currency is US Dollar -->
                        <h2> {{0.25 | currency: 'GBP' }}</h2>      <!--€0.25   because GBP means Great Britan Pound -->

                        <!-- currency : 'isoCurrencyCode'   :- then your value is view in with that currency sysmbol of isoCurrencyCode-->
                        <!-- for currencycode please search in google iso currency codes or  visit  https://en.wikipedia.org/wiki/ISO_4217 -->


                        <!-- if you want to show your currency with particular symbol then use :-        currency : 'symbol' : 'code'  -->
                        <h2> {{0.25 | currency: 'GBP' : 'code' }}</h2>      <!--  GBP0.25  -->
                        <h2> {{0.25 | currency: 'EUR' : 'code' }}</h2>      <!--  EUR0.25  -->
                        `,
            styles: [ ]
            })


            export class TestComponent implements OnInit {

            constructor() {   }

            ngOnInit(): void {  }

            }



### date pipe


            import { Component, OnInit } from '@angular/core';

            @Component({
            selector: 'app-test',
            template:  `
                        <!-- date pipe -->
                        <h2> {{date}}</h2>      <!-- Sun Dec 03 2017 21:48:52 GMT+0530 (India Standard Time) -->

                        <!-- value | date:'format'           where format is short , shortDate , shortTime , medium , mediumDate , mediumTime , long , longDate , longTime  -->

                        <h2> {{ date | date:'short' }} </h2>          <!-- 12/3/17 , 9:49 PM -->
                        <h2> {{ date | date:'shortDate' }} </h2>      <!-- 12/3/17 -->
                        <h2> {{ date | date:'shortTime' }} </h2>      <!-- 9:49 PM -->

                        `,
            styles: [ ]
            })


            export class TestComponent implements OnInit {
            
            public date = new Date();

            constructor() {   }

            ngOnInit(): void {  }

            }




### all pipe in one example

            import { Component, OnInit } from '@angular/core';

            @Component({
            selector: 'app-test',
            template:  `
                        <!-- string pipe -->
                        <h2>welcome {{name}}</h2>                   <!-- AbhayKumar -->
                        <h2>welcome {{name | lowercase }}</h2>      <!-- abhaykumar -->
                        <h2>welcome {{name | uppercase }}</h2>      <!-- ABHAYKUMAR -->
                        <h2>welcome {{message | titlecase }}</h2>   <!-- Welcome Abhay Kumar -->
                        <h2>welcome {{name | slice:3:5 }}</h2>      <!-- ABHAYKUMAR -->

                        <!-- in lowercase pipe every letter of word in lower case -->
                        <!-- in "uppercase" pipe every letter of word in upper case -->
                        <!-- in "titlecase" pipe first letter of every word in upper case , rest are in lower case -->

                        <!-- in "slice" pipe :-  slice:startingIndex:endingIndex :- here ending index is not included but  starting index is sincluded 
                        slice:startingIndex:endingIndex   :- slice from starting index to ending index
                        slice:startingIndex   :- slice from starting index to last index
                        slice::endingIndex   :- slice from 0 to ending index-->





                        <!-- JSON pipe -->
                        <h2>welcome {{person | json}}</h2>      <!-- { "firstName" : "john","lastName" : "doe" } -->
                        <!-- JSON repersentation of that particular object -->





                        <!-- numbers pipe -->
                        <h2> {{5.678 | number:'1.2-3' }}</h2>      <!-- 5.678 -->
                        <h2> {{5.678 | number:'3.4-5' }}</h2>      <!-- 005.6780 -->
                        <h2> {{5.678 | number:'3.1-2' }}</h2>      <!-- 005.68 -->

                        <!--  in number pipe
                        number:'numberOfDigitsBeforeDecimal.minimumNumberOfDigitsAfterDecimal-maximumNumberOfDigitsAfterDecimal' -->

                        <!-- number:'numOfDigBefDec.minNumOfDigAfDec-maxNumOfDigAfDec' 
                        numOfDigBefDec      :-  numberOfDigitsBeforeDecimal
                        minNumOfDigAfDec    :-  minimumNumberOfDigitsAfterDecimal
                        maxNumOfDigAfDec    :-  maximumNumberOfDigitsAfterDecimal
                        -->

                        <!-- percent pipe -->
                        <h2> {{0.25 | percent }}</h2>      <!--25% -->
                        <!-- in percent pipe value is multiplied into 100 :- value*100 -->




                        <!-- currency pipe -->
                        <h2> {{0.25 | currency }}</h2>      <!--$0.25   because default currency is US Dollar -->
                        <h2> {{0.25 | currency: 'GBP' }}</h2>      <!--€0.25   because GBP means Great Britan Pound -->

                        <!-- currency : 'isoCurrencyCode'   :- then your value is view in with that currency sysmbol of isoCurrencyCode-->
                        <!-- for currencycode please search in google iso currency codes or  visit  https://en.wikipedia.org/wiki/ISO_4217 -->


                        <!-- if you want to show your currency with oarticular symbol then use :-        currency : 'symbol' : 'code'  -->
                        <h2> {{0.25 | currency: 'GBP' : 'code' }}</h2>      <!--  GBP0.25  -->
                        <h2> {{0.25 | currency: 'EUR' : 'code' }}</h2>      <!--  EUR0.25  -->



                        <!-- date pipe -->
                        <h2> {{date}}</h2>      <!-- Sun Dec 03 2017 21:48:52 GMT+0530 (India Standard Time) -->

                        <!-- value | date:'format'           where format is short , shortDate , shortTime , medium , mediumDate , mediumTime , long , longDate , longTime  -->

                        <h2> {{ date | date:'short' }} </h2>      <!-- 12/3/17 , 9:49 PM -->
                        <h2> {{ date | date:'shortDate' }} </h2>      <!-- 12/3/17 -->
                        <h2> {{ date | date:'shortTime' }} </h2>      <!-- 9:49 PM -->

                        `,
            styles: [ ]
            })


            export class TestComponent implements OnInit {
            public name : string="AbhayKumar";
            public name : string="welcome aBHAY Kumar";
            public person = {
                "firstName" : "john",
                "lastName" : "doe"
            }

            public date = new Date();

            constructor() {   }

            ngOnInit(): void {  }

            }







# service 

## principles
1. Do Not Repeat Yourself (DRY) :-  Do Not Copy Of The Same Data
2. Single Responsibility Principle
    1. our component class should have our one responsibility :- this is to control view logic
    2. try to not to create data in class

1. for above problem , angular has a solution i.e, service

## introduction 2

1. A service is a class with specific purpose

## why do we need service
1. share the data across multiple component
    1. in this scenario service is responsible to provide the data to tha component that ask for it

2. implement application logic
    1. let's say , An employee enters DOB(date of birth) but we need to c alculate their age
    2. now we can write the logic to do that :- 
    3. this doesm't need a view and logic is reusable code which should be independent of any individual component
    4. so , again in this scenario we create a service

3. And finally  we can also use services for external interaction such as connecting to a dataBase

4. in Angular the naming convention is :-   fileName.service.ts
    1. example :- for employeeService 
    2. service file name:- employeeService.service.ts   
    3. And class name :-  EmployeeService

##  how do we go about service in angular
1. Ans :- dependency injection

## introduction 2

1. Service is a broad category encompassing any value, function, or feature that an application needs.
2. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.

3. Angular distinguishes components from services to increase modularity and reusability.

4. Ideally, a component's job is to enable only the user experience. 
    1. A component should present properties and methods for data binding to mediate between the view and the application logic. 
    2. The view is what the template renders and the application logic is what includes the notion of a model.

5. A component should use services for tasks that don't involve the view or application logic.
6. Services are good for tasks such as fetching data from the server, validating user input, or logging directly to the console. 
7. By defining such processing tasks in an injectable service class, you make those tasks available to any component. 
8. You can also make your application more adaptable by injecting different providers of the same kind of service, as appropriate in different circumstances.

9. Angular doesn't enforce these principles. Instead, Angular helps you follow these principles by making it easy to factor your application logic into services. 
10. In Angular, dependency injection makes those services available to components.

# dependency injection

## we learn dependency injection in three part
1. code without dependency-injection and its drawBacks
2. dependency-injection as a design pattern and how it overComes the drawBacks
3. dependency-injection as a frameWork , that angular provides

### code without dependency-injection and its drawBacks

1. let us take one example
2. example :- consider three classes :- one for a car , one for a tire  , one for a engine

    1. one class for a engine

                class Engine{
                    constructor(){}
                }

    2. one class for a tires

                class Tires{
                    constructor(){}
                }

   3. one class for a car

                class Car{
                    engine;
                    tires;
                    constructor(){
                        this.engine = new Engine();
                        this.tires = new Tires();
                    }
                }

    4. simply , let's assume two things is required to build a car :- Engine and Tires
    5. A car has two dependency :- engine and tires
    6. in the car class , the constructor itself create copies of thr engine and tires
        1. this.engine = new Engine();
        2. this.tires = new Tires();
    7. so, when you instantiate a new car , then constructor instantiate new engine and new tires.
        1. this.engine = new Engine();
        2. this.tires = new Tires();
    
3. but there is a problem with above code , 
    1. let's assume engine evolve and constructor of engine class accepts a parameter 
    2. may be engine type :- petrol and diesel
    3. 
                class Engine{
                    constructor(newParameter){}
                }

                class Tires{
                    constructor(){}
                }

                class Car{
                    engine;
                    tires;
                    constructor(){
                        this.engine = new Engine();
                        this.tires = new Tires();
                    }
                }

    4. when we change the engine , our car is broken , 
    5. to repair our car class , we need to passing parameter to the engine constructor
    6. similarly if constructor of tires class accepts a parameter then we need to fix again

4. **drawBacks :-**
    1. our code is not flexible .
        1. anytime dependency change , the car class change as well .
    2. the code is not suitable for testing 
        1. anytime you instantiate a new car , you get the same engine and same set of tires.
        2. what if you want to test our code may be with petrol engine ,diesel engine , new tires , old tires ... so on.
        3. it's not possible , 
        4. even if you are able to do it by changing code, 
            1. what do we do
            2. if the engine and tires intern has some dependencies
            3. how do we keep track and create those dependencies
            4. so, basically we are not in control of our code
            




### dependency-injection(DI) as a design pattern and how it overComes the drawBacks
1. DI is a coding pattern in which a class receives its dependencies from external sources reather than creating them itself.

    1. WITHOUT dependency-injection(DI)
        class Car{
                        engine;
                        tires;
                        constructor(){
                            this.engine = new Engine();
                            this.tires = new Tires();
                        }
                    }

    2. WITH dependency-injection(DI)

        class Car{
                        engine;
                        tires;
                        constructor(engine , tires){
                            this.engine = new Engine();
                            this.tires = new Tires();
                        }
                    }


        1. You can see here we have moved the definition of dependencies from inside the constructor to the parameter of the constructor 
        2. so the care class doesn't create the dependencies any more , justit's just consumes them
        3. The creation of those dependencies is external to this class
        4. by doing so both the drawBacks , we had now solved .

        5. to create a car we go something like this

            1. we first make a Engine and Tires and pass them parameter when creating a car

                    var myEngine = new Engine();
                    var myTires = new Tires();
                    var myCar = new Car(myEngine , myTires)

            2. now even if the engine evolved to passing parameter , ther is no change in how we make the car , so the engine takes a parameter but car stills accept the without a problem. 
             
                    var myEngine = new Engine(parameter);
                    var myTires = new Tires();
                    var myCar = new Car(myEngine , myTires)

            3. same as the case with tyres , if the tires evolved to passing parameter , ther is no change in how we make the car , so the tires takes a parameter but car stills accept the without a problem.
             
                    var myEngine = new Engine(parameter);
                    var myTires = new Tires();
                    var myCar = new Car(myEngine , myTires)

            4. our code is much more flexible now , even you make changes to the dependency , the car class  will intact (it means there is no any effect on car class)

        6. same is apllicable to testing as well , 
            1. since we are incomplete control of the dependencies , we can mock the data to our suit the testing needs.
            2. for  example we can create old engine and set of tyres and test within old car
            
                var oldEngine = new Engine(oldParameter);
                var oldTires = new Tires(oldParameter);
                var oldCar = new Car( oldEngine , oldTires );

            3. or ,  we can create old engine and set of tyres and test within old car

                var newEngine = new Engine(newParameter);
                var newTires = new Tires(newParameter);
                var newCar = new Car( newEngine , newTires );     

            4. so we can test multiple scenarion with this approach

2. now we have another problem at hand with this approach
    1. with DI , we create a car by passing the dependencies as the parameters 
    2. but we as a developer , have to create those parameters first . 
    3. right now , we have just two dependencies it's fine , so we create the engine and tires and then pass it to the car.
    4. but , what will we do , 
        1. if the car has more than 20 dependencies , 
        2. we have to create all those dependencies before passing them as parameters 
        3. and what if those dependencies intern had dependencies on something else
        4. then we would first create those dependencies
        5. so , as the number of dependencies grow ,it become really difficult to manage the code

        6. let us take an example :- 

                var newEngine = new Engine();
                var newTires = new Tires();
                var depA = new dependency();
                var depB = new dependency();
                var depZ = new dependency();
                var newCar = new Car( newEngine , newTires , depA , depB , depZ ); 

            1. this time , the car has multiple dependencies . it is dependent on engine , tires , depA , depB , depZ 
            2. so we have create all the dependencies by ourselves.   

        7. let us take an another example

                var newEngine = new Engine();
                var newTires = new Tires();
                var depA = new dependency();
                var depB = new dependency();
                var depAB = new dependency();
                var depZ = new dependency(depAB);
                var newCar = new Car( newEngine , newTires , depA , depB , depZ );   

            1. this time , the car has multiple dependencies . it is dependent on engine , tires , depA , depB , depZ 
            2. but depZ is intern dependent on depAB . so we first create depAB before creating depZ eventially the car.
        8. so, this become extremly difficult for a developer 
        9. that's why angular provide dependency-injection(DI) as a frameWork.


    

### dependency-injection as a frameWork , that angular provides

1. dependency-injection(DI) frmaework has something called injector , where you register all the dependencies .
2. injector is basically like a container of all the dependencies like engine , tires , depA , depB , depAB... so on
    1. **Injector**

                Engine                          serviceA
                Tires                           serviceB
                depA                            serviceC
                depB                            serviceD
                ....                            ........
                ....                            ........
                ....                            ........
                ....                            ........
                depZ                            serviceZ

                  |                                 |
                  |                                 |
                  |                                 |
                  v                                 v
                 Car                              EmpList

    2. If you want a car , the injector will provide a car for you.
    3. the frameWork manages all the dependencies , so that you don't have to keep track of it.
    4. DI frameWork makes the developer job that much more easier. 
    5. if you relate to our example
        1. our EmpList (employee list) component  might be dependent on serviceA , serviceB , ..... , serviceZ... so on
        2. we registered all the dependencies or services with the injector  
        3. then , when the empList Component is initialised , the injector provides all the necessary dependencies for the proper functioning of the EmpList Component

#### how we use service in angular
1. **we create a servie :- Define the EmployeeService class**
2. **Register the service with Angular-Built-In Injector**
3. **Declare the service as dependency in thc class the needs it.** But in our case EmpList and EmpDetail are the classes the need the employee service.

                                -------------------------
                                |     EmployeeService     |
                                -------------------------
                                            ^
                                          /   \
                                         /     \
                                        /       \
                                       /         \
                                      /           \
                                    EmpList     EmpDetail



4. that is about DI as a frameWork in ANgular 
5. our service is responsible for to provide the employee data.
    
#### step-1 we should created our service
1. From a terminal navigate to the directory containing your application
2. Run the following command in CLI :-  ng generate service serviceFileName
    1. for example our serviceFileName = employee
    2. so we should run the command :-     ng generate service employee
3. Open your serviceFileName.service.ts
    1. for example i shall open     employee.service.ts

4. we will write following code in  service file :- employee.service.ts 

            import { Injectable } from '@angular/core';

            @Injectable({
                providedIn: 'root'
            })
            export class EmployeeService {

                constructor() { }

                getEmployees(){
                    return [
                    { "id":1, "name":"Andrew", "age":30 },
                    { "id":2, "name":"Brandon", "age":25 },
                    { "id":3, "name":"Christina", "age":26 },
                    { "id":4, "name":"Elena", "age":28 }
                    ];
                }

            }

#### step-2 Register the service with Angular-Built-In Injector
1. if you don't register ,  the service will just another regular-class (like normal TypeScript File) according to angular.
2. There are multiple places where you can register the service
3. But the place you register is important because Angular has **Hierarchical Dependency-Injection system** .
    1. **Hierarchical Dependency-Injection system** 

                                            AppModule
                                               |
                                            AppComponent
                                        _______|_______
                                       |               |
                                    EmpList         EmpDetail
                                       |
                                    child
                                       |
                                    child
                                       |
                                    child
    
    2. If you register the service in EmpList Component
        1. the service can be used by EmpList Component and Its children
        2. and any other component , even EmpDetail Component can not use this service
        3. so, this is not a good choice

    3. If you register the service in AppComponent 
        1. the service can be used by AppComponent and Its children .
        2. each module has many component like app component , so that component can not use this service
        3. Again this is a bad idea
    
    4. so , better , you register the service bu module level  
        1. If you register the service in AppModule 
        2. so ,all component under the AppModule can use the service

4. you should register the service by Module Level
    1. to register the service we use the **providers** metaData.
    2. we will write following code in  module file :- app.module.ts 

                import { NgModule } from '@angular/core';
                import { BrowserModule } from '@angular/platform-browser';

                import { AppRoutingModule } from './app-routing.module';
                import { AppComponent } from './app.component';
                import { EmployeeListComponent } from './employee-list/employee-list.component';
                import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

                <!-- you shoud import  EmployeeService .  EmployeeService is the class name in employee.service.ts  -->
                import { EmployeeService } from './employee.service';

                @NgModule({
                declarations: [
                    AppComponent,
                    EmployeeListComponent,
                    EmployeeDetailComponent
                ],
                imports: [
                    BrowserModule,
                    AppRoutingModule
                ],
                providers: [
                    EmployeeService         // you should add EmployeeService here
                ],
                bootstrap: [AppComponent]
                })
                export class AppModule { }


    3. our second step is now complete :- we have registered a service with angular injector using providers metaData.


#### step-3 Declare the service as dependency in thc class the needs it. :-  to mention the dependency for this service in that component needs it

1. the dependency specified in the constructor

2. we will write following code in  list component file :- employee-list.component.ts 

                    import { Component, OnInit } from '@angular/core';

                    // you shoud import  EmployeeService .  EmployeeService is the class name in employee.service.ts  
                    import { EmployeeService } from '../employee.service';

                    @Component({
                        selector: 'app-employee-list',
                        template: `
                                    <h2> Employee List </h2>
                                    <ul *ngFor="let employee of employees">
                                    <li>{{employee.name}}</li>
                                    <li> id :- {{employee.id}} , name:- {{employee.name}} , age:- {{employee.age}} </li>
                                    </ul>
                                    `,
                        styleUrls: ['./employee-list.component.css']
                    })
                    export class EmployeeListComponent implements OnInit {

                        public employees :any[] = [];

                        constructor(private _employeeService : EmployeeService) { } 
                        /* specified dependency in costructor  :- _employeeService is the service instance of EmployeeService to fetch data
                            we can say for understanding purpous _employeeService is the className DataType is  EmployeeService */

                        /* sto fetch data from  _employeeService we have to code in ngOnInit lifeCycle Hooks
                        
                        ngOnInit() hooks gets called once the component has been initialized*/

                        ngOnInit(): void {
                            this.employees = this._employeeService.getEmployees();
                            /* _employeeService is the className DataType is  EmployeeService 
                            getEmployees() is a function(or method) in class EmployeeService of employee.service.ts which returns an array of employee data
                            this._employeeService.getEmployees() give value whic is going to saved in this.employees*/
                        }

                    }


3. we will write following code in  detail component file :- employee-detail.component.ts 

                    import { Component, OnInit } from '@angular/core';

                    <!-- you shoud import  EmployeeService .  EmployeeService is the class name in employee.service.ts  -->
                    import { EmployeeService } from '../employee.service';

                    @Component({
                        selector: 'app-employee-detail',
                        template: `
                                    <h2> Employee Detail </h2>
                                    <ul *ngFor="let employee of employees">
                                    <li> id :- {{employee.id}} , name:- {{employee.name}} , age:- {{employee.age}} </li>
                                    </ul>
                                    `,
                        styleUrls: ['./employee-detail.component.css']
                    })
                    export class EmployeeListComponent implements OnInit {

                        public employees :any[] = [];

                        constructor(private _employeeService : EmployeeService) { } 
                        /* specified dependency in costructor  :- _employeeService is the service instance of EmployeeService to fetch data
                            we can say for understanding purpous _employeeService is the className DataType is  EmployeeService */

                        /* sto fetch data from  _employeeService we have to code in ngOnInit lifeCycle Hooks
                        
                        ngOnInit() hooks gets called once the component has been initialized*/

                        ngOnInit(): void {
                            this.employees = this._employeeService.getEmployees();
                            /* _employeeService is the className DataType is  EmployeeService 
                            getEmployees() is a function(or method) in class EmployeeService of employee.service.ts which returns an array of employee data
                            this._employeeService.getEmployees() give value whic is going to saved in this.employees*/
                        }

                    }



####  injector 
1. Dependency injection (DI) is the part of the Angular framework that provides components with access to services and other resources. 
2. Angular provides the ability for you to inject a service into a component to give that component access to the service.

3. The **@Injectable() decorator** defines a class as a service in Angular and allows Angular to inject it into a component as a dependency. 
4. Likewise, the **@Injectable() decorator** indicates that a component, class, pipe, or NgModule has a dependency on a service.

5. The injector is the main mechanism. 
6. Angular creates an application-wide injector for you during the bootstrap process, and additional injectors as needed. 
7. **You don't have to create injectors.**

8. **An injector creates dependencies and maintains a container of dependency instances that it reuses, if possible.**

9. A provider is an object that tells an injector how to obtain or create a dependency

10. For any dependency that you need in your app, you must register a provider with the application's injector, so that the injector can use the provider to create new instances. 
11. For a service, the provider is typically the service class itself.

12. A dependency doesn't have to be a service — it could be a function, for example, or a value.

#### @Injectable() decorator
1. @Injectable() decorator tells angular that this service might itself have injected dependencies.
    1. so, if you ever want to inject a service into another service @Injectable() decorator is must.

2. see the example of service file :- employee.service.ts  

            import { Injectable } from '@angular/core';

            @Injectable({
                providedIn: 'root'
            })
            export class EmployeeService {

                constructor() { }

                getEmployees(){
                    return [
                    { "id":1, "name":"Andrew", "age":30 },
                    { "id":2, "name":"Brandon", "age":25 },
                    { "id":3, "name":"Christina", "age":26 },
                    { "id":4, "name":"Elena", "age":28 }
                    ];
                }

            }
    
    1. right now    EmployeeService doesn't have dependencies , so @Injectable() decorator is not necessary 

# lifecycle hooks

## lifecycle hooks :- intoduction
1. A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. 
2. The lifecycle continues with change detection, as Angular checks to see when data-bound properties change, and updates both the view and the component instance as needed. 
3. The lifecycle ends when Angular destroys the component instance and removes its rendered template from the DOM. 
4. Directives have a similar lifecycle, as Angular creates, updates, and destroys instances in the course of execution.

5. Your application can use lifecycle hook methods to tap into key events in the lifecycle of a component or directive to initialize new instances, initiate change detection when needed, respond to updates during change detection, and clean up before deletion of instances.

## Responding to lifecycle events
1. Respond to events in the lifecycle of a component or directive by implementing one or more of the lifecycle hook interfaces in the Angular core library. 
2. The hooks give you the opportunity to act on a component or directive instance at the appropriate moment, as Angular creates, updates, or destroys that instance.
3. Each interface defines the prototype for a single hook method, whose name is the interface name prefixed with ng
    1. For example, the OnInit interface has a hook method named ngOnInit(). 
4. If you implement this method in your component or directive class, Angular calls it shortly after checking the input properties for that component or directive for the first time.

## Lifecycle event sequence
1. ngOnChanges()
2. ngOnInit()
3. ngDoCheck()
4. ngAfterContentInit()
5. ngAfterContentChecked()
6. ngAfterViewInit()
7. ngAfterViewChecked()
8. ngOnDestroy()

### ngOnChanges()

1. **HOOK METHOD :-**	ngOnChanges()
2. **PURPOSE :-**	
    1. Respond when Angular sets or resets data-bound input properties. 
    2. The method receives a SimpleChanges object of current and previous property values.
    3. **NOTE :-** This happens frequently, so any operation you perform here impacts performance significantly.
3. **TIMING :-**
    1. Called before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change.
    2. **NOTE :-** If your component has no inputs or you use it without providing any inputs, the framework will not call ngOnChanges().

### ngOnInit()

1. **HOOK METHOD :-**	ngOnInit()
2. **PURPOSE :-**	
    1. Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or component's input properties. 
3. **TIMING :-**
    1. Called once, after the first ngOnChanges(). 
    2. ngOnInit() is still called even when ngOnChanges() is not (which is the case when there are no template-bound inputs).

### ngDoCheck()

1. **HOOK METHOD :-**	ngDoCheck()
2. **PURPOSE :-**	
    1. Detect and act upon changes that Angular can't or won't detect on its own. 
3. **TIMING :-**
    1. Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.

### ngAfterContentInit()

1. **HOOK METHOD :-**	ngAfterContentInit()
2. **PURPOSE :-**	
    1. Respond after Angular projects external content into the component's view, or into the view that a directive is in.
3. **TIMING :-**
    1. Called once after the first ngDoCheck().

### ngAfterContentChecked()

1. **HOOK METHOD :-**	ngAfterContentChecked()
2. **PURPOSE :-**	
    1. Respond after Angular checks the content projected into the directive or component.
3. **TIMING :-**
    1. Called after ngAfterContentInit() and every subsequent ngDoCheck().

### ngAfterViewInit()

1. **HOOK METHOD :-**	ngAfterViewInit()
2. **PURPOSE :-**	
    1. Respond after Angular initializes the component's views and child views, or the view that contains the directive.
3. **TIMING :-**
    1. Called once after the first ngAfterContentChecked().

### ngAfterViewChecked()

1. **HOOK METHOD :-**	ngAfterViewChecked()
2. **PURPOSE :-**	
    1. Respond after Angular checks the component's views and child views, or the view that contains the directive.
3. **TIMING :-**
    1. Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().

### ngOnDestroy()

1. **HOOK METHOD :-**	ngOnDestroy()
2. **PURPOSE :-**	
    1. Cleanup just before Angular destroys the directive or component. 
    2. Unsubscribe Observables and detach event handlers to avoid memory leaks. 
3. **TIMING :-**
    1. Called immediately before Angular destroys the directive or component.