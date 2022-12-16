import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ChartType } from 'chart.js';

@Component({
  selector: 'status-dashboard',
  templateUrl: './status-dashboard.component.html',
  styleUrls: ['./status-dashboard.component.scss']
})
export class StatusDashboardComponent implements OnInit {
  type: string = "";
  id: string = "";
  doughnutOptions = {
    circumference: Math.PI + 0.5,
    rotation: -Math.PI - 0.25,
    cutoutPercentage: 90,
    tooltips: {
      enabled: false
    }
  }
  doughnutColorScheme = {
    red: [{backgroundColor: ['#dc3545', '#cdcdcd']}],
    green: [{backgroundColor: ['#28a745', '#cdcdcd']}]
  }
  chartData = [
    {
      title: "CPU",
      type: "doughnut",
      metrics: {
        used: 40,
        total: 100,
        percent: 40,
        unit: ""
      },
      colorScheme: this.doughnutColorScheme.red
    },
    {
      title: "Memory",
      type: "doughnut",
      metrics: {
        used: 75,
        total: 100,
        percent: 75,
        unit: "GiB"
      },
      colorScheme: this.doughnutColorScheme.green
    },
    {
      title: "POD",
      type: "doughnut",
      metrics: {
        used: 6,
        total: 14,
        percent: 42.8,
        unit: ""
      },
      colorScheme: this.doughnutColorScheme.green
    }
  ]
  routeSubscription: any;
  hexagons = Array(25);
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe((params: Params)=>{
      this.type = params.type;
      // this.id = params.id;
    })
  }

}
