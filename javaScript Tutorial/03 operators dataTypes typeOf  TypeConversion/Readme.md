# operators in javaScript

 ### JavaScript Arithmetic Operators
  Arithmetic operators perform arithmetic on numbers (literals or variables).

  **Operator	  Description**
  +	              Addition
  -	            Subtraction
  *	           Multiplication
  **	          Exponentiation (ES2016)
  /	              Division 
  %	              Modulus (Remainder)
  ++	           Increment
  --	          Decrement

**The + operator can also be used to add (concatenate) strings.**
 **(x-(x%y))/y :- gives quotent of (x/y)**
###### x**y :- x*x*x*x*x*x*x*x*x*x*x*x*x...........y times


### JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables.

**Operator	        Example	        Same As**
    =	              x = y	          x = y
    +=	            x += y	        x = x + y
    -=	            x -= y	        x = x - y
    *=	            x *= y	        x = x * y
    /=	            x /= y	        x = x / y
    %=	            x %= y	        x = x % y
    **=	            x **= y	        x = x ** y


### JavaScript Comparison Operators
  **Operator	            Description**
      ==	                  equal to    **(only value matching)**
      ===	          equal value and equal type    **( value and dataType both matching)**
      !=	                  not equal     **(only value un-matching)**
      !==	          not equal value or not equal type **( value and dataType both un-matching)**
      >	                    greater than
      <	                    less than
      >=	            greater than or equal to
      <=	            less than or equal to
      ?	              ternary operator            **variablename = (condition) ? True-value : False-value**

**Note** 34 == "34"  // true  :- (only value matching)
         34 === "34"  // false :- (value and dataType both matching)

**ternary operator**  :-    variablename = (condition) ? True-value : False-value

                                            if(condition){
                                              //True-statement or True-value
                                            }
                                            else {
                                              //False-statement or False-value
                                            }


### JavaScript Logical Operators
  **Operator	            Description**
      &&	                logical and
      ||	                logical or
      !	                  logical not


### JavaScript Bitwise Operators
    Bit operators work on 32 bits numbers.

  Any numeric operand in the operation is converted into a 32 bit number. 
  The result is converted back to a JavaScript number.

  **Operator	    Description	                      Example	        Same as	           Result	          Decimal**
      &	              AND	                           5 & 1	      0101 & 0001	          0001	            1
      |	              OR	                           5 | 1	      0101 | 0001	          0101	            5
      ~	              NOT	                           ~ 5	        ~0101	                1010	            10
      ^	              XOR	                           5 ^ 1	      0101 ^ 0001	          0100	            4
      <<	            left shift	                   5 << 1	      0101 << 1	            1010	            10
      >>	            right shift	                   5 >> 1	      0101 >> 1	            0010	            2
      >>>	            unsigned right shift	         5 >>> 1	    0101 >>> 1	          0010	            2


  **Operator	  Name	                  Description**
      &	        AND	                    Sets each bit to 1 if both bits are 1
      |	        OR	                    Sets each bit to 1 if one of two bits is 1
      ^	        XOR	                    Sets each bit to 1 if only one of two bits is 1
      ~	        NOT	                    Inverts all the bits
      <<	      Zero fill left shift	  Shifts left by pushing zeros in from the right and let the leftmost bits fall off
      >>	      Signed right shift	    Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
      >>>	      Zero fill right shift	  Shifts right by pushing zeros in from the left, and let the rightmost bits fall off






#####      Bitwise AND
When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.

One bit example:                              4 bits example:
  **Operation	 Result**                       **Operation	          Result**
      0 & 0	      0                             1111 & 0000	        0000
      0 & 1	      0                             1111 & 0001	        0001
      1 & 0	      0                             1111 & 0010	        0010
      1 & 1	      1                             1111 & 0100	        0100


    
      



#####      Bitwise OR
When a bitwise OR is performed on a pair of bits, it returns 1 if one of the bits are 1:

One bit example:                              4 bits example:
  **Operation	 Result**                       **Operation	          Result**
      0 | 0	      0                             1111 | 0000	        1111
      0 | 1	      1                             1111 | 0001	        1111
      1 | 0	      1                             1111 | 0010	        1111
      1 | 1	      1                             1111 | 0100	        1111

#####      Bitwise XOR
When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different:

One bit example:                              4 bits example:
  **Operation	 Result**                       **Operation	          Result**
      0 ^ 0	      0                             1111 ^ 0000	        1111
      0 ^ 1	      1                             1111 ^ 0001	        1110
      1 ^ 0	      1                             1111 ^ 0010	        1101
      1 ^ 1	      0                             1111 ^ 0100	        1011

