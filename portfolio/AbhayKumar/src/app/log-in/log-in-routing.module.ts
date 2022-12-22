import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUPComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    component:LogInComponent
  },
  {
    path:'signIn',
    component:SignInComponent
  },
  {
    path:'signUP',
    component:SignUPComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogInRoutingModule { }
