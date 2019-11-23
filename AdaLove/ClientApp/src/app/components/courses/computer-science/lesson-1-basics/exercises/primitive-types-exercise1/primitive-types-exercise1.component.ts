import { Component, forwardRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Exercise } from 'src/app/core/abstract-classes/Exercise';

@Component({
  selector: 'app-primitive-types-exercise1',
  templateUrl: './primitive-types-exercise1.component.html',
  styleUrls: ['./primitive-types-exercise1.component.css'],
  providers: [{provide: Exercise, useExisting: forwardRef(() => PrimitiveTypesExercise1Component)}]
})
export class PrimitiveTypesExercise1Component extends Exercise {
  private enableNextButtonSource = new Subject<boolean>();
  public enableNextButton$: Observable<boolean> = this.enableNextButtonSource.asObservable();
  
  public enableNextButton(): void {
    this.enableNextButtonSource.next(true);
  }
}
