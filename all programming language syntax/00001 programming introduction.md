# JavaScript Introduction

## What is JavaScript?

* JavaScript was initially created to “make web pages alive”.
* The programs in this language are called **scripts**. They can be written right in a web page’s HTML and run automatically as the page loads.
* Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.
* In this aspect, JavaScript is very different from another language called Java.

> ## Why is it called JavaScript?
>
> * When JavaScript was created, it initially had another name: “LiveScript”.
> * **But Java was very popular at that time,** so it was decided that positioning a new language as a “younger brother” of Java would help.
> * But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all.

## “JavaScript virtual machine”

Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.

The browser has an embedded engine sometimes called a `JavaScript virtual machine`.

## Different engines have different “codenames”. For example

* V8
  * – in Chrome, Opera and Edge.
* SpiderMonkey
  * – in Firefox.
* “Chakra”
  * for IE,
* “JavaScriptCore”, “Nitro” and “SquirrelFish”
  * for Safari

> ### How do engines work?
>
> * Engines are complicated. But the basics are easy.
>
> * The engine (embedded if it’s a browser) reads (“parses”) the script.
> * Then it converts (“compiles”) the script to machine code.
> * And then the machine code runs, pretty fast.
> * The engine applies optimizations at each step of the process. It even watches the compiled script as it runs, analyzes the data that flows through it, and further optimizes the machine code based on that knowledge.

## What makes JavaScript unique?

* There are at least three great things about JavaScript:
* Full integration with HTML/CSS.
* Simple things are done simply.
* Supported by all major browsers and enabled by default.

## Languages “over” JavaScript

Modern tools make the transpilation very fast and transparent, actually allowing developers to code in another language and auto-converting it “under the hood”.

Examples of such languages:

* **CoffeeScript**
  * is “syntactic sugar” for JavaScript.
  * It introduces shorter syntax, allowing us to write clearer and more precise code.
  * Usually, Ruby devs like it.
* **TypeScript**
  * is concentrated on adding “strict data typing” to simplify the development and support of complex systems.
  * It is developed by Microsoft.
* **Flow**
  * also adds data typing, but in a different way.
  * Developed by Facebook.
* **Dart**
  * is a standalone language that has its own engine that runs in non-browser environments (like mobile apps),
  * but also can be transpiled to JavaScript.
  * Developed by Google.
* **Brython**
  * is a Python transpiler to JavaScript
    * that enables the writing of applications in pure Python without JavaScript.
* **Kotlin**
  * is a modern, concise and safe programming language
    * that can target the browser or Node.

### Dart to JS converter

Dart 2.18 removes the `dart2js` command-line tool from the Dart package, but retains the dart2js compiler.

Use `dart compile js` to compile Dart code to deployable JavaScript.

# Python Introduction

## What is Python?

* Python is a popular programming language.
* It was created by Guido van Rossum, and released in 1991.

* It is used for:
  * web development (server-side),
  * software development,
  * mathematics,
  * system scripting.

## What can Python do?

* Python can be used on a server to create web applications.
* Python can be used alongside software to create workflows.
* Python can connect to database systems. It can also read and modify files.
* Python can be used to handle big data and perform complex mathematics.
* Python can be used for rapid prototyping, or for production-ready software development.
*

## Why Python?

* Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).
* Python has a simple syntax similar to the English language.
* Python has syntax that allows developers to write programs with fewer lines than some other programming languages.
* Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.
* Python can be treated in a procedural way, an object-oriented way or a functional way.

# C sharp (c#) Introduction

## What is C#?

* C# is pronounced "C-Sharp".
* It is an object-oriented programming language created by Microsoft that runs on the .NET Framework.
* C# has roots from the C family, and the language is close to other popular languages like C++ and Java.
* The first version was released in year 2002. The latest version, C# 11, was released in November 2022.

* C# is used for:
  * Mobile applications
  * Desktop applications
  * Web applications
  * Web services
  * Web sites
  * Games
  * VR
  * Database applications
  * And much, much more!

## Why Use C#?

* It is one of the most popular programming language in the world
* It is easy to learn and simple to use
* It has a huge community support
* C# is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs
* As C# is close to C, C++ and Java, it makes it easy for programmers to switch to C# or vice versa

# Java Introduction

## What is Java?

* Java is a popular programming language, created in 1995.

* It is owned by Oracle, and more than 3 billion devices run Java.

* It is used for:
  * Mobile applications (specially Android apps)
  * Desktop applications
  * Web applications
  * Web servers and application servers
  * Games
  * Database connection
  * And much, much more!

## Why Use Java?

* Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)
* It is one of the most popular programming language in the world
* It has a large demand in the current job market
* It is easy to learn and simple to use
* It is open-source and free
* It is secure, fast and powerful
* It has a huge community support (tens of millions of developers)
* Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs
* As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa

