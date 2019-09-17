import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NamesakeComponent } from './components/about/namesake/namesake.component';
import { PageNotFoundComponent } from './components/utility/page-not-found/page-not-found.component';
import { Module1BinaryComponent } from './components/courses/computer-science/lesson-1-basics/module1-binary/module1-binary.component';
import { Exercise1BinaryComponent } from './components/courses/computer-science/lesson-1-basics/module1-binary/exercises/exercise1-binary/exercise1-binary.component';
import { FooterComponent } from './components/utility/footer/footer.component';
import { Exercise2BinaryComponent } from './components/courses/computer-science/lesson-1-basics/module1-binary/exercises/exercise2-binary/exercise2-binary.component';
import { LessonModuleComponent } from './core/lesson-module/lesson-module.component';
import { ExerciseDirective } from './core/custom-directives/ExerciseDirective';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NamesakeComponent,
    PageNotFoundComponent,
    Module1BinaryComponent,
    Exercise1BinaryComponent,
    FooterComponent,
    Exercise2BinaryComponent,
    LessonModuleComponent,
    ExerciseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
