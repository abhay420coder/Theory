import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { 
    path: 'logIn', 
    loadChildren: () => import('./log-in/log-in.module').then(m => m.LogInModule) 
  }, 
  { 
    path: '', 
    pathMatch:'full',
    redirectTo:'logIn' 
  }, 
  { 
    path: '**', 
    component:PageNotFoundComponent
  }, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
