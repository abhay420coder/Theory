# why we need to study HTTP and Observeables
1. currently , in our application ,  we are serving the data that is hard coded into EmploeeService.
    1. in employee.service.ts

                import { Injectable } from '@angular/core';

                @Injectable({
                    providedIn: 'root'
                })
                export class EmployeeService {

                    constructor() { }

                    getEmployees(){
                        return [
                            // this is the hard coded data
                        { "id":1, "name":"Andrew", "age":30 },
                        { "id":2, "name":"Brandon", "age":25 },
                        { "id":3, "name":"Christina", "age":26 },
                        { "id":4, "name":"Elena", "age":28 }
                        ];
                    }

                }

    2. hard coded data :- 

                        [
                                // this is the hard coded data
                            { "id":1, "name":"Andrew", "age":30 },
                            { "id":2, "name":"Brandon", "age":25 },
                            { "id":3, "name":"Christina", "age":26 },
                            { "id":4, "name":"Elena", "age":28 }
                        ];


2. But, in a real world application , we need to fetch this data from a web server 
3. we need to replace this hard coded data with an HTTP call to the server

# the mechanism of HTTP call and Observables (Observables is returned by HTTP call)
1. 


            Browser                                                                 Server
                                                                                      |
            EmpList                                                                   |
                |                                                                     |
                |                           get                         Request       |
                |                   ------------------->          ------------------->|
                |_______ EmpService                       Http                        | DataBase
                |                   <--------------------        <--------------------|    
                |                       Observable                      Response      |
                |                                                                     |
                |                                                                     |
            EmpDetail                                                                 |

    1. we have our application that runs on the browser 
    2. In our application , we have two components
        1. EmpList
        2. EmpDetail
    3. both this component make use of EmpService for the data
        1. previously EmpService provided hard code data to the component ( EmpList & EmpDetail ).
        2. but we want tha data fetched from the server , for that we make an HTTP request .
    4. the  Http get **request** with the help of webAPI or webSERVICE , 
        1. which will fetch the data from a **dataBase** 
        2. And send it Back as Http **Response** 
        3. Response , we get back from the Http call is an **Observable**
        5. EmpService needs to cast this Observable into an **Array of Employees**
        6. And then **return** to the same  EmpList & EmpDetail component.

2. so, Http Mechanism is Just Two Steps
    1. first step , is a Http Request
    2. second step , receive and process the Http Response

# what is an Observable

## let us take an example for newsPaper company


                                    source
                                      |
                                      | convert
                                      |
                                NewsPaper Company
                                /       / ..... \
                               /       / ....... \
                              /       / ......... \
                             /       / ........... \
                            /       / ............. \
                        House1    House2           HouseN


1. A newsPaper company has source of information i.e; source
2. The company make a request to the source to send every day news.
3. As a response to the company's request the source sends in sequence of an information throughout the day.
4. Now Once the information is received ,  convert the information into newsPaper format.
    1. the first thing the newsPaper company has to do is convert the information into newsPaper format.
    2. For Example :- the source might just a single line of a information.
    3. But the newsPaper Company has to mac the information into a headLine , body of that headline and so on.
5. once that is done , the newsPaper company has newsPaper in the desired format and is ready to be distributed to the houses.
6. which houses is for the newsPaper , newsPaper Company distributed that newsPaper in subscribed house.
7. After this point , what the people want to do with , newsPaper is completely upto them . The newsPaper company does not bother about it.
    1. House1 might read the newsPaper
    2. whereAs House2 might make paper planes out of them. 
8. but the company responsibility is done.


                                    source
                                      |
                                      | convert
                                      |
                                NewsPaper Company
                                /       / ..... \
                               /       / ....... \
                              /       / ......... \
                             /       / ........... \
                            /       / ............. \
                        House1    House2           HouseN


