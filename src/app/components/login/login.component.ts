import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  invalidLogin : boolean = false;

  constructor(private _authService : AuthService, private _router : Router){}

  signIn(credentials : any){
    this._authService.login(credentials)
        .subscribe({
          next : (result) => {
            if(result)
              this._router.navigate(['home']);
            else
              this.invalidLogin = true;
          }
        })
  }

}
