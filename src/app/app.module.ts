import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { AboutService } from 'src/services/about.service';
import { MeteoComponent } from './meteo/meteo.component';
import { MeteoServiceService } from 'src/services/meteo-service.service';
import { HttpClientModule } from '@angular/common/http';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
dayGridPlugin, interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [AboutService,MeteoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
