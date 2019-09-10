import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NamesakeComponent } from './components/about/namesake/namesake.component';
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/utility/page-not-found/page-not-found.component';
import { Module1BinaryComponent } from './components/courses/computer-science/lesson-1-basics/module1-binary/module1-binary.component';


const routes: Routes = [
  { path: 'lessons/cs/basics/module1', component: Module1BinaryComponent },
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
