# JavaScript basics

* JavaScript is a programming language that adds interactivity to your website.

# What is JavaScript?

* JavaScript is a powerful programming language that can add interactivity to a website.
* It was invented by Brendan Eich.

* JavaScript is versatile and beginner-friendly.
* With more experience,
  * you'll be able to create
    * games,
    * animated 2D and 3D graphics,
    * comprehensive database-driven apps,
    * and much more!

* JavaScript itself is relatively compact, yet very flexible.
* Developers have written a variety of tools on top of the core JavaScript language,
  * unlocking a vast amount of functionality with minimum effort.
  * These include:
    * Browser **Application Programming Interfaces** (APIs) built into web browsers,
      * providing functionality such as dynamically creating HTML and setting CSS styles;
      * collecting and manipulating a video stream from a user's webcam,
      * or generating 3D graphics and audio samples.
    * **Third-party APIs**
      * that allow developers to incorporate functionality in sites from other content providers,
      * such as Twitter or Facebook.
    * **Third-party frameworks and libraries**
      * that you can apply to HTML to accelerate the work of building sites and applications.

# A "Hello world!" example

**step-1**

* create a project or folder which name is `test-site`
* inside `test-site` create folder which is isted below.
  * scripts
  * styles
  * images
  * videos
  * songs
* inside `test-site` create file `index.html`.
* in `index.html` write below code

  ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>

    </body>
    </html>
  ```

**step-2**

* Go to your test site and create a new folder named scripts.
* Within the scripts folder, create a new text document called `main.js`, and save it.

**step-3**

* In your `index.html` file,
  * enter this code on a new line, just before the closing `</body>` tag
  
  ```html
    <script src="scripts/main.js"></script>
  ```

**step-4**

* This is doing the same job as the `<link>` element for CSS.
* It applies the JavaScript to the page,
  * so it can have an effect on the HTML (along with the CSS, and anything else on the page).

**step-5**

* Add this code to the `main.js` file

  ```js
    const myHeading = document.querySelector("h1");
    myHeading.textContent = "Hello world!";
  ```

**step-6**

index.html

```html
  <!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>

  <body>
      <script src="./scripts/main.js"></script>
  </body>

  </html>
```

main.js

```js
  let myBody = document.querySelector("body");
  let myHeading = document.createElement("h1")
  myHeading.innerHTML=`<p>Hi my name is abhay Kumar</p>`
  myBody.appendChild(myHeading)
```

![view](./image/03001javaScriptBasics/2022-12-08-16-56-32.png)

# Language basics crash course

## Variables

* Variables are containers that store values
* You start by declaring a variable with the `let` or `var` keyword, followed by the name you give to the variable:
  
  ```js
  let myVariable;
  let myDog = "tommy";
  var myCat = "sweety";
  var myCow;
  ```

* JavaScript is case sensitive. This means myVariable is not the same as myvariable. If you have problems in your code, check the case!

## semicolon

* A semicolon at the end of a line indicates where a statement ends.
* It is only required when you need to separate statements on a single line.

### Required: When two statements are on the same line

The **semicolon is only obligatory when you have two or more statements on the same line**:

```js
  var i = 0; i++        // <-- semicolon obligatory(requiered)
                        //     (but optional before newline)
  var i = 0             // <-- semicolon optional
      i++               // <-- semicolon optional
```

### Optional: After statements

* The semicolon in JavaScript is used to separate statements,
  * but it can be omitted if the statement is followed by a line break (or there’s only one statement in a `{`block`}`).
* A statement is a piece of code that tells the computer to do something.
* Here are the most common types of statements:

```js
  var i;                        // variable declaration
  i = 5;                        // value assignment
  i = i + 1;                    // value assignment
  i++;                          // same as above
  var x = 9;                    // declaration & assignment
  var fun = function() {...};   // var decl., assignmt, and func. defin.
  alert("hi");                  // function call
```

* All of these statements can end with a `;` but none of them must.
* Some consider it a good habit to terminate each statement with a `;`
  * – that makes your code a little easier to parse, and to compress:
    * if you remove line breaks you needn't worry about several statements ending up unseparated on the same line.

### Avoid to use semicolon , "After a closing curly bracket"

* You shouldn’t put a semicolon after a closing curly bracket `}`.
* The only exceptions are assignment statements, such as `var obj = {};`,

```js
  // NO semicolons after }:
  if  (...) {...} else {...}
  for (...) {...}
  while (...) {...}

  // BUT:
  do {...} while (...);

  // function statement: 
  function (arg) { /*do this*/ } // NO semicolon after }
