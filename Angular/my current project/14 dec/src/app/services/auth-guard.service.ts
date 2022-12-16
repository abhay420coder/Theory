import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { CurrentUserService } from './current-user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private currentUserService: CurrentUserService) {
  }

  async canActivate(): Promise<boolean> {
    await this.currentUserService.populate();
    return new Promise(resolve=>{
      this.currentUserService.isAuthenticated.subscribe(data=>{
        resolve(data);        
      })
    });
  }
}

@Injectable()
/* Restricts authenticated user to route to page whereever it is used.For Ex - At login page */
export class RestrictAuthedUserGuard implements CanActivate {
  constructor(private currentUserService: CurrentUserService) {
  }

  canActivate(): Observable<boolean> {
    return this.currentUserService.isAuthenticated.pipe(map(res => !res));
  }
}

