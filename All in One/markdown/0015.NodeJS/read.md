What is Node.js: A Comprehensive Guide

Lesson 2 of 9By Taha Sufiyan

Last updated on Feb 3, 202375486

What is Node.js: A Comprehensive Guide

PreviousNext

Table of Contents

What is Node.js?Why Do We Use NodeJs?Features of NodeJsNode.js ArchitectureParts of Node.jsView More

If we talk about any application then the part with which the user is interacting is basically the frontend of our website whereas there are many things which happen in the background or in the backend of our website. Basically there are three parts of any application, one is Frontend with which the users are interacting, then comes to the backend server and backend database. For backend servers we can use NodeJS, Java, Python, etc. and for backend databases we use relational or non-relational databases.

Now let us first know what NodeJS is.

Whenever a client requests something from the client side of the application what happens is , the request is first sent to the server and then in that server some processing or calculations goes on for the validation of the client side request and after doing all such validation a response is sent to the client side. Basically for doing all such calculations and processing , this NodeJs framework of JavaScript is used.

For running our web applications outside the client’s browser , NodeJS is basically used as an open-source and cross platform JavaScript runtime environment.For running the server side applications we use this.For building the I/O intensive applications like video streaming sites ,online chatting applications and many other applications , it is used. Many established tech giant companies and newly created start-ups are using NodeJs framework in their company.

In 2009, NodeJs was developed by a guy called Ryan Dahla and the current version of NodeJs is v16.9.0.

Ranked No.1 Best Coding Bootcamp, our Post Graduate Program in Full Stack Web Development, can help you accelerate your career as a software developer. Enroll today!

What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.

Now that we know what is Node, let's look at why it is so prevalent in web development.

Learn from the Best in the Industry!

Caltech PGP Full Stack DevelopmentEXPLORE PROGRAMLearn from the Best in the Industry!

Why Do We Use NodeJs?

There are many reasons for which we prefer using NodeJs for the server side of our application, some of them are discussed in the following:

NodeJs is built on Google Chrome’s V8 engine, and for this reason its execution time is very fast and it runs very quickly.

There are more than 50,000 bundles available in the Node Package Manager and for that reason developers can import any of the packages any time according to their needed functionality for which a lot of time is saved.

As NodeJs do not need to wait for an API to return data , so for building real time and data intensive web applications, it is very useful. It is totally asynchronous in nature that means it is totally non-blocking.

The loading time for an audio or video is reduced by NodeJs because there is better synchronization of the code between the client and server for having the same code base.

As NodeJs is open-source and it is nothing but a JavaScript framework , so for the developers who are already used to JavaScript, for them starting developing their projects with NodeJs is very easy.

Features of NodeJs

Now let us discuss on some of the features of NodeJs:

Asynchronous in Nature and Event driven: The servers made with the NodeJs never waits for the from an API. Without waiting for the data from the API, it directly moves to the next API. So all the APIs of NodeJS are totally non-blocking in nature. In order to receive and track all the responses of the previous API requests, it follows an event driven mechanism. Hence we can say that all the NodeJs API are non-blocking in nature.

Single Threaded Architecture: With event looping, a single threaded architecture is followed by NodeJs and for this architecture makes NodeJs more scalable. In contrast to other servers, limited threads are created by them for processing the requests. Whereas for the event driven mechanism, the NodeJS servers reply in a non-blocking or an asynchronous manner and for this reason NodeJS becomes more scalable. If we compare NodeJs with other traditional servers like Apache HTTP servers, then we can say NodeJs handles a larger number of requests. A single threaded program is followed by NodeJS and this allows NodeJs to process a huge amount of requests.

Scalable: Nowadays, scalable software is demanded by most of the companies. One of the most pressing concerns in Software Development is addressed by NodeJs and that is scalability. Concurrent requests can be handled very efficiently using NodeJs. A cluster module is used by NodeJs for managing the load balancing for all the active CPU cores. The most appealing feature of NodeJs is that it can partition the applications horizontally and this partition procedure is mainly achieved by it due to the use of child processes. Using this feature, the distinct app versions are provided to the different target audiences and also for customization it allows them for catering to the client preferences.

Quick Execution time for code: V8 JavaScript runtime motor is used by NodeJs and this is also used by Google chrome. A wrapper is provided for the JavaScript by the hub and for that reason the runtime motor becomes faster and for this reason inside NodeJs, the preposition process of the requests also become faster.

Compatibility on the cross platforms: Different types of systems like Windows, UNIX, LINUX, MacOS and other mobile devices can use NodeJs. For generating a self-sufficient execution, it can be paired with any appropriate package.

