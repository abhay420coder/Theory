import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OauthComponent } from './auth-login/oauth.component';
import { AuthComponent } from './auth/auth.component';
import { OfflinePageComponent } from './offline-page/offline-page.component';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: "oauth",
    component: OauthComponent
  },
  {
    path: "login",
    component: AuthComponent
  },
  {
    path: "server-offline",
    component: OfflinePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
