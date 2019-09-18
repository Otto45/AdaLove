import { Component, AfterViewInit, QueryList, ContentChildren, Input, ContentChild } from '@angular/core';
import { ExerciseDirective } from '../../custom-directives/ExerciseDirective';
import { Exercise } from '../../abstract-classes/Exercise';

@Component({
  selector: 'app-lesson-module',
  templateUrl: './lesson-module.component.html',
  styleUrls: ['./lesson-module.component.css']
})
export class LessonModuleComponent implements AfterViewInit {
  private activeExcerciseIndex: number = 0;
  private exercises: ExerciseDirective[];

  @ContentChildren(ExerciseDirective) availableExercisesRefs: QueryList<ExerciseDirective>;
  @ContentChild(Exercise, {static: false}) currentExercise: Exercise;

  @Input() moduleTitle: string;

  public currentExerciseNumber: number;
  public totalExerciseCount: number;

  ngAfterViewInit(): void {
    this.availableExercisesRefs.first.display();
    this.exercises = this.availableExercisesRefs.toArray();

    // B/C of the way Angular works initializing components, a child component will not be aware
    // you updated it's input while everything is still initializing (parent and child).
    // This is a trick that will fire a function immediately (no time duration was given) after all
    // initializing is done, which will trigger Angular's change detection and make the child components 
    // aware their input was changed.
    setTimeout(() => {
      this.currentExerciseNumber = this.activeExcerciseIndex;
      this.totalExerciseCount = this.exercises.length;
    });
  }

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
}
