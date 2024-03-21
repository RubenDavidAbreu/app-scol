import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { FormEtudiantComponent } from './components/form-etudiant/form-etudiant.component';
import { FormSpecialiteComponent } from './components/form-specialite/form-specialite.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'specialite', component:  SpecialiteComponent},
  {path: 'formetu', component: FormEtudiantComponent },
  { path: 'formspe', component: FormSpecialiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
