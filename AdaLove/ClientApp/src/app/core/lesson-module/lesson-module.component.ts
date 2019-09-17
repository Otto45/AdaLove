import { Component, AfterViewInit, QueryList, ContentChildren, Input } from '@angular/core';
import { ExerciseDirective } from '../custom-directives/ExerciseDirective';

@Component({
  selector: 'app-lesson-module',
  templateUrl: './lesson-module.component.html',
  styleUrls: ['./lesson-module.component.css']
})
export class LessonModuleComponent implements AfterViewInit {
  private activeExcerciseIndex: number;
  private exercises: ExerciseDirective[];

  @ContentChildren(ExerciseDirective) exerciseContent: QueryList<ExerciseDirective>;

  @Input() moduleTitle: string;

  ngAfterViewInit(): void {
    this.exerciseContent.forEach((exercise, index) => {
      if (index > 0) {
        exercise.hide
      }
    });
    
    this.exercises = this.exerciseContent.toArray();
    this.activeExcerciseIndex = 0;
  }

  public tryAgain(): void {
    this.exercises[this.activeExcerciseIndex].tryAgain();
  }

  public checkAnswer(): void {
    this.exercises[this.activeExcerciseIndex].checkAnswer();
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
