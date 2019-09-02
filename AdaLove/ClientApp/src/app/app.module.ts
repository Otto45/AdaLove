import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NamesakeComponent } from './components/about/namesake/namesake.component';
import { PageNotFoundComponent } from './components/utility/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NamesakeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
