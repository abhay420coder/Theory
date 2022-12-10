
# Array

#### `length`

* synatx :- `arrayVariableName.length`
  * returns the number of elements in an array
* synatx :- `arrayVariableName.length = number`
  * Sets the number of elements in an array
  
### add/remove wlwmwnt from array

#### `push()`

* synatx :- `arrayVariableName.push(item1, item2, ..., itemX)`
  * Minimum one item is required
* Adds new elements to the end of an array,
* returns the new length
* changes the original array.

#### `pop()`

* synatx :- `arrayVariableName.pop()`
* Removes the last element of an array
* returns the removed  element
* changes the original array.

#### `unshift()`

* synatx :- `arrayVariableName.unshift(item1, item2, ..., itemX)`
  * Minimum one item is required
* Adds new elements to the beginning of an array,
* returns the new length
* changes the original array.

#### `shift()`

* synatx :- `arrayVariableName.shift()`
* Removes the first element of an array
* returns the removed  element
* changes the original array.

#### `splice()`

* synatx :- `arrayVariableName.splice(start, deleteCount, item1, item2, itemN)`
  * `start` :- required
    * If `start < -array.length` or start is omitted, 0 is used.
    * If `start >= array.length`, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.
  * `deleteCount` :- optional
    * If `deleteCount` is omitted,
      * or if its value is greater than or equal to the number of elements after the position specified by `start`,
      * then all the elements from `start` to the end of the array will be deleted.
    * If `deleteCount` is 0 or negative, no elements are removed.
  * `item1, …, itemN` :- optional
    * The elements to add to the array, beginning from `start`.
    * If you do not specify any elements, splice() will only remove elements from the array.
* Adds/Removes elements from an array
* overwrites the original array.

### part 2 :- call function in  array-built-in-function :- map / filter / reduce / reduceRight / some / every / forEach

* `map()` / `filter()` / `every()` / `some()` / `reduce()` / `reduceRight()`/`forEach()` :-
  * does not execute the function for empty elements.
  * does not change the original array.
  * executes the callback function once for each array element.

#### `map()`

* synatx :- `arrayVariableName.map(function(currentValue, index, arr), thisValue)`
* `map()` creates a new array from calling a function for every array element.
* `map()` calls a function once for each element in an array.

#### `filter()`

* synatx :- `arrayVariableName.filter(function(currentValue, index, arr), thisValue)`
* Creates a new array with every element in an array that pass a test provided by a function.

#### `every()`

* synatx :- `arrayVariableName.every(function(currentValue, index, arr), thisValue)`
* Checks if every element in an array pass a test

#### `some()`

* synatx :- `arrayVariableName.some(function(currentValue, index, arr), thisValue)`
* Checks if any of the elements in an array pass a test
* The `some()` method returns true (and stops) if the function returns true for one of the array elements.
* The `some()` method returns false if the function returns false for all of the array elements.

#### `forEach()`

* synatx :- `arrayVariableName.forEach(function(currentValue, index, arr), thisValue)`
* it returns `undefined`

##### from syntax of  `map()` / `filter()` / `every()` / `some()`

* `function()` :- **Required** :-  A function to be run for each array element.
  * `currentValue` :- **Required**    :-  The value of the current element.
  * `index` :- **Optional** :-  The index of the current element.
  * `arr` :- **Optional** :-  The array of the current element.
* `thisValue` :-  **Optional**    :-  Default value `undefined`.    :-  A value passed to the function to be used as its this value.

#### `reduce()`

* synatx :- `arrayVariableName.reduce(function(total, currentValue, currentIndex, arr), initialValue)`
* Reduce the values of an array to a single value (going left-to-right)
* The `reduce()` method executes a reducer function for array element.
* The `reduce()` method returns a single value: the function's accumulated result.

#### `reduceRight()`

