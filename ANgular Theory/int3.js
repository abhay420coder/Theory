console.log("hi good");

var list = ["Bengaluru FC","Chennaiyin FC","East Bengal","Goa","Hyderabad FC","Jamshedpur FC","Kerala Blaster","Mumbai City FC","NorthEast United FC","Odisha FC"];
console.log(`your  array :-   ${list} `)
var n = list.length
console.log("n :- " , n)
while (n>0){
    console.log(`start random choosing`);

    var ele1=Math.floor(Math.random()*n)
    console.log(`first random number :- ${ele1}`)
    console.log(`your deleted first element :- ${list[ele1]} `)
    list.splice(ele1, 1);
    console.log(`your modified array ${list} after ele1`)
    n = list.length;
    console.log("n :- " , n)

    var ele2=Math.floor(Math.random()*n)
    console.log(`second random number :- ${ele2}`)
    console.log(`your deleted second element :- ${list[ele2]}`)
    list.splice(ele2, 1);
    console.log(`your modified array ${list} after ele2`)
    n = list.length;
    console.log("n :- " , n)
    console.log(list);
}

if(list.length==0)console.log(`your list is empty`)





















// var list = ["Bengaluru FC","Chennaiyin FC","East Bengal","Goa","Hyderabad FC","Jamshedpur FC","Kerala Blaster","Mumbai City FC","NorthEast United FC","Odisha FC"];
// console.log(`your  array :-   ${list} `)
// var n = list.length
// console.log("n :- " , n)
// while (n>0){
//     console.log(`start random choosing`);
//     var ele1=Math.floor(Math.random()*n)
//     list.splice(ele1, 1);
//     n = list.length;
//     var ele2=Math.floor(Math.random()*n)
//     list.splice(ele2, 1);
//     n = list.length;
//     console.log(list);
// }
// if(list.length==0)console.log(`your list is empty`)
