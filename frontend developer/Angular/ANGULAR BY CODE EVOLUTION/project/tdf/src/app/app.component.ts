import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdf';
  topics = ['Angular','React','Vue'];

  userModel = new User( 'Rob','rob@test.com',5556665566,'','morning',true);
}
