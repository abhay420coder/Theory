# component interaction introduction

1. we are working with TestComponent which is nested inside AppComponent. 
2. so AppComponent is parent component and TestComponent is child component.

3. ParentComponent might send some data to ChildComponent or
4. ChildComponent might send some data to ParentComponent

5. So the component interactts between ParentComponent-ChildComponent using **@Input** and **@Output** decorator .
6. Using **@Input** decorator , ChildComponent accepts input from ParentComponent
7. Using **@Output** decorator , ChildComponent sends output to ParentComponent 
    or even ParentComponent indicate something.

8. in our example , we will send a name  from the AppComponent to TestComponent .
9. and in the TestComponent we are going to display :-   Hello {{name}}  



        import { Component, OnInit } from '@angular/core';

        @Component({
                selector: 'app-test',
                template:  `  <h2>hello {{name}}</h2>    `,
                styles: []
        })

        export class TestComponent implements OnInit {
                public name : string="Abhay";

                constructor() {   }

                ngOnInit(): void {  }
        }

##  sending the data from the ParentComponent to the ChildComponent 

#### Example :- here we are sending the data from the ParentComponent to the ChildComponent and displaying in ChildComponent

1. in app.component.ts                  (ParentComponent)

        import { Component } from '@angular/core';

        @Component({
                selector: 'app-root',
                template:  `  <div style="text-align:center">
                                <h1> welcome to {{title}}</h1>
                                </div>   

                                <app-test [parentData]="name"></app-test> 
                                <!-- here "name" is parent data which is sending with the help of "parentData" variable to TestComponent(ChildComponent) -->
                                
                                `,
                styles: []
        })

        export class AppComponent {
                title : string = 'app';

                public name : string="Abhay";

                constructor() {   }

                ngOnInit(): void {  }
        }

2.  in test.component.ts                  (ChildComponent)


        import { Component, OnInit } from '@angular/core';

        @Component({
                selector: 'app-test',
                template:  `  <h2>hello {{parentData}}</h2>    `,
                styles: []
        })

        export class TestComponent implements OnInit {
                @Input public parentData;
                // here we are recieving parentData with the help of @Inpt decorator 

                constructor() {   }

                ngOnInit(): void {  }
        }

#### Example :- Alias NAme of parent Data  :-  @Input('parentData') public AliasNameOfParentData

1. in app.component.ts                  (ParentComponent)

        import { Component } from '@angular/core';

        @Component({
                selector: 'app-root',
                template:  `  <div style="text-align:center">
                                <h1> welcome to {{title}}</h1>
                                </div>   

                                <app-test [parentData]="name"></app-test> 
                                <!-- here "name" is parent data which is sending with the help of "parentData" variable to TestComponent(ChildComponent) -->
                                
                                `,
                styles: []
        })

        export class AppComponent {
                title : string = 'app';

                public name : string="Abhay";

                constructor() {   }

                ngOnInit(): void {  }
        }

2.  in test.component.ts                  (ChildComponent)


        import { Component, OnInit } from '@angular/core';

        @Component({
                selector: 'app-test',
                template:  `  <h2>hello {{AliasNameOfParentData}}</h2>    `,
                styles: []
        })

        export class TestComponent implements OnInit {
                @Input('parentData') public AliasNameOfParentData;
                // here we are recieving parentData with the help of @Inpt decorator 

                constructor() {   }

                ngOnInit(): void {  }
        }


##  sending the data from the ChildComponent to the ParentComponent 

1. the wany send data from the ChildComponent to the ParentComponent is using **EventEmitter**.
2. syntax to create new event emitter :-         EventName = new EventEmitter();
3. then to be able to send childEvent (or EventName) to the ParentComponent , we should us the @Output decorator
4. 


#### Example :- here we are sending the data from the ChildComponent to the ParentComponent and displaying in ParentComponent




1.  in test.component.ts                  (ChildComponent)


        import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

        @Component({
                selector: 'app-test',
                template:  `  <h2>hello {{parentData}}</h2>   
                <button (click)="fireEvent()">Send Event </button> `,
                styles: []
        })

        export class TestComponent implements OnInit {
                @Input public parentData;
                // here we are recieving parentData with the help of @Inpt decorator 

                @Output public childEvent = new EventEmitter();

                constructor() {   }

                ngOnInit(): void {  }

                fireEvent(){
                        this.childEvent.emit('hey abhay kumar')
                        // this is the message where we want to send the data to parent component
                }
        }


