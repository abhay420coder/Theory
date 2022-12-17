# How do you add JavaScript to your page?
JavaScript is applied to your HTML page in 3 ways (internal , external , inline).


### Internal JavaScript

##### The <script> Tag
In HTML, JavaScript code is inserted between <script> and </script> tags.
You can place any number of scripts in an HTML document.
Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.

##### JavaScript in <head>
In this example, a JavaScript function is placed in the <head> section of an HTML page.
The function is invoked (called) when a button is clicked:

<!DOCTYPE html>
<html>
<head>
<script>
            function myFunction() {
              document.getElementById("demo").innerHTML = "Paragraph changed.";
            }
</script>
</head>
<body>
        <h2>Demo JavaScript in Head</h2>

            <p id="demo">A Paragraph</p>
            <button type="button" onclick="myFunction()">Try it</button>
</body>
</html>

##### JavaScript in <body>
In this example, a JavaScript function is placed in the <body> section of an HTML page.
The function is invoked (called) when a button is clicked:

<!DOCTYPE html>
<html>
<body>

<h2>Demo JavaScript in Body</h2>

<p id="demo">A Paragraph</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
            function myFunction() {
              document.getElementById("demo").innerHTML = "Paragraph changed.";
            }
</script>

</body>
</html>


**Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.**

### External JavaScript

This works great, but what if we wanted to put our JavaScript in an external file? 

Let's explore this now.

1. First, create a new file in the same directory as your sample HTML file. Call it script.js — make sure it has that .js filename extension, as that's how it is recognized as JavaScript.

2. Replace your current <script> element with the following:
                <script src="script.js" defer></script>

3. Inside script.js, add the following script:

                function createParagraph() {
                  const para = document.createElement('p');
                  para.textContent = 'You clicked the button!';
                  document.body.appendChild(para);}
                const buttons = document.querySelectorAll('button');
                for (const button of buttons) {
                  button.addEventListener('click', createParagraph);
                }

4. Save and refresh your browser, and you should see the same thing! 

It works just the same, but now we've got our JavaScript in an external file. 

###### Benefits of external javaScript File :- 
    This is generally a good thing in terms of organizing your code and making it reusable across multiple HTML files. 
    Plus, the HTML is easier to read without huge chunks of script dumped in it.




### Inline JavaScript handlers
Note that sometimes you'll come across bits of actual JavaScript code living inside HTML. It might look something like this:
<script>
function createParagraph() {
  const para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}
</script>


<button onclick="createParagraph()">Click me!</button>


This demo has exactly the same functionality as in the previous two sections, except that the <button> element includes an inline onclick handler to make the function run when the button is pressed.


**Please don't do this, however. It is bad practice to pollute your HTML with JavaScript, and it is inefficient — you'd have to include the onclick="createParagraph()" attribute on every button you want the JavaScript to apply to.**




### Using addEventListener instead of inline javaScript
Instead of including JavaScript in your HTML, use a pure JavaScript construct. 
The querySelectorAll() function allows you to select all the buttons on a page. 
You can then loop through the buttons, assigning a handler for each using addEventListener(). 

The code for this is shown below:

        const buttons = document.querySelectorAll('button');
        for (const button of buttons) {
          button.addEventListener('click', createParagraph);
          }


This might be a bit longer than the onclick attribute, but it will work for all buttons — no matter how many are on the page, nor how many are added or removed. 

The JavaScript does not need to be changed.















# Comment in JavaScript

