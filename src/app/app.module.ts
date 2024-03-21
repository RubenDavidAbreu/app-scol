import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EtudiantsParisComponent } from './components/etudiants-paris/etudiants-paris.component';
import { EtudiantshorsParisComponent } from './components/etudiantshors-paris/etudiantshors-paris.component';
import { FormSpecialiteComponent } from './components/form-specialite/form-specialite.component';
import { FormEtudiantComponent } from './components/form-etudiant/form-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EtudiantComponent,
    SpecialiteComponent,
    EtudiantsParisComponent,
    EtudiantshorsParisComponent,
    FormSpecialiteComponent,
    FormEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule // Etape 2: Ajouter FormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
