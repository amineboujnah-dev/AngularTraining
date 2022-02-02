import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  infos = {
    nom:"Amine",
    email:"amine.boujnah@gmail.com",
    tel:58698412,
  }

  comments = [
    {date:new Date(),message:"A"},
    {date:new Date(),message:"B"},
    {date:new Date(),message:"C"}
];

  constructor() { }

  addComment(c:any) {
    c.date=new Date();
    this.comments.push(c);  
  }

  getAllComments() {
    return this.comments;
  }

  getInfos() {
    return this.infos;
  }
}