## now we are relating the observable with the application :- let's see how we can relate this observables in the application we are working with 
1. the newsPaper company is like **EmployeeService** in application .
2. the source of information is **dataBase** or API or webService 
3. the EmployeeService makes a request to the dataBase with  Http **get** call 
4. ask a response we get back an observable
5. **Observables**
    1. An Observables is an sequence of items that arrive asynchronously over item.
    2. with an **HTTP call** , it is a single item instead of a sequence of an items.
    3. And that single item is **HTTP response**
6. **Observables (in shorts)**
    1. An Observables is an sequence of items that arrive asynchronously over item.
    2. HTTP call - single item
    3. Singe Item - HTTP response
7. in concept of HTTP mechanism in Angular
    1. An Observables is a Http Response that arrives asynchronously 
8. nce we receive the Observable ,
    1. we need to convert it into an EmployeeArray.
    2. After conversion , the data is ready to be provided to the components in our application . 
    3. we will proide the data to only that componoent who is subscribed with EmployeeService



                    source                          ---------->DataBase
                      |                             |             |
                      | convert                  Get|             | Observable
                      |                             |             |
                NewsPaper Company                    ---------EmployeeService
                /       / ..... \                             /       / ..... \
     Subscribe /       / ....... \                 Subscribe /       / ....... \
              /       / ......... \                         /       / ......... \
             /       / ........... \                       /       / ........... \
            /       / ............. \                     /       / ............. \
        House1    House2           HouseN           EmpList    EmpDetail        AppComp




# step for :-  HTTP , Observables and RxJS
1. HTTP Get request from EmpService
2. Receive the Observable and cast it into an employee array.
3. Subscribe to the observable from EmpList and EmpDetail.
4. Assign the employee array to a local variable . 
    in the component which can be later display in the view

## RxJS
1. RxJS is a library that enable us to work with observables in ANgular Applications.
2. it is Reactive  Extensions for JavaScript 
3. it is External Library to work with Observables.
4. it is not related to ReactJs or React Library

### step1   :- HTTP Get request from EmpService

#### step11 :- import HttpClientModule
1. HttpClientModule provides a simplified API or Http fuctionalities for use with ANgular Application . 
2. import HttpClientModule in app.module.ts


                import { NgModule } from '@angular/core';
                import { BrowserModule } from '@angular/platform-browser';

                import { AppRoutingModule } from './app-routing.module';
                import { AppComponent } from './app.component';
                import { EmployeeListComponent } from './employee-list/employee-list.component';
                import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
                import { EmployeeService } from './employee.service';

                // you shoud import  HttpClientModule
                import { HttpClientModule } from '@angular/common/http'

                @NgModule({
                declarations: [
                    AppComponent,
                    EmployeeListComponent,
                    EmployeeDetailComponent
                ],
                imports: [
                    BrowserModule,
                    AppRoutingModule,
                    HttpClientModule    // here you also shoud add HttpClientModule in importsArray (imports metadata)
                    // HttpClientModule is accessible withIn the AppModule , 
                    // Now Importing the HttpClientModule , we are also registering the HttpService with Angular Injector 
                    // we don't have to explicitly register it by adding it to the providersArray (providers metadata)
                    // the HttpClientModule will do that for us.
                ],
                providers: [
                    EmployeeService
                ],
                bootstrap: [AppComponent]
                })
                export class AppModule { }


#### step12 :- to http use in our employee service class
1. inside src folder in assets folder we create a folder that name is "data"
2. in data folder we are creating a file employees.json :-    which contain our employee data
3.  our employee data :-    
                            
                            
                            [
                                        { "id":1, "name":"Andrew", "age":30 },
                                        { "id":2, "name":"Brandon", "age":25 },
                                        { "id":3, "name":"Christina", "age":26 },
                                        { "id":4, "name":"Elena", "age":28 }
                            ];



