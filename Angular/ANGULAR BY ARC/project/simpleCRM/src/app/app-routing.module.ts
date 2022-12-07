import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { ClientsComponent } from './clients/clients.component';
import { LeadsGridComponent } from './leads/leads-listing/leads-grid/leads-grid.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { LoansComponent } from './loans/loans.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';



const routes: Routes = [
 
  { 
    path:'product/:id' , 
    component:ProductComponent
  } ,
  { 
    path:'product/:productId/photos/:photoId' , 
    component:ProductComponent
  } ,
  {
    path:'clients',
    component: ClientsComponent,
    canActivate:[AuthGuard]  // it takes more than one routes
  },
  {
    path:'',
    redirectTo:'leads',
    pathMatch:'full'
  },
  {
    path:'leads',
    component:LeadsGridComponent,
    canActivate:[AuthGuard , AdminGuard]  // it takes more than one routes // all guard should return access(means true)
  },
  {
    path:'search',
    component:SearchComponent
  },
 
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) }, 
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];


@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
