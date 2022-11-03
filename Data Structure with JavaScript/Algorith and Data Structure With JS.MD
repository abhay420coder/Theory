# About the course - Algorithm And Data Structure With JS

1. An introduction to the fundamentals of algorithms
2. A practical take on algorithms with JavaScript
3. Part one of a two part (Algorithms + Data Structures) course
4. (Algorithms on trees and graphs will be part of the next course)

## Course Topics

1. What is Algorithm
2. Measuring performance
3. Time & Space complexity
4. Big O notation
5. Math algorithms
6. Sort algorithms
7. Search algorithms
8. Misc. algorithms and problem solving

## Before we begin

* It might seem hard and that is because it is hard
* Have a pen and paper and trace the execution of code with a sample input
* Code along with me and do not rush through the videos
  
# What is an algorithm?
>
> * An algorithm is a set of well-defined instructions to solve a particular problem.

>* An Algorithm, in computer programming, is a finite sequence of well-defined instructions, typically executed in a computer, to solve a class of problems or to perform a common task

## Recipe analogy

* An algorithm is a set of well-defined instructions to solve a particular problem

![Receipe Anaogy](./image/Receipe%20Analogy.png)

![example of basic algorithm](./image/example%20of%20basic%20algorithm.png)

## Characteristics

* Well defined inputs and outputs
* Each step should be clear and unambiguous
* Language independent

## Why algorithms?

* As a developer, you're going to come across problems that you need to solve
* Learning algorithms translates to learning different techniques to efficiently solve those problems
* One problem can be solved in many ways using different algorithms
* Every algorithm comes with its own tradeoffs when it comes to performance
* There can be any number of ways, a specific set of instructions can be defined to perform the same task.
  
# Algorithm analysis :- Time and Space complexity

* There are multiple ways to solve one problem
* Ex: There are multiple algorithms to sort a list of numbers
* How do we analyse which one of them is the most efficient algorithm?
* Generally, when we talk about performance, we use an absolute measure
* If I can run 100 meters in 12 seconds, I'm faster than someone who takes 15 seconds.

>The absolute running time of an algorithm cannot be predicted, since it depends on a number of factors
>
> * Programming language used to implement the algorithm
> * The computer the program runs on
> * Other programs running at the same time
> * Quality of the operating system

### We evaluate the performance of an algorithm in terms of its input size

**Time complexity** - Amount of time taken by an algorithm to run, as a function of input size.

* Time complexity is given by time as a function of the length of the input.
*

**Space complexity** - Amount of memory taken by an algorithm to run, as a function of input size.

By evaluating against the input size, the analysis is not only machine independent but the comparison is also more appropriate.
There is no one solution that works every single time. It is always good to know multiple ways to solve the problem and use the best solution, given your constraints.

If your app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity.
If you have very little memory to work with, you should pick a solution that is relatively slower but needs less space.

## How to represent complexity?

Asymptotic notations

* Mathematical tools to represent time and space complexity

1. Big-O Notation (O-notation) — Worst case complexity
   * The worst case complexity of an algorithm is represented using the Big-O notation
2. Omega Notation (Q-notation) — Best case complexity
3. Theta Notation (O-notation) — Average case complexity

# Big-O Notation

The worst case complexity of an algorithm is represented using the Big-O notation.
Big-O notation describes the complexity of an algorithm using algebraic terms
> It has two important characteristics
>
> * It is expressed in terms of the input
> * It focuses on the bigger picture without getting caught up in the minute details

**Example :-**

```JS
        function summation(n) {
        let sum = 0;
        for (let i =1 ; i<=n ; i++) {
            sum += i;
        }
        return sum;
        }
```

**output:-**
`
summation(4) = 1+2+3+4=10 => Count the number of times a statement executes based on the input size
`
**Number of times executed - big o notation**
![Number of times executed - big o notation](./image/Number%20of%20times%20executed%20-%20big%20o%20notation.png)
![Number of times executed - big o notation - 2](./image/Number%20of%20times%20executed%20-%20big%20o%20notation%20-2.png)

**Time Complexity** of above function =>  O(n) - Linear

* And, there exists a relation between the input data size (n) and the number of operations performed (N) with respect to time.
* This relation is denoted as **Order of growth** in Time complexity
* and given notation **O[n]**
  * where O is the order of growth
  * and n is the length of the input.
* It is also called as ‘**Big O Notation**’

> **Importan point**
>
> * Big O Notation expresses the run time of an algorithm in terms of how quickly it grows relative to the input ‘n’ by defining the N number of operations that are done on it.
> * Thus, the time complexity of an algorithm is denoted by the combination of all O[n] assigned for each line of function.

> **There are different types of time complexities used, let’s see one by one:-**
> 
> 1. Constant time – O (1)
> 2. Linear time – O (n)
> 3. Logarithmic time – O (log n)
> 4. Quadratic time – O (n^2^)
> 5. Cubic time – O (n^3^)
>
>
> and many more complex notations like **Exponential time, Quasilinear time, factorial time**, etc. are used based on the type of functions defined.