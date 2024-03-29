import { Component, forwardRef } from '@angular/core';
import { Exercise } from 'src/app/core/abstract-classes/Exercise';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-binary-exercise1',
  templateUrl: './binary-exercise1.component.html',
  styleUrls: ['./binary-exercise1.component.css'],
  providers: [{provide: Exercise, useExisting: forwardRef(() => Exercise1BinaryComponent)}]
})
export class Exercise1BinaryComponent extends Exercise {
  private enableNextButtonSource = new Subject<boolean>();
  public enableNextButton$: Observable<boolean> = this.enableNextButtonSource.asObservable();
  
  public enableNextButton(): void {
    this.enableNextButtonSource.next(true);
  }
}
