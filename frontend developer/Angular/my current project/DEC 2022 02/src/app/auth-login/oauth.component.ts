import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'oauth',
  template: `
    <div class="_flex-column _h-100 _jc-c _ai-c">
      <mat-spinner [diameter]='40'></mat-spinner>
      <h2 class="_pt-10">Redirecting ...</h2>
      <div>Please wait while we redirect you.</div>
    </div>
  `,
  styles: [''],
})
export class OauthComponent implements OnInit {
  isLoggingIn: boolean;
  keyValue: any;

  constructor() {}

  ngOnInit() {
    const params = window.location.hash
    if(window.opener){
      window.opener.postMessage({message: params}, "*")
    }
  }

}
