/* 
//  for new js like react and angular
import { greet, message } from "./main1";

const greet_scaler = greet("Scaler");

console.log(greet_scaler); // Hello, Scaler
console.log(message); // How you doing?

*/


// const main1 = require('./main1');

// console.log('a  :- ' , main1.a); // Hello, Scaler
// console.log('b  :- ' , main1.b); // How you doing?

/* 

const http = require('http');
http.createServer((req,res)=>{
  res.writeHead(200 , {'Content-Type':'application\json'})
  // res.write("{name:'Abhay Kumar' , email:'ak@gmail.com'}");
  res.write(JSON.stringify({name:'Abhay Kumar' , email:'ak@gmail.com'}));
  res.end();
}).listen(4600) 

*/

const http = require('http');
const data = require('./data')
http.createServer((req,res)=>{
  res.writeHead(200 , {'Content-Type':'application\json'})
  // res.write(`data`);
  res.write(JSON.stringify(data));
  res.end();
}).listen(4600)