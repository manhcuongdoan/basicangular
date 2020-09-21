import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PersonalInfoDetailComponent } from './personal-info-detail/personal-info-detail.component';



const routes: Routes = [
  { path: '', redirectTo: '/personalInfo', pathMatch: "full" },
  { path: 'personalInfo', component: PersonalInfoComponent },
  { path: 'detail/:id', component: PersonalInfoDetailComponent}
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
