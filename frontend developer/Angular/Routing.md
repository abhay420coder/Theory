# Routing in Angular

## introduction

### introduction - 1
1. Routing in Angular allows the users to create a single-page application with multiple views and allows navigation between them. 
2. Users can switch between these views without losing the application state and properties.

3. Approach:
    1. Create an Angular app that to be used.
    2. Create the navigation links inside the app component and then provide the “routerLink” directive to each route and pass the route value to “routerLink” directive.
    3. Then add the routes to the routing.module.ts file and then import the routing.module.ts into the app.module.ts file.

4. Syntax:

    1. HTML:

            <li><a routerLink="/about" >About Us</a></li>
            <router-outlet></router-outlet>

    2. TS:

            { path: 'about', component: AboutComponent }

5. We are going to create a simple angular application that uses angular routing. 
    1. So first, we create an Angular app by running the below command in CLI.

                    ng new learn-routing

    2. Then we are creating simple navigation that allows us to navigate between the different components, 
    3. and we have created some components as well, 
    4. so users can switch between these components using routing.

### introduction - 2
1. Any ANgular application , you build is going to multiple components.
2. each component with its own view.
3. so, we need a way to navigate between  the different views as and 
4. when the user performs some action and for this purpous we make use of angular's router.
5. i want to mention here that even though , we did learn about services 
6. i am not going to use services while explaining the different concept of routing.
7. i want to focus on routing and routing alone.
8. so , we will be using hard coded data for our examples 
9. and there is a lot to learn about angular's router
10. Now , we are going to learn "how to navigate between two different views with button clicks".
11. so, when the user navigates to the URL " localhost:4200 " .



                localhost:4200
        ---------------------------------------------------------------------------------------------
        |   Routing and Navigation                                                                  |
        |    _____________                                   _____________                          |
        |   |             |                                 |             |                         |
        |   | Departments |                                 |  Employees  |                         |
        |   |_____________|                                 |_____________|                         |
        |                                                                                           |
        |                                                                                           |
        |                                                                                           |
        |                                                                                           |
        |   ====================================================================                    |
        |   |                                                                  |                    |
        |   |   localhost:4200/departments                                     |                    |
        |   |   DepartmentList                                                 |                    |
        |   |                                                                  |                    |
        |   |                                                                  |                    |
        |   |                                                                  |                    |
        |   |   localhost:4200/employees                                       |                    |
        |   |   EmployeeList                                                   |                    |
        |   |                                                                  |                    |
        |   ====================================================================                    |
        |                                                                                           |
        |                                                                                           |
        |                                                                                           |
        ---------------------------------------------------------------------------------------------




12. we display a title that says routing and navigation 
13. and below the title , we are going to have two buttons 
    1. the first one says departments 
    2. the second says employees 
14. if we navigate to the URL localhost:4200/departments  
    1. and click on the departments button
    2. we display a list of departments (DepartmentList)
15. if we navigate to the URL localhost:4200/employees  
    1. and click on the employees button
    2. we display a list of employees (EmployeeList)
16. so based on the URL of which button the user clicks we navigate to the appropriate view .
17. now to implement this requirement , here are the steps :- 
    1. Generate a project with routing option :- Generate a new project using angular CLI with routing option
    2. Generate dapartmentList and employeeList Components :- we generate the dapartmentList component and employeeList Component
        1. these are the components we want to display in the view
    3. configure the routes :- 
        1. we configure the routes for our application 
        2. this will allow us to navigates to the routes from the URL
    4. add buttons and use directives to navigates.
        1. we add buttons and use directives to navigate to the configured roads



### These are the steps to implement Routing
1. Generate a project with routing option :- Generate a new project using angular CLI with routing option
2. Generate dapartmentList and employeeList Components :- we generate the dapartmentList component and employeeList Component
    1. these are the components we want to display in the view
3. configure the routes :- 
    1. we configure the routes for our application 
    2. this will allow us to navigates to the routes from the URL
4. add buttons and use directives to navigates.
    1. we add buttons and use directives to navigate to the configured roads


## step-1 Generate a project with routing option :- Generate a new project using angular CLI with routing option

### method1
1. navigate you work-space in command-prompt
2. write the following coommand in your angular CLI to create a new project

                    ng new projectName

3. in CLI you get :-   ? Would you like to add Angular routing? (y/N)  
4. write "y" in CLI to give the answer like
            ? Would you like to add Angular routing? (y/N) y
5. and press enter and continue

### method2
1. navigate you work-space in command-prompt
2. write the following coommand in your angular CLI to create a new project

                    ng new projectName --routing 

3. and press enter and continue


### method3 (manually add routing option)
1. and you can replicate the exact same code in your existing apllication as well
2. now , the first thing you need to include is the base tag in your index.html filr
                
                <base href="/">

    1. this is required so that the application knows how to construct the URLs while navigating 
3. next , in the app folder , create a new file app.routing.module.ts
    1. and write the following code in   app.routing.module.ts

            import { NgModule } from '@angular/core';
            import { RouterModule, Routes } from '@angular/router';
            const routes: Routes = [];
            @NgModule({
                imports: [RouterModule.forRoot(routes)],
                exports: [RouterModule]
            })
            export class AppRoutingModule { }

4. in app.module.ts 
    1. import { AppRoutingModule } from './app-routing.module';
    2. add in imports array :- AppRoutingModule

                imports: [
                            BrowserModule,
                            AppRoutingModule
                        ], 


## step-2 Generate dapartmentList and employeeList Components 
1. inside the project run the following command in Angular CLI to generate dapartmentList
    1. ng generate component dapartment-list  -t  -s

    2. where
        1. -t is for inline template
        2. -s is for inline styles
    3. if you want seperate file for html then use only  :- ng generate component dapartment-list 

2. inside the project run the following command in Angular CLI to generate employeeList
    1. ng generate component employee-list  -t  -s

    2. where
        1. -t is for inline template
        2. -s is for inline styles
    3. if you want seperate file for html then use only  :- ng generate component employee-list 


## step-3 configure the routes for the application 
1. open file :-     app-routing.module.ts
2. so, we have :-   const routes: Routes = [];
    1. which is strongly typed to Routes from the Router package.
