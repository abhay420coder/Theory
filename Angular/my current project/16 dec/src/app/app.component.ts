import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pushcord-devops';

  constructor(private update: SwUpdate, private snackbar: MatSnackBar){}

  ngOnInit() {
    this.updateClient();
  }

  updateClient(){
    if(!this.update.isEnabled){
      console.log("Service worker is not enabled!");      
    }

    this.update.available.subscribe(event=>{
      console.log("App update available. [", event.current.hash, "] -> [", event.available.hash, "]")
      let snack = this.snackbar.open("A new version is available", "Update");
      snack.onAction().subscribe(()=>{
        window.location.reload();
      })
    })
  }
}