Uses JavaScript: From an engineer's perspective, it is a very important aspect of NodeJs that this framework uses JavaScript Most of the developers are familiar with JavaScript, so for them it becomes very easier to grab NodeJs.

Fast Data Streaming: The processing time of the data that have been transmitted to different streams takes a long time. Whereas for processing the data, NodeJs takes a very short amount of time and it does it at a very fast rate. NodeJs saves a lot of time because the files are processed and uploaded simultaneously by NodeJs. So as a result, the overall speed of data and video streaming is improved by NodeJs.

No Buffering : The data is never buffered in NodeJs application.

Front or Back-End Development? Learn It All!

Caltech Coding BootcampEXPLORE PROGRAMFront or Back-End Development? Learn It All!

Node.js Architecture

Now that we established what is Node, let’s dig into its architecture. Node.js operates on a single-thread, allowing it to handle thousands of simultaneous event loops. Here’s a diagram, provided by Sinform.com, that best illustrates Node.js architecture.

node.js-architecture

Parts of Node.js

Parts of Node.js

Fig: Parts of Node.js

Now, let's go through each part of Node.js to get a better understanding of the server-side platform as a whole.

Modules

Modules are like JavaScript libraries that can be used in a Node.js application to include a set of functions. In order to include a module in a Node.js application, use the require() function with the parenthesis containing the name of the module.

Module in Node.js

Fig: Include a module in Node.js

Node.js has many modules that provide the basic functionality needed for a web application. Some of them are mentioned in this table:

Node.js Module Table

Fig: Node.js modules table

Console

The console is a module that provides a method for debugging that is similar to the basic JavaScript console provided by internet browsers. It prints messages to stdout and stderr.

Node.js Console

Fig: Node.js console

Cluster

Node.js is built-on on the concept of single-threaded programming. Cluster is a module that allows multi-threading by creating child processes that share the same server port and run simultaneously.

A cluster can be added to an application in the following way:

Cluster in Node.js

Fig: Add cluster in Node.js

Global

Global objects in Node.js are available in all modules. These objects are functions, modules, strings, etc. Some Node.js global objects are mentioned in the table below:

Global Object Table

Fig: Global objects table

Error Handling

Node.js applications experience four types of errors.

Node.js Errors

Fig: Node.js errors

Errors in Node.js are handled through exceptions. For example, let's handle the error that would occur when we divide a number by zero. This error would crash the Node.js application, so we should handle this error to continue with the normal execution of the application.

Node.js Error Handling

Fig: Node.js error handling

Get the Coding Skills You Need to Succeed

Full Stack Development-MEANEXPLORE PROGRAMGet the Coding Skills You Need to Succeed

Streaming

Streams are the objects that let you read data or write data continuously. There are four types of streams:

Readable: These are the types of streams from which data can be read

Writable: These are the types of streams to which data can be written

Duplex: These are both readable and writable streams

Transform: Streams that can manipulate the data while it is being read or written

Buffer

Buffer is a module that allows the handling of streams that contain only binary data. An empty buffer of length '10' can be created by this method:

Node.js Buffer

Fig: Node.js buffer

Domain

The domain module intercepts errors that remain unhandled. Two methods are used for intercepting these errors:

Internal Binding: Error emitter executes its code inside the run method

External Binding: Error emitter is explicitly added to a domain via its add method

DNS

DNS module is used to connect to a DNS server and perform name resolution by using the following method:

DNS

Fig: DNS resolve

DNS module is also used for performing name resolution without a network communication by using the following method:

DNS Lookup

Fig: DNS lookup

Debugger

Node.js includes a debugging utility that can be accessed by a built-in debugging client. Node.js debugger is not feature-packed but supports the simple inspection of code. The debugger can be used in the terminal by using the 'inspect' keyword before the name of the JavaScript file. In order to inspect a file—myscript.js, for example—you can follow this method:

Node.js Debugger

Fig: Node.js debugger

Now that we are familiar with the main parts of Node.js let's go ahead and learn about the Node.js Express framework.

Basics to Advanced - Learn It All!

Caltech PGP Full Stack DevelopmentEXPLORE PROGRAMBasics to Advanced - Learn It All!

Node.js Express Framework

Express is a flexible Node.js web application framework that provides a wide set of features to develop both web and mobile applications. It's a layer built on the top of the Node.js that helps manage a server and routes.

Now look at some of the core features of the Express framework:

Used for designing single-page, multi-page, and hybrid web applications

Allows developers to set up middlewares for responding to HTTP Requests

Defines a routing table that is used to perform different actions based on the HTTP method and URL

