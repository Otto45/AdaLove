import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NamesakeComponent } from './components/about/namesake/namesake.component';
import { PageNotFoundComponent } from './components/utility/page-not-found/page-not-found.component';
import { Exercise1BinaryComponent } from './components/courses/computer-science/lesson-1-basics/exercises/exercise1-binary/exercise1-binary.component';
import { FooterComponent } from './components/utility/footer/footer.component';
import { Exercise2BinaryComponent } from './components/courses/computer-science/lesson-1-basics/exercises/exercise2-binary/exercise2-binary.component';
import { LessonModuleComponent } from './core/components/lesson-module/lesson-module.component';
import { ExerciseDirective } from './core/custom-directives/ExerciseDirective';
import { Lesson1BasicsComponent } from './components/courses/computer-science/lesson-1-basics/lesson1-basics.component';
import { LessonProgressBarComponent } from './core/components/lesson-progress-bar/lesson-progress-bar.component';
import { Exercise3BinaryComponent } from './components/courses/computer-science/lesson-1-basics/exercises/exercise3-binary/exercise3-binary.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NamesakeComponent,
    PageNotFoundComponent,
    Exercise1BinaryComponent,
    FooterComponent,
    Exercise2BinaryComponent,
    LessonModuleComponent,
    ExerciseDirective,
    Lesson1BasicsComponent,
    LessonProgressBarComponent,
    Exercise3BinaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
