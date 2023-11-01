import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  admin_token : string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IktyaXNoYW50aGEgRGhhcm1hc2lyaSIsImlhdCI6MTUxNjIzOTAyMiwiYWRtaW4iOnRydWV9.c0_8haQamHo369ZQk8c9P59zcV2a67OLyj0ivvfW0J8';

  constructor() { }

  login(credentials : any){
    if(credentials.email === 'krish@domain.com' && credentials.password === '1234'){
      localStorage.setItem('token', this.admin_token);
      return of(true).pipe(delay(1000));
    }     
    else
      return of(false).pipe(delay(1000));
  }

  logout(){
    // no token in the local storage means, user is not logged in 
    // so to log the user out, all you have to do is to remove the token from the local storage
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    let token = localStorage.getItem('token');
    // we should check both the token exists and if so it is valid ( not expired)
    if(token === null)
      return false;
    else
      return true;
  }

  getCurrentUser(){
    // get the token form the local storage
    // Decode it
    // get the details like, Id, Name, Email, and Roles array
  }
}