2. in app.component.ts                  (ParentComponent)

        import { Component } from '@angular/core';

        @Component({
                selector: 'app-root',
                template:  `  <div style="text-align:center">
                                <h1> welcome to {{title}}</h1>
                                <h1> {{message}}</h1>
                                </div>   

                                <app-test (childEvent)="message=$event" [parentData]="name"></app-test> 
                                <!-- here $evnt is refer event of childComponent which is sending by childComponrent or $evnt refers message ('hey abhay kumar') which is sending by childComponent-->
                                
                                `,
                styles: []
        })

        export class AppComponent {
                title : string = 'app';

                public name : string="Abhay";

                public message : string = "';

                constructor() {   }

                ngOnInit(): void {  }
        }


## another example :- 

### Pass data from parent to child with input binding
1. HeroChildComponent has two input properties, typically adorned with @Input() decorator.

2. in           component-interaction/src/app/hero-child.component.ts


                import { Component, Input } from '@angular/core';

                import { Hero } from './hero';

                @Component({
                        selector: 'app-hero-child',
                        template: `
                        <h3>{{hero.name}} says:</h3>
                        <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
                        `
                })

                export class HeroChildComponent {
                        @Input() hero!: Hero;
                        @Input('master') masterName = '';
                }


3. The second @Input aliases the child component property name masterName as 'master'.

4. The HeroParentComponent nests the child HeroChildComponent inside an *ngFor repeater, binding its master string property to the child's master alias, and each iteration's hero instance to the child's hero property.

5. in           component-interaction/src/app/hero-parent.component.ts

                import { Component } from '@angular/core';

                import { HEROES } from './hero';

                @Component({
                        selector: 'app-hero-parent',
                        template: `
                        <h2>{{master}} controls {{heroes.length}} heroes</h2>

                        <app-hero-child
                        *ngFor="let hero of heroes"
                        [hero]="hero"
                        [master]="master">
                        </app-hero-child>
                        `
                })
                export class HeroParentComponent {
                        heroes = HEROES;
                        master = 'Master';
                }


### Pass data from child to parent with output binding

1. The child component exposes an EventEmitter property with which it emits events when something happens. The parent binds to that event property and reacts to those events.

2. The child's EventEmitter property is an output property, typically adorned with an @Output() decorator as seen in this VoterComponent:

3. in component-interaction/src/app/voter.component.ts

                import { Component, EventEmitter, Input, Output } from '@angular/core';

                @Component({
                        selector: 'app-voter',
                        template: `
                        <h4>{{name}}</h4>
                        <button type="button" (click)="vote(true)"  [disabled]="didVote">Agree</button>
                        <button type="button" (click)="vote(false)" [disabled]="didVote">Disagree</button>
                        `                         
                })

                export class VoterComponent {
                        @Input()  name = '';
                        @Output() voted = new EventEmitter<boolean>();
                        didVote = false;

                        vote(agreed: boolean) {
                                this.voted.emit(agreed);
                                this.didVote = true;
                        }
                }


4. Clicking a button triggers emission of a true or false, the boolean payload.

5. The parent VoteTakerComponent binds an event handler called onVoted() that responds to the child event payload $event and updates a counter.

6. in           component-interaction/src/app/votetaker.component.ts

                import { Component } from '@angular/core';

                @Component({
                        selector: 'app-vote-taker',
                        template: `
                                <h2>Should mankind colonize the Universe?</h2>
                                <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>

                                <app-voter
                                *ngFor="let voter of voters"
                                [name]="voter"
                                (voted)="onVoted($event)">
                                </app-voter>
                        `
                })

                export class VoteTakerComponent {
                        agreed = 0;
                        disagreed = 0;
                        voters = ['Dr IQ', 'Celeritas', 'Bombasto'];


                        onVoted(agreed: boolean) {

                                if (agreed) {
                                        this.agreed++;
                                } 
                                else {
                                        this.disagreed++;
                                }

                        }
                }
                

# pipes
