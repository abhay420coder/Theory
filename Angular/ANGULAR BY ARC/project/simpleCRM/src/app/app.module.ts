import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';  //  importing routing module
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component'  
import { HashLocationStrategy, LocationStrategy , PathLocationStrategy } from '@angular/common';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; // import routing strategy here

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UsersComponent,
    LoansComponent,
    LoanTypesComponent,
    AddLoansComponent,
    P1Component,
    P2Component,
    P3Component,
    P4Component,
    ProductComponent,
    ClientsComponent,
    ProfileComponent,
    SearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // routing module add in  imports array
    FormsModule,
    
    
  ],
  providers: [
    {provide: LocationStrategy , useClass:HashLocationStrategy} , // add routing strategy in providers array
    // {provide: LocationStrategy , useClass:PathLocationStrategy} // add routing strategy in providers array
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
