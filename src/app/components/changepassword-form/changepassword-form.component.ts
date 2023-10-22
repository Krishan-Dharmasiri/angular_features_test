import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ChangePasswordFormValidators } from 'src/app/common/validators/changepasswordform.validators';

@Component({
  selector: 'changepassword-form',
  templateUrl: './changepassword-form.component.html',
  styleUrls: ['./changepassword-form.component.scss']
})
export class ChangepasswordFormComponent {
  
  changePasswordForm = new FormGroup({
    oldpassword : new FormControl('', Validators.required, ChangePasswordFormValidators.oldPsaswordNotValid),
    newpassword : new FormControl('', Validators.required),
    confirmpassword : new FormControl('', 
                    [ Validators.required, 
                      ])
  },
  {
    validators : ChangePasswordFormValidators.passwordsDontMatch
  })

  get oldpassword(){
    return this.changePasswordForm.get('oldpassword');
  }

  get newpassword() {
    return this.changePasswordForm.get('newpassword');
  }

  get confirmpassword(){
    return this.changePasswordForm.get('confirmpassword');
  }
  
  changePassword(){

  }
}
