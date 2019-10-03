import { Component, forwardRef } from '@angular/core';
import { Exercise } from 'src/app/core/abstract-classes/Exercise';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-bits-exercise2',
  templateUrl: './bits-exercise2.component.html',
  styleUrls: ['./bits-exercise2.component.css'],
  providers: [{provide: Exercise, useExisting: forwardRef(() => BitsExercise2Component)}]
})
export class BitsExercise2Component extends Exercise {
  private enableNextButtonSource = new Subject<boolean>();
  public enableNextButton$: Observable<boolean> = this.enableNextButtonSource.asObservable();
  
  public enableNextButton(): void {
    this.enableNextButtonSource.next(true);
  }
}
