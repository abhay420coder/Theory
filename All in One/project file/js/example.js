// Asynçjs programming

// Array of object
const datas = [
                {name : "Ajay" , Profession:"Software Engieer"},
                {name : "Anuj" , Profession:"Software Engieer"},
]

/* 
// we are not getting data all three 
//          0 :- Ajay
//          1 :- Anuj 
//          2 :- Vivek 
// so this is problem

// reason
// because in getDatas()  i  keep time less than createData(newdata) 
//        then createData(newdata) function will not be call
//            because first getDatas() will call at 1000ms
//            and then createData(newdata) will call at 2000ms 
//                  but after 2000ms , getDatas() will not call at any chance because it has already called at 1000ms
//                  so ther is not any affect is created by createData(newdata) for view.
function getDatas(){
    setTimeout( () =>{
        let output = "";
        datas.forEach((element , index)=>{
            output +=`<li> ${index} :-  ${element.name}</li>`
        })
        document.body.innerHTML=output;
    } ,1000);

}

function createData(newdata){
    setTimeout(()=>{
        datas.push(newdata);
    } , 2000)
    //  if i wil keep time less than 2000ms ex:- 1000ms
    //        then createData(newdata) function will not be call
    //            because first getDatas() will call at 1000ms
    //            and then createData(newdata) will call at 2000ms
}
createData({name : "Vivek" , Profession:"Software Engieer"})
getDatas(); // this is a "call function"   , this is not a "callBack function"

// output :- 
//          0 :- Ajay
//          1 :- Anuj 
*/






//  solution -1
/* 
// with call function
function getDatas(){
    setTimeout( () =>{
        let output = "";
        datas.forEach((element , index)=>{
            output +=`<li> ${index} :-  ${element.name}</li>`
        })
        document.body.innerHTML=output;
    } ,5000);
    //  if i wil keep time less than 2000ms ex:- 1950ms
    //        then createData(newdata) function will not be call
    //            because first getDatas() will call at 1950ms
    //            and then createData(newdata) will call at 2000ms
   
    //  if i wil keep time more than 2000ms ex:- 2050ms
    //        then createData(newdata) function will be call
    //            because first createData(newdata) will call at 2000ms
    //            and then getDatas() will call at 2050ms;
   
}

function createData(newdata){
    setTimeout(()=>{
        datas.push(newdata);
    } , 2000)
}
createData({name : "Vivek" , Profession:"Software Engieer"})
getDatas(); // this is a "call function"   , this is not a "callBack function"

// output :- 
//          0 :- Ajay
//          1 :- Anuj 
//          2 :- Vivek 
*/





//  solution -2
/* 
// with callBack function
function getDatas(){
    setTimeout( () =>{
        let output = "";
        datas.forEach((element , index)=>{
            output +=`<li> ${index} :-  ${element.name}</li>`
        })
        document.body.innerHTML=output;
    } ,1000);

   
}

function createData(newdata , callBackFunction){
    //  callBack Function is always be a argunment of function
    //  A callback function is a function passed into another function as an argument, 
    //      which is then invoked inside the outer function 
    //      to complete some kind of routine or action.
    setTimeout(()=>{
        datas.push(newdata);
        callBackFunction();
        // after push the data , 
            // here callBackFunction() is called as a getDatas()
        
    } , 2000)

}
createData({name : "Vivek" , Profession:"Software Engieer"} ,getDatas )
// output :- 
//          0 :- Ajay
//          1 :- Anuj 
//          2 :- Vivek 
 */


//  solution -3
/* 
// with promise function

// return new Promise(   (resolve, reject) => {}  )
// if we are not getting error then resolve() will work
// if we are getting error then reject() will work


function getDatas(){
    setTimeout( () =>{
        let output = "";
        datas.forEach((element , index)=>{
            output +=`<li> ${index} :-  ${element.name}</li>`
        })
        document.body.innerHTML=output;
    } ,1000);

   
}

function createData(newdata){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            datas.push(newdata);

            // if error = flase; then we get resolve()
            // if error = true; then we get reject()
            //      and we will get reject message in console  like :- " kuch shi nhi hai! "
            let error = false;
            if(!error)resolve();
            else reject(" kuch shi nhi hai! ")
        } , 2000)
    })
}


// createData({name : "Vivek" , Profession:"Software Engieer"} ).then(getDatas)
// if we are getting resolve then we will get output
// output :- 
//          0 :- Ajay
//          1 :- Anuj 
//          2 :- Vivek 


// createData({name : "Vivek" , Profession:"Software Engieer"} ).then(getDatas)
// if we are getting reject then we will reject message in console  like 
//      :- " Uncaught(in promise) kuch shi nhi hai! "


// if we are getting reject then we will reject message in console  like 
//      :- " Uncaught(in promise) kuch shi nhi hai! "
// then see ,how we will catch error
createData({name : "Vivek" , Profession:"Software Engieer"} ).then(getDatas).catch((err)=>console.log(err))

 */


//  solution -4
// with async/await
function getDatas(){
    setTimeout( () =>{
        let output = "";
        datas.forEach((element , index)=>{
            output +=`<li> ${index} :-  ${element.name}</li>`
        })
        document.body.innerHTML=output;
    } ,1000);

   
}

function createData(newdata){
    // return new Promise((resolve, reject) => {
        setTimeout(()=>{
            datas.push(newdata);

            // if error = flase; then we get resolve()
            // if error = true; then we get reject()
            //      and we will get reject message in console  like :- " kuch shi nhi hai! "
            // let error = false;
            // if(!error)resolve();
            // else reject(" kuch shi nhi hai! ")
        } , 2000)
    // })
}


// createData({name : "Vivek" , Profession:"Software Engieer"} ).then(getDatas)
// if we are getting resolve then we will get output
// output :- 
//          0 :- Ajay
//          1 :- Anuj 
//          2 :- Vivek 


// createData({name : "Vivek" , Profession:"Software Engieer"} ).then(getDatas)
// if we are getting reject then we will reject message in console  like 
//      :- " Uncaught(in promise) kuch shi nhi hai! "


// if we are getting reject then we will reject message in console  like 
//      :- " Uncaught(in promise) kuch shi nhi hai! "
// then see ,how we will catch error
//  createData({name : "Vivek" , Profession:"Software Engieer"} ).then(getDatas).catch((err)=>console.log(err))

async function start(){
    await createData({name : "Vivek" , Profession:"Software Engieer"} )
    // await is only valid with async function.
    getDatas()
}

start();