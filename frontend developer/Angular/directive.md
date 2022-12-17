# *ngIf     directive

## introduction :- 
1. The ngIf Directive in Angular10 is used to remove or recreate a portion of HTML element based on an expression. 
2. If the expression inside it is false then the element is removed .  
3. if it is true then the element is added to the DOM.

## only if statement:-

        <div *ngIf="condition">     
                                Content to render when condition is true.   
        </div>

## only if statement (alternative):-

        <ng-template [ngIf]="condition">    
                        <div>   
                                Content to render when condition is true.
                        </div>
        </ng-template>


##  if-else statement :-

        <div *ngIf="condition; else elseBlock">
                                                    Content to render when condition is true.
        </div>

        <ng-template #elseBlock>
                                    Content to render when condition is false.
        </ng-template>

##  if-then-else statement :-

        <div *ngIf="condition; then thenBlock else elseBlock">  </div>

        <ng-template #thenBlock>
                                    Content to render when condition is true.
        </ng-template>

        <ng-template #elseBlock>
                                    Content to render when condition is false.
        </ng-template>

##  if-then-else statement (primary-secondary) :-

    <div *ngIf="condition; then thenBlock; else elseBlock">   this is ignored     </div>


    <ng-template #primaryBlock>
                                    Primary text to show
    </ng-template>


    <ng-template #secondaryBlock>
                                    Secondary text to show
    </ng-template>


    <ng-template #elseBlock>
                                Alternate text while primary text is hidden
    </ng-template>


##  if-else statement :- with storing the value locally:-

        <div *ngIf="condition as value; else elseBlock">    {{value}}   </div>

        <ng-template #elseBlock>    Content to render when value is null.   </ng-template>

### where condition :- 
1. condition keeps boolean value (true/false) 
2. we can put true/false directly
3. we can put condition
4. we can put condition as booleanVariableName.

####  Example :- 

        @Component({

                selector: 'ng-if-then-else',

                template: `

                    <button (click)="show = !show"> {{show ? 'hide' : 'show'}}   </button>
                    <button (click)="switchPrimary()">  Switch Primary  </button>
                    show = {{show}}

                    <br>

                    <div *ngIf="show; then thenBlock; else elseBlock">  this is ignored </div>
                    <ng-template #primaryBlock> Primary text to show    </ng-template>
                    <ng-template #secondaryBlock>   Secondary text to show </ng-template>
                    <ng-template #elseBlock>    Alternate text while primary text is hidden </ng-template>
                `
                })      




                export class NgIfThenElse implements OnInit {

                        thenBlock: TemplateRef<any>|null = null;
                        
                        show = true;

                        @ViewChild('primaryBlock', {static: true}) primaryBlock: TemplateRef<any>|null = null;
                        @ViewChild('secondaryBlock', {static: true}) secondaryBlock: TemplateRef<any>|null = null;

                        switchPrimary() {
                            this.thenBlock = this.thenBlock === this.primaryBlock ? this.secondaryBlock : this.primaryBlock;
                        }

                        ngOnInit() {
                            this.thenBlock = this.primaryBlock;
                        }
        }


# *ngSwitch     directive

1. The **[ngSwitch]** directive on a container specifies an expression to match against. 
2. The expressions to match are provided by ngSwitchCase directives on views within the container.

3. Every view that matches is rendered.
4. If there are no matches, a view with the ngSwitchDefault directive is rendered.
5. Elements within the **[NgSwitch]** statement but outside of any **ngSwitchCase or ngSwitchDefault** directive are preserved at the location.

## normal [ngSwitch] directive


        <container-element [ngSwitch]="switch_expression">

                    <!-- the same view can be shown in more than one case -->
                    <some-element *ngSwitchCase="match_expression_1">   ...    </some-element>
                    <some-element *ngSwitchCase="match_expression_2">   ... </some-element>
                    <some-other-element *ngSwitchCase="match_expression_3"> ... </some-other-element>

                    <!--default case when there are no matches -->
                    <some-element *ngSwitchDefault> ... </some-element>

        </container-element>


## normal [ngSwitch] directive
        <container-element [ngSwitch]="switch_expression">

                     <!-- the same view can be shown in more than one case -->
                    <some-element *ngSwitchCase="match_expression_1">   ... </some-element>
                    <some-element *ngSwitchCase="match_expression_2">   ... </some-element>
                    <some-other-element *ngSwitchCase="match_expression_3"> ...  </some-other-element>
                    
                    <ng-container *ngSwitchCase="match_expression_3">
                        <!-- use a ng-container to group multiple root nodes -->
                        <inner-element></inner-element>
                        <inner-other-element></inner-other-element>
                    </ng-container>

                    <!--default case when there are no matches -->
                    <some-element *ngSwitchDefault>...</some-element>

        </container-element>        


#### example
                @Component({

                selector: 'app-test',

                template: `

                    <div [ngSwitch]="color"> 
                            <div *ngSwitchCase="'red'"> you picked red color </div>
                            <div *ngSwitchCase="'blue'"> you picked blue color </div>
                            <div *ngSwitchCase="'green'"> you picked green color </div>
                            <div *ngSwitchDefault> you pick again </div>
                    </div>
                    
                `,
                style: []
                })      

                export class TestComponent implements OnInit {
                        
                        color = 'red';

                        constructor() { }

                        ngOnInit() {
                        }
        }