4. we declare it as a dependency in constructor
5. write the following code in employee.service.ts 


                import { HttpClient } from '@angular/common/http';
                import { Injectable } from '@angular/core';

                @Injectable({
                    providedIn: 'root'
                })

                export class EmployeeService {
                    private _url : string = "/assets/data/employees.json";
                    constructor(private http : HttpClient) {  // now we have a local variable "http"
                        // here http is refer to an instance of HttpClient
                        //  so we are ready to make get rquest to fetch data using HttP
                    }

                    getEmployees(){
                        return this.http.get(this._url);
                        /*  
                            1. so we don't have any webServer to fetch deta
                            2.  that's why inside src folder in assets folder we create a folder that name is "data" ,
                            3.  in data folder we are creating a file employees.json :-    which contain our employee data
                            3. we will serve the data from  src/assets/data/employees.json  instead of actual webServer
                            4. our employee data :-    [
                                                            { "id":1, "name":"Andrew", "age":30 },
                                                            { "id":2, "name":"Brandon", "age":25 },
                                                            { "id":3, "name":"Christina", "age":26 },
                                                            { "id":4, "name":"Elena", "age":28 }
                                                        ];

                            5. if you are working with web server in future ,   just replace _url to webServerLink in
                                return this.http.get(this._url);
                            6. basically we have to pass the ura as a argunment.
                        */
                    }
 
                }



### step2 :- Receive the Observable and cast it into an employee array. :- cat the Observable which we receive as response to an employee array.
1. get method returns an Observable
2. but for our apllication this observable needs to be cast in format that repersents an array of employees

#### step21 :- first create an employee Interface
1. in app folder create a new file employee.ts
2. and write the following code in employee.ts for employee interface.


                    export interface IEmployee {
                    id : number,
                    name : string,
                    age : number
                }

3. we naw have      IEmployee     type


#### step22 :- the Observable can be cast into  IEmployee  type
1. in  employee.service.ts  add type to get rquest  :-  return this.http.get<IEmployee[]>(this._url); 
2. and  import IEmployee interface in employee.ts :-    import { IEmployee } from './employee';
3. import Observable interface  in employee.ts :-  import { Observable } from 'rxjs';



                import { HttpClient } from '@angular/common/http';
                import { Injectable } from '@angular/core';
                import { Observable } from 'rxjs';
                import { IEmployee } from './employee';

                @Injectable({
                    providedIn: 'root'
                })

                export class EmployeeService {
                        private _url : string = "/assets/data/employees.json";
                        constructor(private http : HttpClient) { 
                                // here http is refer to an instance of HttpClient
                                //  so we are ready to make get rquest to fetch data using HttP
                        }

                        getEmployees():Observable<IEmployee[]>{
                            // return this.http.get(this._url);

                            /*
                                get method returns an Observable
                                but for our apllication this observable needs to be cast in format that repersents an array of employees
                            */ 

                            return this.http.get<IEmployee[]>(this._url);
                        }

                }



### Step3 :- Subscribe to the observable from EmpList and EmpDetail  &   Assign the employee array to a local variable . 

#### Step31 :- Subscribe to EmpList component 
1. ooen     employee-list.component.ts      file
2. in ngOnIt method , we are goint to call getEmployees method and then subscribe to the observable


                import { Component, OnInit } from '@angular/core';
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

                    ngOnInit() {
                        // we are going to subscribe the observable return  by the getEmployees method 
                        this._employeeService.getEmployees()
                            .subscribe((data) => this.employees = data)
                        /*  1. the first argunment to the subscribe method is  going to be fact ArrowFunction 
                            2. that assigns the data received from the observable to this local employee properties ( public employees :any[] = [];). 
                            3. in  (data) => this.employees = data  :- the left side is only argument of the function and right hand side is the body of  the function

                            4. getEmployees() is function, which has one more function exposed under that which is called subscribe because the return type of getEmployees() is observable.
                            5. and then the subscribe() is accepting an argument whose type is again a function.
                        */

                        /*  1. we have an instance of EmployeeService i.e; _employeeService :- EmployeeService is the class in (employee.service.ts)
                            2.to use _employeeService we call getEmployees method  :-   getEmployees method is defined in EmployeeService class
                            3. getEmployees method returns Observable
                            4. so, to receive data  we need to subscribe to it
                            5. once we subscribe to the observable , the employee data arrives asynchronously
                            6. we assign the data to our class property (public employees :any[] = [];) using factArrow syntax :-  .subscribe((data) => this.employees = data)
                            7. 
                            */
                    }

                }


