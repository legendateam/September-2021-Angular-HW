import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {MainLayoutsComponent} from "./layouts/main-layouts/main-layouts.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {HeaderComponent} from "./components/header/header.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorPageComponent,
    MainLayoutsComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
