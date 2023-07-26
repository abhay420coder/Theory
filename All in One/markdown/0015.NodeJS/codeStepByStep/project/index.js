/* 


const http = require('http');
let uc = require("upper-case")

const status = require('./assets/status');
const okStatus = status.status.successfulResponse.ok;
let responseData1 = [
        {name:"Abhay Kumar 1",age:241},
        {name:"Abhay Kumar 2",age:242},
        {name:"Abhay Kumar 3",age:243},
        {name:"Abhay Kumar 4",age:244},
    ]; 
let responseData2 = [
        {name:"Abhay Kumar 11",age:1241},
        {name:"Abhay Kumar 12",age:1242},
        {name:"Abhay Kumar 13",age:1243},
        {name:"Abhay Kumar 14",age:1244},
    ];
let port = 5400;

// http.createServer(callBackFunctionOfRequestAndRsponse).listen(port)


http.createServer((req , res) =>{

    // set status
    // res.statusCode = okStatus;


    // set header
    // res.setHeader('Content-Type' , 'application\json')
    // res.setHeader('file' , 'pdf')
    // res.setHeader('name' , 'Abhay')


    // set header and status
    let headers = {'Content-Type' : 'application\json' , 'file' : 'json' , 'name' : 'Abhay'}
    let okStatus =200;
    res.writeHead(okStatus , headers);

    console.log(`server is running on ${port}`);

  
    let data = "node module";
    res.write(data)
    res.write(uc.upperCase(data))
    res.end();
}).listen(port);


*/


/*
const http = require('http');

let responseData1 = [
        {name:"Abhay Kumar 1",age:241},
        {name:"Abhay Kumar 2",age:242},
        {name:"Abhay Kumar 3",age:243},
        {name:"Abhay Kumar 4",age:244},
    ]; 
let port = 5400;

// http.createServer(callBackFunctionOfRequestAndRsponse).listen(port)


http.createServer((req , res) =>{

    let headers = {'Content-Type' : 'application\json' , 'file' : 'json' , 'name' : 'Abhay'}
    let okStatus =200;
    res.writeHead(okStatus , headers);
    
    console.log(`server is running on ${port}`);

    res.write(JSON.stringify(responseData1))
    res.end();
}).listen(port);

*/







/* 

// read file with file system
const http = require('http');
const fs = require('fs');

let port = 5400;

http.createServer((req , res) =>{

    let headers = {'Content-Type' : 'application\json' , 'file' : 'json' , 'name' : 'Abhay'}
    let okStatus =200;
    // fs.readFile('/etc/passwd', (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    //   });
    // fs.ReadStream
    fs.readFile('./index.html' , (error,data)=>{
        res.writeHead(okStatus , headers); // we will set the header and status
        res.write(data); // we will  wtire the data inside the file
        return res.end();  // this function returning to end the response
    })

}).listen(port);



 */







/* 
// send mail from local server in node js

// Step 1 :- install nodemailer package
// step 2 :- allow less secure app https://myaccount.google.com/lesssecureapps
// step 3 :- write program
// step 4 :- check mail 

const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host:'smtp.gmail.com', // host of gmail
    port:587, // port of gmail
    secure:false,
    requireTLS:true,
    auth:{
        user:'kabilraees420@gmail.com',
        pass:'Amu@70505'
    }
});

let mailOptions ={
    from: 'kabilraees420@gmail.com',
    to: 'ak8294836065@gmail.com',
    subject:'test node mail',
    text:'Hello Abhay'
}

transport.sendMail(mailOptions,(error,info)=>{
    if(error)console.log(error);
    else console.warn("email has been sent");
}) 


*/


/* 

// event an eventEmitter
const http = require('http');
const fs = require('fs');
const { log } = require('console');

let port = 5400;

let rs = fs.createReadStream('./demo.txt'); // read any single file
rs.on('open' , ()=>{ // here open is a event
    log("demo file is open")
}) 

*/


//  cuxtom events
// const events = require('events');
// events.EventEmitter
/* 

var nodemailer = require('nodemailer');
let myMailId='abhaykumar.tech.it@gmail.com'
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: myMailId,
    pass: 'Amu@70505'
  }
});

var mailOptions = {
  from: myMailId,
  to: 'kabilraees420@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 

*/



/* var http = require('http');
// const { __esModule } = require('uuid/dist/v1');

console.log("file psth" , __filename);
console.log("directory path" , __dirname);
// console.log("es" , __esModule);

let creareServerFunction = (req,res) =>{
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}
http.createServer(creareServerFunction).listen(4200) */

/* const http = require('http');

let responseData = {
    name:"Abhay Kumar"
}; 

let port = 5400;

let statusCode = {
    successfulResponse :{
        ok : 200,
        created:201,
    },
};


let headers = {
    'Content-Type' : 'application\json'
}

// http.createServer(callBackFunctionOfRequestAndRsponse).listen(port)  // to create server
let creareServerFunction = (req,res) =>{
    res.writeHead(statusCode.successfulResponse.ok , headers);
    console.log(`server is running on ${port}`);
    res.write(JSON.stringify(responseData))
    res.end()
}

http.createServer(creareServerFunction).listen(port) */


/* 

// getting input from command line
const fs = require('fs');

const input = process.argv;

if(input[2]=='add')fs.writeFileSync(input[3] , input[4])
else if(input[2]=='remove') fs.unlinkSync(input[3])
else console.log("invalid input");

 */





const fs = require('fs');
const path = require('path');

// const directoryPath = path.join(__dirname) // it will return you current directory
// console.warn("directoryPath :-  " , directoryPath) // directoryPath :-   C:\abhay data\project\our github\Theory\All in One\markdown\0015.NodeJS\codeStepByStep\project

const directoryPath = path.join(__dirname , "folderName") // if folderName exist then it will return you directory path of folderName 
console.warn("directoryPath :-  " , directoryPath) // directoryPath :-   C:\abhay data\project\our github\Theory\All in One\markdown\0015.NodeJS\codeStepByStep\project


// create multiple file inside folder folderName
// for(let i=0; i<5; i++){
//   fs.writeFileSync(`${directoryPath}/hello${i}.txt` , `a simple text file ${i}`)
// }

// get filelist from folder
fs.readdir(directoryPath , (err, files)=>{
  console.warn("all files :-  ",files);
  console.warn("1st files :-  ",files[0]);
  console.warn("2nd files :-  ",files[1]);
  console.warn("3th files :-  ",files[2]);
  console.warn("4th files :-  ",files[3]);
  console.warn("5th files :-  ",files[4]);
})

/* 
output :- 

all files :-   [
  'hello0.txt',
  'hello1.txt',
  'hello2.txt',
  'hello3.txt',
  'hello4.txt'
]
1st files :-   hello0.txt
2nd files :-   hello1.txt
3th files :-   hello2.txt
4th files :-   hello3.txt
5th files :-   hello4.txt
*/