import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'ProductBoard';

  // constructor(){}
  // User setting/preference API - which will fetch the saved
  // if user has save DarkTheme , the it will be true else it will be false 
  // isDarkTheme=true;
  // theme ='dark-theme';
  // _isChecked = true;
  // if(_isChecked: any) {
  //   this.theme='dark-theme';
  // }else this.theme='dark-theme';

  title = 'ProductBoard';
  isDarkTheme:boolean=true;
  // 'dark-theme'
  theme:string ='dark-theme';
  isChecked:boolean = true;
  

  // foo(): void { }

  constructor(){
  }
}
