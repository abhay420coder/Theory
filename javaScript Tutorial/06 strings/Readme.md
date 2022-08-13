# Creating strings
1. Strings can be created as primitives, from string literals, or as objects, using the String() constructor:

    const string1 = "A string primitive";
    const string2 = 'Also a string primitive';
    const string3 = `Yet another string primitive`;
    Copy to Clipboard
    const string4 = new String("A String object");

## Methods to Creating strings Methods
1. by double quotes **"   "**
2. by single quotes **'   '**
3. by back-Tick     **`  `**
4. by String Constructor
5. by String keyword

#### by double quotes **"   "**

##### synatx :- 
    key stringVariable = " value ";

**Note :-** key = keyword :- var / let / const

###### Example :- 
    const b = "Hello world"; 




#### by single quotes **'   '**

##### synatx :- 
    key stringVariable = ' value ';

**Note :-** key = keyword :- var / let / const

###### Example :- 
    const b = 'Hello world'; 




#### by back-Tick     **`  `**

###### synatx :- 
    key stringVariable = ` value `;

**Note :-** key = keyword :- var / let / const

###### Example :- 
    const b = `Hello world`; 




#### by String Constructor
1. Creates a new String object. 
2. It performs type conversion when called as a function, rather than as a constructor, which is usually more useful.

###### synatx :- 
    keyword stringVariable = new String( value );

**Note :-** key = keyword :- var / let / const

###### Example :- 
    const b = new String("Hello world"); 




#### by String keyword

###### synatx :- 
    key stringVariable = String( value );

**Note :-** key = keyword :- var / let / const

###### Example :- 
    const b = String("Hello world"); 




#### by String keyword vs by String Constructor
1. String Constructor creates a new String object (string). 
2. But String keyword doesn't create  a new String object. 
3. String keyword creates a String only (normal string).

    const a = new String("Hello world"); // a === "Hello world" is false
    const b = String("Hello world");     // b === "Hello world" is true




    const a = new String("Hello world"); // a === "Hello world" is false
    const b = String("Hello world");     // b === "Hello world" is true
    a instanceof String;         // is true
    b instanceof String;         // is false
    typeof a // "object"
    typeof b // "string"















#  Escape sequences
1. Special characters can be encoded using escape sequences:

        Escape sequence	                    Unicode code point
                \0	                            null character 
                \'	                            single quote 
                \"	                            double quote
                \\	                            backslash
                \n	                            newline
                \r	                            carriage return
                \v	                            vertical tab
                \t	                            tab
                \b	                            backspace
                \f	                            form feed

 **note :-** ydi koi character apna special power rkhta hai to uske special power ko backslash use kr khatm kr sakte hai.













# long string  :-  Long literal strings
1. Sometimes, your code will include strings which are very long. Rather than having lines that go on endlessly, or wrap at the whim of your editor, you may wish to specifically break the string into multiple lines in the source code without affecting the actual string contents.

## using + operator 
You can use the + operator to append multiple strings together, like this:

            const longString = "This is a very long string which needs " +
                        "to wrap across multiple lines because " +
                        "otherwise my code is unreadable."      

## using backslash character (\)
1. you can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line. 
2. Make sure there is no space or any other character after the backslash (except for a line break), or as an indent; otherwise it will not work.

            const longString = "This is a very long string which needs \
            to wrap across multiple lines because \
            otherwise my code is unreadable."

## using back-tick (``)

            const longString = `This is a very long string which needs 
            to wrap across multiple lines because 
            otherwise my code is unreadable.`











# String method properties , methods


## Constructor

#### String()
1. Creates a new String object. 
2. It performs type conversion when called as a function, rather than as a constructor, which is usually more useful.

## Static methods
#### String.fromCharCode(num1 [, ...[, numN]])
Returns a string created by using the specified sequence of Unicode values.

#### String.fromCodePoint(num1 [, ...[, numN)
Returns a string created by using the specified sequence of code points.

#### String.raw()
Returns a string created from a raw template string.




## Instance properties

#### String.prototype.length
Reflects the length of the string. Read-only.




## Instance methods

#### String.prototype.at(index) Experimental
1. Returns the character (exactly one UTF-16 code unit) at the specified index. 
2. Accepts negative integers, which count back from the last string character.

#### String.prototype.charAt(index)
Returns the character (exactly one UTF-16 code unit) at the specified index.

#### String.prototype.charCodeAt(index)
Returns a number that is the UTF-16 code unit value at the given index.



#### String.prototype.codePointAt(pos)
Returns a nonnegative integer Number that is the code point value of the UTF-16 encoded code point starting at the specified pos.


