import { Component, AfterViewInit, QueryList, ContentChildren, Input } from '@angular/core';
import { Exercise } from 'src/app/core/Exercise';

@Component({
  selector: 'app-lesson-module',
  templateUrl: './lesson-module.component.html',
  styleUrls: ['./lesson-module.component.css']
})
export class LessonModuleComponent implements AfterViewInit {
  private activeExcerciseIndex: number;
  private exercises: Exercise[];

  @ContentChildren(Exercise) exerciseContent: QueryList<Exercise>;

  @Input() moduleTitle: string;

  ngAfterViewInit(): void {
    this.exerciseContent.forEach((exercise, index) => {
      if (index > 0) {
        exercise.hide();
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
      this.activeExcerciseIndex++;
      // TODO: Create infrastructure to only show one exercise at a time and progress to the next one here
    }
  }

  public previousExercise(): void {
    if (this.activeExcerciseIndex > 0) {
      this.activeExcerciseIndex--;
      // TODO: Create infrastructure to only show one exercise at a time and go back to the previous one here
    }
  }
}
