// var inp = prompt("enter your passport number of India")

/*
It should be eight characters long.

The first character should be an upper case alphabet.

the second character should be any number from 1-9 

the third character should be any number from 0-9.

The next(5th to 8th characters ) four characters should be any number from 0-9.

The last character should be any number from 1-9.
*/
// var lengthCondition = false;
// var firstCharacterCondition = false;
// var secondCharacterCondition = false;
// var thirdCharacterCondition = false;
// var fourthToSeventhCharacterCondition = true;
// var eighthCharacterCondition = false;
// if (inp.length == 8) lengthCondition = true;
// if (inp[0] >= "A" && inp[0] <= "Z") firstCharacterCondition = true;
// if (inp[1] >= "1" && inp[1] <= "9") secondCharacterCondition = true;
// if (inp[2] >= "0" && inp[2] <= "9") thirdCharacterCondition = true;
// for (let i = 3; i < 7; i++) {
//     if (inp[1] >= "0" && inp[1] <= "9") {
//         fourthToSeventhCharacterCondition = false;
//         break;
//     }
// }
// if (inp[7] >= "1" && inp[7] <= "9") eighthCharacterCondition = true;





// var inp = prompt(`"enter your passport number of India"

// It should be eight characters long.

// The first character should be an upper case alphabet.

// the second character should be any number from 1-9 

// the third character should be any number from 0-9.
// It fourth character should be zero or one white space character.

// The next(5th to 8th characters ) four characters should be any number from 0-9.

// The last(9th) character should be any number from 1-9.`)

// var inp = prompt();
// var lengthCondition = false;




// if (inp.length == 9) lengthCondition = true;
// if (lengthCondition) {

//     var firstCharacterCondition = false;
//     var secondCharacterCondition = false;
//     var thirdCharacterCondition = false;
//     var fourthCharacterCondition = false;
//     var fifthToeighthCharacterCondition = true;
//     var ninthCharacterCondition = false;

//     if (inp[0] >= "A" && inp[0] <= "Z") firstCharacterCondition = true;
//     if (inp[1] >= "1" && inp[1] <= "9") secondCharacterCondition = true;
//     if (inp[2] >= "0" && inp[2] <= "9") thirdCharacterCondition = true;
//     if (inp[3] == "0" && inp[3] == " ") fourthCharacterCondition = true;

//     for (let i = 4; i < 8; i++) {
//         if (inp[i] < "0" && inp[i] > "9") {
//             fifthToeighthCharacterCondition = false;
//             break;
//         }
//     }
//     if (inp[8] >= "1" && inp[8] <= "9") ninthCharacterCondition = true;

//     if (firstCharacterCondition && secondCharacterCondition && thirdCharacterCondition && fourthCharacterCondition && fifthToeighthCharacterCondition && ninthCharacterCondition) {
//         console.log("you are writing valid passport number")
//     }
//     else console.log("you are writing invalid passport number");
// }
// else console.log("you are writing invalid passport number");








// function passport1(inp) {
//     if (inp.length === 9) {
//         if (inp[0] >= "A" && inp[0] <= "Z") {
//             if (inp[1] >= "1" && inp[1] <= "9") {
//                 if (inp[2] >= "0" && inp[2] <= "9") {
//                     if (inp[3] == "0" || inp[3] == " ") {
//                         if (inp[4] >= "0" && inp[4] <= "9") {
//                             if (inp[5] >= "0" && inp[5] <= "9") {
//                                 if (inp[6] >= "0" && inp[6] <= "9") {
//                                     if (inp[7] >= "0" && inp[7] <= "9") {
//                                         if (inp[8] >= "1" && inp[8] <= "9") {
//                                             return "you are writing valid passport number"
//                                         }
//                                         else return "you are writing invalid passport number";
//                                     }
//                                     else return "you are writing invalid passport number";
//                                 }
//                                 else return "you are writing invalid passport number";
//                             }
//                             else return "you are writing invalid passport number";;
//                         }
//                         else return "you are writing invalid passport number";
//                     }

//                     else return "you are writing invalid passport number";

//                 }
//                 else return "you are writing invalid passport number";
//             }
//             else return "you are writing invalid passport number";
//         }
//         else return "you are writing invalid passport number";
//     }
//     else return "you are writing invalid passport number";

// }








// function passport2(inp) {
//     if (inp.length === 9) {
//         if (inp[0] >= "A" && inp[0] <= "Z") {
//             if (inp[1] >= "1" && inp[1] <= "9") {
//                 if (inp[2] >= "0" && inp[2] <= "9") {
//                     if (inp[3] == "0" || inp[3] == " ") {

//                         for (let i = 4; i < 8; i++) {
//                             if (inp[i] < "0" && inp[i] > "9") {
//                                 return "you are writing invalid passport number";
//                             }
//                         }
//                         if (inp[8] >= "1" && inp[8] <= "9") {
//                             return "you are writing valid passport number";
//                         }
//                         else return "you are writing invalid passport number";

//                     }

//                     else return "you are writing invalid passport number";

//                 }
//                 else return "you are writing invalid passport number";
//             }
//             else return "you are writing invalid passport number";
//         }
//         else return "you are writing invalid passport number";
//     }
//     else return "you are writing invalid passport number";

// }


// function passport3(inp) {
//     var lengthCondition = false;
//     if (inp.length == 9) lengthCondition = true;
//     if (lengthCondition) {

//         var firstCharacterCondition = false;
//         var secondCharacterCondition = false;
//         var thirdCharacterCondition = false;
//         var fourthCharacterCondition = false;
//         var fifthToeighthCharacterCondition = true;
//         var ninthCharacterCondition = false;

//         if (inp[0] >= "A" && inp[0] <= "Z") firstCharacterCondition = true;
//         if (inp[1] >= "1" && inp[1] <= "9") secondCharacterCondition = true;
//         if (inp[2] >= "0" && inp[2] <= "9") thirdCharacterCondition = true;
//         if (inp[3] == "0" || inp[3] == " ") fourthCharacterCondition = true;

//         for (let i = 4; i < 8; i++) {
//             if (inp[i] < "0" && inp[i] > "9") {
//                 fifthToeighthCharacterCondition = false;
//                 break;
//             }
//         }
//         if (inp[8] >= "1" && inp[8] <= "9") ninthCharacterCondition = true;

//         if (firstCharacterCondition && secondCharacterCondition && thirdCharacterCondition && fourthCharacterCondition && fifthToeighthCharacterCondition && ninthCharacterCondition) {
//             return "you are writing valid passport number";
//         }
//         else return "you are writing invalid passport number";
//     }
//     else return  "you are writing invalid passport number";
// }

// console.log(passport3(prompt()));












function passport2(inp) {
    if (inp.length === 9) {
        if (inp[0] >= "A" && inp[0] <= "Z") {
            if (inp[1] >= "1" && inp[1] <= "9") {
                if (inp[2] >= "0" && inp[2] <= "9") {
                    if (inp[3] == "0" || inp[3] == " ") {

                        for (let i = 4; i < 8; i++) {
                            if (inp[i] < "0" && inp[i] > "9") {
                                return "you are writing invalid passport number";
                            }
                        }
                        if (inp[8] >= "1" && inp[8] <= "9") {
                            return "you are writing valid passport number";
                        }
                        else return "you are writing invalid passport number";

                    }

                    else return "you are writing invalid passport number";

                }
                else return "you are writing invalid passport number";
            }
            else return "you are writing invalid passport number";
        }
        else return "you are writing invalid passport number";
    }
    else return "you are writing invalid passport number";

}

console.log(passport2(prompt()));