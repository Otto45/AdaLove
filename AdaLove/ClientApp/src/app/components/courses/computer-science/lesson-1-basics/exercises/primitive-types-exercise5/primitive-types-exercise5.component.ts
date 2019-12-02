import { Component, forwardRef } from '@angular/core';
import { Exercise } from 'src/app/core/abstract-classes/Exercise';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-primitive-types-exercise5',
  templateUrl: './primitive-types-exercise5.component.html',
  styleUrls: ['./primitive-types-exercise5.component.css'],
  providers: [{provide: Exercise, useExisting: forwardRef(() => PrimitiveTypesExercise5Component)}]
})
export class PrimitiveTypesExercise5Component extends Exercise {
  private enableNextButtonSource = new Subject<boolean>();
  public enableNextButton$: Observable<boolean> = this.enableNextButtonSource.asObservable();
  
  public enableNextButton(): void {
    this.enableNextButtonSource.next(true);
  }
}