3. what we diid here
    1. we have an instance of EmployeeService i.e; _employeeService :- EmployeeService is the class in (employee.service.ts)
    2. to use _employeeService we call getEmployees method  :-   getEmployees method is defined in EmployeeService class
    3. getEmployees method returns Observable
    4. so, to receive data  we need to subscribe to it
    5. once we subscribe to the observable , the employee data arrives asynchronously
    6. we assign the data to our class property (public employees :any[] = [];) using factArrow syntax :-  .subscribe((data) => this.employees = data).





#### Step32 :- Subscribe to EmpDetail component 
1. ooen     employee-detail.component.ts      file
2. in ngOnIt method , we are goint to call getEmployees method and then subscribe to the observable


                import { Component, OnInit } from '@angular/core';
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
                export class EmployeeDetailComponent implements OnInit {

                        public employees: any[] = [];

                        constructor(private _employeeService : EmployeeService) { }

                        ngOnInit() {
                            // we are going to subscribe the observable return  by the getEmployees method 
                            this._employeeService.getEmployees()
                                .subscribe((data) => this.employees = data)

                            /*  1. the first argunment to the subscribe method is  going to be fact ArrowFunction 
                                2. that assigns the data received from the observable to this local employee properties ( public employees :any[] = [];). 
                                3. in  (data) => this.employees = data  :- the left side is only argument of the function and right hand side is the body of  the function

                                4. getEmployees() is function, which has one more function exposed under that which is called subscribe because the return type of getEmployees() is observable.
                                5. and then the subscribe() is accepting an argument whose type is again a function.
                            */

                            /*  1. we have an instance of EmployeeService i.e; _employeeService :- EmployeeService is the class in (employee.service.ts)
                                2.to use _employeeService we call getEmployees method  :-   getEmployees method is defined in EmployeeService class
                                3. getEmployees method returns Observable
                                4. so, to receive data  we need to subscribe to it
                                5. once we subscribe to the observable , the employee data arrives asynchronously
                                6. we assign the data to our class property (public employees :any[] = [];) using factArrow syntax :-  .subscribe((data) => this.employees = data)
                            */
                        }


                }



3. what we diid here
    1. we have an instance of EmployeeService i.e; _employeeService :- EmployeeService is the class in (employee.service.ts)
    2. to use _employeeService we call getEmployees method  :-   getEmployees method is defined in EmployeeService class
    3. getEmployees method returns Observable
    4. so, to receive data  we need to subscribe to it
    5. once we subscribe to the observable , the employee data arrives asynchronously
    6. we assign the data to our class property (public employees :any[] = [];) using factArrow syntax :-  .subscribe((data) => this.employees = data).





### SUMMARIZE :- 
1. First we have included **HttpClientModule**  inside angular module in our application.

            import { HttpClientModule } from '@angular/common/http'

2. we add HttpClientModule in  importsArray inside angular module in our application.


                @NgModule({
                    declarations: [
                        AppComponent,
                        EmployeeListComponent,
                        EmployeeDetailComponent
                    ],
                    imports: [
                        BrowserModule,
                        AppRoutingModule,
                        HttpClientModule
                    ],
                    ....
                    ....
                    })



2. next we injected as dependency in the employee service. (in file :- employee.service.ts)

                @Injectable({
                    providedIn: 'root'
                })




3. now , we have an instance of HttpClient which we can refer to  with the http variable     (in file :- employee.service.ts)
    1.   constructor(private http : HttpClient)
