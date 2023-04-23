// we are following here es6 index

// import rxpress from express module
const express = require('express');

 // create express application
const app = express(); // create express application

//  to start the server we define port number
const port = process.env.PORT||5000 ;

// then listen the port number
app.listen(port , ()=>{
  console.log(`server is running at http://localhost:${port} `)
}) // now server will be start

// in the server folder we will write my express js code with the help of mongoose tp carried MongoDB.