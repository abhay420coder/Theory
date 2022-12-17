# javaScript functions
Function is a block of code is designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).
By using function , we can achieve code modulity & code re-usability.

# Types of Function
1. Named Function / REgular Function
2. Function Expression
3. Anonymus Function
4. Arrow Function
5. IIFE function (self called function) :- immediately invoked function expression
6. callBack function
7. Higher order function
8. Function() Constructor
9. Function Hoisting


**Note** fuction ko call krna aur invoke krna aur execute krna teeno same hai






# Named Function / Regular Function
1. A function which is declared with name is known as **regular function**.
2. **Function** is a keyword , which is use to declare function in javaScript.
3. we can **return any type of data** from JavaScript function including  **Non-primitive**
4. Whenever we **passed argunments** to function in JS then we should not use any keyword such as var,let,const.
5. If we do not **return anything** from the function  **return default undefined** value.
6. The function name holds the function structure.
7. If we want **access returned value** of function 
    then either we can store function inside variable or print function(invoke & assign  ,  invoke & print)

## syntax of Regular Function

    function functionName ( parameters ) {
        // function statement
    }


## syntax of Regular Function :- working(for abhay)

    function fn ( para1 , para2 , para3 ,..... ) {
        // function statement
    }

    
**Note :-** fn :- function name         para :- parameters


## syntax for calling Regular Function :- 

    functionName ( value1 , value2 , value3 ,..... ) ;


#### Example :-
        function add(a,b){
            console.log(a+b);
        }

        let x =add();
        console.log(x) // NaN

        let y =add(2,3);
        console.log(y); // 5 








# Function Expression
1. An Anonymus function structure , Arrow function structure , named function structure **assigned to a variable** is known as function expression.
2. Whenever we assign any function structure to a variable then the variable holding function structure itself.
3. Function expression is also called **storing function in variable.**

## syntax of Function Expression
    key variablename = functionStructure 

**Note :-** key = keyword :- var / let / const

## syntax of Function Expression :- working(for abhay)


#### named function structure :- syntax of Function Expression :- working(for abhay)
    key variablename = function fn ( para1 , para2 , para3 ,..... ) {
                                // function statement
                            }

**Note :-** key = keyword :- var / let / const              fn :- function name  


#### arrow function structure :- syntax of Function Expression :- working(for abhay)

    key variablename = ( para1 , para2 , para3 ,..... ) => {
                                                                // function statement
                                                                // return statement
                                                            }


#### Anonymus function structure :- syntax of Function Expression :- working(for abhay)
    key variablename = function ( para1 , para2 , para3 ,..... ) {
                                // function statement
                            }

**Note :-** key = keyword :- var / let / const              fn :- function name  
**Note :-** here , variablename will work as functionName

## syntax for calling Function Expression 

    variablename ( value1 , value2 , value3 ,..... ) ;

#### Example :-
        let a =    function add(a,b){
                return a+b;
            }

        console.log(a);                 // function add(a,b){
                                                        return a+b;
                                             }
        console.log(a(2,3)); // 5

        let y =a();
        console.log(y); // NaN 




# Anonymus Function
1. A function Declared **without a name** is known as Anonymus Function.
2. Anonymus Function must be assign to a variable.
3. Anonymus Function can be easily converted to arrow function.
4. An Anpnymus function can be passed as an argunment to another function (call-back function)

## syntax of Anonymus Function 
    key variablename = function ( para1 , para2 , para3 ,..... ) {
                                // function statement
                            }

**Note :-** key = keyword :- var / let / const              fn :- function name  
**Note :-** here , variablename will work as functionName


## syntax for calling Anonymus Function

    variablename ( value1 , value2 , value3 ,..... ) ; 
    or
    functionName ( value1 , value2 , value3 ,..... ) ;



#### Example :-
        let add =    function (a,b){
                return a+b;
            }

        console.log(add)            // ƒ (a,b){
                                                return a+b;
                                             }
        console.log(add())          // NaN
        console.log(add(2,3));      // 5





# Arrow Function
1. Arrow function is use to reduce number of lines of the code .
2. Arrow function is use to avoid **this** keyword conflict .
3. Arrow function allows us to increase a efficiency of a program and allows us to create cleaner-syntax.

## Rules of Arrow function
1. Whenever we use arrow function then the **function** keyword should not be used.

