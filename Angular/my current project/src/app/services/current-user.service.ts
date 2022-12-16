import { Injectable, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, ReplaySubject } from "rxjs";
import { environment } from 'src/environments/environment';
import { globalUrls } from '../main/urls';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn:'root'
})
export class CurrentUserService implements OnDestroy {
  private currentUserSubject = new BehaviorSubject<any>({});
  public currentUser = this.currentUserSubject.asObservable();
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  private subscription = this.isAuthenticatedSubject.subscribe(res => {
    if (!res) {
      this.router.navigate(['/login']);
    }
  });
  constructor(private jwtService: JwtService, private apiService: ApiService,
    private router: Router, private snackBar: MatSnackBar) {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  populate() {
    return new Promise<boolean>(resolve=>{
      if (this.jwtService.getToken()) {
        const employeeInfo = globalUrls.employeeInfo;
  
        this.apiService.postData(employeeInfo, {}).subscribe(successData => {
          if (successData['status'] === 'success') {
            // this.setAuth(successData['object']);
            /* checking if isforceReset pwd is true and prompting user to change */
            if (successData['payload']['isForceReset']) {
              this.snackBar.open('Change password by loging in Pushcord',null,{
                duration: 2000,
              });
            } else {
              this.setAuth(successData['payload']);
              resolve(true);
            }
          } else {
            this.snackBar.open(successData['message'],null,{
              duration: 2000,
            });
            this.purgeAuth();
            resolve(false);
          }
        },(err)=>{
          if(err.status === 401 || err.status === 403 || err.status === 0){
            this.purgeAuth();
          }
          resolve(false);
        });
      } else {
        this.purgeAuth();
        resolve(false);
      }
    })
  }

  setAuth(user: any) {
    // this.jwtService.saveToken(user.signedToken);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    console.log('Token Cleaned');
    this.jwtService.destroyToken();
    this.currentUserSubject.next({});
    this.isAuthenticatedSubject.next(false);
  }

  getCurrentUser(): Observable<any> {
    return this.currentUser;
  }

  /* Setting diffrent token in jwt service to avoid user to navigate without reseting pwd  for api interceptor*/
  setResetToken(userDetails: any) {
    this.jwtService.resetTokenUserDetails = userDetails;
  }
  setAuthFromTokenDetails() {
    this.setAuth(this.jwtService.resetTokenUserDetails);
  }
  // logout() {
  //   this.apiService.postData(environment.login_url + '/logout', {
  //     token: this.jwtService.getToken()
  //   }).subscribe(res => {
  //     this.purgeAuth();
  //     let logoutStatus: any = '';
  //     if (res['status'] === 'success') {
  //       logoutStatus = 'You have successfully Logged Out.';
  //     } else {
  //       logoutStatus = 'Network Error';
  //     }
  //     this.snackBar.open(logoutStatus,null,{
  //       duration: 2000,
  //     })
  //   });
  // }
}
