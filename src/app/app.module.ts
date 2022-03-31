import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { OrdersComponent } from './orders/orders.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GwuserviceService } from './gwuservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    RegistrationComponent,
    HomeComponent,
    AboutComponent,
    OrdersComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [GwuserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