2. if the function is having only one statement then curly bracket **{ }** is not manadatory . 
3. if the function is having only one statement and if the one statement is return statement and we are not using curly bracket **{ }** then **return** keyword should not be used.

4. if the function is having more than one statement then curly bracket **{ }** is manadatory . 
5. if the function is having more than one statementwe then we will use curly bracket **{ }** and if the one statement is return statement then **return** keyword should be used.

6. if the function is accepting only one argunment then pranthesis (small bracket) **( )** is not manadatory .
7. if the function is accepting more than one argunment then pranthesis (small bracket) **( )** is manadatory .

8. we can write one statement or more than one statement inside curly bracket **{ }** and we can write one argunment or more than one argunment inside small bracket **( )** .
9. On any case if we need to write return statement inside curly bracket **{ }** then **return** keyword should be used.

**Note :-** We can convert an anonymus function to arrow function.
**Note :-** Rule1 , Rule8 , Rule9 are general Rule.
**Note :-** Rule2 , Rule3 , Rule6 are special Rule.


## syntax of Arrow Function 

#### if the function has more than one statement :- General Syntax

    key variablename = ( para1 , para2 , para3 ,..... ) => {
                                                                // function statement
                                                                // return statement
                                                            }

**Note :-** key = keyword :- var / let / const              fn :- function name  
**Note :-** here , variablename will work as functionName

#### if the function has only one statement

    key variablename = ( para1 , para2 , para3 ,..... ) =>  // function statement

#### if the function has zero parameter and more than one statement :- Special Case

    key variablename = () => {
                                 // function statement
                                 // return statement
                            }


#### if the function has zero parameter and only one statement :- Special Case

    key variablename = () =>  // function statement

#### if the function has single parameter and more than one statement :- Special Case

    key variablename = (para1) => {
                                 // function statement
                                 // return statement
                            }

                            or

    key variablename = para1 => {
                                 // function statement
                                 // return statement
                            }


#### if the function has zero parameter and only one statement :- Special Case

    key variablename = (para1) =>  // function statement

                            or

    key variablename = para1 =>  // function statement

#### note :- 
SIngle statement of hum curly bracket ke andr bhi likh sakte hai aur is curly bracket ke andr hum direct mtlb sigle return statement bhi likh sakte hai.


## syntax for calling Arrow Function

    variablename ( value1 , value2 , value3 ,..... ) ; 
    or
    functionName ( value1 , value2 , value3 ,..... ) ;


#### Example :-
        let add = (a,b) => {
                                return a+b;
                             }

        console.log(add)            // (a,b) => {
                                                    return a+b;
                                                }
        console.log(add())          // NaN
        console.log(add(2,3));      // 5

#### Example :-
        let add = (a,b) => a+b;

        console.log(add)            // (a,b) => a+b
        console.log(add())          // NaN
        console.log(add(2,3));      // 5










# IIFE function (self called function) :- immediately invoked function expression
1. IIFE are use to protect the data.
2. IIFE function can called only once in entire program.
3. The name of IIFE is promoted by Ben Alman.

## Anonymus Function without Name without passing parameter

#### syntax of Anonymus Function with Name with passing parameter :- we know already
    key variablename = function ( para1 , para2 , para3 ,..... ) {
                                                                    // function statement
                                                                }
#### syntax of Anonymus Function with Name without passing parameter
    key variablename = function () {
                                        // function statement
                                    }

#### syntax of Anonymus Function without Name with passing parameter
    function ( para1 , para2 , para3 ,..... ) {
                                                // function statement
                                                }

#### syntax of Anonymus Function without Name without passing parameter
    function () {
                    // function statement
                }

## Arrow Function without Name without passing parameter

#### syntax of Arrow Function with Name with passing parameter :- we know already
    key variablename = ( para1 , para2 , para3 ,..... )  => {
                                                                // function statement
                                                            }
#### syntax of Arrow Function with Name without passing parameter
    key variablename = ()  => {
                                // function statement
                                }

#### syntax of Arrow Function without Name with passing parameter
    ( para1 , para2 , para3 ,..... )  => {
                                            // function statement
                                        }

#### syntax of Arrow Function without Name without passing parameter
    ()  => {
                // function statement
            }

## async Arrow Function without Name without passing parameter

#### syntax of async Function with Name with passing parameter :- we know already
    key variablename = async ( para1 , para2 , para3 ,..... )  => {
                                                                // function statement
                                                                }

