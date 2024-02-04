import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
      path:"registration",
      component:RegistrationComponent
  },
  {
    path:"view",
    component:StudentListComponent
  },
  {
    path:"list",
    component:StudentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
