# RegExp Object

* A regular expression is a pattern of characters.
* The pattern is used to do pattern-matching "search-and-replace" functions on text.
* In JavaScript, a RegExp Object is a pattern with Properties and Methods.

## syatax

`/pattern/modifier(s);`

### Example

```js
let pattern = /w3schools/i;




Example               explained:

w3schools             The pattern to search for
/w3schools/           A regular expression
/w3schools/i          A case-insensitive regular expression.
```

## Modifiers

Modifiers are used to perform case-insensitive and global searches:

### Modifier

* `g`
  * Perform a global match (find all matches rather than stopping after the first match)
* `i`
  * Perform case-insensitive matching
* `m`
  * Perform multiline matching

## Brackets

Brackets are used to find a range of characters:

```js
Expression            Description
[abc]                 Find any character between the brackets
[^abc]                Find any character NOT between the brackets
[0-9]                 Find any character between the brackets (any digit)
[^0-9]                Find any character NOT between the brackets (any non-digit)
(x|y)                 Find any of the alternatives specified
```
[abc]  [^abc] [0-9] [^0-9] (x|y)  
## Metacharacters

Metacharacters are characters with a special meaning:

```js
Metacharacter         Description
.                     Find a single character, except newline or line terminator

\w                    Find a word character = [a-zA-Z0-9_]
\W                    Find a non-word character = [^a-zA-Z0-9_]
\d                    Find a digit  = [0-9]
\D                    Find a non-digit character = [^0-9]
\s                    Find a whitespace character
\S                    Find a non-whitespace character

\b                    Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
\B                    Find a match, but not at the beginning/end of a word
\0                    Find a NULL character

\n                    Find a new line character
\f                    Find a form feed character
\r                    Find a carriage return character
\t                    Find a tab character
\v                    Find a vertical tab character

\xxx                  Find the character specified by an octal number xxx
\xdd                  Find the character specified by a hexadecimal number dd
\udddd                Find the Unicode character specified by a hexadecimal number dddd
```

## Quantifiers

```js
Quantifier          Description
n+                  Matches any string that contains at least one n
n*                  Matches any string that contains zero or more occurrences of n
n?                  Matches any string that contains zero or one occurrences of n
n{X}                Matches any string that contains a sequence of X n's
n{X,Y}              Matches any string that contains a sequence of X to Y n's
n{X,}               Matches any string that contains a sequence of at least X n's
n$                  Matches any string with n at the end of it
^n                  Matches any string with n at the beginning of it
?=n                 Matches any string that is followed by a specific string n
?!n                 Matches any string that is not followed by a specific string n
```

 point
 (Brackets1 Brackets2  Brackets3) =  it creates one group of bracket pattern

 ```js
const paragraph = 'abab';
const regex = /([a][b]){2}/;
let found = Boolean(paragraph.match(regex));
let res = false;
if(Boolean(paragraph.match(regex))) res=true;
//if(Boolean(paragraph.match(regex)) && paragraph.length==10) res=true;
console.log(res); // true
 ```
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
# RegExp Object Properties

```js
Property            Description
constructor         Returns the function that created the RegExp object's prototype
global              Checks whether the "g" modifier is set
ignoreCase          Checks whether the "i" modifier is set
lastIndex           Specifies the index at which to start the next match
multiline           Checks whether the "m" modifier is set
source              Returns the text of the RegExp pattern
```

# RegExp Object Methods

```js
Method          Description
compile()       Deprecated in version 1.5. Compiles a regular expression
exec()          Tests for a match in a string. Returns the first match
test()          Tests for a match in a string. Returns true or false
toString()      Returns the string value of the regular expression
```
