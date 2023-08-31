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

let nodemailer = require('nodemailer');
let myMailId='abhaykumar.tech.it@gmail.com'
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: myMailId,
    pass: 'Amu@70505'
  }
});

let mailOptions = {
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



/* let http = require('http');
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



/* 

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
 */
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



/* 

var express = require('express');  
var app = express();  
app.get('/', function (req, res) {  
  res.send('Welcome to Node JS learning!');  
});  
var server = app.listen(8000, function () {  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log('Example app listening at http://%s:%s', host, port);  
});  

*/


/* 

let express = require('express');  

const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname , "crud")
const filePath = `${directoryPath}/apple.txt` ;
let app = express(); 
const serverPort = 8000

let value = {
  root : "Node JS learning!",
  home: "home page",
  about : "about page",
  portfolio : "portfolio page"
}

let ourHtml = `<div style="height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;">
        <div 
        style="border-color: red;
        border-width: 1px;
        border-style: solid;
        height: 10rem;
        width: 15rem;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 2rem;
        ">
            <h3>Abhay Kumar</h3>
            <h4>age : 24</h4>
        </div>
        <button>Hi</button>
    </div>`

let ourJson = [
  {
    name:"name1",
    value:"value1",
  },
  {
    name:"name2",
    value:"value2",
  },
  {
    name:"name3",
    value:"value3",
  },
  {
    name:"name4",
    value:"value4",
  },
  {
    name:"name6",
    value:"value6",
  },

]

// create file  
fs.writeFileSync(filePath , `This is a simple text file.`);



fs.readFile(filePath , 'utf8' , (err,item)=>{
    console.log(item); // we will get raw data
})

rootRoutingCallBackFunction =(req, res ) => {  
  // res.send(`Welcome to ${value.root}  ` ); 
  
  // put value into html input wilth the help of query-params
  res.send(`
  <div style="display:flex;flex-direction:column; gap:1rem">
    <input type="text" value="${req.query.name}" placeholder="name" style="width: 100px;" />
    <input type="number" value="${req.query.age}" placeholder="age" style="width: 100px;" />
    <input type="text" value="${req.query.add}" placeholder="add" style="width: 100px;" />
    <input type="text" value="${req.query.good}" placeholder="good" style="width: 100px;" />
  </div>
  ` );  
  // url = http://localhost:8000/?name=Abhay&age=20&add=poari&good=bad

  // res.send(req.query);  
  // console.log(req.query) // { name: 'Abhay', age: '20', add: 'poari', good: 'bad' }

}
htmlRoutingCallBackFunction =(req, res ) => {  
  // 
  res.send(ourHtml);  
}
jsonRoutingCallBackFunction =(req, res ) => {  
  res.send(ourJson);  
}
homeRoutingCallBackFunction =(req, res ) => {  
  res.send(`Welcome to ${value.home}`);  
}
aboutRoutingCallBackFunction =(req, res ) => {  
  res.send(`Welcome to ${value.about}`);  
}
portfolioRoutingCallBackFunction =(req, res ) => {  
  res.send(`Welcome to ${value.portfolio}`);  
}

app.get('/', rootRoutingCallBackFunction );  
app.get('/home', homeRoutingCallBackFunction );  
app.get('/about', aboutRoutingCallBackFunction );  
app.get('/portfolio', portfolioRoutingCallBackFunction );  
app.get('/html', htmlRoutingCallBackFunction );  
app.get('/json', jsonRoutingCallBackFunction );  


// server
serverConnectedCallBackFunction = () => {  
  let host = server.address().address;  
  let port = server.address().port;  
  console.log('Example app listening at http://%s:%s', host, port);  
  console.log('Example app listening at server.address() ====  ', server.address() );  
}

let server = app.listen(serverPort, serverConnectedCallBackFunction);  
 */



/* 

// make html page

let express = require('express');  

const fs = require('fs');
const path = require('path');
let app = express(); 

const rootPath = path.join(__dirname);
const testPath = path.join(__dirname,"test");
const serverPort = 8000;

app.use(express.static(rootPath));
app.use(express.static(testPath));

rootRoutingCallBackFunction =(req, res ) => {  
  console.log("root folder")
}
testRoutingCallBackFunction =(req, res ) => {  
  console.log("test folder")
}
app.get('/', rootRoutingCallBackFunction );  
// http://localhost:8000  or  http://localhost:8000/index.html  :- then we can access index.html of root folder     
// http://localhost:8000/html.html  :- then we can access html.html of root folder
// http://localhost:8000/json.html  :- then we can access json.html of root folder
// http://localhost:8000/home.html  :- then we can access home.html of root folder
// http://localhost:8000/about.html  :- then we can access about.html of root folder
// http://localhost:8000/portfolio.html  :- then we can access portfolio.html of root folder

app.get('/test', testRoutingCallBackFunction );  
// http://localhost:8000/test/  or  http://localhost:8000/test/index.html  :- then we can access index.html of test folder     
// http://localhost:8000/test/html.html  :- then we can access html.html of test folder   
// http://localhost:8000/test/json.html  :- then we can access json.html of test folder   
// http://localhost:8000/test/home.html  :- then we can access home.html of test folder   
// http://localhost:8000/test/about.html  :- then we can access about.html of test folder   
// http://localhost:8000/test/portfolio.html  :- then we can access portfolio.html of test folder   

let server = app.listen(serverPort);  
 */






/* 

// remove extension from url and 404 page

let express = require('express');  

const fs = require('fs');
const path = require('path');
let app = express(); 

const rootPath = path.join(__dirname);
// const testPath = path.join(__dirname,"test");
const serverPort = 8000;

// routing call back function 
defaultRoutingCallBackFunction =  (req, res ) => {  
  res.sendFile('./index.html')
}

aboutRoutingCallBackFunction = (req, res ) => {  
  res.sendFile(`${rootPath}/about.html`)
}
homeRoutingCallBackFunction = (req, res ) => {  
  res.sendFile(`${rootPath}/home.html`)
}
htmlRoutingCallBackFunction = (req, res ) => {  
  res.sendFile(`${rootPath}/html.html`)
}
indexRoutingCallBackFunction = (req, res ) => {  
  res.sendFile(`${rootPath}/index.html`)
}
jsonRoutingCallBackFunction = (req, res ) => {  
  res.sendFile(`${rootPath}/json.html`)
}
portfolioRoutingCallBackFunction = (req, res ) => {  
  res.sendFile(`${rootPath}/portfolio.html`)
}

testAboutRoutingCallBackFunction = (req, res ) => {  
  res.sendFile(`${rootPath}/test/about.html`)
}
testHomeRoutingCallBackFunction = (req, res ) => {  
  res.sendFile(`${rootPath}/test/home.html`)
}
testHtmlRoutingCallBackFunction = (req, res ) => {  
  res.sendFile(`${rootPath}/test/html.html`)
}
testIndexRoutingCallBackFunction = (req, res ) => {  
  res.sendFile(`${rootPath}/test/index.html`)
}
testJsonRoutingCallBackFunction = (req, res ) => {  
  res.sendFile(`${rootPath}/test/json.html`)
}
testPortfolioRoutingCallBackFunction = (req, res ) => {  
  res.sendFile(`${rootPath}/test/portfolio.html`)
}

wrongPathRoutingCallBackFunction = (req, res ) => {  
  res.sendFile(`${rootPath}/test/404.html`)
}

app.get('', defaultRoutingCallBackFunction);  // this for deault path :- http://localhost:8000

app.get('/about', aboutRoutingCallBackFunction); // http://localhost:8000/about
app.get('/home', homeRoutingCallBackFunction ); // http://localhost:8000/home
app.get('/html', htmlRoutingCallBackFunction ); // http://localhost:8000/html  
app.get('/index', indexRoutingCallBackFunction ); // http://localhost:8000/index  
app.get('/json', jsonRoutingCallBackFunction ); // http://localhost:8000/json  
app.get('/portfolio', portfolioRoutingCallBackFunction ); // http://localhost:8000/portfolio  

app.get('/test', testAboutRoutingCallBackFunction ); // http://localhost:8000/test/   
app.get('/test/about', testAboutRoutingCallBackFunction ); // http://localhost:8000/test/about
app.get('/test/home', testHomeRoutingCallBackFunction ); // http://localhost:8000/test/home
app.get('/test/html', testHtmlRoutingCallBackFunction ); // http://localhost:8000/test/html  
app.get('/test/index', testIndexRoutingCallBackFunction ); // http://localhost:8000/test/index  
app.get('/test/json', testJsonRoutingCallBackFunction ); // http://localhost:8000/test/json  
app.get('/test/portfolio', testPortfolioRoutingCallBackFunction ); // http://localhost:8000/test/portfolio  

app.get('*', wrongPathRoutingCallBackFunction);  // this is for any wrong path
  

let server = app.listen(serverPort);  
 */




/* 

// remove extension from url and 404 page

let express = require('express');  

const fs = require('fs');
const path = require('path');
let app = express(); 

const rootPath = path.join(__dirname);


app.set('view engine', 'ejs'); // syntax  for use ejs
app.set('views', './folderName/views'); // syntax for use views  ,  if views fold not in root folder  and views folder are in different folder


const serverPort = 8000;

// routing call back function 
defaultRoutingCallBackFunction =  (req, res ) => {  
  res.sendFile('./index.html')
}

// aboutRoutingCallBackFunction = (req, res ) => {  
//   res.sendFile(`${rootPath}/about.html`)
// }
// homeRoutingCallBackFunction = (req, res ) => {  
//   res.sendFile(`${rootPath}/home.html`)
// }
// htmlRoutingCallBackFunction = (req, res ) => {  
//   res.sendFile(`${rootPath}/html.html`)
// }
// indexRoutingCallBackFunction = (req, res ) => {  
//   res.sendFile(`${rootPath}/index.html`)
// }
// jsonRoutingCallBackFunction = (req, res ) => {  
//   res.sendFile(`${rootPath}/json.html`)
// }
// portfolioRoutingCallBackFunction = (req, res ) => {  
//   res.sendFile(`${rootPath}/portfolio.html`)
// }

// testAboutRoutingCallBackFunction = (req, res ) => {  
//   res.sendFile(`${rootPath}/test/about.html`)
// }
// testHomeRoutingCallBackFunction = (req, res ) => {  
//   res.sendFile(`${rootPath}/test/home.html`)
// }
// testHtmlRoutingCallBackFunction = (req, res ) => {  
//   res.sendFile(`${rootPath}/test/html.html`)
// }
// testIndexRoutingCallBackFunction = (req, res ) => {  
//   res.sendFile(`${rootPath}/test/index.html`)
// }
// testJsonRoutingCallBackFunction = (req, res ) => {  
//   res.sendFile(`${rootPath}/test/json.html`)
// }
// testPortfolioRoutingCallBackFunction = (req, res ) => {  
//   res.sendFile(`${rootPath}/test/portfolio.html`)
// }

aboutRoutingCallBackFunctionForEjs = (req, res ) => {  
  let passingObject = {
    name:"Abhay",
    age:24,
    add:"poari"
  }
  res.render(`about` , {passingObject})
}
homeRoutingCallBackFunctionForEjs = (req, res ) => {  
  res.render(`home`)
}
htmlRoutingCallBackFunctionForEjs = (req, res ) => {  
  res.render(`html`)
}
indexRoutingCallBackFunctionForEjs = (req, res ) => {  
  res.render(`index`)
}
jsonRoutingCallBackFunctionForEjs = (req, res ) => {  
  res.render(`json`)
}
portfolioRoutingCallBackFunctionForEjs = (req, res ) => {  
  res.render(`portfolio`)
}

wrongPathRoutingCallBackFunction = (req, res ) => {  
  res.sendFile(`${rootPath}/test/404.html`)
}

app.get('', defaultRoutingCallBackFunction);  // this for deault path :- http://localhost:8000

// app.get('/about', aboutRoutingCallBackFunction); // http://localhost:8000/about
// app.get('/home', homeRoutingCallBackFunction ); // http://localhost:8000/home
// app.get('/html', htmlRoutingCallBackFunction ); // http://localhost:8000/html  
// app.get('/index', indexRoutingCallBackFunction ); // http://localhost:8000/index  
// app.get('/json', jsonRoutingCallBackFunction ); // http://localhost:8000/json  
// app.get('/portfolio', portfolioRoutingCallBackFunction ); // http://localhost:8000/portfolio  

// app.get('/test', testAboutRoutingCallBackFunction ); // http://localhost:8000/test/   
// app.get('/test/about', testAboutRoutingCallBackFunction ); // http://localhost:8000/test/about
// app.get('/test/home', testHomeRoutingCallBackFunction ); // http://localhost:8000/test/home
// app.get('/test/html', testHtmlRoutingCallBackFunction ); // http://localhost:8000/test/html  
// app.get('/test/index', testIndexRoutingCallBackFunction ); // http://localhost:8000/test/index  
// app.get('/test/json', testJsonRoutingCallBackFunction ); // http://localhost:8000/test/json  
// app.get('/test/portfolio', testPortfolioRoutingCallBackFunction ); // http://localhost:8000/test/portfolio  


app.get('/about', aboutRoutingCallBackFunctionForEjs); // http://localhost:8000/about
app.get('/home', homeRoutingCallBackFunctionForEjs ); // http://localhost:8000/home
app.get('/html', htmlRoutingCallBackFunctionForEjs ); // http://localhost:8000/html  
app.get('/index', indexRoutingCallBackFunctionForEjs ); // http://localhost:8000/index  
app.get('/json', jsonRoutingCallBackFunctionForEjs ); // http://localhost:8000/json  
app.get('/portfolio', portfolioRoutingCallBackFunctionForEjs ); // http://localhost:8000/portfolio  

app.get('*', wrongPathRoutingCallBackFunction);  // this is for any wrong path
  

let server = app.listen(serverPort);  

 */





/* 

// remove extension from url and 404 page

let express = require('express');  

const fs = require('fs');
const path = require('path');
let app = express(); 

const rootPath = path.join(__dirname);


app.set('view engine', 'ejs'); // syntax  for use ejs
app.set('views', './folderName/views'); // syntax for use views  ,  if views fold not in root folder  and views folder are in different folder


const serverPort = 8000;

// routing call back function 
defaultRoutingCallBackFunction =  (req, res ) => {  
  res.sendFile(`${rootPath}/index.html`)
}

aboutRoutingCallBackFunctionForEjs = (req, res ) => {  
  let passingObject = { 
    name:"Abhay", 
    age:24,  
    add:"poari" ,
    skill:["ui developer" , "data engineer" , "full stack"]
  }
  res.render(`about` , {passingObject}) // passing value to html (or render object to html) with html    
}


wrongPathRoutingCallBackFunction = (req, res ) => {  
  res.sendFile(`${rootPath}/test/404.html`)
}

app.get('', defaultRoutingCallBackFunction);  // this for deault path :- http://localhost:8000

app.get('/about', aboutRoutingCallBackFunctionForEjs); // http://localhost:8000/about


app.get('*', wrongPathRoutingCallBackFunction);  // this is for any wrong path
  

let server = app.listen(serverPort);  

 */



// middle ware
// Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by a variable named next .




let express = require('express');  
let app = express(); 
let route = express.Router()
const serverPort = 8000

let value = {
  root : "Node JS learning!",
  home: "home page",
  about : "about page",
  portfolio : "portfolio page"
}

let ourHtml = `<div style="height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;">
        <div 
        style="border-color: red;
        border-width: 1px;
        border-style: solid;
        height: 10rem;
        width: 15rem;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 2rem;
        ">
            <h3>Abhay Kumar</h3>
            <h4>age : 24</h4>
        </div>
        <button>Hi</button>
    </div>`

let ourJson = [
  {
    name:"name1",
    value:"value1",
  },
  {
    name:"name2",
    value:"value2",
  },
  {
    name:"name3",
    value:"value3",
  },
  {
    name:"name4",
    value:"value4",
  },
  {
    name:"name6",
    value:"value6",
  },

]






startRoutingCallBackFunction =(req, res ) => {  
  res.send(`Welcome to start page`);
}
rootRoutingCallBackFunction =(req, res ) => {  
  // res.send(`Welcome to ${value.root}  ` ); 
  
  // put value into html input wilth the help of query-params
  res.send(`
  <div style="display:flex;flex-direction:column; gap:1rem">
    <input type="text" value="${req.query.name}" placeholder="name" style="width: 100px;" />
    <input type="number" value="${req.query.age}" placeholder="age" style="width: 100px;" />
    <input type="text" value="${req.query.add}" placeholder="add" style="width: 100px;" />
    <input type="text" value="${req.query.good}" placeholder="good" style="width: 100px;" />
  </div>
  ` );  
  // url = http://localhost:8000/root?name=Abhay&age=20&add=poari&good=bad

  // res.send(req.query);  
  console.log(req.query) // { name: 'Abhay', age: '20', add: 'poari', good: 'bad' }

}
htmlRoutingCallBackFunction =(req, res ) => {  
  // 
  res.send(ourHtml);  
}
jsonRoutingCallBackFunction =(req, res ) => {  
  res.send(ourJson);  
}
homeRoutingCallBackFunction =(req, res ) => {  
  res.send(`Welcome to ${value.home}`);  
}
aboutRoutingCallBackFunction =(req, res ) => {  
  res.send(`Welcome to ${value.about}`);  
}
portfolioRoutingCallBackFunction =(req, res ) => {  
  res.send(`Welcome to ${value.portfolio}`);  
}








const middleWareReqFilter = (req, resp , next) => {
  console.log("request filter");
  let age = req.query.age;
  if(!age) {
    resp.send("please providde age")
  }else{
    if(age<18) resp.send("you are not eligible")
    else next();
  }
}

// middleware come here before routing
// app.use(middleWareReqFilter);
route.use(middleWareReqFilter) // multiple route level middleware express js


app.get('/', startRoutingCallBackFunction );  
route.get('/root' ,rootRoutingCallBackFunction );   // with route level middleware
app.get('/home', homeRoutingCallBackFunction );  
route.get('/about' ,aboutRoutingCallBackFunction );  // with route level middleware
app.get('/portfolio', portfolioRoutingCallBackFunction );  
app.get('/html', htmlRoutingCallBackFunction );  
app.get('/json', jsonRoutingCallBackFunction );  



app.use('/' , route) // to use routeer of route

// server
serverConnectedCallBackFunction = () => {  
  let host = server.address().address;  
  let port = server.address().port;  
  console.log('Example app listening at http://%s:%s', host, port);  
  console.log('Example app listening at server.address() ====  ', server.address() );  
}

let server = app.listen(serverPort, serverConnectedCallBackFunction); 





