import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class JwtService {
  resetTokenUserDetails: any;
  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

}
