import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  /*infos = {
    name:"Amine",
    email:"amine.boujnah@gmail.com",
    tel:"25336851"
  }
  comments = [
      {date:new Date(),message:"A"},
      {date:new Date(),message:"B"},
      {date:new Date(),message:"C"}
  ];
  commentaire :any={date:null,message:''};

  
  onAddComments() {
    this.commentaire.date = new Date();
    this.comments.push(this.commentaire);
    console.log(this.commentaire);
    this.commentaire={date:null,message:""};
  }*/
  infos:any;
  comments:any=[];
  commentaire :any={date:null,message:''};

  constructor(private aboutService:AboutService) {
    this.infos = this.aboutService.getInfos();
    this.comments = this.aboutService.getAllComments();

   }
  
  onAddComments2(value:any) {
    value.date = new Date();
    this.comments.push(value);
    this.commentaire.message = "";

  }

  ngOnInit(): void {
  }

}