```

### Avoid to use semicolon ," After the round bracket of an if, for, while or switch statement"

* It won't harm to put a semicolon after the `{ }` of an `if` statement
  * (it will be ignored, and you might see a warning that it's unnecessary).
* But a semicolon where it doesn't belong (such as after the round `(`brackets`)` of an `if`, `for`, `while`, or `switch` statement) is a very bad idea:

```js
  if (0 === 1); { alert("hi") }

  // equivalent to:

  if (0 === 1) /*do nothing*/ ;
  alert ("hi");  // This code will alert "hi", but not because 0 equals 1, but because of the semicolon.
```

* This code will alert "hi", but not because 0 equals 1, but because of the semicolon.
* It makes JavaScript think that you have an empty statement there,
  * and everything to the right of it is treated as no longer belonging to the `if` conditional and thus independent of it.

## Data-Types

### String

* This is a sequence of text known as a string.
* To signify that the value is a string, enclose it in single quote marks.
* Example :- `let myVariable = 'Bob';`

### Number

* This is a number.
* Numbers don't have quotes around them.
* Example :- `let myVariable = 10;`

### Boolean

* This is a True/False value.
* The words true and false are special keywords that don't need quote marks.
* Example :- `let myVariable = true;`

### Array

* This is a structure that allows you to store multiple values in a single reference.
* Example :- `let myVariable = [1,'Bob','Steve',10];`
* Refer to each member of the array like this: `myVariable[0]`, `myVariable[1]`, etc.

### Object

* This can be anything.
* Everything in JavaScript is an object and can be stored in a variable.
* Keep this in mind as you learn.
* Example :- `let myVariable = document.querySelector('h1');`
* All of the above examples too.

## Comments

```ts
/*
Everything in between is a comment.
Multi Line Comment 
*/

// This is a comment :- 
// Single Line Comment 
```

## Operators

* An `operator` is a mathematical symbol
  * that produces a result based on two values (or variables).

### Addition

**Explanation :-**

* Add two numbers together or combine two strings.
  
**Symbol :-**   `+`

**Example :-**
`6 + 9;`
`'Hello ' + 'world!';`

### Subtraction, Multiplication, Division

**Explanation :-**

* These do what you'd expect them to do in basic math.
  
**Symbol :-**   `-`, `*`, `/`

**Example :-**
`9 - 3;`
`8* 2; // multiply in JS is an asterisk`
`9 / 3;`

### Assignment

**Explanation :-**

* As you've seen already: this assigns a value to a variable.
  
**Symbol :-**   `=`

**Example :-**
`let myVariable = 'Bob';`

### Strict equality

**Explanation :-**

* This performs a test to see if two values are equal.
* It returns a `true`/`false` (Boolean) result.
  
**Symbol :-**   `===`

**Example :-**
`let myVariable = 3;`
`myVariable === 4;`

### Not, Does-not-equal

**Explanation :-**

* This returns the logically opposite value of what it precedes.
* It turns a `true` into a `false`, etc..
* When it is used alongside the Equality operator,
  * the negation operator tests whether two values are not equal.
  
**Symbol :-**   `!`, `!==`

**Example :-**
For "Not", the basic expression is `true`, but the comparison returns `false` because we negate it:

`let myVariable = 3;`
`!(myVariable === 3);`

"Does-not-equal" gives basically the same result with different syntax.
Here we are testing "is `myVariable` NOT equal to 3".
This returns `false` because `myVariable` IS equal to 3:

`let myVariable = 3;`
`myVariable !== 3;`

## Conditionals

* Conditionals are code structures used to test if an expression returns true or not. A very common form of conditionals is the `if...else` statement. For example:

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
```

**Explanations :-**

* The expression inside the `if ()` is the test.
* This uses the strict equality operator (as described above) to compare the variable `iceCream` with the string `chocolate` to see if the two are equal.
* If this comparison returns `true`, the first block of code runs.
* If the comparison is not true, the second block of code—after the `else` statement—runs instead.

## Functions

* Functions are a way of packaging functionality that you wish to reuse.
* It's possible to define a body of code as a function that executes when you call the function name in your code.
* This is a good alternative to repeatedly writing the same code.

### built-in function

```js
let myVariable = document.querySelector("h1");
alert("hello!");
```

* These functions, `document.querySelector` and `alert`, are built into the browser.

### user defined function

```ts
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

