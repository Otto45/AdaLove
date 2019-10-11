import { Component, forwardRef } from '@angular/core';
import { Exercise } from 'src/app/core/abstract-classes/Exercise';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-bits-exercise4',
  templateUrl: './bits-exercise4.component.html',
  styleUrls: ['./bits-exercise4.component.css'],
  providers: [{provide: Exercise, useExisting: forwardRef(() => BitsExercise4Component)}]
})
export class BitsExercise4Component extends Exercise {
  private enableNextButtonSource = new Subject<boolean>();
  public enableNextButton$: Observable<boolean> = this.enableNextButtonSource.asObservable();
  
  public enableNextButton(): void {
    this.enableNextButtonSource.next(true);
  }
}
