import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeteoServiceService {

  constructor(private httpClient:HttpClient) { }
  public getMeteoData(city:string){
    return this.httpClient.get("https://api.openweathermap.org/data/2.5/forecast?q="
         +city+"&APPID=928e83e3e5e8c6729f91e306bec4ce42");
   }
}
