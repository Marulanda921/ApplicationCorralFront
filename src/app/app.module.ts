import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';
import { CreateAnimalComponent } from './Components/create-animal/create-animal.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCorralComponent } from './Components/create-corral/create-corral.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateCorralComponent,
    CreateAnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
