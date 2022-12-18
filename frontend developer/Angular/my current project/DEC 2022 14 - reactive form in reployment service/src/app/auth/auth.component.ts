import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';
import { CurrentUserService } from '../services/current-user.service';
import { JwtService } from '../services/jwt.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoggingIn: boolean = false;
  loginStatus = {
    display: false,
    state: false,
    user: ""
  }

  constructor(
    private jwtService: JwtService, 
    private router: Router, 
    private apiService: ApiService,
    private cus: CurrentUserService,
    private update: SwUpdate) { }

  ngOnInit(): void {
    if(this.update.isEnabled){
      this.update.checkForUpdate();
    }
    if (this.jwtService.getToken()) {
      this.login();
    }
  }

  signIn(){
    this.openOauthPopup();
  }

  openOauthPopup(){
    const tempUrl = environment.sts + '/login/devops';
    let temp;
    let state = document.location.origin + '/#/oauth_-_abz670vp';
    state = btoa(state);
    temp = tempUrl + '?state=' + state;
    let loginWindow = window.open(temp,'Login','left=500,top=100,width=340,height=548,popup=yes');
    window.addEventListener('message', event=>{
      if(event.data.message){
        this.getTokenAndNavigate(event.data.message);
        loginWindow.close();
      }
    }, {once: true})
  }

  getTokenAndNavigate(urlData) {
    const urlDataFromLogin = [];
    urlData
      .split('?')[1]
      .split('&')
      .forEach((element) => {
        let temp = element.split('=');
        urlDataFromLogin[temp[0]] = temp[1] ? temp[1] : '';
      });

    if (urlDataFromLogin['access_token']) {
      //access token present, save to local storage and redirect to application
      this.jwtService.saveToken(urlDataFromLogin['access_token']);
        // this.jwtService.saveRefreshToken(urlDataFromLogin['refresh_token']);
      this.router.navigate(['/main']);
    }
  }

  login() {
    this.isLoggingIn = true;
    const employeeInfo = environment.vcaIdentityUrl + '/employee-info';

    this.apiService.postData(employeeInfo, {}).subscribe((successData: any) => {
      if (successData['status'] === 'success') {
        // successData['payload']['signedToken'] = this.jwtService.getToken();
        if (successData['payload']['isForceReset']) {
          // this.currentUserService.setResetToken(successData['payload']);
          // this.router.navigate(['/change-password']);
        }
        else {
          this.loginStatus.state = true;
          this.loginStatus.user = successData["payload"]["employeeName"];
          this.router.navigate(['/main']);
        }
      } else {
        this.loginStatus.state = false;
        this.cus.purgeAuth();
      }
      this.isLoggingIn = false;
      this.loginStatus.display = true;
      if(this.loginStatus.state === false){
        setTimeout(()=>{
          this.loginStatus.display = false;
        }, 5000);
      }
      
    },(err)=>{
      if(err.status === 401 || err.status === 403 || err.status === 0){
        this.isLoggingIn = false;
        this.loginStatus.state = false;
        this.loginStatus.display = true;
        setTimeout(()=>{
          this.loginStatus.display = false;
        }, 5000);
        this.cus.purgeAuth();
      }
    });
  }
}
