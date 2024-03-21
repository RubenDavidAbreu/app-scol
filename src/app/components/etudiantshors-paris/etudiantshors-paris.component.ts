import { Component } from '@angular/core';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiantshors-paris',
  templateUrl: './etudiantshors-paris.component.html',
  styleUrl: './etudiantshors-paris.component.css'
})
export class EtudiantshorsParisComponent {
  etudiant : any = [];
  constructor(private etudiants : EtudiantServiceService) {
    this.etudiant = this.etudiants.etudiant
}
}