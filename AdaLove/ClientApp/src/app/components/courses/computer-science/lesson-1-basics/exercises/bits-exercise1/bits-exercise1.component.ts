import { Component, forwardRef } from '@angular/core';
import { Exercise } from 'src/app/core/abstract-classes/Exercise';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-bits-exercise1',
  templateUrl: './bits-exercise1.component.html',
  styleUrls: ['./bits-exercise1.component.css'],
  providers: [{provide: Exercise, useExisting: forwardRef(() => BitsExercise1Component)}]
})
export class BitsExercise1Component extends Exercise {
  private enableNextButtonSource = new Subject<boolean>();
  public enableNextButton$: Observable<boolean> = this.enableNextButtonSource.asObservable();
  
  public enableNextButton(): void {
    this.enableNextButtonSource.next(true);
  }
}
