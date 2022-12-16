import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/* export class ResolverGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
} */
export class ResolverGuard implements Resolve<any> {
  // we will have a service - call service API to get  details

  /* 

  this.userService.getAccountInformation(userId).subscribe(data => {

  } );

  */

  userObj = {
    userId:10,
    userName:'Soorya'
  };

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // throw new Error('Method not implemented.');
    return this.userObj;
  }

  
  
  
}