#### single line comment
A single line comment is written after a double forward slash (//), e.g.

// I am a comment

#### multi line comment
A multi-line comment is written between the strings /* and */, e.g.

/*
  I am also
  a comment
*/










# JavaScript Output
JavaScript can "display" data in different ways:

**innerHTML**  :-         Writing into an HTML element, using innerHTML .
**document.write()** :-   Writing into the HTML output using document.write() .
**window.alert()** :-     Writing into an alert box, using window.alert() .
**console.log()** :-      Writing into the browser console, using console.log() .
**window.print()** :-     print the content of the current window, using window.print() .




#### Using innerHTML
To access an HTML element, JavaScript can use the document.getElementById(id) method.

The id attribute defines the HTML element. The innerHTML property defines the HTML content:

###### Example
<!DOCTYPE html>
<html>
      <body>
            <h1>My First Web Page</h1>
            <p>My First Paragraph</p>
            <p id="demo"></p>
                <script>
                        document.getElementById("demo").innerHTML = 5 + 6;
                </script>
      </body>
</html>
Changing the innerHTML property of an HTML element is a common way to display data in HTML.




#### Using document.write()
Using document.write() For testing purposes, it is convenient to use document.write():

###### Example
<!DOCTYPE html>
<html>
    <body>
        <h1>My First Web Page</h1>
        <p>My first paragraph.</p>
        <script>
                document.write(5 + 6);
        </script>
    </body>
</html>




#### Using document.write() 
Using document.write() after an HTML document is loaded, will delete all existing HTML:

###### Example:- 
<!DOCTYPE html>
<html>
      <body>
            <h1>My First Web Page</h1>
            <p>My first paragraph.</p>
            <button type="button" onclick="document.write(5 + 6)">Try it</button>
      </body>
</html>

**The document.write() method should only be used for testing.**




#### Using window.alert()
You can use an alert box to display data:

###### Example:- 
<!DOCTYPE html>
<html>
    <body>
          <h1>My First Web Page</h1>
          <p>My first paragraph.</p>
          <script>
                    window.alert(5 + 6);
          </script>
    </body>
</html>

**You can skip the window keyword.**

In JavaScript, the **window object is the global scope object**, that means that variables, properties, and methods by default belong to the window object. This also means that specifying the **window** keyword is optional:

###### Example
<!DOCTYPE html>
<html>
    <body>
          <h1>My First Web Page</h1>
          <p>My first paragraph.</p>
          <script>
                  alert(5 + 6);
          </script>
    </body>
</html>




#### Using console.log()
For debugging purposes, you can call the console.log() method in the browser to display data.

###### Example
<!DOCTYPE html>
<html>
    <body>
        <script>
                  console.log(5 + 6);
        </script>
    </body>
</html>

**The console.log() method should only be used for testing.**


#### Using window.print()
JavaScript Print
    JavaScript does not have any print object or print methods.
    You cannot access output devices from JavaScript.
    The only exception is that you can call the window.print() method in the browser to print the content of the current window.

###### Example
<!DOCTYPE html>
<html>
    <body>
        <button onclick="window.print()">Print this page</button>
    </body>
</html>










# JavaScript Statements

#### JavaScript Statements
A computer program is a list of "instructions" to be "executed" by a computer.
In a programming language, these programming instructions are called **statements**.
**A JavaScript program is a list of programming statements.**
In HTML, JavaScript programs are executed by the web browser.
JavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments.
**JavaScript programs (and JavaScript statements) are often called JavaScript code.**

###### Example
let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4




#### Semicolons separate JavaScript statements.
Add a semicolon at the end of each executable statement:
On the web, you might see examples without semicolons.
Ending statements with semicolon is not required, 
but **Add a semicolon at the end of each executable statement** highly recommended.

###### Example
let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c

a = 5; b = 6; c = a + b;      <!-- When separated by semicolons, multiple statements on one line are allowed: -->




#### JavaScript ignores multiple spaces

###### Example
 let person = "Hege";
 let person="Hege";

**A good practice is to put spaces around operators ( = + - * / )**

#### JavaScript Line Length and Line Breaks
For best readability, programmers often like to avoid code lines longer than 80 characters.
If a JavaScript statement does not fit on one line, the best place to break it is after an operator:

###### Example
document.getElementById("demo").innerHTML =
"Hello Dolly!";




#### JavaScript Code Blocks
JavaScript statements can be grouped together in code blocks, inside curly brackets **{...}**.
The purpose of code blocks is to define statements to be executed together.

One place you will find statements grouped together in blocks, is in JavaScript functions:

###### Example
function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}










