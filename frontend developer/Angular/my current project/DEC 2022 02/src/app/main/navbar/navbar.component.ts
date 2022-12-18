import { EventEmitter, Input, ViewChild } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ApiService } from 'src/app/services/api.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ADMIN_OVERRIDE_ROLE } from '../constants';
import { globalUrls } from '../urls';
import { ConfirmDialogComponent } from '../utility/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() navState: boolean;
  @Output() navClick: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild(MatMenuTrigger) popupMenu: MatMenuTrigger;

  currentUser:any = {
    name: "",
    icon: "",
    isAdmin: false,
    permissions: []
  };

  constructor(
    private api: ApiService, 
    private dialogRef:MatDialog, 
    private cus:CurrentUserService,
    private wsService: WebsocketService) { }

  ngOnInit(): void {
    this.getUserData();
    this.cus.currentUser.subscribe(data=>{
      this.currentUser.name = data&&data.employeeName?data.employeeName:"";
      this.currentUser.icon = "";
      this.currentUser.permissions = data&&data.permissionList?data.permissionList:[];
      this.currentUser.isAdmin = data&&data.permissionList?data.permissionList.includes(ADMIN_OVERRIDE_ROLE):false;
    })
  }

  getUserData(){
    // this.cus.populate();
    // this.api.postData(globalUrls.employeeInfo, {}).subscribe((data:any)=>{
    //   this.currentUser.name = data&&data.payload?data.payload.employeeName:"";
    //   this.currentUser.icon = data&&data.payload?globalUrls.employeeIconBase+data.payload.employeeIconId:"";
    // })
  }

  handleLogout(){
    this.dialogRef.open(ConfirmDialogComponent,{
      data:'Do you really wish to logout?'
    }).afterClosed().subscribe(data=>{
      if(data){
        this.wsService.closeConnection();
        this.cus.purgeAuth();
        // this.api.postData(globalUrls.logout, {}).subscribe(data=>{
        //   console.log(data);
          
        // });
      }
    })
  }

  toggleNav(){
    this.navClick.emit('navbar');
    
  }
}
