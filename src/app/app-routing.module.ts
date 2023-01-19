import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './crud/agregar/agregar.component';
import { AgregarusuComponent } from './crud/agregarusu/agregarusu.component';
import { DashboardComponent } from './crud/dashboard/dashboard.component';
import { EditarComponent } from './crud/editar/editar.component';
import { EditarusuComponent } from './crud/editarusu/editarusu.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
  {path: '', component:LoginComponent, pathMatch: "full"},
  {path: 'dashboard', component:DashboardComponent, pathMatch: "full"},
  {path: 'editar/:id', component:EditarComponent, pathMatch: "full"},
  {path: 'agregar', component:AgregarComponent, pathMatch: "full"},
  {path: 'agregarusu', component:AgregarusuComponent, pathMatch: "full"},
  {path: 'editarusu/:id', component:EditarusuComponent, pathMatch: "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