#### String.prototype.concat(str [, ...strN ])
Combines the text of two (or more) strings and returns a new string.


#### String.prototype.includes(searchString [, position])
Determines whether the calling string contains searchString.

#### String.prototype.endsWith(searchString [, length])
Determines whether a string ends with the characters of the string searchString.

#### String.prototype.indexOf(searchValue [, fromIndex])
Returns the index within the calling String object of the first occurrence of searchValue, or -1 if not found.

#### String.prototype.lastIndexOf(searchValue [, fromIndex])
Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found.

#### String.prototype.localeCompare(compareString [, locales [, options]])
Returns a number indicating whether the reference string compareString comes before, after, or is equivalent to the given string in sort order.

#### String.prototype.match(regexp)
Used to match regular expression regexp against a string.

#### String.prototype.matchAll(regexp)
Returns an iterator of all regexp's matches.

#### String.prototype.normalize([form])
Returns the Unicode Normalization Form of the calling string value.

#### String.prototype.padEnd(targetLength [, padString])
Pads the current string from the end with a given string and returns a new string of the length targetLength.

#### String.prototype.padStart(targetLength [, padString])
Pads the current string from the start with a given string and returns a new string of the length targetLength.

#### String.prototype.repeat(count)
Returns a string consisting of the elements of the object repeated count times.

#### String.prototype.replace(searchFor, replaceWith)
1. Used to replace occurrences of searchFor using replaceWith. 
2. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.

#### String.prototype.replaceAll(searchFor, replaceWith)
1. Used to replace all occurrences of searchFor using replaceWith. 
2. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.

#### String.prototype.search(regexp)
Search for a match between a regular expression regexp and the calling string.

#### String.prototype.slice(beginIndex[, endIndex])
Extracts a section of a string and returns a new string.

#### String.prototype.split([sep [, limit] ])
Returns an array of strings populated by splitting the calling string at occurrences of the substring sep.

#### String.prototype.startsWith(searchString [, length])
Determines whether the calling string begins with the characters of string searchString.

#### String.prototype.substring(indexStart [, indexEnd])
Returns a new string containing characters of the calling string from (or between) the specified index (or indices).

#### String.prototype.toLocaleLowerCase( [locale, ...locales])
1. The characters within a string are converted to lowercase while respecting the current locale.
2. For most languages, this will return the same as toLowerCase().

#### String.prototype.toLocaleUpperCase( [locale, ...locales])
1. The characters within a string are converted to uppercase while respecting the current locale.
2. For most languages, this will return the same as toUpperCase().

#### String.prototype.toLowerCase()
Returns the calling string value converted to lowercase.

#### String.prototype.toString()
Returns a string representing the specified object. Overrides the Object.prototype.toString() method.

#### String.prototype.toUpperCase()
Returns the calling string value converted to uppercase.

#### String.prototype.trim()
Trims whitespace from the beginning and end of the string. Part of the ECMAScript 5 standard.

#### String.prototype.trimStart()
Trims whitespace from the beginning of the string.

#### String.prototype.trimEnd()
Trims whitespace from the end of the string.

#### String.prototype.valueOf()
Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method.

#### String.prototype[@@iterator]()
Returns a new iterator object that iterates over the code points of a String value, returning each code point as a String value.







# String method properties , methods :- w3School

#### charAt()   	        :-  Returns the character at a specified index (position)
#### charCodeAt()	        :-  Returns the Unicode of the character at a specified index

#### concat()	            :-  Returns two or more joined strings
#### constructor	        :-  Returns the string's constructor function

#### startsWith()	        :-  Checks whether a string begins with specified characters
#### endsWith()	            :-  Returns if a string ends with a specified value

#### fromCharCode()	        :-  Returns Unicode values as characters
#### includes()	            :-  Returns if a string contains a specified value
#### indexOf()	            :-  Returns the index (position) of the first occurrence of a value in a string
#### lastIndexOf()	        :-  Returns the index (position) of the last occurrence of a value in a string
#### length	                :-  Returns the length of a string
#### localeCompare()	    :-  Compares two strings in the current locale
#### match()	            :-  Searches a string for a value, or a regular expression, and returns the matches
#### prototype	            :-  Allows you to add properties and methods to an object
#### repeat()	            :-  Returns a new string with a number of copies of a string
#### replace()	            :-  Searches a string for a value, or a regular expression, and returns a string where the values are replaced
#### search()	            :-  Searches a string for a value, or regular expression, and returns the index (position) of the match
#### slice()	            :-  Extracts a part of a string and returns a new string
#### split()	            :-  Splits a string into an array of substrings