######      JavaScript Bitwise AND (&)
Bitwise AND returns 1 only if both bits are 1:

  **Decimal	                    Binary**
      5	                  0000 0000 0000 0000 0000 0000 0000 0101
      1	                  0000 0000 0000 0000 0000 0000 0000 0001
    5 & 1	                0000 0000 0000 0000 0000 0000 0000 0001 (1)

######      JavaScript Bitwise OR (|)
Bitwise OR returns 1 if one of the bits are 1:

  **Decimal	                    Binary**
      5	                  0000 0000 0000 0000 0000 0000 0000 0101
      1	                  0000 0000 0000 0000 0000 0000 0000 0001
    5 | 1	                0000 0000 0000 0000 0000 0000 0000 0101 (5)

######      JavaScript Bitwise XOR (^)
Bitwise XOR returns 1 if the bits are different:

  **Decimal	                    Binary**
      5	                  0000 0000 0000 0000 0000 0000 0000 0101
      1	                  0000 0000 0000 0000 0000 0000 0000 0001
    5 ^ 1	                0000 0000 0000 0000 0000 0000 0000 0100 (4)

######      JavaScript Bitwise NOT (~)
  **Decimal	                    Binary**
      5	                  0000 0000 0000 0000 0000 0000 0000 0101
      ~5	                1111 1111 1111 1111 1111 1111 1111 1010 (-6)

######      JavaScript (Zero Fill) Bitwise Left Shift (<<)
This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off:

 **Decimal	                    Binary**
      5	                  0000 0000 0000 0000 0000 0000 0000 0101
    5 << 1	              0000 0000 0000 0000 0000 0000 0000 1010 (10)

######      JavaScript (Sign Preserving) Bitwise Right Shift (>>)
This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off:

 **Decimal	                    Binary**
      -5	                  1111 1111 1111 1111 1111 1111 1111 1011
    -5 >> 1	                1111 1111 1111 1111 1111 1111 1111 1101 (-3)

######      JavaScript (Zero Fill) Right Shift (>>>)
This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off:

 **Decimal	                    Binary**
      5	                  0000 0000 0000 0000 0000 0000 0000 0101
    5 >>> 1	              0000 0000 0000 0000 0000 0000 0000 0010 (2)

######      Binary Numbers
Binary numbers with only one bit set is easy to understand:

**Binary Representation	                                                          Decimal value**
  0000 0000 0000 0000 0000 0000 0000 0001	                                              1
  0000 0000 0000 0000 0000 0000 0000 0010	                                              2
  0000 0000 0000 0000 0000 0000 0000 0100	                                              4
  0000 0000 0000 0000 0000 0000 0000 1000	                                              8
  0000 0000 0000 0000 0000 0000 0001 0000	                                              16
  0000 0000 0000 0000 0000 0000 0010 0000	                                              32
  0000 0000 0000 0000 0000 0000 0100 0000	                                              64


Setting a few more bits reveals the binary pattern:

**Binary Representation	                                                          Decimal value**
  0000 0000 0000 0000 0000 0000 0000 0101	                                              5 (4 + 1)
  0000 0000 0000 0000 0000 0000 0000 1101	                                              13 (8 + 4 + 1)
  0000 0000 0000 0000 0000 0000 0010 1101	                                              45 (32 + 8 + 4 + 1)


JavaScript binary numbers are stored in two's complement format.
This means that a negative number is the bitwise NOT of the number plus 1:

**Binary Representation	                                                          Decimal value**
  0000 0000 0000 0000 0000 0000 0000 0101	                                              5
  1111 1111 1111 1111 1111 1111 1111 1011	                                              -5
  0000 0000 0000 0000 0000 0000 0000 0110	                                              6
  1111 1111 1111 1111 1111 1111 1111 1010	                                              -6
  0000 0000 0000 0000 0000 0000 0010 1000	                                              40
  1111 1111 1111 1111 1111 1111 1101 1000	                                              -40


###### Converting Decimal to Binary

          function dec2bin(dec){
            return (dec >>> 0).toString(2);
          }

###### Converting Binary to Decimal

          function bin2dec(bin){
            return parseInt(bin, 2).toString(10);
          }






























# JavaScript Data Types

There are two types of Data-Types
1. Primitive Data-Types
2. Npn-Primitive Data-Types

