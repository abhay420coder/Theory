import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
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
import { PreferencesCheckGuard } from './preferences-check.guard';
import { ProductComponent } from './product/product.component';
import { ResolverGuard } from './resolver.guard';
import { RxJSLearningComponent } from './rx-js-learning/rx-js-learning.component';
import { SearchComponent } from './search/search.component';
import { SuperAdminGuard } from './super-admin.guard';
import { UnsavedGuard } from './unsaved.guard';



const routes: Routes = [
 
  { 
    path:'product/:id' , 
    component:ProductComponent
  } ,
  { 
    path:'loan/types' , 
    component:LoanTypesComponent
  } ,
  { 
    path:'loan' , 
    component:LoansComponent
  } ,
  { 
    path:'rxjs-learning' , 
    component:RxJSLearningComponent
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
    path:'leads',
    component:LeadsGridComponent,
    // canActivate:[AuthGuard , AdminGuard]  // it takes more than one routes // all guard should return access(means true)
    resolve:{
      data:ResolverGuard , // whenever this path is trying to be loaded before route is activated
    }
    //  when i will be launch this route ResolverGuard will be resolve f irst then this route will be initiated
  },
  {
    path:'search',
    component:SearchComponent,
    canDeactivate:[UnsavedGuard]
  },

  // CanActivateChile Auth Guard
  {
    path:'admin',
    canActivate:[SuperAdminGuard] ,// http://localhost:4300/app1#/admin will work if SuperAdminGuard will give Access.
    children:[
      { path:'', component:AdminComponent }, //  http://localhost:4300/app1#/admin will work
      {
        path:'',
        canActivateChild:[AdminAccessGuard],
        children:[
          { path:'manage', component:AdminManageComponent }, //  http://localhost:4300/app1#/admin/manage will work
          { path:'delete', component:AdminDeleteComponent }, //  http://localhost:4300/app1#/admin/delete will work
          { path:'edit', component:AdminEditComponent }, //  http://localhost:4300/app1#/admin/edit will work
        ]
      },
    ]
  },
 
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },  // lazy modules
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },  // lazy modules
 


  { path: 'preferences', 
     canLoad:[PreferencesCheckGuard],
    loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule) 
  },  // lazy modules



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