#### substr()	            :-  Extracts a number of characters from a string, from a start index (position)
#### substring()	        :-  Extracts characters from a string, between two specified indices (positions)

#### toLocaleLowerCase()	:-  Returns a string converted to lowercase letters, using the host's locale
#### toLocaleUpperCase()	:-  Returns a string converted to uppercase letters, using the host's locale
#### toLowerCase()	        :-  Returns a string converted to lowercase letters
#### toString()	            :-  Returns a string or a string object as a string
#### toUpperCase()	        :-  Returns a string converted to uppercase letters

#### trim()	                :-  Returns a string with removed whitespaces
#### valueOf()	            :-  Returns the primitive value of a string or a string object




# short notes of properties of string


## INDEX IN STRING
    const a = “Abhay Kumar”           
    Index            A       b   h    a    y            K     u     m   a    r       a[0]= A  a[1]= b
    +ve index        0       1    2    3    4     5     6     7     8    9   10      a[4]= y        

## length of string
    str1 = “Abcdefgh Ijklmnop”

1.  string.length :- length of string

        str1.length      // 17
   
## CONCATINATION IN STRING
1.  Syntax:- string1 + string2 + ...

        var a = "Abhay";
        var b = " Kumar";
        Console.log(a+b) ; // Abhay Kumar

## sub-string of a string
1. string.slice(start,end)      // **Slice in Range from a string**    **start**-included **end**-not included  **Slice in String**   
2. string.substring(start,end)    
3. string.substr(start,length) 

1. Slice in Range from a string    start-included end-not included  Slice in String 

    str1 = “Abcdefgh Ijklmnop”;
    str1.slice(-12,-3) // fgh Ijklm    str1.slice(3,12) // defgh Ijk    str1.slice(5,9) // fgh 
 
## case changing of string
1.  string.toUpperCase() :- Converts a string into Upper case
2.  string.toLowerCase() :- Converts a string into Lower case

    str1 = “Abcdefgh Ijklmnop”;
    str1.toUpperCase()    // ABCDEFGH IJKLMNOP
    str1.toLowerCase()    // abcdefgh ijklmnop

## Convert String into Array   
1. **string.split(seperator, limit) :-** Splits the string at the specified separator, and returns a list with limit number of elements plus one.

1.  **limit** is optional .            
2.  Default **seperator** = whiteSpaces         
3.  Default **limit** = -1

        str1 = “Abcdefgh Ijklmnop”;
        str1.split(“ ”)    # [‘Abcdefgh’ , ‘Ijklmnop’] 
        str1.split(“c”)    # [ 'Ab', 'defgh Ijklmnop' ]		       
        
        string.split(‘’)  :- Split a string into characters 
        str1.split(‘’) ;     // [‘A’,‘b’,‘c’,‘d’,‘e’,‘f’,‘g’,‘h’,‘ ’,‘I’,‘j’,‘k’,‘l’,‘m’,‘n’,‘o’,‘p’ ]   



## Convert Array into String    
 
    array1.join(seperator) :- Converts the elements of an array into a string
    Default seperator = comma(,)

    List1 :- [‘hello’ , ‘my’ , ‘name’ , ‘is’ , ‘Abhay’ , ‘Kumar’] 
    console.log( List1.join(“ ”) )     //hello my name is Abhay Kumar
    console.log( List1.join("₹") )     // hello₹my₹name₹is₹Abhay₹Kumar


## Replace old-value(OV) to new-value(NV) of a string
    string.replace(OV, NV) :- Replace old-value(OV) to new-value(NV)

    str1 = “Abcdefgh Ijklmnop”;
    str1.replace(“fgh” , “abc”) // Abcdeabc Ijklmnop

## check string starts/ends with the specified value 
1. **string.startsWith(value) :-** Returns true if string starts with the specified value
2. **string.endsWith(value) :-** Returns true if string ends with the specified value

    str1 = “Abcdefgh Ijklmnop”;
    str1.startsWith(“Abc”) // true
    str1.endsWith(“mnop”) // true 

## find index of with the specified value 
1. string.indexOf(value, start, end) :- finds the first occurrence of the specified value.
2. string.lastIndexOf(value, start, end) :- finds the last occurrence of the specified value.

**Note :-**
 1. start and end is optional . 
 2. Default start = 0
 3. Default end = last-index

    str1 = “Abcdefgh Ijklmnop”;
    str1.indexOf(“c”) // 2
    str1.lastIndexOf(“e”) // 4 Default end = last-index

## - finds the first occurrence of the specified value.

