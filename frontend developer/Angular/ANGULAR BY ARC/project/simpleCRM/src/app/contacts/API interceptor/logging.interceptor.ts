import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(request);
    console.log("request :- before ABHAY KUMAR   :-  " , request);
    // console.log("request.url :- ABHAY KUMAR   :-  " , request.url);

    // you can access tocken , change token , refresh it, extend the time , go to log in , etc;
    // now we are doing change the authotization token inside the interceptor
    let httpAuth = request.headers.get('Authorization')
    httpAuth = "addingValueFromInterceptor" + httpAuth

    request.headers.append('Authorization' , httpAuth)
    // if(request.method==='GET'){

    // }

    console.log("httpAuth :- after ABHAY KUMAR   :-  " , httpAuth);
    console.log("request :- after ABHAY KUMAR   :-  " , request);


    return next.handle(request);
  }
}
