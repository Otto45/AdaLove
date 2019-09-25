import { Component, QueryList, ContentChildren, Input, ContentChild, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';
import { ExerciseDirective } from '../../custom-directives/ExerciseDirective';
import { Exercise } from '../../abstract-classes/Exercise';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lesson-module',
  templateUrl: './lesson-module.component.html',
  styleUrls: ['./lesson-module.component.css']
})
export class LessonModuleComponent implements AfterContentInit, AfterContentChecked, OnDestroy {
  private activeExcerciseIndex: number = 0;
  private exercises: ExerciseDirective[];
  private showNextButtonSubscription: Subscription = null;

  @ContentChildren(ExerciseDirective) availableExercisesRefs: QueryList<ExerciseDirective>;
  @ContentChild(Exercise, {static: false}) currentExercise: Exercise;

  @Input() moduleTitle: string;

  public currentExerciseNumber: number;
  public totalExerciseCount: number;
  public shouldShowNextButton: boolean;

  // Lifecycle Hooks /////////////////////////////////////////////////////////////////////////////////////////////////

  ngAfterContentInit() {
    this.availableExercisesRefs.first.display();
    this.exercises = this.availableExercisesRefs.toArray();
    this.currentExerciseNumber = this.activeExcerciseIndex;
    this.totalExerciseCount = this.exercises.length;

    // Forces the lifecycle hooks of the first exercise manually injected into the DOM to run, 
    // as well as the appropriate lifecyle hooks in this component after the exercise has been initialized.
    // This is neccessary in order to get this ngAfterContentChecked hook to run after the exercise has been
    // initialized so that we can subscribe to its subscriptions 
    setTimeout(() => {});
  }

  ngAfterContentChecked(): void {
    if (this.showNextButtonSubscription === null && this.currentExercise !== undefined) {
      this.showNextButtonSubscription = this.currentExercise.showNextButton$.subscribe({next: this.handleShowNextButtonEvent});
    }
  }

  ngOnDestroy() {
    this.showNextButtonSubscription.unsubscribe();
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  public tryAgain(): void {
    this.currentExercise.tryAgain();
  }

  public checkAnswer(): void {
    this.currentExercise.checkAnswer();
  }

  public nextExercise(): void {
    if (this.activeExcerciseIndex < this.exercises.length - 1) {
      this.exercises[this.activeExcerciseIndex].hide();
      this.activeExcerciseIndex++;
      this.currentExerciseNumber++;
      this.exercises[this.activeExcerciseIndex].display();
    }
  }

  public previousExercise(): void {
    if (this.activeExcerciseIndex > 0) {
      this.exercises[this.activeExcerciseIndex].hide();
      this.activeExcerciseIndex--;
      this.currentExerciseNumber--;
      this.exercises[this.activeExcerciseIndex].display();
    }
  }

  private handleShowNextButtonEvent(shouldShowNextButton: boolean) {
    this.shouldShowNextButton = shouldShowNextButton;
  }
}
