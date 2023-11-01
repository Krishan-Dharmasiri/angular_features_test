import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router : Router, private _authService : AuthService) { }

  canActivate(route : any, state : RouterStateSnapshot){
    if(this._authService.isLoggedIn()) return true;

    this._router.navigate(['/login'], {queryParams : {returnUrl : state.url}});
    return false;
  }
}
