import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
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
    password : new FormControl('', Validators.required),
    account  : new FormGroup({
      codename : new FormControl('', [Validators.required])
      
    }),
    topics : new FormArray([])
  })

  get username(){
    return this.signupForm.get('username');
  }

  get password(){
    return this.signupForm.get('password');
  }

  get codename(){
    return this.signupForm.get('account.codename');
  }

  get topics(){
    return this.signupForm.get('topics') as FormArray;
  }

  onSignupFormSubmit(){
    this.signupForm.setErrors(
      {InvalidLogin : true}
    );
  }

  addTopic(topic : HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic : AbstractControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

}
