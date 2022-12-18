import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'offline-page',
  templateUrl: './offline-page.component.html',
  styleUrls: ['./offline-page.component.scss']
})
export class OfflinePageComponent implements OnInit {
  refreshing: boolean = false;

  constructor(private location: Location, private cus: CurrentUserService) { }

  ngOnInit(): void {
    // this.refresh();
  }

  async refresh(){
    this.refreshing = true;
    const apiStatus = await this.cus.populate();
    if(apiStatus){
      this.location.back();
    } else {
      this.refreshing = false;
    }
  }

}
