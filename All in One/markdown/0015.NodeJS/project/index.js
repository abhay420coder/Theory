// const express = require("express");
// const dotenv = require("dotenv").config();

// const app = express();
// let port = process.env.PORT || 5000;


// // create simple server
// // app.listen(portNumber , callBackFunction)
// const serverCallBackFunction = () =>{
//     console.log(`server is running on  ${port}`);
// }
// app.listen(port , serverCallBackFunction)




// // create simple api
// // url :- http://localhost:5001/api/contacts    -> GET method

// // // app.use('url' , routes)
// app.use('/api/contacts' , require('./routes/contactRoutes')) // usually app.use known as middleware
// // app.use('/api/portfolio' , require('./routes/contactRoutes')) // usually app.use known as middleware


// // const allRouter = require('./routes/contactRoutes');
// // allRouter.getContact('/about' ,{"message":"get  contatct"} );

const http = require('http');
let responseData = {
    name:"Abhay Kumar"
}; 
let port = 5400;
let statusCode = {
    informationResponses:{
        continue : 101,
        switchingProtocols:101,
        processing:102,
        earlyHints:103,
    },
    successfulResponse :{
        ok : 200,
        created:201,
        accepted:202,
        nonAuthorativeInformation:203,
        noContent:204,
        resetContent:205,
        partialContent:206,
        multiStatus:207,
        alreadyReported:208,
        imUsed:226,
    },
    redirectingMessages:{
        multipleChoice:300,
        movedPermanently:301,
        found:302,
        seeOther:303,
        notModified:304,
        useProxy:305,
        unused:306,
        temporaryRedirect:307,
        permanentRedirect:308,
    },
    clientErrorResponses :{
        badRequest:400,
        unauthorized:401,
        paymentRequired:402,
        forbidden:403,
        notFound:404,
        methodNotAllowed:405,
        notAcceptable:406,
        proxyAuthenticationRequired:407,
        requestTimeout:408,
        conflict:409,
        gone:410,
        lengthRequired:411,
        preconditionFailed:412,
        payloadTooLarge:413,
        uriTooLong:414,
        unSupportedMediaType:415,
        rangeNotSatisfiable:416,
        expectationFailed:417,
        iMaTeapot:418,
        misDirectedRequest:421,
        unProcessableConetnt:422,
        locked:423,
        failedDependency:424,
        tooEarly:425,
        upgradeRequired:426,
        preConditionRequired:428,
        tooManyRequests:429,
        requestHeaderFieldsTooLarge:431,
        unAvailableForLegalReasons:451,
    },
    serverErrorResponses : {
        internalServerError:500,
        notImplemented:501,
        badGateway:502,
        serviceUnAvailable:503,
        gatewayTimeout:504,
        httpVersionNotSupported:505,
        variantAlsoNegotiates:506,
        insufficientStorage:507,
        loopDirected:508,
        notExtended:510,
        networkAuthenticateRequired:511,
    },
};


let headers = {
    'Content-Type' : 'application\json'
}



http.createServer((req , res) =>{
    res.writeHead(statusCode.successfulResponse.ok , headers);
    console.log(`server is running on ${port}`);
    res.write(JSON.stringify(responseData))
    res.end()
}).listen(port);