1. string.match(value)          :- finds the first occurrence of the specified value.       :- **match** gives all information
2. string.search(value)         :- finds the first occurrence of the specified value.       :- **search** gives index-value
3. string.includes(value)       :- finds the first occurrence of the specified value.       :- **includes** gives true/false

    str1.match(“c”) // [ 'c', index: 2, input: 'Abcdefgh Ijklmnop' ] 
    str1.search(“c”) // 2 str1.includes(“c”) // true 

## Remove White-spaces From a String 
1. string.trim() :- Remove spaces at the beginning and at the end of the string





















# notes of properties of string

## INDEX IN STRING
    const a = “Abhay Kumar”   

    Index            A       b    h    a    y           K     u     m    a    r     
    +ve index        0       1    2    3    4     5     6     7     8    9   10   
    -ve index      -11     -10   -9   -8   -7    -6    -5    -4    -3   -2   -1        

### method to indexise of string    
1. normal method  :-        stringVariable[index] 
2. charAt() method :-       stringVariable.charAt(index)

### normal method  :-        stringVariable[index] 

#### syntax :- 
    stringVariable[index] 

###### example :- 
       console.log(a[0])    // A 
       console.log(a[1])    // b 
       console.log(a[4])    // y  


### charAt() method :-       stringVariable.charAt(index)

#### syntax :- 
        stringVariable.charAt(index)

#### parameter :-   
1. index      :-  Optional    :-  The index (position) of the character.  :- **Default** = 0.

#### returns :-
1. The character at the specified index.
2. Empty string ("") if the index is out of range.
#### points:-
1. The charAt() method returns the character at a specified index (position) in a string.
2. The index of the first character is 0, the second 1, ...

###### example :- 
        console.log(a.charAt(0))    // A 
        console.log(a.charAt(1))    // b 
        console.log(a.charAt(4))    // y  













## ASCII Code of character in String

### method to find ASCII Code of character in String
1. charCodeAt() method :-       stringVariable.charCodeAt(index)

### charCodeAt() method  :-        stringVariable.charCodeAt(index) 

#### syntax :- 
    stringVariable.charCodeAt(index) 

#### parameter :-   
1. index    :-  Optional    :-  The index (position) of a character.    :-  Default value = 0.
#### returns :-
1. A number :- 	The Unicode (ASCII CODE ) of the character at the specified index.
2. NaN :-  if the index is invalid.
#### points:-
1. charCodeAt() is UTF-16, codePointAt() is Unicode.
2. charCodeAt() returns a number between 0 and 65535.



###### example :- 

        const a = “Abhay Kumar”  ;
        console.log(a.charCodeAt(0))    // 65 
        console.log(a.charCodeAt(1))    // 98
        console.log(a.charCodeAt(4))    // 121 










## length of string

### method to find length of string     :-  stringVariable.length          
1. length method    :-  stringVariable.length

### length method   :-  stringVariable.length

#### syntax :- 
    stringVariable.length 
#### returns :-
number :- The length of the string.
#### points:-
1. The length property returns the length of a string.
2. The length property of an empty string is 0.

###### example :- 

    str1 = “Abcdefgh Ijklmnop”
    str1.length      // 17










## method to add two or more  string  :- CONCATINATION IN STRING 

### method to add multiple string     
1. using + operator         :- string1 + string2 + ...  
2. using concat() method    :-  stringVariable.concat(string1, string2, ..., stringX)

### using + operator        :- string1 + string2 + ...      

#### syntax :- 
    string1 + string2 + ...

###### example :- 

        let a = "Abhay";
        let b = " Kumar";
        Console.log(a+b) ; // Abhay Kumar

### using concat() method           :-  stringVariable.concat(string1, string2, ..., stringX)

#### syntax :- 
    stringVariable.concat(string1, string2, ..., stringX)

#### parameter :-   
1. string1, string2, ..., stringX    :-  Required    :-  The strings to be joined.
#### returns :-
A new string containing the combined strings
#### points:-
1. The concat() method joins two or more strings.
2. The concat() method does not change the existing strings.
3. The concat() method returns a new string.

###### example :- 

        let a = 'abhay' ; 
        let b = ' kumar';
        console.log(a.concat(b));   //  abhay kumar











## sub-string of a string   :-  Slice in String

### method to extract sub-string from  string     
1. using slice() method         :-  stringVariable.slice(start,end)   
2. using substring() method     :-  stringVariable.substring(start,end)  
3. using substr() method        :-  stringVariable.substr(start,length)  

### using slice() method         :-  string.slice(start,end)   

#### syntax :- 
        stringVariable.slice(start,end)      
        