3. here we define all possible routes package 
    1. and each route is nothing but an object
    2. the object contains a path which is reflected in the URL
    3. and component to be rendered when we navigate to that corresponding path
4. now we need to configure two Routes for our application 
    1. import DapartmentListComponent and EmployeeListComponent

            import { DapartmentListComponent } from './dapartment-list/dapartment-list.component';
            import { EmployeeListComponent } from './employee-list/employee-list.component';

    2. the first one is department 
    3. and second one is employee

            const routes: Routes = [
                                    { path : 'departments' },
                                    { path : 'employees' }
                                    ];

    4. if navigate department , we need to display DapartmentListComponent to specify component property
    5. if navigate employees , we need to display EmployeeListComponent to specify component property

                const routes: Routes = [
                                        { path : 'departments' , component: DapartmentListComponent},
                                        { path : 'employees' , component: EmployeeListComponent }
                                        ];
5. create a new constant array of DapartmentListComponent and EmployeeListComponent and export it
        export const routingComponent = [ DapartmentListComponent , EmployeeListComponent ];




6. open file :-     app.module.ts

    1. and in the app.module.ts , import routingComponent
            import { routingComponents } from './app-routing.module';

    2. remove the following imports

        import { DapartmentListComponent } from './dapartment-list/dapartment-list.component';
        import { EmployeeListComponent } from './employee-list/employee-list.component';

    3. in declaration array remove  DapartmentListComponent, EmployeeListComponent  and add routingComponents
            declarations: [
                                AppComponent,
                                routingComponents,
                            ],
7. now any we add a new routing uou just have to specify in routing module
8. the routes have been configured 
    1. if you navigate localhost:4200/departments , we display the departmentList Component
    2. if you navigate localhost:4200/employees , we display the List EmployeeList Component.

9. now question is :- how are we specifying where these components have to be displayed
    1. the answer is the router outlet directive  
10. so if we take a look    app.component.html
    1. you can see one directive or tag     :-  
        
            <router-outlet></router-outlet>

    2. this directive is available from the router package and 
    3. it marks , where the router display a view  , so you can say that router goes here.

    4. you can open the following lonks below and you can see result
        1. http://localhost:4200/
            1. result


                                                                            Routing and Navigation


        2. http://localhost:4200/departments
            1. result


                                                                            Routing and Navigation


                                                                            
                                    dapartment-list works!


        3. http://localhost:4200/employees
            1. result


                                                                            Routing and Navigation



                                    employee-list works!

    5. so, routing is working , based on URL , We navigate to the corresponding component is displayed
    6. but we cannot expect the user to navigate to the components by typing out the URL

11. Let's add some buttons in  app.component.html to navigate between these views
    1. 

                                <a>Departments</a>
                                <a>Employees</a>  
    
    1. to make routing possible thes anchor tag , we use two special directives from the router package
        1. the first one is the routerLink directive which specifies the path to which we want to navigate to
            1. so , when we click on the departments button we want to navigate to departments tab, 
            2. similarly , when we click on the employees button we want to navigate to employees tab,

                            <a routerLink="/departments">Departments</a>
                            <a routerLink="/employees">Employees</a>

        2. the second directive is the routerLink active directive

                          <a routerLink="/departments" routerLinkActive="active">Departments</a>
                          <a routerLink="/employees" routerLinkActive="active">Employees</a>

            1. this directive lets you specify one more CSS classes that will be applied when the corresponding router link is active
            2. or in simpler terms you click on the anchor tag and yhe class specified over here gets applied to the anchor tag
            3. for our example i am going to use the active class
            4. if you look at styles.css you can see that

### summarize
1. in index.html   ,  inside head tag add base tag

                <base href="/">

2. in the app-routing.module.ts configure the routes
3. each route has a path and the corresponding component
4. once you have the routes defined , 
5. pass it as an argunments to the for route method of the router module 
6. export AppRoutingModule and routingComponents
7. imported in the app.module.ts and included in the imports array and the dedclarations array
8. now you  can navigate to particular route by directly typing in the URL
9. to navigate via buttons use the routerLink directory 
10. and specify the path to change the style of the active route use the routerLinkActive directive



# WildCard Router 
1. we have created two routes in our APplication 
    1. first to departments
    2. and others to employees

2. but here is the things , 
    1. if the users try to navigate to a other route
    2. that is not configure the application throws and an error
3. the better way to handle  URLs is using the WildCard Routes.
4. by making use of WildCard Routes , 
    1. we can navigate the user to "404 page not found" component , if URL doesnot match any configure of routes 

    2. first create page "404 page not found" component using angular CLI 
                    
                    ng generate component page-not-found -t -s 

    3. in routing module file (app-routing.module.ts)
        1. add path and component in routes array

                const routes: Routes = [
                                        { path : 'departments' , component: DapartmentListComponent},
                                        { path : 'employees' , component: EmployeeListComponent },
                                        { path : '**' , component: PageNotFoundComponent }
                                    ];

        2. import PageNotFoundComponent

                import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

        3. add PageNotFoundComponent into routingComponents array to export

                export const routingComponents = [ DapartmentListComponent , EmployeeListComponent , PageNotFoundComponent]

    4. remember points
        1. the WildCard routes should always be last routes in the configuration.
            1. that is beacause the router tries to match the path from the top. 
        2. if  WildCard routes at the top  , it matches with every URL and displays the page not found component.

            const routes: Routes = [
                                        { path : '**' , component: PageNotFoundComponent }
                                        { path : 'departments' , component: DapartmentListComponent},
                                        { path : 'employees' , component: EmployeeListComponent }
                                        ];  

    5. 



#  Redirecting Routes
1. Once we run wild card routes , we have another problem , 
    1. if i go back to the browser , navigate to localhost:4200
    2. because URL does not match any of the configure routes
    3. as the results , the router through wild card routes , displays "page not found"
    4. so, our application needs default Routes



