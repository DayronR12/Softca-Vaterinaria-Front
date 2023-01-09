import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
  {path: '', component:LoginComponent, pathMatch: "full"},
  {path: 'home', component:HomeComponent, pathMatch: "full"},
  {path: 'dashboard', component:DashboardComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