Allows dynamic rendering of HTML Pages based on passing arguments to templates

Now look at an example of a simple "Hello World" program developed using the Express framework to gain a better understanding of this framework.

Node.js Express Framework

Fig: Node.js Express framework, "Hello World."

var express: Importing Express framework into our Node.js application

app.get(): Callback function with parameters ‘request’ and ‘response’

The request object: It represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, etc.

The response object: It represents the HTTP response that an Express app sends when it gets an HTTP request.

The application will listen to the defined port, which in this case is "8081," and variables "host" and "port" will contain the address and the port, respectively.

console.log: This is to show the address and port in the command prompt or terminal.

Having learned about the Express framework, let's now move on to the use cases of Node.js.

Who Uses NodeJs?

Well in 2022 , there are 15+ popular companies who are using NodeJs .

Companies like NASA, Trello, Netflix, PayPal, LinkedIn, Walmart, Uber, Twitter, Yahoo, eBay, GoDaddy etc are using NodeJs.

Node.js Use Cases

Node.js Use Cases

Fig: Node.js use cases

Netflix

Netflix

Fig: Netflix

Netflix, the world's leading online entertainment network with more than 167 million users, is one of many top companies trusting Node.js for their servers. The reasons why the company chose to use Node.js include:

Application scalability

Data-intensive application

Walmart

Walmart

Fig: Walmart

Walmart is the world's largest company by revenue, with US$ 559 billion in 2020, according to Forbes. Walmart chose Node.js because of the following attributes:

Asynchronous I/O

Efficient handling of concurrent requests

Your Software Development Career Starts Here!

Caltech Coding BootcampEXPLORE PROGRAMYour Software Development Career Starts Here!

Uber

Uber

Fig: Uber

Uber is a U.S.-based, multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, and food delivery. The reasons why the company chose to use Node.js include:

Asynchronous I/O

Quick iterations

Active open-source community

NASA

NASA

Fig: NASA

NASA, an independent agency of the United States Federal Government, is responsible for the civilian space program, as well as aerospace and aeronautics research. NASA chose to use Node.js for the following reasons:

Reduced access times

Ability to handle data-intensive tasks

Capability to keep the server active 24/7

Paypal

Paypal

Fig: Paypal

PayPal is a U.S.-based company operating a global online payment system that supports online money transfers, that is serving as an electronic alternative to traditional paper methods like checks and money orders. PayPal chose to use Node.js for the following reasons:

Extremely fast build times

Fewer lines of code

Ability to handle large amounts of data

Medium

Medium

Fig: Medium

Medium is a popular online publishing platform developed by Evan Williams and launched in August 2012. The reasons why the company chose to use Node.js include the following:

Data-driven applications

Ability to run A/B tests

Simple server maintenance

NPM: Node Package Manager

NPM is a popular Node.js package library and the jewel in the crown of the Node.js community. It has millions of downloadable libraries, organized according to specific requirements, and is the largest software registry in the world. NPM is free. These libraries are growing fast to this very day, and they strengthen the Node.js community.

When Can We Use NodeJS?

When very few CPU cycles are used by the server side code. When the non-blocking operations are done by us and that does not have heavy jobs or heavy algorithms that consume a lot of CPU cycles.

If we are already from JavaScript background and we are very comfortable in writing single threaded code just like client side JavaScript.

Now let us know when not to use NodeJs:

NodeJS is a very CPU heavy application , when it comes to heavy computation, NodeJS is not the best option in hand. Other than NodeJs, there are plenty of better solutions available for CPU intensive applications.

Using a single CPU, an event based non blocking I/O model is leveraged by NodeJS and for that reason the incoming request will be actually blocked by all the intense CPU processing activity.

When using NodeJs with basic crud or HTML application there is no need for high hopes . Though NodeJs will make it more scalable, there is no need for expecting  a traffic flood only because the application is powered by NodeJs. So when the data is provided straightforwardly by, by the server and specially where there is no need to have  a separate API, in this case there is no need for using NodeJs.

For Relational database access type of projects, using NodeJs is not an efficient idea at all. In comparison with the other framework’s tool boxes, the relational database tools of NodeJs are not that robust, reliable and easy to work with.

Let us now go through the installation procedure of NodeJs.

So for the installation of NodeJs, we need to follow a very straightforward process. This can be done by the installer package available at the official website of NodeJs.

So for the first step, the installer from the official NodeJs website needs to be downloaded.

Then the installer needs to be run.

Then the simple installer steps need to be followed properly. The license agreement needs to be agreed and then click the next button.

Then your system or machine needs a restart. That’s it, we are done with the NodeJs installation.
