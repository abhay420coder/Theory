// here we will use the express js

// import rxpress from express module
const express = require('express');

 // npw use express router class
const router = express.Router();

// get(path: string, ...handlers: RequestHandler<ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>[]): Router
router.get('/' , (req,res)=>{
  res.send("hello");
})

// then export router here
module.exports = router // if i will not export then we can get all router method



