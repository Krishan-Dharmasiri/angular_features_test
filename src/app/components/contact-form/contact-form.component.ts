import { Component } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  
  myContact = <Contact>{};

  onSubmit(){
    console.log(this.myContact);
  }
}