#### parameter :-   
1. start    :-  Required    :-  The start position  (First character is 0)
2. end      :-  Optional    :-  The end position    (up to, but not including)  :- **Default** is string length.
#### returns :-
The slice() method returns the extracted part in a new string.
#### points:-
1. **start**-included 
2. **end**  -not included 
3. The slice() method extracts characters, between two indices (positions), from a string, and returns the substring.
4. The slice() method returns the extracted part in a new string.
5. The slice() method does not change the original string.
6. A negative number selects from the end of the string.

###### example :- 
        str1 = “Abcdefgh Ijklmnop”;
        str1.slice(-12,-3) // fgh Ijklm    
        str1.slice(3,12) // defgh Ijk    
        str1.slice(5,9) // fgh 


### using substr() method     :-  stringVariable.substr(start,length)  

#### syntax :- 
        stringVariable.substr(start,length)     

#### parameter :-   
1. start    :-  Required    :-  The start position  (First character is 0)
2. If start is negative, substr() counts from the end of the string.

3. length      :-  Optional    :-  The number of characters to extract. :- If omitted, it extracts the rest of the string

#### returns :-
1. The substr() method returns the extracted part in a new string.

2. If start is greater than the length, substr() returns "".
3. If length is 0 or negative, an empty string is returned.

#### points:-
1. **start**-included 
2. **length**  -not included 
3. The substr() method extracts a part of a string.
4. The substr() method begins at a specified position, and returns a specified number of characters.
5. The substr() method does not change the original string.
6. To extract characters from the end of the string, use a negative start position.

###### example :- 

        let text = "Hello world!";
        let result = text.substr(1, 4);    //   ello


### using substring() method     :-  stringVariable.substring(start,end)  

#### syntax :- 
        stringVariable.substring(start,end)      
        
#### parameter :-   
1. start    :-  Required    :-  The start position  (First character is 0)
2. end      :-  Optional    :-  The end position    (up to, but not including)  :- **Default** is string length.
#### returns :-
The substring() method returns the extracted part in a new string.
#### points:-
1. **start**-included 
2. **end**  -not included 
3. The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
4. The substring() method returns the extracted part in a new string.
5. The substring() method does not change the original string.
6. A negative number selects from the end of the string.

###### example :- 

        let text = "Hello world!";
        let result = text.substring(1, 4);  // ell







    

## case changing of string :-   lowerCase <-> upperCase

### method to convert UpperCase to lowerCase       
1. using toLowerCase() method	    :-  stringVariable.toLowerCase()
2. using toLocaleLowerCase() method	:-  stringVariable.toLocaleLowerCase()

### method to convert lowerCase to UpperCase 
1. using toUpperCase() method	    :-  stringVariable.toUpperCase()
2. using toLocaleUpperCase() method	:-  stringVariable.toLocaleUpperCase()

### using toLowerCase() method	    :-  stringVariable.toLowerCase()

#### syntax :- 
        stringVariable.toLowerCase()      
        
#### returns :-
A string:- A new string converted to lowercase 
#### points:-
1. The toLowerCase() method converts a string to lowercase letters.
2. The toLowerCase() method does not change the original string.

###### example :- 
        let text = "Hello World!";
        let result = text.toLowerCase(); // hello world!


### using toLocaleLowerCase() method	:-  stringVariable.toLocaleLowerCase()

#### syntax :- 
        stringVariable.toLocaleLowerCase()      
        
#### returns :-
A string:- A new string converted to lowercase according to current locale.
#### points:-
1. The toLocaleLowerCase() method converts a string to lowercase letters, using current locale.
2. The locale is based on the language settings of the browser.
3. The toLocaleLowerCase() method does not change the original string.

###### example :- 
        let text = "Hello World!";
        let result = text.toLocaleLowerCase(); // hello world! 


### using toUpperCase() method	    :-  stringVariable.toUpperCase()

#### syntax :- 
        stringVariable.toUpperCase()      

#### returns :-
A string:- A new string converted to UpperCase .
#### points:-
1. The toUpperCase() method converts a string to uppercase letters.
2. The toUpperCase() method does not change the original string.

###### example :- 
        let text = "Hello World!";
        let result = text.toUpperCase();   // HELLO WORLD!


### using toLocaleUpperCase() method	:-  stringVariable.toLocaleUpperCase()

#### syntax :- 
        stringVariable.toLocaleUpperCase()      
        
#### returns :-
A string:- A new string converted to UpperCase according to current locale.
#### points:-
1. The toLocaleUpperCase() method converts a string to uppercase letters, using current locale.
2. The locale is based on the language settings of the browser.
3. The toLocaleUpperCase() method does not change the original string.

###### example :- 
        let text = "Hello World!";
        let result = text.toLocaleUpperCase();  // HELLO WORLD!










##  Convert String into Array  