## Types of Java Applications

There are mainly 4 types of applications that can be created using Java programming:

* Standalone Application
  * Standalone applications are also known as desktop applications or window-based applications.
* Web Application
  * An application that runs on the server side and creates a dynamic page is called a web application.
  * Currently, Servlet, JSP, Struts, Spring, Hibernate, JSF, etc. technologies are used for creating web applications in Java.
* Enterprise Application
  * An application that is distributed in nature, such as banking applications, etc. is called an enterprise application.
  * It has advantages like high-level security, load balancing, and clustering. In Java, EJB is used for creating enterprise applications.
* Mobile Application
  * An application which is created for mobile devices is called a mobile application.
  * Currently, Android and Java ME are used for creating mobile applications.

## Java Platforms / Editions

There are 4 platforms or editions of Java:

* Java SE (Java Standard Edition)
  * It is a Java programming platform.
  * It includes Java programming APIs such as java.lang, java.io, java.net, java.util, java.sql, java.math etc.
  * It includes core topics like OOPs, String, Regex, Exception, Inner classes, Multithreading, I/O Stream, Networking, AWT, Swing, Reflection, Collection, etc.
* Java EE (Java Enterprise Edition)
  * It is an enterprise platform that is mainly used to develop web and enterprise applications.
  * It is built on top of the Java SE platform. It includes topics like Servlet, JSP, Web Services, EJB, JPA, etc.
* Java ME (Java Micro Edition)
  * It is a micro platform that is dedicated to mobile applications.
* JavaFX
  * It is used to develop rich internet applications.
  * It uses a lightweight user interface API.

# Dart Introduction

## Dart

* Dart is a
  * client-optimized,
  * object-oriented,
  * modern programming language
    * to build apps fast for many platforms like
      * android,
      * iOS,
      * web desktop, etc.
* Client optimized means optimized for crafting a beautiful user interface and high-quality experiences.
* Google developed Dart as a programming language.

* Currently, Dart is one of the most preferred languages to learn.
* A solid understanding of Dart is necessary to develop high-quality apps with flutter.
* According to Github, Dart is one of the most loved programming languages in the world.

## Features Of Dart

* Free and open-source.
* Object-oriented programming language.
* Used to develop android, iOS, web, and desktop apps fast.
* Can compile to either native code or javascript.
* Offers modern programming features like null safety and asynchronous programming.
* You can even use Dart for servers and backend.

## Difference Between Dart & Flutter

* **Dart**
  * is client optimized, object-oriented programming language.
  * It is popular nowadays because of flutter.
  * It is difficult to build complete apps only using Dart
    * because you have to manage many stuff yourself.

* **Flutter**
  * is a framework that uses dart programming language.
  * With the help of flutter,
    * you can build apps for android, iOS, web, desktop, etc.
  * The framework contains ready-made tools to make apps faster..

## History of Dart

* Google developed Dart in 2011 as an alternative to javascript.
* Dart 1.0 was released on November 14, 2013.
* Dart 2.0 was released in August 2018.
* Dart gained popularity in recent days because of flutter.

## Key Points To Remember

* Dart is a free and open-source programming language.
* You don’t need to pay any money to run dart programs.
* Dart is a platform-independent language and supports almost every operating system such as windows, mac, and Linux.
* Dart is an object-oriented programming language
  * and supports all oops features such as
    * encapsulation,
    * inheritance,
    * polymorphism,
    * interface, etc.
* Dart comes with a dart2js compiler which translates dart code to javascript code that runs on all modern browsers.
* Dart is a programming language used by flutter,
  * the world’s most popular framework for building apps.

# Basic Programming Terms

Important words that you often hear while learning programming languages.

## Statements

A statement is a command that tells a computer to do something.
In Dart,java,js,c##,c++,c you can end most statements with a semicolon ;.
In python you cannot end most statements with a semicolon ;.

## Expressions

An Expression is a value or something that can be calculated as a value.
The expression can be numbers, text, or some other type.

## Keywords

Keywords are reserved words that give special meaning to the compiler.

## Identifiers

Identifiers are names created by the programmer to define variables, functions, classes, etc.
Identifiers shouldn’t be keywords and must have a unique name.

## High-Level Programming Language

High-Level Programming Language is easy to learn, user-friendly, and uses English-like-sentence. For E.g. dart,c,java,etc.

## Low-Level Programming Language

* Low-level programming language is hard to learn, non-user friendly, and deals with computer hardware components,
* e.g., machine and assembly language.

>Note: Low-level languages are faster than high-level but hard to understand and debug.

## Compiler

A compiler is a computer program that translates the high-level programming language into machine-level language.

## Syntax

The Syntax is a programming language’s pattern or rules that give the concept to code.
