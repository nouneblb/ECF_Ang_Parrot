import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { OccasionsComponent } from './pages/occasions/occasions.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CarsDetailsComponent } from './pages/cars-details/cars-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthComponent } from './auth/auth.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { CustomerReviewComponent } from './pages/customer-review/customer-review.component';
import { EspaceEmployeComponent } from './pages/employeDashboard/espace-employe.component';
import { ManageReviewComponent } from './pages/manage-review/manage-review.component';
import { ManageCarsComponent } from './pages/manage-cars/manage-cars.component';
import { EspaceAdminComponent } from './pages/adminDashboard/espace-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ServicesPageComponent,
    OccasionsComponent,
    CarsComponent,
    CarsDetailsComponent,
    ContactComponent,
    AuthComponent,
    EmployeeFormComponent,
    CustomerReviewComponent,
    EspaceEmployeComponent,
    ManageReviewComponent,
    ManageCarsComponent,
    EspaceAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
