import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private _authService : AuthService){}

  logout(){
    this._authService.logout();
  }

  isLoggedIn(){
    return this._authService.isLoggedIn();
  }

}
