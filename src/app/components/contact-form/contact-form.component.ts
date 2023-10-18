import { Component } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  
  myContact = <Contact>{};
  languages = [
    {id:1, name : 'C-sharp'},
    {id:2, name : 'JavaScripts'},
    {id:3, name : 'Azure'},
    {id:4, name : 'Python'}
  ]

  editors = [
    {id : 1, name : 'VS Code'},
    {id : 2, name : 'VS 2022'},
    {id : 3, name : 'Jet Brains'}
  ]

  onSubmit(){
    console.log(this.myContact);
  }
}