## JavaScript Keywords
JavaScript statements often start with a keyword to identify the JavaScript action to be performed.
Our Reserved Words Reference lists all JavaScript keywords.

Here is a list of some of the keywords you will learn about in this tutorial:

**Keyword**	                  **Description**
var	                    Declares a variable
let	                    Declares a block variable
const	                  Declares a block constant
if	                    Marks a block of statements to be executed on a condition
switch	                Marks a block of statements to be executed in different cases
for	                    Marks a block of statements to be executed in a loop
function	              Declares a function
return	                Exits a function
try	                    Implements error handling to a block of statements


**JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.**









# variable in javaScript

A variable is a container for a value.
Variables are containers for storing data (storing data values).

### 4 Ways to Declare a JavaScript Variable:
1. Using var
2. Using let
3. Using const
4. Using nothing

#### Using var
In this example, x, y, and z, are variables, declared with the var keyword:

###### Example
var x = 5;
var y = 6;
var z = x + y;

#### Using let
In this example, x, y, and z, are variables, declared with the let keyword:

###### Example
let x = 5;
let y = 6;
let z = x + y;

#### Using const
In this example, x, y, and z, are variables, declared with the const keyword:

###### Example
const x = 5;
const y = 6;
const z = x + y;

#### Undeclared variable
In this example, x, y, and z, are undeclared variables:

###### Example
x = 5;
y = 6;
z = x + y;













### difference between var , let and const:

####    properties                          var                           let                         const
          scope                           function                       block                        block 
        declaration                         Yes                           Yes                          No 
      initialization                        Yes                           Yes                          No 
declaration & initialization                Yes                           Yes                          Yes
      Re-declaration                        Yes                           No                           No 
      Re-initialization                     Yes                           Yes                          No 
Re-declaration & Re-initialization          Yes                           No                           No 

**JavaScript const variables must be assigned a value when they are declared**


**Note**  when we declare the variable with "var" keyword inside the Non-function-blocks 
          then the scope of variables is not limited to the blocks.

**Note**  when we declare the variable with "var" keyword inside the function-blocks 
          then the scope of variables is limited to the function-blocks.

**Note**  when we declare the variable with "let" & "const" keyword inside the any blocks 
          (Non-function-blocks or function-blocks) then the scope of variables is limited to the blocks.

**Note**  function-blocks is also a block
**Note**  Example of Non-function-blocks :- if , else , else-if , switch , for , while , do-while    etc. 

###### declaration **VS** initialization **VS** declaratio & initialization **VS** re-declaration **VS** re-initialization **VS** re-declaration & re-initialization

**variableKeyword :- var / let / const**

variableKeyword a ;         **declaration**  // a is declaring
a = 10;                     **initialization**  // a is initializing
variableKeyword b = 20 ;    **declaration & initialization** // b is declaring & initializing

variableKeyword a;          **re-declaration**  // a is re-declaring
variableKeyword b;          **re-declaration**  // b is re-declaring

a = 11;                     **re-initialization**  // a is re-initializing
b = 21;                     **re-initialization**  // b is re-initializing

variableKeyword a = 12 ;    **re-declaration & re-initialization**  // a is re-declaring & re-initializing
variableKeyword b = 22 ;    **re-declaration & re-initialization**  // b is re-declaring & re-initializing

###### Redeclaring an existing var or let variable to const, in the same scope, is not allowed:
{
  var x = 2;     // Allowed
  const x = 2;   // Not allowed
}

{
  let x = 2;     // Allowed
  const x = 2;   // Not allowed
}

{
  const x = 2;   // Allowed
  const x = 2;   // Not allowed
}


###### Function-Scope vs Block-Scope

{
  // block scope    
}


any block starting with open-curly-bracket **{**  any block ending with close-curly-bracket **}**

function-block always working as a function. 


### When to use JavaScript const?

As a general rule, always declare a **variable** with **const** unless **you know that the value will change**.

    Use const when you declare:

1. A new Array
2. A new Object
3. A new Function
4. A new 























