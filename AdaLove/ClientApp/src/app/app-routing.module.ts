import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NamesakeComponent } from './components/about/namesake/namesake.component';
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/utility/page-not-found/page-not-found.component';
import { Lesson1BasicsComponent } from './components/courses/computer-science/lesson-1-basics/lesson1-basics.component';


const routes: Routes = [
  { path: 'lessons/cs/basics', component: Lesson1BasicsComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'about/namesake', component: NamesakeComponent },
  { path: '',   redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
