import { Component } from '@angular/core';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css']
})
export class FormEtudiantComponent {
  etudiant: any = {};

  save() {
    localStorage.setItem('etudiant', JSON.stringify(this.etudiant));
  }
}
