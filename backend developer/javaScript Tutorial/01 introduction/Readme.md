### What is Java Script


#### Java-Script
JavaScript is a scripting or programming language that allows you to implement complex features on web pages.

JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.) 

JavaScript is the programming language we use to add interactivity to web sites, from dynamic style switching, to fetching updates from the server, right through to complex 3D graphics. 

#### HTML
HTML is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.

#### CSS
CSS is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.

#### one example 
If we adopted a house-building analogy, HTML would be like the foundations and walls of the house, which give it structure and hold it together.

In the house analogy, CSS is like the paint, wallpaper, carpets and paintings you'd use to make the house look nice.

In the house analogy, JavaScript is like the cooker, TV, Microwave, or hairdryer — the things that give your house useful functionality








### Server-side languages and frameworks

#### client-side
HTML, CSS, and JavaScript are front-end (or client-side) languages, which means they are run by the browser to produce a website front-end that your users can use.

#### client-side
There are another class of languages called back-end (or server-side) languages, meaning that they are run on the server before the result is then sent to the browser to be displayed. 

A typical use for a server-side language is to get some data out of a database and generate some HTML to contain the data, before then sending the HTML over to the browser to display it to the user.

Example server-side languages include ASP.NET, Python, PHP, and NodeJS.






### JavaScript running order
When the browser encounters a block of JavaScript, it generally runs it in order, from top to bottom. 

    const para = document.querySelector('p');

    para.addEventListener('click', updateName);

    function updateName() {
    const name = prompt('Enter a new name');
    para.textContent = `Player 1: ${name}`;
    }

Here we are selecting a text paragraph (line 47), 
then attaching an event listener to it (line 49) 
so that when the paragraph is clicked, the updateName() code block (lines 51–54) is run. 


The updateName() code block (these types of reusable code blocks are called "functions") asks the user for a new name, and then inserts that name into the paragraph to update the display.

**Note :- If you swapped the order of the first two lines of code, it would no longer work — instead, you'd get an error returned in the browser developer console — TypeError: para is undefined. This means that the para object does not exist yet, so we can't add an event listener to it.**







#### one example as a programme
Let’s take one example :- index.html 

Create one file :- index.html 
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>JavaScript label example</title>
 <!-- This is My css (internal css)   -- starting point --> 
    <style>
      p {
        font-family: 'helvetica neue', helvetica, sans-serif;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-align: center;
        border: 2px solid rgba(0,0,200,0.6);
        background: rgba(0,0,200,0.3);
        color: rgba(0,0,200,0.6);
        box-shadow: 1px 1px 2px rgba(0,0,200,0.4);
        border-radius: 10px;
        padding: 3px 10px;
        display: inline-block;
        cursor: pointer;
      }
    </style>
    <!-- This is My css (internal css)   -- ending point --> 
  </head>
  <body>
    <p>Player 1: Chris</p>
     <!-- This is My javaScript (internal css)  -- starting point -->
    <script>
      const para = document.querySelector('p');

      para.addEventListener('click', updateName);

      function updateName() {
        const name = prompt('Enter a new name');
        para.textContent = `Player 1: ${name}`;
      }
</script>
<!-- This is My javaScript (internal css)  -- ending point -->
  </body>
</html>








### Interpreted versus compiled code
You might hear the terms interpreted and compiled in the context of programming.

#### Interpreted code
In interpreted languages, the code is run from top to bottom and the result of running the code is immediately returned. 
You don't have to transform the code into a different form before the browser runs it. The code is received in its programmer-friendly text form and processed directly from that.

#### Compiled code
Compiled languages on the other hand are transformed (compiled) into another form before they are run by the computer. 
For example, C/C++ are compiled into machine code that is then run by the computer. 
The program is executed from a binary format, which was generated from the original program source code.

#### JavaScript is a lightweight interpreted programming language. 
The web browser receives the JavaScript code in its original text form and runs the script from that.

 From a technical standpoint, most modern JavaScript interpreters actually use a technique called just-in-time compiling to improve performance; the JavaScript source code gets compiled into a faster, binary format while the script is being used, so that it can be run as quickly as possible. 

However, JavaScript is still considered an interpreted language, since the compilation is handled at run time, rather than ahead of time.







### Server-side versus client-side code
You might also hear the terms server-side and client-side code, especially in the context of web development.

#### Client-side code
Client-side code is code that is run on the user's computer — when a web page is viewed, the page's client-side code is downloaded, then run and displayed by the browser.

#### Server-side code
Server-side code on the other hand is run on the server, then its results are downloaded and displayed in the browser. 
Examples of popular server-side web languages include PHP, Python, Ruby, ASP.NET, and even JavaScript!

#### JavaScript as a server-side language
JavaScript can also be used as a server-side language, for example in the popular Node.js environment.








### Dynamic versus static code

#### Dynamic code
The word dynamic is used to describe both client-side JavaScript, and server-side languages — 
it refers to the ability to update the display of a web page/app to show different things in different circumstances, generating new content as required.

Server-side code dynamically generates new content on the server, e.g. pulling data from a database, 
whereas client-side JavaScript dynamically generates new content inside the browser on the client, e.g. creating a new HTML table, filling it with data requested from the server, then displaying the table in a web page shown to the user. 

The meaning is slightly different in the two contexts, but related, and both approaches (server-side and client-side) usually work together.

#### Static — code
A web page with no dynamically updating content is referred to as static — it just shows the same content all the time.



















