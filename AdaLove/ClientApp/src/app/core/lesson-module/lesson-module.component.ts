import { Component, AfterViewInit, QueryList, ContentChildren, Input, ContentChild } from '@angular/core';
import { ExerciseDirective } from '../custom-directives/ExerciseDirective';
import { Exercise } from '../abstract-classes/Exercise';

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

  ngAfterViewInit(): void {
    this.availableExercisesRefs.first.display();
    this.exercises = this.availableExercisesRefs.toArray();
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
      this.exercises[this.activeExcerciseIndex].display();
    }
  }

  public previousExercise(): void {
    if (this.activeExcerciseIndex > 0) {
      this.exercises[this.activeExcerciseIndex].hide();
      this.activeExcerciseIndex--;
      this.exercises[this.activeExcerciseIndex].display();
    }
  }
}
