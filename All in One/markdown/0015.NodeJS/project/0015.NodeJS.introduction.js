// console.log("Hello Abhay !")
// a = 2;
// b = 3 ;
// console.log('a+ b   :-  ' , (a+b));
// // const packageName = require('packageName');
// a= 1
// while (a <= 5){
//   console.log(a);
//   a += 1;
// }

// create a simple server

const http = require('http');

function datacontrol(request, response){
  response.write("<h1> hello i am abhay kmar </h1>"); //  sending data to client
  response.end();  // agter sending response we need to end/close response
}

http.createServer(datacontrol).listen(4500)




/* 

const http = require('http');

http.createServer((request,response)=>{
response.write(content); //  sending data to client
response.end();  // agter sending response we need to end/close response
}).listen(portNo)


*/