#### syntax of async Arrow Function with Name without passing parameter
    key variablename = async ()  => {
                                    // function statement
                                    }

#### syntax of async Arrow Function without Name with passing parameter
    async ( para1 , para2 , para3 ,..... )  => {
                                                // function statement
                                                }

#### syntax of async Arrow Function without Name without passing parameter
    async ()  => {
                // function statement
                }


## Rules of IIFE function
1. The first is the **anonymous function with lexical scope enclosed within the small beacket ().** This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
2. The second part creates **the immediately invoked function expression ()** through which the JavaScript engine will directly interpret the function.

**Note :-**

1.  keep **Anonymus-Function / Arrow-Function / async-Arrow-Function   without Name** inside the small beacket **()**.
2. immediate call function by **()**

## syntax of IIFE function

#### IIFE	:- anonymus function IIFE
    (   function () {
                        //  statement 
                    }   )();

**Note :-**

1.  keep **Anonymus-Function without Name ** inside the small beacket **()**.
2. immediate call function by **()**

#### Arrow function IIFE
    (   () =>       {
                        //  statement 
                    }   )();

**Note :-**

1.  keep **Arrow-Function without Name** inside the small beacket **()**.
2.  immediate call function by **()**

#### async IIFE
    (   async () => {
                        //  statement 
                    }   )();

**Note :-**

1.  keep **async-Arrow-Function  without Name** inside the small beacket **()**.
2. immediate call function by **()**



###### Example :- arrow function IIFE :- without passing parameter
            (()  => {
                    console.log("hi man");
                    })();

**output :-** "hi man"

###### Example :- arrow function IIFE :- with passing parameter

    ((a,b)  => {
                    console.log(a+b);   
                })(2,3);

**output :-** 5

###### Example :- anonymus function IIFE :- without passing parameter
            (function() {
                    console.log("hi man");
                    })();

**output :-** "hi man"

###### Example :- anonymus function IIFE :- with passing parameter

    (function(a,b){
                    console.log(a+b);   
                })(2,3);

**output :-** 5












# callBack function
1. A callback is a function which is passed as an argument to another function.
2. A callback is a function which is passed as an argument to another function which is used to handle Asynchronous of data.
3. This technique allows a function to call another function.
4. A callback function can run after another function has finished.
5. A callBack function is a function passed into another function as an argunment ,which is then involed inside the outer function to complete some kind of routine and action.

#### Example :- 
    function greeting(name) {
                                alert('Hello ' + name);
                            }

    function processUserInput(callBack) {           //note1
                                var name = prompt('Please enter your name.');
                                callBack(name);{           //note2
                            }

    processUserInput(greeting);{           //note3

###### note1 :- 
1. yaha pr **greeting** ek argunmnet ke rup me **callBack** bnkr pass kr rha hai
2. ye ek function **greeting** ko call kr rhi hai

###### note2 :- 
1. jaise hm **greeting** me name paas krte hai vaise hi **callBack**  ke andr name ko paas kr rhe hai.

###### note3 :- 
1. **processUserInput** ke andr **greeting** ko pass krte hai , yaha pr greetings callback function ke roop me kaam kr rhi hai.
2. yaha pr **greeting** **processUserInput** me argunment ke roop me paas ho rhi hai.

###### note:- 
1. function ke andr function ko call krna hi callBack function khlata hai
2. mtlb kisi ek  function ke andr kisi dusre function ko as a argument ki trh pass krna hi callBack function khlata hai

###### Note:- 
The above example is a synchronous callback, as it is executed immediately.

### Note :-
1. however, that callbacks are often used to continue code execution after an **asynchronous** operation has completed — these are called asynchronous callbacks. 
2. A good example is the callback functions executed inside a **.then()** block chained onto the end of a **promise** after that **promise** fulfills or rejects. 
3. This structure is used in many modern web APIs, such as **fetch()**.


















# Function Return
1. When JavaScript reaches a return statement, the function will stop executing.
2. If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
3. Functions often compute a return value. The return value is "returned" back to the "caller":

#### Example
**Calculate the product of two numbers, and return the result:**

    let x = myFunction(4, 3);   // Function is called, return value will end up in x

    function myFunction(a, b)   {
                                    return a * b;             // Function returns the product of a and b
                                }






# Local Variables for function
Variables declared within a JavaScript function, become LOCAL to the function.