### Primitive Data types in JavaScript 
1. Number                 ex:- 20 ,20.36                :- integer and float
2. BigInt                                               :- very-very large integer and float
3. String                 ex:- "str" , 'str'            :- Strings are written with quotes. You can use single or double quotes:
4. Boolean                ex:- true , flase             :- true / flase
5. Undefined              ex:- let var1; , let var2;    :- only declare a variable (don't initialize)
6. Null                   ex:- null                     :- integer and float
7. Symbol.

**exponential** xey = x * (10 ** y)
let y = 123e5;      // 12300000 = 123 * (10 ** 5)             //    10 ** 5 = 100000
let z = 123e-5;     // 0.00123  = 123 * (10 ** -5)            //    10 ** -5 = 0.00001

**undefined** only declare a variable (don't initialize)    or    initialize with undefined
let car;            // Value is undefined, type is undefined
car = undefined;    // Value is undefined, type is undefined



### Non-Primitive data Type in JavaScript 
1. Object. (araays , object , functions , dates :-all are objects)

### Difference Between Primitive And Non-Primitive data Type in JavaScript 

  **Primitive                                                     Non-Primitive**
  it saves on stack-memory                                       it saves on heap-memory
  The predefined data types                                      The data types that are derived from primitive data types
  Primitive data types are not mutable.                          Non-Primitive data types are mutable.


###  JavaScript Types are Dynamic
JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

let x;              //  Now x is undefined
x = 5;              //  Now x is a Number
x = "John";         //  Now x is a String
let a ;             //  Now a is undefined
a =20;              //  Now a is Number
a="str";            //  Now a is String
a = true;           //  Now a is boolean
console.log(a);


# JavaScript typeof
use the typeof operator to find the data type of a JavaScript variable.

**syntax**      typeof variableName;

###### example
a = true;
console.log(typeof a);      // boolean

###### note
The data type of **NaN** is **number**
The data type of an **array** is **object**
The data type of a **date** is **object**
The data type of **null** is **object**
The data type of an undefined variable is **undefined** *
The data type of a variable that has not been assigned a value is also **undefined** 

###### returns:-
typeof operator always returns a **string** (containing the type of the operand).

let a = true;
let b = typeof a;
console.log(b);           // boolean        :- same as  console.log(typeof a);      // boolean
console.log(typeof b);    // string












# JavaScript Type Conversion

### convert into number

**Method	                                      Description**
Number(argument)	                :-  Returns a number, converted from its argument
parseFloat(argument)		          :-  Parses a string and returns a floating point number
parseInt(argument)		            :-  Parses a string and returns an integer


###### Example :-  boolean to Number
console.log(Number(true));              // 1
console.log(Number(false));             // 0
console.log(parseInt(true));            // NaN
console.log(parseInt(false));           // NaN
console.log(parseFloat(true));          // NaN
console.log(parseFloat(false));         // NaN


###### Example :-  string to Number
console.log(Number("22"));                // 22
console.log(Number("22.5"));              // 22.5
console.log(parseInt("23"));              // 23
console.log(parseInt("23.5"));            // 23.5
console.log(parseFloat("24.5"));          // 24.5
console.log(parseFloat("24"));            // 24




### convert into string

**Method	                                      Description**
String(argument)	                :-  Returns a string, converted from its argument
variableName.toString()		        :-  Returns a string, converted from its variable



###### Example :-  boolean to string
console.log(String(true));              // true
console.log(String(false));             // false

let a = true;
console.log(a.toString());              // true
let b = true;
console.log(b.toString());              // false


###### Example :-  Number to string  
console.log(String(22));                // 22
console.log(String(22.5));              // -22.5
console.log(String(-23));              // 23

### convert into Boolean

**Method	                                      Description**
Boolean(argument)	                :-  Returns a boolean, converted from its argument

###### Example :- Number to Boolean
console.log(Boolean(1));                  // true
console.log(Boolean(-1));                 // true
console.log(Boolean(2));                  // true
console.log(Boolean(-2));                 // true

console.log(Boolean(0));                  // false
console.log(Boolean(-0));                 // false
console.log(Boolean(0.0));                // false
console.log(Boolean(-0.0));               // false
console.log(Boolean(NaN));                // false

###### Example :- Undefined to Boolean
console.log(Boolean(undefined));              // false

###### Example :- Null to Boolean
console.log(Boolean(null));              // false

###### Example :- String to Boolean
console.log(Boolean("true"));             // true
console.log(Boolean("false"));            // true
console.log(Boolean("ram"));              // true
console.log(Boolean("raj"));              // true

