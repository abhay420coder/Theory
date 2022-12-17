import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ProductBoard';
  // User setting/preference API - which will fetch the saved
  // if user has save DarkTheme , the it will be true else it will be false 
  isDarkTheme:boolean=true;
  isChecked:boolean = true;
  

  constructor(){
  }
}
