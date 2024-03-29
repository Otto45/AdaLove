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
import { ComputerArchitectureExercise1Component } from './components/courses/computer-science/lesson-1-basics/exercises/computer-architecture-exercise1/computer-architecture-exercise1.component';
import { BitsExercise3Component } from './components/courses/computer-science/lesson-1-basics/exercises/bits-exercise3/bits-exercise3.component';
import { PrimitiveTypesExercise1Component } from './components/courses/computer-science/lesson-1-basics/exercises/primitive-types-exercise1/primitive-types-exercise1.component';
import { PrimitiveTypesExercise2Component } from './components/courses/computer-science/lesson-1-basics/exercises/primitive-types-exercise2/primitive-types-exercise2.component';
import { PrimitiveTypesExercise3Component } from './components/courses/computer-science/lesson-1-basics/exercises/primitive-types-exercise3/primitive-types-exercise3.component';
import { PrimitiveTypesExercise4Component } from './components/courses/computer-science/lesson-1-basics/exercises/primitive-types-exercise4/primitive-types-exercise4.component';
import { PrimitiveTypesExercise5Component } from './components/courses/computer-science/lesson-1-basics/exercises/primitive-types-exercise5/primitive-types-exercise5.component';
import { PrimitiveTypesExercise6Component } from './components/courses/computer-science/lesson-1-basics/exercises/primitive-types-exercise6/primitive-types-exercise6.component';
import { PrimitiveTypesExercise7Component } from './components/courses/computer-science/lesson-1-basics/exercises/primitive-types-exercise7/primitive-types-exercise7.component';


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
    BitsExercise2Component,
    ComputerArchitectureExercise1Component,
    BitsExercise3Component,
    PrimitiveTypesExercise1Component,
    PrimitiveTypesExercise2Component,
    PrimitiveTypesExercise3Component,
    PrimitiveTypesExercise4Component,
    PrimitiveTypesExercise5Component,
    PrimitiveTypesExercise6Component,
    PrimitiveTypesExercise7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
