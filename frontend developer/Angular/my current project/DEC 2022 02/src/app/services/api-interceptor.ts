
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CurrentUserService } from "./current-user.service";
import { JwtService } from "./jwt.service";

@Injectable({ providedIn: 'root' })

export class ApiInterceptor implements HttpInterceptor {

  constructor(public jwtService: JwtService, public router: Router,
    private cus: CurrentUserService, private snackBar: MatSnackBar) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf('reset-password') !== -1 && this.jwtService.resetTokenUserDetails) {

      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.jwtService.getToken()}`
        }
      })
    } else if (req.url.indexOf("vca-security") < 0 && req.url.indexOf("googleapis") < 0) {
      // req = req.clone({ headers: req.headers.set("Authorization", "Bearer " + this.authToken) });
      if(req.url.indexOf("devops-identity")!== -1){
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${this.jwtService.getToken()}`,
            "ngsw-bypass": ""
          }
        });
      } else if(req.url.indexOf("actuator") !== -1){
        req = req.clone();
      } else {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${this.jwtService.getToken()}`,
            // "ngsw-bypass" : "true"
          }
        });
      }
    }
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse, caught) => {
        // if (error.toString().indexOf('Lost connection') !== -1) {
        //   // console.log("LOST CONNECTION >>>>");

        //   this.snackBar.open('Server is offline.', null, {
        //     duration: 2000,
        //   });
        //   this.cus.purgeAuth();
        // }

        if (error.status === 401 || error.status === 403) {
          // console.log("SESSION EXPIRED >>>>");
          this.snackBar.open('Your session is expired.', null, {
            duration: 2000,
          });
          this.cus.purgeAuth();
        } else if (error.status === 0 || error.status === 504){
          // intercept the respons error and displace it to the console
          if(error.url.indexOf("employee-info") > -1){
            // this.router.navigate(['/server-offline']);
          } else {
            this.snackBar.open('Service is not currently avilable.', null, {
              duration: 2000,
            });
          }
        }

        // return the error to the method that called it
        return observableThrowError(error);
      }) as any
    );
  }
}

