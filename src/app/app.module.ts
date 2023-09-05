import { NgModule , LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnapShareComponent } from './snap-share/snap-share.component';
import { registerLocaleData } from '@angular/common';
import *as fr from "@angular/common/locales/fr";
import { SnapShareListeComponent } from './snap-share-liste/snap-share-liste.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponentComponent } from './landing-page/landing-page-component.component';
import { SingleSnapShareComponent } from './single-snap-share/single-snap-share.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewSnapShareComponent } from './new-snap-share/new-snap-share.component';

@NgModule({
  declarations: [
    AppComponent,
    SnapShareComponent,
    SnapShareListeComponent,
    HeaderComponent,
    LandingPageComponentComponent,
    SingleSnapShareComponent,
    NewSnapShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [
    { provide:LOCALE_ID, useValue:"fr-FR"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(){
      registerLocaleData(fr.default)
    }
 }
