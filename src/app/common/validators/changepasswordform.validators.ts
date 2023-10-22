import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class ChangePasswordFormValidators{
    static oldPsaswordNotValid(control : AbstractControl) : Promise<ValidationErrors | null>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value !== '1234')
                    resolve({oldPasswordNotValid : true});
                else 
                    resolve(null);
            }, 2000);
        });
    }

    static passwordsDontMatch(control : AbstractControl) : ValidationErrors | null{
        let newPassword = control.get('newpassword');
        let confirmpassword = control.get('confirmpassword');
        if(newPassword?.value !== confirmpassword?.value)
            return {passwordsDontMatch : true}
        return null;
    }
    

   
}