* synatx :- `arrayVariableName.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)`
* Reduce the values of an array to a single value (going right-to-left)
* The `reduceRight()` method executes a reducer function for each array element.
* The `reduceRight()` method works from right to left.
* The `reduceRight()` method returns a single value: the function's accumulated result.

##### from syntax of  `reduce()` / `reduceRight()` 

* `function()` :-  **Required**    :-  A function to be run for each element in the array.
  * Reducer function parameters:
  * `total` :-  **Required**    :-  The initialValue, or the previously returned value of the function.
  * `currentValue` :-   **Required**    :-  The value of the current element.
  * `currentIndex` :-   **Optional**    :-  The index of the current element.
  * `arr`   :-  **Optional**    :-  The array the current element belongs to.
* `initialValue`  :-  **Optional**    :-  A value to be passed to the function as the initial value.


### part 3

#### `concat()`

Joins arrays and returns an array with the joined arrays

#### `constructor`

Returns the function that created the Array object's prototype

#### `copyWithin()`

Copies array elements within the array, to and from specified positions

#### `entries()`

Returns a key/value pair Array Iteration Object

#### `fill()`

Fill the elements in an array with a static value

#### `find()`

Returns the value of the first element in an array that pass a test

#### `findIndex()`

Returns the index of the first element in an array that pass a test

#### `from()`

Creates an array from an object

#### `includes()`

Check if an array contains the specified element

#### `indexOf()`

Search the array for an element and returns its position

#### `isArray()`

Checks whether an object is an array

#### `join()`

Joins all elements of an array into a string

#### `keys()`

Returns a Array Iteration Object, containing the keys of the original array

#### `lastIndexOf()`

Search the array for an element, starting at the end, and returns its position

#### `prototype`

Allows you to add properties and methods to an Array object

#### `reverse()`

Reverses the order of the elements in an array

#### `slice()`

Selects a part of an array, and returns the new array

#### `sort()`

Sorts the elements of an array

#### `toString()`

Converts an array to a string, and returns the result

#### `valueOf()`

Returns the primitive value of an array

`push()` Adds new elements to the end of an array, and **returns the new length**
`pop()`     Removes the last element of an array, and **returns that element**
`unshift()` Adds new elements to the beginning of an array, and **returns the new length**
`shift()` Removes the first element of an array, and **returns that element**
`concat()` Joins arrays and returns an array with the joined arrays
`constructor` Returns the function that created the Array object's prototype
`copyWithin()` Copies array elements within the array, to and from specified positions
`entries()` Returns a key/value pair Array Iteration Object
`every()` Checks if every element in an array pass a test
`fill()` Fill the elements in an array with a static value
`filter()` Creates a new array with every element in an array that pass a test
`find()` Returns the value of the first element in an array that pass a test
`findIndex()` Returns the index of the first element in an array that pass a test
`forEach()` Calls a function for each array element
`from()` Creates an array from an object
`includes()` Check if an array contains the specified element
`indexOf()` Search the array for an element and returns its position
`isArray()` Checks whether an object is an array
`join()` Joins all elements of an array into a string
`keys()` Returns a Array Iteration Object, containing the keys of the original array
`lastIndexOf()` Search the array for an element, starting at the end, and returns its position
`length` Sets or returns the number of elements in an array
`map()` Creates a new array with the result of calling a function for each array element
`prototype` Allows you to add properties and methods to an Array object
`reduce()` Reduce the values of an array to a single value (going left-to-right)
`reduceRight()` Reduce the values of an array to a single value (going right-to-left)
`reverse()` Reverses the order of the elements in an array
`slice()` Selects a part of an array, and returns the new array
`some()` Checks if any of the elements in an array pass a test
`sort()` Sorts the elements of an array
`splice()` Adds/Removes elements from an array
`toString()` Converts an array to a string, and returns the result
`valueOf()` Returns the primitive value of an array

## Add/remove element from Array

#### `push()`

Adds new elements to the end of an array, and **returns the new length**