console.log(multiply(4, 7));
console.log(multiply(20, 20));
console.log(multiply(0.5, 3));
```

## Events

* Real interactivity on a website requires event handlers.
* These are code structures that listen for activity in the browser,
  * and run code in response.
* The most obvious example is handling the click event,
  * which is fired by the browser
    * when you click on something with your mouse.
* To demonstrate this,
  * enter the following into your console,
  * then click on the current webpage:-
  
```ts
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});

//              or

document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
```

### Adding an image changer

1. Choose an image you want to feature on your example site. Ideally, the image will be the same size as the image you added previously, or as close as possible.
2. Save this image in your images folder.
3. Rename the image firefox2.png.
4. Add the following JavaScript code to your main.js file.

    ```js
      const myImage = document.querySelector("img");

      myImage.onclick = () => {
        const mySrc = myImage.getAttribute("src");
        if (mySrc === "images/firefox-icon.png") {
          myImage.setAttribute("src", "images/firefox2.png");
        } else {
          myImage.setAttribute("src", "images/firefox-icon.png");
        }
      };
    ```
5. Save all files and load index.html in the browser. Now when you click the image, it should change to the other one.
   
**Explanation :-**

1. The code retrieves the value of the image's `src` attribute.
2. The code uses a conditional to check if the `src` value is equal to the path of the original image:
   1. If it is, the code changes the `src` value to the path of the second image, forcing the other image to be loaded inside the `<img>` element.
   2. If it isn't (meaning it must already have changed), the `src` value swaps back to the original image path, to the original state.


### Adding a personalized welcome message

Next, let's change the page title to a personalized welcome message when the user first visits the site. This welcome message will persist. Should the user leave the site and return later, we will save the message using the Web Storage API. We will also include an option to change the user, and therefore, the welcome message.

1. In `index.html`, add the following line just before the `<script>` element:

    ```html
      <button>Change user</button>
    ```

2. In `main.js`, place the following code at the bottom of the file, exactly as it is written. This takes references to the new button and the heading, storing each inside variables:

    ```js
      let myButton = document.querySelector("button");
      let myHeading = document.querySelector("h1");
    ```

3. Add the following function to set the personalized greeting. This won't do anything yet, but this will change soon.

    ```js
      function setUserName() {
        const myName = prompt("Please enter your name.");
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
      }
    ```

     * The `setUserName()` function contains a `prompt()` function, 
       * which displays a dialog box, similar to `alert()`. 
     * This `prompt()` function does more than `alert()`, 
       * asking the user to enter data, 
       * and storing it in a variable after the user clicks _OK_. 
     * In this case, 
       * we are asking the user to enter a name. 
     * Next, 
       * the code calls on an API `localStorage`, 
       * which allows us to store data in the browser 
       * and retrieve it later. 
     * We use localStorage's `setItem()` function to create and store a data item called `'name'`, 
       * setting its value to the `myName` variable 
       * which contains the user's entry for the name. 
     * Finally, 
       * we set the `textContent` of the heading to a string, plus the user's newly stored name.

4. Add the following condition block. We could call this initialization code, as it structures the app when it first loads.

    ```js
      if (!localStorage.getItem("name")) {
        setUserName();
      } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla is cool, ${storedName}`;
      }
    ```

     * This first line of this block uses the negation operator (logical NOT, represented by the `!`) to check whether the `name` data exists. 
     * If not, the `setUserName()` function runs to create it. 
     * If it exists (that is, the user set a user name during a previous visit), 
       * we retrieve the stored name using `getItem()` 
       * and set the `textContent` of the heading to a string, plus the user's name, as we did inside `setUserName()`.

5. Put this `onclick` event handler (below) on the button. When clicked, `setUserName()` runs. This allows the user to enter a different name by pressing the button.

    ```ts
      myButton.onclick = () => {
        setUserName();
      };
    ```