2. in routing module file (app-routing.module.ts)
    1. add path and component in routes array   :- { path : '' , component: DapartmentListComponent},

                const routes: Routes = [
                                        { path : '' , component: DapartmentListComponent},
                                        { path : 'departments' , component: DapartmentListComponent},
                                        { path : 'employees' , component: EmployeeListComponent },
                                        { path : '**' , component: PageNotFoundComponent }
                                    ];

    2. if i go back to the browser , navigate to localhost:4200
    3. because URL match default routes
    3. as the results , the router through wild card routes , displays DapartmentListComponent
    4. so, we are now handling empty path scenario
    5. but preffere solution is redirect routes to the existing department routes.
    6. instead of specifying component , we should specify the path , which we reDIrectTo
    7. for that we make us reDirectTo property

                const routes: Routes = [
                                        { path :'' , redirectTo:'/departments' },
                                        { path : 'departments' , component: DapartmentListComponent},
                                        { path : 'employees' , component: EmployeeListComponent },
                                        { path : '**' , component: PageNotFoundComponent }
                                    ];

    8. but again reDirect word , we need to mention another property ; i.e; pathMatch property
        1. this (**pathMatch**) property basically tells the router :-
            1. how to match the URL segment with the configure routes
        2. there are two possible values 
            1. the first possile value is **prefix**

                                const routes: Routes = [
                                                                { path :'' , redirectTo:'/departments' , pathMatch:'prefix' },
                                                        ];


                1. it basically says :- the path is prefix of the URL , redirected to departments
                2. which is in our case becomes **if the empty path is prefix to the URL then redirect to departments**
                3. this is not going to work for us , because empty path is prefix to any path
                4. kind of how empty string can be prefix to any given string
                    1. if we navigate       http://localhost:4200/departments  
                        1. then we redirect to DapartmentListComponent
                    2. if we navigate       http://localhost:4200/employees  
                        1. then we redirect to DapartmentListComponent
                    3. if we navigate       http://localhost:4200/dgdhjgdskjhg  
                        1. then we redirect to DapartmentListComponent
                    4. if we navigate       http://localhost:4200/anyOtherString  
                        1. then we redirect to DapartmentListComponent
                    5. if we navigate       http://localhost:4200 
                        1. then we redirect to DapartmentListComponent
                5. so our routes is 

                                const routes: Routes = [
                                                            { path :'' , redirectTo:'/departments' , pathMatch:'prefix' },
                                                            { path : 'departments' , component: DapartmentListComponent},
                                                            { path : 'employees' , component: EmployeeListComponent },
                                                            { path : '**' , component: PageNotFoundComponent }
                                                        ];


            2. then , other possible value is full **full**

                                const routes: Routes = [
                                                                { path :'' , redirectTo:'/departments' , pathMatch:'full' },
                                                        ];

                1. it basically says :- direct only if full URL is empty (or which URL is provided into path)
                    1. if we navigate       http://localhost:4200/departments  
                        1. then we redirect to DapartmentListComponent
                    2. if we navigate       http://localhost:4200/employees  
                        1. then we redirect to DapartmentListComponent
                    3. if we navigate       http://localhost:4200/dgdhjgdskjhg  
                        1. then we redirect to PageNotFoundComponent
                    4. if we navigate       http://localhost:4200/anyOtherString  
                        1. then we redirect to PageNotFoundComponent
                    5. if we navigate       http://localhost:4200 
                        1. then we redirect to DapartmentListComponent
                2. so our routes is 

                                const routes: Routes = [
                                                            { path :'' , redirectTo:'/departments' , pathMatch:'prefix' },
                                                            { path : 'departments' , component: DapartmentListComponent},
                                                            { path : 'employees' , component: EmployeeListComponent },
                                                            { path : '**' , component: PageNotFoundComponent }
                                                        ];



# Route Parameters
1. in this tutorial , let's see **how to pass and read route parameters**


             ---------------------------------------------------------------------------------------------------
            |                                                                                                   |
            |                                                                                                   |
            |           DepartmentList                                              DepartmentDetail            |
            |    -------------------------------                         -----------------------------------    |
            |   | 1. Angular                    |                       |  You selected department with     |   |
            |   | 2. Node                       |                       |  id=1                             |   |
            |   | 3. MongoDB                    |       id              |                                   |   |
            |   | 4. Ruby                       |-------------------->  |                                   |   |
            |   | 5. Bootstrap                  |                       |                                   |   |
            |   |                               |                       |                                   |   |
            |   |                               |                       |                                   |   |
            |   |                               |                       |                                   |   |
            |    -------------------------------                         -----------------------------------    |
            |                                                                                                   |
            |                                                                                                   |
            |                                                                                                   |
             ---------------------------------------------------------------------------------------------------






2. in the DepartmentListComponent , we will have list of Department , each of them have corresponding id
    1. Angular
    2. Node
    3. MongoDB
    4. Ruby
    5. Bootstrap
3. when you click on the Department , 
    1. you will navigate to the DepartmentDetailComponent
    2. passing the id of the  DepartmentListComponent as a Route-Parameter
    3. and in the DepartmentDetailComponent we will read the Route-Parameter
        1. and display the id in the view.
    4. for example you click on Angular , it saya "You selected department with id=1"

4. in department.list.compnent we define departments property and print them in template


                    import { Component, OnInit } from '@angular/core';

                    @Component({
                            selector: 'app-dapartment-list',
                            template: `
                                        <h3>dapartment-list works!</h3>
                                        <ul class="items">
                                            <li *ngFor="let department of departments">
                                            <span class="badge"> {{department.id}} </span> {{department.name}}
                                            </li>
                                        </ul>
                                    `,
                            styles: []
                    })
                    export class DapartmentListComponent implements OnInit {
                            departments = [
                                {"id":1 , "name": "Angular"},
                                {"id":2 , "name": "Node"},
                                {"id":3 , "name": "MongoDB"},
                                {"id":4 , "name": "Ruby"},
                                {"id":5 , "name": "Bootstrap"},
                            ]

                            constructor() { }

                            ngOnInit(): void {}

                    }

    
