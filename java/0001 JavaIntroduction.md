
# What is Java?

-  Java is a programming language and a platform.
  
-  Java is a high level, robust, object-oriented and secure programming language.
  
-  Java was developed by **Sun Microsystems** (which is now the subsidiary of Oracle) in the year 1995.
  
-  *James Gosling* is known as the **father of Java**.
  
-  *Before Java*, its name was **Oak**.
  
-  Since Oak was already a registered company, so James Gosling and his team changed the name from Oak to Java.

-  **Platform**: Any hardware or software environment in which a program runs, is known as a *platform*.
  
-  Since Java has a runtime environment (JRE) and API, it is called a platform.

#### Java Example

``` Java

class Simple{  
    public static void main(String args[]){  
     System.out.println("Hello Java");  
    }  
}  

```

### Application

- *According to Sun Microsystems* , 3 billion devices run Java.
- There are many devices where Java is currently used.

Some of them are as follows:

1. ***Desktop Applications*** such as acrobat reader, media player, antivirus, etc.
2. ***Web Applications*** such as irctc.co.in, javatpoint.com, etc.
3. ***Enterprise Applications*** such as banking applications.
4. ***Mobile***
5. ***Embedded System***
6. ***Smart Card***
7. ***Robotics***
8. ***Games***, etc.

## Types of Java Applications

- There are mainly 4 types of applications that can be created using Java programming:

1) #### Standalone Application

- ***Standalone applications*** are also known as **desktop applications** or **window-based applications**.

- These are *traditional software* that we need to install on every machine.

- ***Examples of standalone application*** are Media player, antivirus, etc.

- AWT and Swing are used in Java for creating standalone applications.

2) #### Web Application

- An application that runs on the server side and creates a dynamic page is called a web application.

- Currently, Servlet, JSP, Struts, Spring, Hibernate, JSF, etc. technologies are used for creating web applications in Java.

3) #### Enterprise Application

- An application that is distributed in nature, such as banking applications, etc. is called an enterprise application.

- It has advantages like high-level security, load balancing, and clustering.

- In Java, EJB is used for creating enterprise applications.

4) #### Mobile Application

- An application which is created for mobile devices is called a mobile application.

- Currently, Android and Java ME are used for creating mobile applications.

## Java Platforms / Editions

There are 4 platforms or editions of Java:

1) #### Java SE (Java Standard Edition)

- It is a Java programming platform.

- It includes Java programming APIs such as java.lang, java.io, java.net, java.util, java.sql, java.math etc.

- It includes core topics like ***OOPs, String, Regex, Exception, Inner classes, Multithreading, I/O Stream, Networking, AWT, Swing, Reflection, Collection, etc***.

2) #### Java EE (Java Enterprise Edition)

- It is an enterprise platform that is ***mainly used to develop web and enterprise applications***.

- It is *built on top of the Java SE platform*.

- It includes topics ***like Servlet, JSP, Web Services, EJB, JPA, etc***.

3) #### Java ME (Java Micro Edition)

- It is a micro platform that is ***dedicated to mobile applications***.

4) #### JavaFX

- It is ***used to develop rich internet applications***.

- It uses a lightweight user interface API.









## Features of Java
> - The primary objective of Java programming language creation was to make it portable, simple and secure programming language. 

> - The features of Java are also known as **Java buzzwords**.

A list of the most important features of the Java language is given below.

1. Simple
2. Object-Oriented
3. Portable
4. Platform independent
5. Secured
6. Robust
7. Architecture neutral
8. Interpreted
9.  High Performance
10. Multithreaded
11. Distributed
12. Dynamic



# Java Introduction by Uday Sir
1. Java is a high level programming language.
2. Programming language is a medium to interact with System.
3. High Level Language is a language in a normal english i.e; Human Understandable Form.
4. James Gosling was a person  who introduced java.
5. The company which started Java is Sun Micro System.
6.  Currently Java is owned by Java.
   
## working of a java program / How is Java Platform Independent /  WORA
![working of java program](./image/java-execution-flow-diagram.png)

- Firstly we build the Java Program using editors and save with thed extension **.java**.
- Once we are done developing the program we need to compile it.
   


1. WORA = Write Once Read Anywhere.
   
2. JVM = Java Virtual Machine   ( Platform Independent ).
   
3. ByteCode = Bytecode is an intermediate , which is neither low level nor high level language, 
   1. so ByteCode uses JVM 
      1. to convert machine level
      2. execute line by line
   2. Extension of all ByteCode is **.class**.
   3. This ByteCode can be executed on all platform i.e; all operating system.
   
4. Compilation = Compilation is a process in order to check if there are any errors in my Java programs or not.
    1. If compilation is unsuccessful we get error report .
        - based  on error report we need to debug the program.
    2. If compilation is successful we generate bytecode , 
        - which is intermediate-code / Platform-Independent-Code.

# Variable And Data Types

## Variable
> **Normal Definition**
> Variable is a container which cotains the data . 
> A variable is assigned with a data type.

> **Technical Definition**
> A variable is the name of a reserved area allocated in memory. 
> In other words, variable is a name of the memory location. 
> ![variable is a name of the memory location](./image/variable%20locatin%20name.png)

> It is a combination of "vary + able" which means its value can be changed.

> **Types Of Variables** 
> ![Types Of Variables](./image/types-of-variables1.png)
> There are two types of variables in java: local and Global.
> There are two types of Global Variables in java: Instance(Non-Static) and Static.
> ![Local vs Instance vs Static Variables](./image/local%20vs%20instance%20vs%20static%20variable.webp)

> **Local Variable**
> - A variable declared inside the body of the method is called local variable. 
> - You can use this variable only within that method and the other methods in the class aren't even aware that the variable exists.
> - A local variable cannot be defined with "static" keyword.
![Local vs Instance Variables](./image/local%20vs%20instance%20variable.png)

> **Instance Variable**
> - A variable declared inside the class but outside the body of the method, is called an instance variable. 
> - It is not declared with static keyword.
> - It is called an instance variable because its value is instance-specific and is not shared among instances.
![Local vs Instance Variables](./image/local%20vs%20instance%20variable.png)

> **Static variable**
> - A variable that is declared with static keyword is called a static variable. 
> - It cannot be local. 
> - You can create a single copy of the static variable and share it among all the instances of the class. 
> - Memory allocation for static variables happens only once when the class is loaded in the memory.
> - There are two types of data types in Java: primitive and non-primitive.
![Local vs Instance Variables]()