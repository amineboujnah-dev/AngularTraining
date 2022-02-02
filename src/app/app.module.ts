import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { AboutService } from 'src/services/about.service';
import { MeteoComponent } from './meteo/meteo.component';
import { MeteoServiceService } from 'src/services/meteo-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AboutService,MeteoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
