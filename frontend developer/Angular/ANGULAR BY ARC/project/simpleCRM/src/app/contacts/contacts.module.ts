import { UsersComponent } from './../users/users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from './API interceptor/logging.interceptor';



@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    HttpClientModule
  ],
  // providers:[
  //   {provide: HTTP_INTERCEPTORS , useClass:LoggingInterceptor}
  // ]
})
export class ContactsModule { }
