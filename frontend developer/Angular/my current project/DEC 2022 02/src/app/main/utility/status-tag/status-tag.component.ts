import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'status-tag',
  templateUrl: './status-tag.component.html',
  styleUrls: ['./status-tag.component.scss']
})
export class StatusTagComponent implements OnInit {
  @Input() size: "icon-only"|"full"
  @Input() type: "success"|"warning"|"error"|"info"|"inactive";
  @Input() data?: string;

  constructor() { }

  ngOnInit(): void {
  }

  getClass(type: string, size: string){
    if(size==='full'){
      return {
        'success-text': type==="success",
        'warning-text': type==="warning",
        'error-text': type==="error",
        'info-text': type==="info",
        'inactive-text': type==="inactive",
        'success-bg': type==="success",
        'warning-bg': type==="warning",
        'error-bg': type==="error",
        'info-bg': type==="info",
        'inactive-bg': type==="inactive",
        'success-border': type==="success",
        'warning-border': type==="warning",
        'error-border': type==="error",
        'info-border': type==="info",
        'inactive-border': type==="inactive"
      }
    } else if(size==='icon-only') {
      return {
        'success-text': type==="success",
        'warning-text': type==="warning",
        'error-text': type==="error",
        'info-text': type==="info",
        'inactive-text': type==="inactive"
      }
    }
    

  }

}