syntax :-

 ```js
    push(element0)   // syntax
    push(element0, element1)   // syntax
    push(element0, element1, /* … ,*/ elementN)   // syntax



    const animals = ['pigs', 'goats', 'sheep'];
    const count = animals.push('cows');
    console.log(count);
    // expected output: 4
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows"]

    animals.push('chickens', 'cats', 'dogs');
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

#### `pop()`

Removes the last element of an array, and **returns that element**

#### `shift()`

Removes the first element of an array, and **returns that element**

#### `unshift()`

Adds new elements to the beginning of an array, and **returns the new length**

#### `splice()`

* synatx :- `arrayVariableName.splice(start, deleteCount, item1, item2, itemN)`
  * `start` :- required
    * If `start < -array.length` or start is omitted, 0 is used.
    * If `start >= array.length`, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.
  * `deleteCount` :- optional
    * If `deleteCount` is omitted,
      * or if its value is greater than or equal to the number of elements after the position specified by `start`,
      * then all the elements from `start` to the end of the array will be deleted.
    * If `deleteCount` is 0 or negative, no elements are removed.
  * `item1, …, itemN` :- optional
    * The elements to add to the array, beginning from `start`.
    * If you do not specify any elements, splice() will only remove elements from the array.
* Adds/Removes elements from an array
* overwrites the original array.

    ```js
    //Remove 0 (zero) elements before index 2, and insert "drum"
    const myFish = ["angel", "clown", "mandarin", "sturgeon"];
    const removed = myFish.splice(2, 0, "drum");
    // myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
    // removed is [], no elements removed


    // Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"
    const myFish = ["angel", "clown", "mandarin", "sturgeon"];
    const removed = myFish.splice(2, 0, "drum", "guitar");
    // myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
    // removed is [], no elements removed


    //Remove 1 element at index 3
    const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
    const removed = myFish.splice(3, 1);
    // myFish is ["angel", "clown", "drum", "sturgeon"]
    // removed is ["mandarin"]


    // Remove 1 element at index 2, and insert "trumpet"
    const myFish = ["angel", "clown", "drum", "sturgeon"];
    const removed = myFish.splice(2, 1, "trumpet");
    // myFish is ["angel", "clown", "trumpet", "sturgeon"]
    // removed is ["drum"]


    // Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
    const myFish = ["angel", "clown", "trumpet", "sturgeon"];
    const removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
    // myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
    // removed is ["angel", "clown"]


    // Remove 2 elements, starting from index 2
    const myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
    const removed = myFish.splice(2, 2);
    // myFish is ["parrot", "anemone", "sturgeon"]
    // removed is ["blue", "trumpet"]


    // Remove 1 element from index -2
    const myFish = ["angel", "clown", "mandarin", "sturgeon"];
    const removed = myFish.splice(-2, 1);
    // myFish is ["angel", "clown", "sturgeon"]
    // removed is ["mandarin"]


    // Remove all elements, starting from index 2
    const myFish = ["angel", "clown", "mandarin", "sturgeon"];
    const removed = myFish.splice(2);
    // myFish is ["angel", "clown"]
    // removed is ["mandarin", "sturgeon"]


    // Using splice() on sparse arrays
    const arr = [1, , 3, 4, , 6];
    console.log(arr.splice(1, 2)); // [empty, 3]
    console.log(arr); // [1, 4, empty, 6]


    // Calling splice() on non-array objects
    // The splice() method reads the length property of this. It then updates the integer-keyed properties and the length property as needed.

    const arrayLike = {
                            length      : 3,
                            unrelated   : "foo",
                            0           : 5,
                            2           : 4,
                        };
    console.log(Array.prototype.splice.call(arrayLike, 0, 1, 2, 3)); // [ 5 ]
    console.log(arrayLike); // { '0': 2, '1': 3, '3': 4, length: 4, unrelated: 'foo' }
    ```

## Add two Array

# Object
