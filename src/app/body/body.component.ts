import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  lastname: string = '';
  firstname: string = '';
  adress: string = '';
  city: string = '';
  zip: string = '';
  country: string = '';
  email: string = '';
  civilite: string = '';
  show: boolean = false;
  title: string = 'Cliquez le bouton Sauvegarder pour voir le récapitulatif';

  Show() {
    this.show = true;
    this.title = 'Voici le récapitulatif';
  }
}
