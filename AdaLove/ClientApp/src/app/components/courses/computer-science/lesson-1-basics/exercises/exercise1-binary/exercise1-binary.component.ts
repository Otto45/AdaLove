import { Component, forwardRef } from '@angular/core';
import { Exercise } from 'src/app/core/abstract-classes/Exercise';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-exercise1-binary',
  templateUrl: './exercise1-binary.component.html',
  styleUrls: ['./exercise1-binary.component.css'],
  providers: [{provide: Exercise, useExisting: forwardRef(() => Exercise1BinaryComponent)}]
})
export class Exercise1BinaryComponent extends Exercise {
  private showNextButtonSource = new Subject<boolean>();
  public showNextButton$: Observable<boolean> = this.showNextButtonSource.asObservable();

  public tryAgain(): void { }
  
  public checkAnswer(): void {
    this.showNextButtonSource.next(true);
  }
}
