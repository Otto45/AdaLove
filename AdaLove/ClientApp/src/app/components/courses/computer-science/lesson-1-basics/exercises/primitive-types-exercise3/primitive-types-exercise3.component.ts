import { Component, forwardRef } from '@angular/core';
import { Exercise } from 'src/app/core/abstract-classes/Exercise';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-primitive-types-exercise3',
  templateUrl: './primitive-types-exercise3.component.html',
  styleUrls: ['./primitive-types-exercise3.component.css'],
  providers: [{provide: Exercise, useExisting: forwardRef(() => PrimitiveTypesExercise3Component)}]
})
export class PrimitiveTypesExercise3Component extends Exercise {
  private enableNextButtonSource = new Subject<boolean>();
  public enableNextButton$: Observable<boolean> = this.enableNextButtonSource.asObservable();
  
  public enableNextButton(): void {
    this.enableNextButtonSource.next(true);
  }
}
