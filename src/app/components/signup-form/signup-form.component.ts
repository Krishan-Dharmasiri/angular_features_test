import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from 'src/app/common/validators/username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  signupForm = new FormGroup({
    username : new FormControl('', 
                  [ Validators.required, Validators.minLength(4), 
                    UsernameValidators.cannotContainSpace                    
                  ], 
                  UsernameValidators.shouldBeUnique),
    password : new FormControl('', Validators.required)
  })

  get username(){
    return this.signupForm.get('username');
  }

  get password(){
    return this.signupForm.get('password');
  }

  onSignupFormSubmit(){
   console.log(this.username);
  }

}
