import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NamesakeComponent } from './components/about/namesake/namesake.component';
import { PageNotFoundComponent } from './components/utility/page-not-found/page-not-found.component';
import { Exercise1BinaryComponent } from './components/courses/computer-science/lesson-1-basics/exercises/binary-exercise1/binary-exercise1.component';
import { FooterComponent } from './components/utility/footer/footer.component';
import { Exercise2BinaryComponent } from './components/courses/computer-science/lesson-1-basics/exercises/binary-exercise2/binary-exercise2.component';
import { LessonModuleComponent } from './core/components/lesson-module/lesson-module.component';
import { ExerciseDirective } from './core/custom-directives/ExerciseDirective';
import { Lesson1BasicsComponent } from './components/courses/computer-science/lesson-1-basics/lesson1-basics.component';
import { LessonProgressBarComponent } from './core/components/lesson-progress-bar/lesson-progress-bar.component';
import { Exercise3BinaryComponent } from './components/courses/computer-science/lesson-1-basics/exercises/binary-exercise3/binary-exercise3.component';
import { BitsExercise1Component } from './components/courses/computer-science/lesson-1-basics/exercises/bits-exercise1/bits-exercise1.component';
import { BitsExercise2Component } from './components/courses/computer-science/lesson-1-basics/exercises/bits-exercise2/bits-exercise2.component';

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
    Exercise3BinaryComponent,
    BitsExercise1Component,
    BitsExercise2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
