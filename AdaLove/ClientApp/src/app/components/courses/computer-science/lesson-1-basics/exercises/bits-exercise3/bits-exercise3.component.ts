import { Component, forwardRef } from '@angular/core';
import { Exercise } from 'src/app/core/abstract-classes/Exercise';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-bits-exercise3',
  templateUrl: './bits-exercise3.component.html',
  styleUrls: ['./bits-exercise3.component.css'],
  providers: [{provide: Exercise, useExisting: forwardRef(() => BitsExercise3Component)}]
})
export class BitsExercise3Component extends Exercise {
  private enableNextButtonSource = new Subject<boolean>();
  public enableNextButton$: Observable<boolean> = this.enableNextButtonSource.asObservable();
  
  public enableNextButton(): void {
    this.enableNextButtonSource.next(true);
  }
}
