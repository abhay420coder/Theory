import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactList: any = [];
  url = 'http://localhost:3000/posts' ;

  // http heders

  // const httpHeaders = new this.httpHeaders

  constructor(private contactService : ContactsService) { }

  ngOnInit(): void {
    this.getContact();
  }

  getContact(){
    this.contactService.getContacts(this.url).subscribe(data=>{
      this.contactList = data;
    });
  }

  body = {
    "id": this.contactList.length+2 ,
    "title": "json-server"+ String(this.contactList.length+2),
    "author": "typicode"+ String(this.contactList.length+2)
  }

  addNewContact(){
    this.contactService.postContacts(this.url,this.body).subscribe(data=>{
      this.contactList = data;
      this.getContact();
    });
  }

  updateNewContact(){
    let id = this.contactList.length+1;
    let  body = {
      "id": this.contactList.length+1 ,
      "title": "json-server"+ String(this.contactList.length+1) + String(this.contactList.length+1),
      "author": "typicode"+ String(this.contactList.length+1) + String(this.contactList.length+1)
    }
    this.contactService.putContacts(this.url, id, body).subscribe(data=>{
      this.contactList = data;
      this.getContact();
    });
  }

  deleteNewContact(){
    let id = this.contactList.length+1;
    this.contactService.deleteContacts(this.url, id).subscribe(data=>{
      this.contactList = data;
      this.getContact();
    });
  }

  getSpecificContact(){
    this.contactService.getContactById(this.url).subscribe(data =>{
      console.log("hello  :-  " , data)
    })
  }

}
