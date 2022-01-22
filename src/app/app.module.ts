import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MannanComponent } from './mannan/mannan.component';
import { NewTestComponent } from './new-test/new-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MannanComponent,
    NewTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
