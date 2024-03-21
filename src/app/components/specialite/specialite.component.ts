import { Component } from '@angular/core';
import { SpecServiceService } from '../../services/spec-service.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrl: './specialite.component.css'
})
export class SpecialiteComponent {
  spec : any = [];
  constructor(private specialite : SpecServiceService){
    this.spec = this.specialite.spe;
  }
}
