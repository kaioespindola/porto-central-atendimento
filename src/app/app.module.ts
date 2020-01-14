import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  PsGuideModule,
  PsIcoModule,
  PsFormResourcesModule,
  PsGridModule,
  PsBtnModule,
  PsDatagridModule,
  PsModalModule,
  PsAutocompleteModule,
  PsCalendarModule, 
  PsCalendarAvailabilityModule, 
  PsSliderModule   } from 'porto-seguro-guide';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './login/login.component';
import { AreasExternasComponent } from './shared/components/areas-externas/areas-externas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AreasExternasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PsGuideModule.forRoot(),
    PsIcoModule,
    PsFormResourcesModule,
    PsGridModule,
    PsBtnModule,
    PsDatagridModule,
    PsModalModule,
    PsAutocompleteModule,
    PsCalendarModule, 
    PsCalendarAvailabilityModule, 
    PsSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
