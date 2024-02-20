import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { OccasionsComponent } from './pages/occasions/occasions.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CarsDetailsComponent } from './pages/cars-details/cars-details.component';
import { ContactComponent } from './pages/contact/contact.component';

import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent},
  { path: 'services', component: ServicesPageComponent},
  { path: 'occasions', component: OccasionsComponent},
  { path: 'cars', component: CarsComponent},
  { path: 'cars/:id', component: CarsDetailsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'auth', component: AuthComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
