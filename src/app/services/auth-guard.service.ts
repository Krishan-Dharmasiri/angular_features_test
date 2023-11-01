import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router : Router, private _authService : AuthService) { }

  canActivate(){
    if(this._authService.isLoggedIn()) return true;

    this._router.navigate(['/login']);
    return false;
  }
}
