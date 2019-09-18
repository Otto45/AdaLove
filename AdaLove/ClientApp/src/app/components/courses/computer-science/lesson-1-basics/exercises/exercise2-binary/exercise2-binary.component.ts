import { Component, forwardRef } from '@angular/core';
import { Exercise } from 'src/app/core/abstract-classes/Exercise';

@Component({
  selector: 'app-exercise2-binary',
  templateUrl: './exercise2-binary.component.html',
  styleUrls: ['./exercise2-binary.component.css'],
  providers: [{provide: Exercise, useExisting: forwardRef(() => Exercise2BinaryComponent)}]
})
export class Exercise2BinaryComponent extends Exercise {
  
  public tryAgain(): void {
    console.log('Exercise 2 tryAgain fired.');
  }
  
  public checkAnswer(): void {
    console.log('Exercise 2 checkAnswer fired.');
  }
}
