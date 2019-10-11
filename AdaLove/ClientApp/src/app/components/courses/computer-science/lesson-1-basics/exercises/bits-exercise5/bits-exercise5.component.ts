import { Component, forwardRef } from '@angular/core';
import { Exercise } from 'src/app/core/abstract-classes/Exercise';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-bits-exercise5',
  templateUrl: './bits-exercise5.component.html',
  styleUrls: ['./bits-exercise5.component.css'],
  providers: [{provide: Exercise, useExisting: forwardRef(() => BitsExercise5Component)}]
})
export class BitsExercise5Component extends Exercise {
  private enableNextButtonSource = new Subject<boolean>();
  public enableNextButton$: Observable<boolean> = this.enableNextButtonSource.asObservable();
  
  public enableNextButton(): void {
    this.enableNextButtonSource.next(true);
  }
}
