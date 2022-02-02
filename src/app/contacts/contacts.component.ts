import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contact = {
    name:"Amine",
    email:"user@gmail.com",
    tel:"5568445",
    location:"Tunisia"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
