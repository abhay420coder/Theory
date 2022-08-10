# Conditional Statements
1. if
2. if-else
3. if-else if (ladder else if)
4. nested if
5. switch

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

1. Use **if** to specify a block of code to be executed, if a specified condition is true
2. Use **else** to specify a block of code to be executed, if the same condition is false
3. Use **else if** to specify a new condition to test, if the first condition is false
4. Use **switch** to specify many alternative blocks of code to be executed

## if Statement
Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

#### syntax:- 
        if (condition) {
        //  block of code to be executed if the condition is true
        }


##  else Statement
Use the else statement to specify a block of code to be executed if the condition is false.

#### syntax:- 
        if (condition) {
        //  block of code to be executed if the condition is true
        } 
        
        else {
        //  block of code to be executed if the condition is false
        }


##  else if Statement
Use the else if statement to specify a new condition if the first condition is false.

#### syntax:- 
        if (condition1) {
        //  block of code to be executed if condition1 is true
        } 
        
        else if (condition2) {
        //  block of code to be executed if the condition1 is false and condition2 is true
        } 
        
        else {
        //  block of code to be executed if the condition1 is false and condition2 is false
        }


##  Switch Statement
Use the switch statement to select one of many code blocks to be executed.

#### syntax:- 
        switch(expression) {
                case x1:
                            // code block
                            break;
                case x2:
                            // code block
                            break;
                case x3:
                            // code block
                            break;
                case x4:
                            // code block
                            break;
                    .
                    .
                    .
                    .
                case xN:
                            // code block
                            break;
                default:
                            // code block
        }


**This is how it works:**

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.

**note :- strict comparison**
Switch cases use strict comparison (===).
The values must be of the same type to match.
A strict comparison can only be true if the operands are of the same type.



#### Common Code Blocks
Sometimes you will want different switch cases to use the same code.
In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:

###### Example
switch (new Date().getDay()) {
            case 4:
            case 5:
                        text = "Soon it is Weekend";
                        break;
            case 0:
            case 6:
                        text = "It is Weekend";
                        break;
            default:
                        text = "Looking forward to the Weekend";
}

















# looping Statements
1. while
2. do-while
3. for
4. for-in          (for index)
5. for-of          (for element)

## while loop
The while loop loops through a block of code as long as a specified condition is true.

#### syntax:- 
        while (condition) {
                    // code block to be executed
        }

#### working syntax:-  (for abhay)
        initialization ;
        while (condition) {
                    // code block to be executed

                    updation;
        }

#### example :- 
let text = " ";
let i =0;
while (i < 10) {
        text += "The number is " + i;
    console.log(text);
        i++;
}


## do while loop
1. The do while loop is a variant of the while loop. 
2. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

#### syntax:- 
            do {
                    // code block to be executed
            }
            while (condition);


#### working syntax:- (for abhay)
        initialization ;
            do {
                    // code block to be executed
                    
                    updation;
            }
            while (condition);

#### example :-
let text = " ";
let i =0;
do {
        text += "The number is " + i;
        i++;
}
while (i < 10);

## For Loop

#### syntax:- 
        for (initialization ; condition ; updation ) {
                        // code block to be executed
        }

#### working syntax:- (for abhay)  :- 1st method :- nothing is omitted

        for (initialization ; condition ; updation ) {
                        // code block to be executed
        }

#### working syntax:- (for abhay)  :- 2nd method :- initialization is omitted

        initialization ;
        for ( ; condition ; updation ) {
                        // code block to be executed
        }

#### working syntax:- (for abhay)  :- 3rd method :- updation is omitted

        for (initialization ; condition ;  ) {
                        // code block to be executed
                        updation;
        }

#### working syntax:- (for abhay)  :- 3rd method :- initialization and updation are omitted

        initialization ;
        for ( ; condition ;  ) {
                        // code block to be executed
                        updation;
        }

#### example :-
for (let i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}

#### example :-
let i = 2;
let len = cars.length;
let text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}

#### example :-
let i = 0;
let len = cars.length;
let text = "";
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}










## For in Loop

#### syntax:- 
        for (index in object ) {
                        // code block to be executed
        }

object may be object , array , map , set , string , nodeList ,etc.

###### Note for array

1. Do not use for in over an Array if the index order is important.
2. The index order is **implementation-dependent**, and array values may not be accessed in the order you expect.

3. It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

**example**

const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];            
}

//**output :-**   '45491625'

// here x is working like index  and numbers[x] is working like element of array here we can use normal-for-loop / for-of / for-each









## For of Loop

#### syntax:- 
        for (element of object ) {
                        // code block to be executed
        }

object may be object , array , map , set , string , nodeList ,etc.

#### example :-
let x = "Abhay";
for(let element of x)console.log(element + "\n");
//**output :-**     A
                    b
                    h
                    a
                    y


#### example :-
let x =[45, 4, 9, 16, 25];
for(let element of x)console.log(element + "\n");
//**output :-**     45
                    4
                    9
                    16
                    25