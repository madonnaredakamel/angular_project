import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { DonationsComponent } from './pages/donations/donations.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'donations' ,component:DonationsComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
