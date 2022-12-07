import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientList = [
    { clientId:10 , firstName : 'Raj' , lastName : 'Srini'},
    { clientId:11 , firstName : 'John' , lastName : 'Mike'},
    { clientId:12 , firstName : 'Moon' , lastName : 'Amanuel'},
    { clientId:13 , firstName : 'Cherry' , lastName : 'Ben'},
    { clientId:14 , firstName : 'Berry' , lastName : 'Kumar'},
    { clientId:15 , firstName : 'Steve' , lastName : 'Kumar'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
