import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leads-grid',
  templateUrl: './leads-grid.component.html',
  styleUrls: ['./leads-grid.component.scss']
})
export class LeadsGridComponent implements OnInit {

  constructor(private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.ActivatedRoute.snapshot.data);
  }

}