# *ngFor     directive

## simple syntax of *ngFor directive

        <HTMLtag *ngFor="let element  of iterableObjectVariableName">

                        <!-- element is variable name of each element of iterable object  , 
                                it works like forOf loop-->
        </HTMLtag>

## syntax of *ngFor directive with index

        <HTMLtag *ngFor="let element  of iterableObjectVariableName ; index as i">

                        <!-- element is variable name of each element of iterable object  , 
                                it works like forOf loop-->
                        <!-- index is always starting from 0 , 1, 2... -->
        </HTMLtag>

## syntax of *ngFor directive :- iterable object has first lement or not

        <HTMLtag *ngFor="let element  of iterableObjectVariableName ; first as f">

                        <!-- element is variable name of each element of iterable object  , 
                                it works like forOf loop-->
                        <!-- index is always starting from 0 , 1, 2... -->
        </HTMLtag>

## syntax of *ngFor directive :- iterable object has last lement or not

        <HTMLtag *ngFor="let element  of iterableObjectVariableName ; last as l">

                        <!-- element is variable name of each element of iterable object  , 
                                it works like forOf loop-->
                        <!-- index is always starting from 0 , 1, 2... -->
        </HTMLtag>

## syntax of *ngFor directive :- iterable object has odd lement or not

        <HTMLtag *ngFor="let element  of iterableObjectVariableName ; odd as o">

                        <!-- element is variable name of each element of iterable object  , 
                                it works like forOf loop-->
                        <!-- index is always starting from 0 , 1, 2... -->
        </HTMLtag>

## syntax of *ngFor directive :- iterable object has last lement or not

        <HTMLtag *ngFor="let element  of iterableObjectVariableName ; even as e">

                        <!-- element is variable name of each element of iterable object  , 
                                it works like forOf loop-->
                        <!-- index is always starting from 0 , 1, 2... -->
        </HTMLtag>


#### example
                @Component({

                selector: 'app-test',

                template: `

                    <div *ngFor="let color of colors">
                        <h2> {{color}} </h2>
                    </div>

                    <div *ngFor="let color of colors ; index as i">
                        <h2> {{i}} {{color}} </h2>
                    </div>

                    <div *ngFor="let color of colors ; first as f">
                        <h2> {{f}} {{color}} </h2>
                    </div>

                    <div *ngFor="let color of colors ; last as l">
                        <h2> {{l}} {{color}} </h2>
                    </div>

                    <div *ngFor="let color of colors ; even as e">
                        <h2> {{e}} {{color}} </h2>
                    </div>

                    <div *ngFor="let color of colors ; odd as o">
                        <h2> {{o}} {{color}} </h2>
                    </div>
                    
                    
                `,
                style: []
                })      

                export class TestComponent implements OnInit {
                        
                        public colors = ['red' , 'blue' , 'green' , 'yellow' ];

                        constructor() { }

                        ngOnInit() {
                        }
        }


## Local variables
1. NgForOf provides exported values that can be aliased to local variables. 

#### For example:

        <li *ngFor="let user of users; index as i; first as isFirst">
        {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
        </li>


### The following exported values can be aliased to local variables:

1. $implicit:  T: The value of the individual items in the iterable (ngForOf).
2. ngForOf:    NgIterable<T>: The value of the iterable expression. Useful when the expression is more complex then a property access, for example when using the async pipe (userStreams | async).
3. index: number: The index of the current item in the iterable.
4. count: number: The length of the iterable.
5. first: boolean: True when the item is the first item in the iterable.
6. last: boolean: True when the item is the last item in the iterable.
7. even: boolean: True when the item has an even index in the iterable.
8. odd: boolean: True when the item has an odd index in the iterable.

## Change propagation

1. When the contents of the iterator changes, NgForOf makes the corresponding changes to the DOM:
    1. When an item is added, a new instance of the template is added to the DOM.
    2. When an item is removed, its template instance is removed from the DOM.
    3. When items are reordered, their respective templates are reordered in the DOM.

2. Angular uses object identity to track insertions and deletions within the iterator and reproduce those changes in the DOM. 
3. This has important implications for animations and any stateful controls that are present, such as <input> elements that accept user input. 
4. Inserted rows can be animated in, deleted rows can be animated out, and unchanged rows retain any unsaved state such as user input. For more on animations, see Transitions and Triggers.

5. The identities of elements in the iterator can change while the data does not. 
6. This can happen, for example, if the iterator is produced from an RPC to the server, and that RPC is re-run. 
7. Even if the data hasn't changed, the second response produces objects with different identities, and Angular must tear down the entire DOM and rebuild it (as if all old elements were deleted and all new elements inserted).

8. To avoid this expensive operation, you can customize the default tracking algorithm. 
9. by supplying the trackBy option to NgForOf. trackBy takes a function that has two arguments: index and item. 
10. If trackBy is given, Angular tracks changes by the return value of the function.
