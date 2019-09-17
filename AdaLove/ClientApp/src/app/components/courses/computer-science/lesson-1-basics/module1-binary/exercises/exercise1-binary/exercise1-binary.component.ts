import { Component, forwardRef } from '@angular/core';
import { Exercise } from 'src/app/core/abstract-classes/Exercise';

@Component({
  selector: 'app-exercise1-binary',
  templateUrl: './exercise1-binary.component.html',
  styleUrls: ['./exercise1-binary.component.css'],
  providers: [{provide: Exercise, useExisting: forwardRef(() => Exercise1BinaryComponent)}]
})
export class Exercise1BinaryComponent extends Exercise {

  public tryAgain(): void {
    console.log('Exercise 1 tryAgain fired.');
  }
  
  public checkAnswer(): void {
    console.log('Exercise 1 checkAnswer fired.');
  }
}
