import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  nom: string='';
  prenom: string='';
  mail: string='';
  number: string='';
  message: string='';


  onSubmitForm() {
    console.log('Form submitted: ', this.nom, this.prenom, this.mail, this.number, this.message);
  }
}