5. in file app.routing.module.ts
    1. import DepartmentDetailComponent 

                import { DepartmentDetailComponent } from './department-detail/department-detail.component';

    2. add object { path : 'departments/:id' , component: DepartmentDetailComponent} in routes array
    3. add  DepartmentDetailComponent in routingComponents array to export



                import { NgModule } from '@angular/core';
                import { RouterModule, Routes } from '@angular/router';
                import { DapartmentListComponent } from './dapartment-list/dapartment-list.component';
                import { DepartmentDetailComponent } from './department-detail/department-detail.component';
                import { EmployeeListComponent } from './employee-list/employee-list.component';
                import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

                const routes: Routes = [
                { path :'' , redirectTo:'/departments' , pathMatch:'full' },
                { path : 'departments' , component: DapartmentListComponent},
                { path : 'departments/:id' , component: DepartmentDetailComponent}
                { path : 'employees' , component: EmployeeListComponent },
                { path : '**' , component: PageNotFoundComponent }
                ];

                @NgModule({
                imports: [RouterModule.forRoot(routes)],
                exports: [RouterModule]
                })

                export class AppRoutingModule { }

                export const routingComponents = [  DapartmentListComponent , 
                                                    EmployeeListComponent , 
                                                    PageNotFoundComponent , 
                                                    DepartmentDetailComponent
                                                ]


6. in department.list.compnent we  are going to bind to click event on each department 

                    import { Component, OnInit } from '@angular/core';

                    @Component({
                            selector: 'app-dapartment-list',
                            template: `
                                        <h3>dapartment-list works!</h3>
                                        <ul class="items">
                                            <li  *ngFor="let department of departments">
                                            <span class="badge"> {{department.id}} </span> {{department.name}}
                                            </li>
                                        </ul>
                                    `,
                            styles: []
                    })
                    export class DapartmentListComponent implements OnInit {
                            departments = [
                                {"id":1 , "name": "Angular"},
                                {"id":2 , "name": "Node"},
                                {"id":3 , "name": "MongoDB"},
                                {"id":4 , "name": "Ruby"},
                                {"id":5 , "name": "Bootstrap"},
                            ]

                            constructor() { }

                            ngOnInit(): void {}

                    }




    1. import { Router } from '@angular/router';
    2. then we injected :-  in the constructor we pass router of type Router as argumnet
                                constructor(priveter router : Router) { }
    3. now we make use of Router instance 
        1. in the onSelect method , this.router , then we call navigate method
        2. the argument of navigate method is known as link parameters array
            1. and it is all the information that abgular needs to construct the URL
        3. we are going to pass two items to link parameters array
            1. the first one is path , we want to navigate to 
            2. the second one is route parameter
                            this.router.navigate(['/departments', department.id])
        4. this information angular construct the URL 
        5. if you click on listItem then you get URL :- http://localhost:4200/departments/idNo
        6. example
            1. if you click on Angular then you get URL  :- http://localhost:4200/departments/1
            2. if you click on Node then you get URL  :- http://localhost:4200/departments/2
            3. if you click on MongoDB then you get URL  :- http://localhost:4200/departments/3
            4. if you click on Ruby then you get URL  :- http://localhost:4200/departments/4
            5. if you click on Bootstrap then you get URL  :- http://localhost:4200/departments/5



### Now we will work on how to read route parameters
1. in file department-detail.component.ts 
    1. we should import ActivatedRoutes
          import { ActivatedRoute } from '@angular/router';
    2. then injected :- in the constructorwe , instance of ActivatedRoute pass as  an argument 
                constructor(private route : ActivatedRoute) { }
    3. in ngOnInit method we read the route Parameter
      1. we have access to the service , so;  :-   this.route
      2. this service gives us snapshot of current route :-   this.route.snapshot
      3. from this snapshot , use paramMap API , which helps us get parameter from the URL
            this.route.snapshot.paramMap.get()
      4. and for us the parameter is "id" parameter
            this.route.snapshot.paramMap.get('id')


                ngOnInit(): void {
                                  let id = parseInt(this.route.snapshot.paramMap.get('id'))
                                }

      5. so from the current route snapshot , get the id parameter from the URL
    4. craete a new property
                                public departmentId ;
    5. so from the current route snapshot , get the id parameter from the URL , and assign it to the local variable id
    
                ngOnInit(): void {
                                  let id = parseInt(this.route.snapshot.paramMap.get('id'))
                                  this.departmentId = id;
                                }
    6. then we can bind this id to the view
      
                        template: `
                                      <p>department-detail works!</p>
                                      <h3>you selected department with id = {{departmentId}} </h3>
                    `,
                                

### summarize:- 
1. in app-routing.module.ts we create a route with a placeholder for the parameter
2. to pass a parameter while navigating we make use of the router service
3. it has a navigate method to which we can pass link parameters array
4. to rread the parameter we make use of ActivatedRoute service
5. use snapshot of the current route , use the paramMap API to read the required parameter 
6. we can the bind it to view using interpoltion




# paramMap Observable
1. Route Parameters approach has DrawBack 

2. in our application right now , we always navigate to the DepartmentDetailComponent from the DepartmentListComponent  
    1. let's improve on this
        1. ley's add a previous and next button in the DepartmentDetailComponent to go back in for the between different Departments
