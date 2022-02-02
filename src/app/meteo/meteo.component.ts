import { Component, OnInit } from '@angular/core';
import { MeteoServiceService } from 'src/services/meteo-service.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
  public city:any;
  public dataMeteo:any;
  constructor(private meteoService: MeteoServiceService) { }

  ngOnInit(): void {
  }
  onLoadMeteo() {
    this.meteoService.getMeteoData(this.city)
        .subscribe(data=>{
          this.dataMeteo=data;
        },err=>{
          console.log(err);
        });
   }

}
