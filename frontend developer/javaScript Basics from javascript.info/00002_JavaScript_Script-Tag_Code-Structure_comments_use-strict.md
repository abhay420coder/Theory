# The “script” tag

* JavaScript programs can be inserted almost anywhere into an HTML document using the `<script>` tag.
  
    ```html
        <!DOCTYPE HTML>
        <html>

        <body>

        <p>Before the script...</p>

        <script>
            alert( 'Hello, world!' );
        </script>

        <p>...After the script.</p>

        </body>

        </html>
    ```

## internal Script

JavaScript in `<head>` or `<body>`
You can place any number of scripts in an HTML document.

Scripts can be placed in the `<body>`, or in the `<head>` section of an HTML page, or in `both`.

Placing scripts at the bottom of the `<body>` element improves the display speed, because script interpretation slows down the display.

### in the head

```html
<!DOCTYPE html>
<html>
<head>
    <script>
        function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
        }
    </script>
</head>
<body>
    <h2>Demo JavaScript in Head</h2>
    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>
</body>
</html>
```

### in the body

```html
<!DOCTYPE html>
<html>
<body>
    <h2>Demo JavaScript in Body</h2>
    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>
    <script>
        function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
        }
    </script>
</body>
</html>
```

## External scripts

* If we have a lot of JavaScript code, we can put it into a separate file.
* Script files are attached to HTML with the src attribute:
  
    ```html
        <script src="/path/to/script.js"></script>
    ```

* Here, `/path/to/script.js` is an absolute path to the script from the site root.
* One can also provide a relative path from the current page.
* For instance, `src="script.js"`, just like `src="./script.js"`,
  * would mean a file "script.js" in the current folder.

* We can give a full URL as well. For instance:

    ```html
        <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
    ```

* To attach several scripts, use **multiple tags**:

    ```html
        <script src="/js/script1.js"></script>
        <script src="/js/script2.js"></script>
        ....
    ```

### in the head

```html
<!DOCTYPE html>
<html>
<head>
    <script src="/js/script1.js"></script>
    <script src="/js/script2.js"></script>
</head>
<body>
    <h2>Demo JavaScript in Head</h2>
    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>
</body>
</html>
```

### in the body

```html
<!DOCTYPE html>
<html>
<body>
    <h2>Demo JavaScript in Body</h2>
    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>
    <script src="/js/script1.js"></script>
    <script src="/js/script2.js"></script>

</body>
</html>
```

## If src is set, the script content is ignored

A single `<script>` tag can’t have both the src attribute and code inside.

This won’t work:

```html
<script src="file.js">
  alert(1); // the content is ignored, because src is set
</script>
```

We must choose either an external `<script src="…">` or a regular `<script>` with code.

The example above can be split into two scripts to work:

```html
<script src="file.js"></script>
<script>
  alert(1);
</script>
```

# Code structure

## Statements

* Statements are syntax constructs and commands that perform actions.
* We’ve already seen a statement, `alert('Hello, world!')`, which shows the message “Hello, world!”.
* We can have as many statements in our code as we want. Statements can be separated with a semicolon.
* For example, here we split “Hello World” into two alerts:
    `alert('Hello'); alert('World');`
* Usually, statements are written on separate lines to make the code more readable:

    ```js
        alert('Hello');
        alert('World');
    ```

## Semicolons

* A semicolon may be omitted in most cases when a line break exists.
* This would also work:

    ```ts
    alert('Hello')
    alert('World')
    ```

* Here, JavaScript interprets the line break as an “implicit” semicolon. 
* This is called an automatic semicolon insertion.
  
**In most cases, a newline implies a semicolon. But “in most cases” does not mean “always”!**
* There are cases when a newline does not mean a semicolon. For example:

    ```ts
        alert(3 +
        1
        * 2);
    ```

* The code outputs 6 because JavaScript does not insert semicolons here. 
* It is intuitively obvious that if the line ends with a plus "+", 
    * then it is an “incomplete expression”, 
    * so a semicolon there would be incorrect. 
* And in this case, that works as intended.

**But there are situations where JavaScript “fails” to assume a semicolon where it is really needed.**
* Errors which occur in such cases are quite hard to find and fix.

# JavaScript Comments

* JavaScript comments can be used to explain JavaScript code, and to make it more readable.
* JavaScript comments can also be used to prevent execution, when testing alternative code.

```js
// single Line Comment

// Multi 
// Line 
// Comment

/*
Multi
Line 
Comment
*/
```


# Naming Convwntion 

* camelCase
* snake_case
* PascalCase
* hyphens-case

# “use strict”

* The directive looks like a string: `"use strict"` or `'use strict'`. 
* When it is located at the top of a script, the whole script works the “modern” way.

For example:

```js
"use strict";

// this code works the modern way
...

```

* Please make sure that `"use strict"` is at the top of your scripts, otherwise strict mode may not be enabled.

* There’s no way to cancel use strict
* There is no directive like "no use strict" that reverts the engine to old behavior.
* Once we enter strict mode, there’s no going back.

## `"use strict"` in Browser console

* When you use a developer console to run code, 
  * please note that it doesn’t use strict by default.

* Sometimes, 
  * when use strict makes a difference, 
  * you’ll get incorrect results.

* So, how to actually use strict in the console?

* First, 
  * you can try to press `Shift+Enter` to input multiple lines, 
  * and put use strict on top, like this:

* you can try to press `Shift+Enter` to input multiple lines



```js
'use strict'; 
<Shift+Enter for a newline>
//  ...your code
<Enter to run the code>
```

## Should we “use strict”?

* The question may sound obvious, but it’s not so.

* One could recommend to start scripts with "use strict"… But you know what’s cool?

* Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable use strict automatically. 
* **So we don’t need to add the "use strict" directive, if we use them.**