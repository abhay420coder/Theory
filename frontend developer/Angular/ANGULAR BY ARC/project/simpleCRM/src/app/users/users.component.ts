import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title : string = "This is user component"
  constructor() { }

  ngOnInit(): void {
  }

  updateValue(){
    
  }


}
