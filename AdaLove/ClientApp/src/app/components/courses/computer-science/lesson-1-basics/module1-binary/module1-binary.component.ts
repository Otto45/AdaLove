import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Exercise } from 'src/app/core/Exercise';

@Component({
  selector: 'app-module1-binary',
  templateUrl: './module1-binary.component.html',
  styleUrls: ['./module1-binary.component.css']
})
export class Module1BinaryComponent implements AfterViewInit {
  private activeExcerciseIndex: number;
  private exercises: Exercise[];

  @ViewChildren(Exercise) exerciseViewChildren: QueryList<Exercise>;

  ngAfterViewInit(): void {
    this.exercises = this.exerciseViewChildren.toArray();
    this.activeExcerciseIndex = 0;
  }

  public tryAgain(): void {
    this.exercises[this.activeExcerciseIndex].tryAgain();
  }

  public checkAnswer(): void {
    this.exercises[this.activeExcerciseIndex].checkAnswer();
  }

  public nextExercise(): void {
    if (this.activeExcerciseIndex < this.exercises.length - 1){
      this.activeExcerciseIndex++;
      // TODO: Create infrastructure to only show one exercise at a time and progress to the next one here
    }
  }
}
