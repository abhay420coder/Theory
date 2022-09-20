// function lottery() {
//     var userLott = []
//     var lottNum = []
//     var gameCount = prompt("Enter number of tickets you want:")

//     for (let i = 0; i < gameCount; i++) {
//         userLott.push(Math.round(Math.random() * 100))

//     }

//     for (let j = 0; j < 5; j++) {
//         lottNum.push(Math.round(Math.random() * 100))

//     }

//     var newUserLott = [];
//     var newLottNum = [];
//     var count = 0;
//     for (let i = 0; i < userLott.length; i++) {
//         newUserLott.push(userLott[i])
//     }

//     for (let i = 0; i < lottNum.length; i++) {
//         newLottNum.push(lottNum[i])
//     }

//     for (let e of newUserLott) { console.log(e) }
//     console.log("Lottery Numbers are:", newLottNum)

//     for (let i = 0; i < newUserLott.length; i++) {
//         for (let j = 0; j < newLottNum.length; j++) {
//             if (newUserLott[i] == newLottNum[j]) {
//                 console.log("match:- ", newLottNum[j]) 
//                 break;
//             }
//             else {
//                 count += 1;
//             break;}
//         }
//     }
//     console.log("goodbye", count)

// }

// lottery()































// t = int(input())
// for i in range(t):
//     n = int(input())
//     g = int(input())
//     prices = list(map(int, input().split()))
//     prices.sort()
//     print(sum(prices[:n]))


    var obj = {};

    var t = parseInt(prompt("number Of Test Case"))
    for(let i = 0 ; i<t;i++){
        
        var S = parseInt(prompt("number of gift available in shop"))
        var P = parseInt(prompt("number of gift purchased from shop"))
        var value = [];
        for(let j=0;j<P;j++){
            value.push(parseInt(prompt("prices of gift")))
        }
        obj[`gift${i}`]=value;
    }

    console.log(obj);
    var mainArr = Object.values(obj);
    var newArr=[];
    for(let i = 0 ; i<mainArr.length;i++){
        sum=0;
        for(let j=0;j<mainArr[i].length;j++){
            sum += mainArr[i][j];
        }
        newArr.push(sum);
    }
    newArr.sort(function(a,b){
        return a-b;
    });
    console.log(newArr[0]);