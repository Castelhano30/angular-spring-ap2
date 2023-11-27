import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LutasModule } from './lutas/lutas.module';
import { HttpClientModule } from '@angular/common/http';
import { PerfilLutasComponent } from './perfil-lutas/perfil-lutas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilLutasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    LutasModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
