const express = require('express');
const router = express.Router();


// // get method
// router.route('/').get((req,res)=>{
//     // res.send("get all contacts"); // send simply string 
//     // res.json({"message":"get all contatct" , "status" : 200}) // send json
//     res.status(201).json({"message":`get all contatct   url :- ${req.url}`}) // send json with status
// })

// post method
// router.route('/').post((req,res)=>{
//     // res.send("get all contacts"); // send simply string 
//     // res.json({"message":"get all contatct" , "status" : 200}) // send json
//     res.status(201).json({"message":`post contatc   url :- ${req.url}`}) // send json with status
// })

// // get method by id
// router.route('/:id').get((req,res)=>{
//     // res.send("get all contacts"); // send simply string 
//     // res.json({"message":"get all contatct" , "status" : 200}) // send json
//     // res.status(201).json({"message":"get by id contatc"}) // send json with status
//     res.status(201).json({"message":`get by id contatc req:- ${req}    req.params:-   ${req.params}       req.params.id :-${req.params.id}        url :- ${req.url}`}) // send json with status

// })

// // put method
// router.route('/:id').put((req,res)=>{
//     // res.send("get all contacts"); // send simply string 
//     // res.json({"message":"get all contatct" , "status" : 200}) // send json
//     // res.status(201).json({"message":"put by id contatc"}) // send json with status
//     res.status(201).json({"message":`put by id contatc req:- ${req}    req.params:-   ${req.params}       req.params.id :-${req.params.id}         url :- ${req.url}`}) // send json with status
// })

// // delete method
// router.route('/:id').delete((req,res)=>{
//     // res.send("get all contacts"); // send simply string 
//     // res.json({"message":"get all contatct" , "status" : 200}) // send json
//     // res.status(201).json({"message":"delete  contatc"}) // send json with status
//     res.status(201).json({"message":`delete by id contatct req:- ${req}    req.params:-   ${req.params}       req.params.id :-${req.params.id}         url :- ${req.url}`}) // send json with status
// })



// module.exports = router








// get method
router.route('/').get((req,res)=>{
    // res.send("get all contacts"); // send simply string 
    // res.json({"message":"get all contatct" , "status" : 200}) // send json
    res.status(201).json({"message":`get all contatct   url :- ${req.url}`}) // send json with status
})

// post method
router.route('/').post((req,res)=>{
    // res.send("get all contacts"); // send simply string 
    // res.json({"message":"get all contatct" , "status" : 200}) // send json
    res.status(201).json({"message":`post contatc   url :- ${req.url}`}) // send json with status
})

// get method by id
router.route('/:id').get((req,res)=>{
    // res.send("get all contacts"); // send simply string 
    // res.json({"message":"get all contatct" , "status" : 200}) // send json
    // res.status(201).json({"message":"get by id contatc"}) // send json with status
    res.status(201).json({"message":`get by id contatc req:- ${req}    req.params:-   ${req.params}       req.params.id :-${req.params.id}        url :- ${req.url}`}) // send json with status

})

// put method
router.route('/:id').put((req,res)=>{
    // res.send("get all contacts"); // send simply string 
    // res.json({"message":"get all contatct" , "status" : 200}) // send json
    // res.status(201).json({"message":"put by id contatc"}) // send json with status
    res.status(201).json({"message":`put by id contatc req:- ${req}    req.params:-   ${req.params}       req.params.id :-${req.params.id}         url :- ${req.url}`}) // send json with status
})

// delete method
router.route('/:id').delete((req,res)=>{
    // res.send("get all contacts"); // send simply string 
    // res.json({"message":"get all contatct" , "status" : 200}) // send json
    // res.status(201).json({"message":"delete  contatc"}) // send json with status
    res.status(201).json({"message":`delete by id contatct req:- ${req}    req.params:-   ${req.params}       req.params.id :-${req.params.id}         url :- ${req.url}`}) // send json with status
})



module.exports = router







// testing

// const app = express();


// const allRouter = {};

// allRouter.getContact = (url , body) =>{
//     app.get(url , (req,res)=>{
//         res.json(body)
//     })
// } 
// module.exports = allRouter;