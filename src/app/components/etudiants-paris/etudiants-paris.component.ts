import { Component } from '@angular/core';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiants-paris',
  templateUrl: './etudiants-paris.component.html',
  styleUrl: './etudiants-paris.component.css'
})
export class EtudiantsParisComponent {
  etudiant : any = [];
  constructor(private etudiants : EtudiantServiceService) {
    this.etudiant = this.etudiants.etudiant
}
}
