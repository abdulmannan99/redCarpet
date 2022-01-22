import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { MohsinComponent } from './mohsin/mohsin.component';
=======
import { MannanComponent } from './mannan/mannan.component';
>>>>>>> 9755584bfa92f5553124360bfb42569a0e7f40d1

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
    MohsinComponent
=======
    MannanComponent
>>>>>>> 9755584bfa92f5553124360bfb42569a0e7f40d1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
