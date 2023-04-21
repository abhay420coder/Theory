
// const prompt = require("prompt");

// "use strict";


// Math.ramdom() :-  returns number between 0 and 1
let generate_Random_Number= (max) => Math.floor(Math.random() * max); // it returns random decimal number between 0 and max


// with creat array with random element with for loop
// arr = array , length_Of_Array = length of array , max_Random_Element_Value = maximum random value of element
let create_1d_Array_with_For_Loop = (array , length_Of_Array , max_Random_Element_Value)=>{
  for (let index =0 ; index<length_Of_Array ; index++){
      let element = generate_Random_Number(max_Random_Element_Value);

      // array.push(element) // 1st method to insert element :- with push method
      // array.unshift(element) // 2nd method to insert element :- with unshift method
      // array.splice(index , 0 , element) // 3rd method to insert element :- with unshift method
      array[index] = element // 4th method to insert element :- with index method
  }
  return array;
}

let create_1d_Array_with_While_Loop = (array , length_Of_Array , max_Random_Element_Value)=>{
  let index =0 ;
  while ( index<length_Of_Array ){
      let element = generate_Random_Number(max_Random_Element_Value);
      // array.push(element) // 1st method to insert element :- with push method
      // array.unshift(element) // 2nd method to insert element :- with unshift method
      // array.splice(index , 0 , element) // 3rd method to insert element :- with unshift method
      array[index] = element // 4th method to insert element :- with index method

      index++ ;
  }
  return array;
}

let create_1d_Array_with_While_Loop_with_userInput = ()=>{
  let array = [];
  let length_Of_Array = parseInt(prompt("please write length of array"))
  let index =0 ;
  while ( index<length_Of_Array ){
      let element = parseInt(prompt("please write element of array "));

      // array.push(element) // 1st method to insert element :- with push method
      // array.unshift(element) // 2nd method to insert element :- with unshift method
      // array.splice(index , 0 , element) // 3rd method to insert element :- with unshift method
      array[index] = element // 4th method to insert element :- with index method

      index++ ;
  }
  return array;
}

let create_1d_Array_with_For_Loop_with_userInput = ()=>{
  let array = [];
  let length_Of_Array = parseInt(prompt("please write length of array"))
  
  for ( let index =0 ; index<length_Of_Array ; index++ ){
      let element = parseInt(prompt("please write element of array "));

      // array.push(element) // 1st method to insert element :- with push method
      // array.unshift(element) // 2nd method to insert element :- with unshift method
      // array.splice(index , 0 , element) // 3rd method to insert element :- with unshift method
      array[index] = element // 4th method to insert element :- with index method
  }
  return array;
}



let create_1D_array_with_various_method = () => {
  console.group("start creation  1d array")
  // create 1D array with above function
  let array_1D_1 = create_1d_Array_with_While_Loop([] , 10 , 100)
  console.log("array_1D_1 with while loop :-  ",array_1D_1)

  let array_1D_2 = create_1d_Array_with_For_Loop([] , 10 , 100)
  console.log("array_1D_2 with for loop :-  ",array_1D_2)

  // by literal constructor :- 
  let array_1D_3 =  [  6, 71, 62, 10,  7, 88, 99, 50, 26, 42  ];
  console.log("array_1D_2 with literal constructor :-  ",array_1D_3)

  //  with Array.of()  method new Operators:-
  let array_1D_4 = Array.of( 14, 49,  1,  1, 89, 45, 54, 43, 87, 19);
  console.log("array_1D_2 with Array.of()  method new Operators :-  ",array_1D_4)

  //  constructor from elements with new Operators:-
  let array_1D_5 = new Array( 0, 75, 90, 45, 14, 86, 55, 63, 60, 94);
  console.log("array_1D_2 with constructor from elements with new Operators:-  ",array_1D_5)

  //  constructor from array length with new Operators:-
  let array_1D_6 = new Array( 10 );  // new Array( arrayLength );
  console.log("array_1D_2 with constructor from array length with new Operators:-  ",array_1D_6)

  //  constructor from elements without new Operators:-
  let array_1D_7 = Array( 90, 21, 22, 38, 54, 54, 74, 41, 98,  9); 
  console.log("array_1D_2 with constructor from elements without new Operators:-  ",array_1D_7)

  //  constructor from array length without new Operators:-
  let array_1D_8 = Array( 12 );  //  Array( 12 );
  console.log("array_1D_2 with constructor from array length without new Operators:-  ",array_1D_8)

  //  With Object Constructor
  let array_1D_9 = new Object([81, 57, 47, 45, 50, 67, 70, 28, 37, 95]);
  console.log("array_1D_2 With Object Constructor :-  ",array_1D_9)

  //  While Loop with user Input
  let array_1D_10 = create_1d_Array_with_While_Loop_with_userInput();
  console.log("array_1D_2 With While Loop with user Input :-  ",array_1D_10)

  //  for Loop with user Input
  let array_1D_11 = create_1d_Array_with_For_Loop_with_userInput();
  console.log("array_1D_11 With for Loop with user Input :-  ",array_1D_11)

  console.groupEnd()
}

// create_1D_array_with_various_method();



//  display/print array
let print_1d_Array_with_While_Loop = array => {
  console.log("array is printing by while loop method")
  let index = 0 ;
  while(index<array.length){
    console.log(array[index])
    index++;
  }
}

let print_1d_Array_with_For_Loop = array => {
  console.log("array is printing by for loop method")
  let index = 0 ;
  for(index=0;index<array.length;index++){
    console.log(array[index]);
  }
}
let print_1d_Array_with_ForEach_Loop = array => {
  console.log("array is printing by for each method")
  array.forEach((ele) => console.log(ele))
}

let array_1D_3 =  [  6, 71, 62, 10,  7, 88, 99, 50, 26, 42  ];

print_1d_Array_with_ForEach_Loop(array_1D_3);
print_1d_Array_with_For_Loop(array_1D_3);
print_1d_Array_with_While_Loop(array_1D_3);

// console.log(print_1d_Array_with_While_Loop(create_1d_Array_with_While_Loop_with_userInput()));
// console.log(print_1d_Array_with_While_Loop(create_1d_Array_with_For_Loop_with_userInput()));

                                                                                                                                                                                                                                                                 

