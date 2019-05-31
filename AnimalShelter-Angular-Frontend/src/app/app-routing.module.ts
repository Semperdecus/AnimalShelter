import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './pages/login/login.component';
import {DogsComponent} from './pages/dogs/dogs.component';
import {DoghotelComponent} from './pages/doghotel/doghotel.component';
import {CatsComponent} from './pages/cats/cats.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'doghotel', component: DoghotelComponent },
  { path: 'cats', component: CatsComponent },
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