3. in the file department-detail.component.ts
    1. i am going to add two new anchor tags 
            
            template: `
                            <p>department-detail works!</p>
                            <h3>you selected department with id = {{departmentId}} </h3>
                            <a>previous</a> <br>
                            <a>next</a>
                        `,

    2. we sholuld be listning to click event on these  two anchor tag

            template: `
                            <p>department-detail works!</p>
                            <h3>you selected department with id = {{departmentId}} </h3>
                            <a (click)="goPrevious()">previous</a> <br>
                            <a (click)="goNext()">next</a>
                        `,
    3. to navigate from code , we collect that we need Router service
        1. import Router from the Router package
                    import { Router } from '@angular/router';
        2. then injected :-  in the constructor we pass router of type Router as argumnet
                constructor(private route : ActivatedRoute , private router : Router ) { }
    4. then define goPrevious() and goNext() method 
        1. first declare a variable  , previousId or nextId
        2. once we have the previousId/nextId , 
            1. then pass it as a parameter in the navigate method on the router service

                        goPrevious(){
                            let previousId = this.departmentId-1;
                            this.router.navigate(['/departments' , previousId]);
                        }

                        goNext(){
                            let nextId = this.departmentId+1;
                            this.router.navigate(['/departments' , nextId]);
        3. you can see this id change in URL
            1. but view does not update with the ID
            2. so , this is the **drawback of snapshot approach**

4. when you are navigating from one component back to the same component ,  
    1. the  snapshot approach will not work

    2. **Reason :-**
        1. Angular is going to figure out 
        2. if it is need to initialise a new component or
        3. it can reuse the same component
        4. when we navigate back to the same component
        5. angular simply reuses the component.
        6. No initialisation implies that ngOnInit()  method  does not get call.
        7. and hence , the new ID will never be retrive from the URL.
        8. so , to overCome this we use paraMap Observable 
    
### paraMap Observable  method
1. we have intance of the ActivatedRoute :-     this. route
2. then we call paramMap method :-  this.route.paramMap
    1. this return an observable
3. we get the data only if subscribe to it  :-  this.route.paramMap.subscribe()
4. the argunment to the subscribe method is arrow function
    1. the observable provides us parameter which we strong type "ParamMap"
        1. this ParamMap is from the router package ,so import it
        2. the ParamMap API provides us with a get method to retrieve the ID parameter

                this.route.paramMap.subscribe((params : ParamMap) =>{ }


    2. in the body of the arrow function 
        1. we sahould get id as a integer

                    this.route.paramMap.subscribe((params : ParamMap) =>{ 
                        let id = parseInt(params.get('id'));
                     }
                
        2. assign the id to the departmentId

                    this.route.paramMap.subscribe((params : ParamMap) =>{ 
                        let id = parseInt(params.get('id'));
                        this.departmentId = id;
                     }

5. now any time the parameter value changes , 
    1. even navigating back to the same component ,
    2. the paraMap Observable can detect and read it 







# Optional Route Parameters




             ---------------------------------------------------------------------------------------------------
            |                                                                                                   |
            |                                                                                                   |
            |           DepartmentList                                              DepartmentDetail            |
            |    -------------------------------                         -----------------------------------    |
            |   | 1. Angular                    |                       |  You selected department with     |   |
            |   | 2. Node                       |                       |  id=1                             |   |
            |   | 3. MongoDB                    |       id              |                                   |   |
            |   | 4. Ruby                       |-------------------->  |                                   |   |
            |   | 5. Bootstrap                  |                       |       -----------------           |   |
            |   |                               |                       |      |    Back         |          |   |
            |   |                               |                       |       -----------------           |   |
            |   |                               |                       |                                   |   |
            |    -------------------------------                         -----------------------------------    |
            |                                                                                                   |
            |                                                                                                   |
            |                                                                                                   |
             ---------------------------------------------------------------------------------------------------




1. now we have new Requirement in the department detail component
    1. when we click on the "back" button , 
    2. we should be navigated back to the DepartmentListComponent 
    3. and the previously selected department must be highlighted.
    4. this can be achieve using Optional-Route-Parameters .  

2. in department.detail.compnent.ts 
    1. first add the back buttons

                                <div>
                                    <button> Back </button>
                                </div>
        
    2. next we have to listen to the click event on this button 

                                <div>
                                    <button (click)="goToDepartments()">Back</button>
                                </div>
    3. define goToDepartments() method
                                goToDepartments(){

                                }
        1. first i am going to create a new variable "selectedId" and assign with departmentId (the id of the department currently on the view)
                                goToDepartments(){
                                    let selectedId = this.departmentId ? this.departmentId : null
                                }

            1. selectedId is equal to current departmentId
        2.  once we have selectedId , we can navigate back to departmentList view 
                             this.router.navigate(['/departments' , {id : selectedId , anotherOptionalParameter : 'anotherOptionalValue'}]) 


            1. but this time passing it as an optional parameter in the Link-parameters-Array.
            2. first argument of link parameter array is path ,and , second argument is an object
            3. object has key-value paires ; the  key-value paires are optional-route-parameters we want to send 
            4. the key is id ; the value is selectedId
            5. we can pass in object many number of optional parameter

                             this.router.navigate(['/departments' , {id : selectedId , anotherOptionalParameter : 'anotherOptionalValue'}]) 

            6. result :- 


                        gotoDepartments() {
                                            let selectedId = this.departmentId ? this.departmentId : null;
                                            this.router.navigate(['/departments', {id: selectedId}]);   
                                            
                                            // first argument of link parameter array is path ,and , second argument is an object
                                            // object has key-value paires ; the  key-value paires are optional-route-parameters we want to send 
                                            // the key is id ; the value is selectedId
                                            // we can pass in object many number of optional parameter
                                                // this.router.navigate(['/departments' , {id : selectedId , anotherOptionalParameter : 'anotherOptionalValue'}])  

                                        }
        3. when we click the back button we can see in URL :- http://localhost:4200/departments;id=2 
            1. ;id=2 :- id is the key and 2 is the value 
            2. so this id=2 is the Optional Route Parameter 
            3. it is optional beacuse it's existence does not effect our view 
                1. but they can be used to apply some logic to the view , which is exactly  what we are going to do.
            4. we are going to read this parameter
                if id matches we highlight  the department

3. in department.detail.compnent.ts  
    1. first import ActivatedRoute service 

                    import { ActivatedRoute } from '@angular/router';

    2. and injected :-   in the constructor we pass route of type ActivatedRoute as argumnet

                    constructor(private router : Router , private route : ActivatedRoute) { }

    3. in the ngOnInit() method , we are going to retrieve the id parameter using the paramMap observable


                                        ngOnInit() {
                                            this.route.paramMap.subscribe((params: ParamMap) => {
                                            let id = parseInt(params.get('id'));
                                            this.selectedId = id;
                                            
                                            } );
                                        }  

    4. define the selected property;

                            export class DepartmentListComponent implements OnInit {
                                                                                    public selectedId;
                                                                                    departments = [
                                                                                        {"id":1 , "name": "Angular"},
                                                                                        {"id":2 , "name": "Node"},
                                                                                        {"id":3 , "name": "MongoDB"},
                                                                                        {"id":4 , "name": "Ruby"},
                                                                                        {"id":5 , "name": "Bootstrap"},
                                                                                    ]

                                                                                    constructor(private router : Router , private route : ActivatedRoute) { }

                                                                                        ngOnInit() {
                                                                                        this.route.paramMap.subscribe((params: ParamMap) => {
                                                                                        let id = parseInt(params.get('id'));
                                                                                        this.selectedId = id;
                                                                                        
                                                                                        } );
                                                                                    }


                                                                                    onSelect(department){
                                                                                        this.router.navigate(['/departments', department.id])
                                                                                    }

                                                                                    }                      


    5. we  will compare the selectedId with departmentId
        1. define new method isSelected

                                                          isSelected(department){
                                                                                    return department.id === this.selectedId;
                                                                                }
        2. now ,


                            export class DepartmentListComponent implements OnInit {
                                                                                    public selectedId;
                                                                                    departments = [
                                                                                        {"id":1 , "name": "Angular"},
                                                                                        {"id":2 , "name": "Node"},
                                                                                        {"id":3 , "name": "MongoDB"},
                                                                                        {"id":4 , "name": "Ruby"},
                                                                                        {"id":5 , "name": "Bootstrap"},
                                                                                    ]

                                                                                    constructor(private router : Router , private route : ActivatedRoute) { }

                                                                                        ngOnInit() {
                                                                                        this.route.paramMap.subscribe((params: ParamMap) => {
                                                                                        let id = parseInt(params.get('id'));
                                                                                        this.selectedId = id;
                                                                                        
                                                                                        } );
                                                                                    }


                                                                                    onSelect(department){
                                                                                        this.router.navigate(['/departments', department.id])
                                                                                    }

                                                                                    isSelected(department){
                                                                                        return department.id === this.selectedId;
                                                                                    }

                                                                                    }    
        
        
        3. and bind the is   isSelected(department) method with class-binding   :- [class.selected]="isSelected(department)"


                                                      template: `
                                                                <h3>dapartment-list works!</h3>
                                                                <ul class="items">
                                                                    <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
                                                                    <span class="badge"> {{department.id}} </span> {{department.name}}
                                                                    </li>
                                                                </ul>
                                                                `,

4. in style.css just hilghlight that class=selected


                          .items li.selected    {
                                                    background-color: #CFD8DC;
                                                    color: white;
                                                }


5.  Optional Route Parameters doesnot need a placeholder while configuring  the routes. 
    1. in app-routing.module.ts how we specify place holder for id ( :id   :-    departments/:id) for the DepartmentDetailComponent
    2. we did not specified an id and Optional Route parameter the  DepartmentList Component


# Relative Navigation
1. till now we were using absolute path for navigation
2. how you identify absolute path :- it begins with a forward slash (   /   ).
3. we have asmall dis-advantage :- there isan lack of flexibility of routes.
4. when we change path in routing-module , we also need to change all occurences that particular absolute path.
5. so, our routing is not flexible enough.
6. to add a bit of flexibility , we can make use of  relative navigation
7. in app-routing.module.ts if we are changing departments to department-list
    1. before changing , app-routing module.ts 


                                        import { NgModule } from '@angular/core';
                                        import { RouterModule, Routes } from '@angular/router';
                                        import { DepartmentListComponent } from './dapartment-list/dapartment-list.component';
                                        import { DepartmentDetailComponent } from './department-detail/department-detail.component';
                                        import { EmployeeListComponent } from './employee-list/employee-list.component';
                                        import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

                                        const routes: Routes = [
                                        { path :'' , redirectTo:'/departments' , pathMatch:'full' },
                                        { path : 'departments' , component: DepartmentListComponent},
                                        { path : 'departments/:id' , component: DepartmentDetailComponent},
                                        { path : 'employees' , component: EmployeeListComponent },
                                        { path : '**' , component: PageNotFoundComponent }
                                        ];

                                        @NgModule({
                                        imports: [RouterModule.forRoot(routes)],
                                        exports: [RouterModule]
                                        })
                                        export class AppRoutingModule { }
                                        export const routingComponents = [  DepartmentListComponent , 
                                                                            EmployeeListComponent , 
                                                                            PageNotFoundComponent , 
                                                                            DepartmentDetailComponent
                                                                        ]

    1. after changing , app-routing module.ts 


                                        import { NgModule } from '@angular/core';
                                        import { RouterModule, Routes } from '@angular/router';
                                        import { DepartmentListComponent } from './dapartment-list/dapartment-list.component';
                                        import { DepartmentDetailComponent } from './department-detail/department-detail.component';
                                        import { EmployeeListComponent } from './employee-list/employee-list.component';
                                        import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

                                        const routes: Routes = [
                                        { path :'' , redirectTo:'/department-list' , pathMatch:'full' },
                                        { path : 'department-list' , component: DepartmentListComponent},
                                        { path : 'department-list/:id' , component: DepartmentDetailComponent},
                                        { path : 'employees' , component: EmployeeListComponent },
                                        { path : '**' , component: PageNotFoundComponent }
                                        ];

                                        @NgModule({
                                        imports: [RouterModule.forRoot(routes)],
                                        exports: [RouterModule]
                                        })
                                        export class AppRoutingModule { }
                                        export const routingComponents = [  DepartmentListComponent , 
                                                                            EmployeeListComponent , 
                                                                            PageNotFoundComponent , 
                                                                            DepartmentDetailComponent
                                                                        ]

8. in department-list.component.ts

    1. we have 
                            onSelect(department){
                                                
                                                // absolute path
                                                this.router.navigate(['/departments', department.id])
                                            }

    2. now ae are writing relative path instead of absolute path 
        1. in navigate function , we pass two argument 
            1. the first argument is link parameter array
                1. but this time only contains, parameters , 
                2. it doesnot contain path
            2. the second argument is an object, that has property  "relativeTo" and value is "this.route"

        2. it basically means , i don't care what is the URL right now , 
            1. but to the current route (this.route) , append the department.id
            2.  and then navigate to the URL

        3. if you are in the department-list.component 
            1. the URL would be /department-list 
            2. and to that we just add department.id 
            3. and then navigate to that particular URL

        4. then:- 

                    onSelect(department){
                        /*
                        // absolute path
                        this.router.navigate(['/departments', department.id])
                        */

                        // relative path
                        this.router.navigate([department.id] , {relativeTo: this.route})
                    }


    3. result :- 


                import { Component, OnInit } from '@angular/core';
                import { ActivatedRoute, Router } from '@angular/router';
                import { ParamMap } from '@angular/router';

                @Component({
                selector: 'app-department-list',
                template: `
                    <h3>dapartment-list works!</h3>
                    <ul class="items">
                        <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
                        <span class="badge"> {{department.id}} </span> {{department.name}}
                        </li>
                    </ul>
                `,
                styles: [
                ]
                })


                export class DepartmentListComponent implements OnInit {
                    public selectedId;
                    departments = [
                        {"id":1 , "name": "Angular"},
                        {"id":2 , "name": "Node"},
                        {"id":3 , "name": "MongoDB"},
                        {"id":4 , "name": "Ruby"},
                        {"id":5 , "name": "Bootstrap"},
                    ]

                    constructor(private router : Router , private route : ActivatedRoute) { }

                        ngOnInit() {
                        this.route.paramMap.subscribe((params: ParamMap) => {
                        let id = parseInt(params.get('id'));
                        this.selectedId = id;
                        
                        } );
                    }


                    onSelect(department){
                        /*
                        // absolute path
                        this.router.navigate(['/departments', department.id])
                        */

                        
                        // relative path
                        this.router.navigate([department.id] , {relativeTo: this.route})
                        /*
                        1. in navigate function , we pass two argument 
                        1. the first argument is link parameter array
                            1. but this time only contains, parameters , 
                            2. it doesnot contain path
                        2. the second argument is an object, that has property  "relativeTo" and value is "this.route"

                        2. it basically means , i don't care what is the URL right now , 
                        1. but to the current route (this.route) , append the department.id
                        2. and then navigate to the URL
                        3. if you are in the department-list.component 
                        1. the URL would be /department-list 
                        2. and to that we just add department.id 
                        3. and then navigate to that particular URL
                        */
                        
                    }

                    isSelected(department){
                        return department.id === this.selectedId;
                    }

                }


9. in department-detail.component.ts

    1. we have :- 
    
                    gotoDepartments() {
                        let selectedId = this.departmentId ? this.departmentId : null;
                        // absolute path 
                        this.router.navigate(['/departments', {id: selectedId}]);   
                    }

    2. now ae are writing relative path instead of absolute path 
        1. in navigate function , we pass two argument 
            1. the first argument is link parameter array
                1. first argument of link parameter array is path ,and , second argument is an object 
                2. object has key-value paires ; the  key-value paires are optional-route-parameters we want to send 
                    1. the key is id ; the value is selectedId
                    2. we can pass in object many number of optional parameter

                this.router.navigate(['../', { id: selectedId }]

                3. ../  :- go backe one segment in the URL

            2. the second argument is an object, that has property  "relativeTo" and value is "this.route"

        2. it basically means , i don't care what is the URL right now , 
            1. but to the current route (this.route) , append the department.id
            2.  and then navigate to the URL
        3. if you are in the department-list.component 
            1. the URL would be /department-list 
            2. and to that we just add department.id 
            3. and then navigate to that particular URL



    4. then :- 

                    gotoDepartments() {
                        let selectedId = this.departmentId ? this.departmentId : null;

                        // absolute path
                    /*
                        this.router.navigate(['/departments', {id: selectedId}]);   
                    */

                    // relative path
                    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
                    }


    5. result :- 

                                            
                            import { Component, OnInit } from '@angular/core';
                            import { ActivatedRoute, Router, ParamMap } from '@angular/router';
                            @Component({
                            selector: 'app-department-detail',
                            template: `
                                <h3>You selected department with id = {{departmentId}}</h3>

                                <p>
                                <button (click)="goPrevious()">Previous</button>
                                <button (click)="goNext()">Next</button>
                                </p>
                                
                                <div>
                                <button (click)="gotoDepartments()">Back</button>
                                </div>
                            `,
                            styles: []
                            })
                            export class DepartmentDetailComponent implements OnInit {

                                public departmentId;
                                constructor(private route: ActivatedRoute, private router: Router) { }

                                ngOnInit() {

                                // snapshot method
                                    /*let id = parseInt(this.route.snapshot.paramMap.get('id'))
                                    this.departmentId=id;*/

                                    //  paraMap Observable  method
                                    this.route.paramMap.subscribe((params: ParamMap) => {
                                    let id = parseInt(params.get('id'));
                                    this.departmentId = id;

                                    });
                                }

                                goPrevious() {
                                    let previousId = this.departmentId - 1;
                                    this.router.navigate(['/departments', previousId]);
                                }
                                goNext() {
                                    let nextId = this.departmentId + 1;
                                    this.router.navigate(['/departments', nextId]);
                                }

                                gotoDepartments() {

                                    let selectedId = this.departmentId ? this.departmentId : null;


                                    // absolute path
                                /*
                                    this.router.navigate(['/departments', {id: selectedId}]);   
                                */

                                /*
                                    1. in navigate function , we pass link parameter array that has two argument
                                    1. first argument of link parameter array is path ,and , second argument is an object
                                    2. object has key-value paires ; the  key-value paires are optional-route-parameters we want to send 
                                        1. the key is id ; the value is selectedId
                                        2. we can pass in object many number of optional parameter
                                        1. this.router.navigate(['/departments' , {id : selectedId , anotherOptionalParameter : 'anotherOptionalValue'}])  
                                */

                                // relative path
                                this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
                                    /*
                                    1. in navigate function , we pass two argument 
                                    1. the first argument is link parameter array
                                        1. first argument of link parameter array is path ,and , second argument is an object 
                                        2. object has key-value paires ; the  key-value paires are optional-route-parameters we want to send 
                                        1. the key is id ; the value is selectedId
                                        2. we can pass in object many number of optional parameter

                                            this.router.navigate(['../', { id: selectedId }]

                                        3. ../  :- go backe one segment in the URL

                                    2. the second argument is an object, that has property  relativeTo and value is this.route

                                    2. it basically means , i don't care what is the URL right now , 
                                    1. but to the current route (this.route) , append the department.id
                                    2.  and then navigate to the URL
                                    3. if you are in the department-list.component 
                                    1. the URL would be /department-list 
                                    2.and to that we just add department.id 
                                    3. and then navigate to that particular URL
                                    */
                                }
                                
                                showOverview(){
                                    this.router.navigate(['overview'], { relativeTo: this.route });
                                }

                                showContact(){
                                    this.router.navigate(['contact'], { relativeTo: this.route });
                                }
                            }



# Child Routes

## why we need child routes
1. in a angular application some routes may only be viewed within other routes 
2. in such a scenarion we create child routes 
3. example:-
    1. roght now in my angular application we have department-detail component 
    2. in this component , we want to display an overview and also the contact-information of the selected department .
    3. the overview and contact-info are features  of each department 
    4. so , they should be viewable only after navigating to this department needed component

## how to implement that with child routes
1. first generate two new component
    1. first component is :- department-overview  with inline tempelate and inline style
        1. in angular cli , rum the command :-  ng generate component department-overview -t -s
    2. second component is :- department-overview  with inline tempelate and inline style
        1. in angular cli , rum the command :-  ng generate component department-contact -t -s

2. in app-routing.module.ts
    1. what is the component to which we want to add the child routes 
        1. answer :- it is the department-detail component
    2. now, the way to specify child-routes in angular is 
        1. to use the "children" property and set it to an array of routes
    3. for our example we have two child routes 
        1. overview      (from department-overview.component.ts )
        2. contact       (from department-contact.component.ts )

        const routes: Routes = [
                                    { path :'' , redirectTo:'/department-list' , pathMatch:'full' },
                                    { path : 'department-list' , component: DepartmentListComponent},
                                    { 
                                        path : 'department-list/:id' , 
                                        component: DepartmentDetailComponent,
                                        children : [
                                        // in this array we are adding two objects ; one for overview , and another for contact
                                        {path : 'overview' , component : DepartmentOverviewComponent}, // for overview
                                        {path : 'contact' , component : DepartmentContactComponent} // for contact
                                        ]
                                    },
                                    { path : 'employees' , component: EmployeeListComponent },
                                    { path : '**' , component: PageNotFoundComponent }
                            ];

    4. make sure both component to import them

                            import { NgModule } from '@angular/core';
                            import { RouterModule, Routes } from '@angular/router';
                            import { DepartmentListComponent } from './dapartment-list/dapartment-list.component';
                            // imported
                            import { DepartmentContactComponent } from './department-contact/department-contact.component';
                            import { DepartmentDetailComponent } from './department-detail/department-detail.component';
                            //imported
                            import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
                            import { EmployeeListComponent } from './employee-list/employee-list.component';
                            import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


    5. add both component in routingComponents array

                            export const routingComponents = [  DepartmentListComponent , 
                                                                EmployeeListComponent , 
                                                                PageNotFoundComponent , 
                                                                DepartmentDetailComponent,
                                                                DepartmentOverviewComponent, // added
                                                                DepartmentContactComponent  // added
                                                            ]


    6. DepartmentOverviewComponent and DepartmentContactComponent is mentioned to displayed inside DepartmentDetailComponent

    7. example :- 


                            import { NgModule } from '@angular/core';
                            import { RouterModule, Routes } from '@angular/router';
                            import { DepartmentListComponent } from './dapartment-list/dapartment-list.component';
                            // imported
                            import { DepartmentContactComponent } from './department-contact/department-contact.component';
                            import { DepartmentDetailComponent } from './department-detail/department-detail.component';
                            //imported
                            import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
                            import { EmployeeListComponent } from './employee-list/employee-list.component';
                            import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

                            const routes: Routes = [
                            { path :'' , redirectTo:'/department-list' , pathMatch:'full' },
                            { path : 'department-list' , component: DepartmentListComponent},
                            { 
                                path : 'department-list/:id' , 
                                component: DepartmentDetailComponent,
                                children : [
                                // in this array we are adding two objects ; one for overview , and another for contact
                                {path : 'overview' , component : DepartmentOverviewComponent}, // for overview
                                {path : 'contact' , component : DepartmentContactComponent} // for contact
                                // make sure both component to import them
                                // add both component in routingComponents array

                                // DepartmentOverviewComponent and DepartmentContactComponent is mentioned to displayed inside DepartmentDetailComponent
                                ]
                            },
                            { path : 'employees' , component: EmployeeListComponent },
                            { path : '**' , component: PageNotFoundComponent }
                            ];

                            @NgModule({
                            imports: [RouterModule.forRoot(routes)],
                            exports: [RouterModule]
                            })
                            export class AppRoutingModule { }
                            export const routingComponents = [  DepartmentListComponent , 
                                                                EmployeeListComponent , 
                                                                PageNotFoundComponent , 
                                                                DepartmentDetailComponent,
                                                                DepartmentOverviewComponent, // added
                                                                DepartmentContactComponent  // added
                                                            ]


3. in department-detail.component.ts
    1. in template 
        1. add router-outlet tag    :-      <router-outlet></router-outlet>

                            template: `
                                        <router-outlet></router-outlet>

                                        <p>
                                        <button (click)="goPrevious()">Previous</button>
                                        <button (click)="goNext()">Next</button>
                                        </p>
                                        
                                        <div>
                                        <button (click)="gotoDepartments()">Back</button>
                                        </div>
                    `,

        2. now , users will able to navigate from the URL
        3. but i wan to navigate from button
        4. add two button : overview and contact

                                <p>
                                <button>Overview</button>
                                <button>Contact</button>
                                </p>

        5. to listening these button, add click event on these two buttons

                                <p>
                                <button (click)="showOverview()">Overview</button>
                                <button (click)="showContact()">Contact</button>
                                </p>

        6. now template is :- 

                                    template:     `
                                                    <h3>You selected department with id = {{departmentId}}</h3>

                                                    <!--  to navigate child routes -->
                                                    <p>
                                                    <button (click)="showOverview()">Overview</button>
                                                    <button (click)="showContact()">Contact</button>
                                                    </p>
                                                    
                                                    <!-- to display child routes -->
                                                    <router-outlet></router-outlet> 

                                                    <p>
                                                    <button (click)="goPrevious()">Previous</button>
                                                    <button (click)="goNext()">Next</button>
                                                    </p>
                                                    
                                                    <div>
                                                    <button (click)="gotoDepartments()">Back</button>
                                                    </div>
                                                `,


        6. define   showOverview() method and   showContact()  method 
            1. in navigate function , when we pass link parameters array argument ; 
            2. in link parameters array argument , we pass only one argument taht is path


                                                showOverview(){
                                                    this.router.navigate(['overview'], { relativeTo: this.route });
                                                }

                                                showContact(){
                                                    this.router.navigate(['contact'], { relativeTo: this.route });
                                                }         

            3. 



