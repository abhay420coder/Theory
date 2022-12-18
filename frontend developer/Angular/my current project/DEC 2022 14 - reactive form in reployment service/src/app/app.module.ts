import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OauthComponent } from './auth-login/oauth.component';
import { MainModule } from './main/main.module';
import { ApiInterceptor } from './services/api-interceptor';
import { OfflinePageComponent } from './offline-page/offline-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthComponent } from './auth/auth.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent, OauthComponent, OfflinePageComponent, AuthComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
