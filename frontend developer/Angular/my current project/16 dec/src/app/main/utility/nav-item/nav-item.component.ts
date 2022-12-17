import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input() data:any;
  @Input() depth:number;

  leftPadding=0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.leftPadding = this.depth*16;
  }

  getAdditionalClass(){
    const filteredUrl = this.data.children.filter((dt:any)=>{
      if(this.router.url.includes(dt.url)){
        return dt;
      }
    });
    return {
      '_active-link': filteredUrl.length>0
    }
  }

  getExpansionState(){
    const filteredUrl = this.data.children.filter((dt:any)=>{
      if(this.router.url.includes(dt.url)){
        return dt;
      }
    });
    return filteredUrl.length>0;
  }

}
