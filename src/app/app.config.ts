import { ApplicationConfig, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {  provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './service/token.interceptor';
import { BrowserAnimationsModule, NoopAnimationsModule, provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withInterceptors([tokenInterceptor]),withFetch()),
    provideZoneChangeDetection({eventCoalescing:true}),provideAnimations(),
    provideNoopAnimations()

  ]
};
@NgModule({
  declarations:[],
  imports:[
    BrowserAnimationsModule,
    BrowserModule,
    NoopAnimationsModule
  ],
  providers:[],
  exports:[],
  bootstrap:[]
})
export class appModule {}