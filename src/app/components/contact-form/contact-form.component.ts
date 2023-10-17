import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  name : string = "";
  comment : string = "";
  myContact = <Contact>{};

  onSubmit(){
    console.log('Name : ' + this.name)
    console.log('Comment : '  , this.comment);
    this.myContact.name = this.name;
    this.myContact.comment = this.comment;
    console.log(this.myContact);
  }
}

interface Contact{
  name : string,
  comment : string
}