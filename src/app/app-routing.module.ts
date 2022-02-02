import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MeteoComponent } from './meteo/meteo.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'meteo',component:MeteoComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