4. we invoke the get method  ( this.http.get(this._url); )  passing the url where the request has to be made 
    1.  private _url : string = "/assets/data/employees.json";
5. and /assets/data/employees.json is path of file employees.json.
6. now the get method returns  ( this.http.get(this._url); )   an observable but we need to convert it into a type usable in our application 
7. so we create an employee interface (in file  employee.ts )

            export interface IEmployee {
                                            id : number,
                                            name : string,
                                            age : number
                                        }

8. and cast the observable  into an array of employees 
    1.  this.http.get<IEmployee[]>(this._url);
9. now we have a method get employees in employee service that returns an observable 


            getEmployees():Observable<IEmployee[]>{
                return this.http.get<IEmployee[]>(this._url);
            }


10. but the observable doesn't provide the data unless someone subscribe to it
11. so in the employee list and employee detail components we subscribe to it.
            
            
            public employees :any[] = [];

            constructor(private _employeeService : EmployeeService) { }

            ngOnInit() {
                this._employeeService.getEmployees()
                    .subscribe((data) => this.employees = data)
            }



12. from the observable we get the employee data asynchronously
13. we assign the data to a property in the component class  and bind it to the view 


        import { Component, OnInit } from '@angular/core';
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

        ngOnInit() {
            this._employeeService.getEmployees()
                .subscribe((data) => this.employees = data)
        }
        }





14. and that is how we fetch data using HTTP 



# HTTP Error handling
1. we know that an observable is returned as a result of the HTTP call 
2. so to handle exceptions on an observable we make use of the **catch** operator.
3. so lets first imports **catch** operator in employee.service.ts

                import { catchError } from 'rxjs/operators';

4. then we add the catch operator on our observable dot catch 
5. the catch operator takes in a method named as an argument 
6. i am going to call 

1. we know that an observable is returned as a result of the HTTP call 
2. so to handle exceptions on an observable we make use of the **catch** operator.
3. so lets first imports **catch** operator in employee.service.ts

                      import { catchError } from 'rxjs/operators';

4. then we add the catch operator on our observable dot catch (   .catch()   )
5. the catch operator takes in a method named as an argument 
6. i am going to call this.errorHandler  :-   .catch(this.errorHandler) 
7. and this is the method that gets called whenever there is an exception
8. next we are going to definr errorHandler method 

                    errorHandler(error: HttpErrorResponse) {
                      return Observable.throw(error.message || "server error.");
                    }

9. errorHandler method has parameter i.e; error  and this is of type " HTTP error response "

                        errorHandler(error: HttpErrorResponse) {
                            
                            }

10. and make sure to import it as well from '@angular/common/http'; 
                                import { HttpClient, HttpErrorResponse } from '@angular/common/http';

11. if you notice the employee  service does not have a  view of its own 
    1. but it is really important yhat our users be informed of any exception that occur , 
    2. if not they just end up staring at the blank screen which is poor user experience , 
    3. so what the errorHandler method does is it throws out the error message 
    4. so that any component that has subscribed to the observable can make use of it 
    5. and display the error in the view , 

12. in the method body of method [errorHandler(error: HttpErrorResponse)]  ,we return  Observable.throw(error.message || "server error.");

                            errorHandler(error: HttpErrorResponse) {
                                        return Observable.throw(error.message || "server error.");
                            }

13. make sure , you import throw
                            import { throwError } from 'rxjs';         
      
14. so the first half of the error handling is done 
    1. we have caught the exception on the observable and
    2. we have thrown it to the components that have subscribed to the observable.
15. the second half is displaying the error message in the component that have subscribed ,
16. so in the employee-list component , just like how we get data , we can also get an error
17. so the second argunment to the subscribe  method is also a fat-arrorw-function (arrow function)
18. but this function deals with the error scenario ,
19.  it takes errer as an argunment and in the body we are going to say 

                            error => this.errorMsg = error

20. let's create error message property and also bind it to our view using interpolation 

                            public errorMsg;