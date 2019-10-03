import { Component, forwardRef } from '@angular/core';
import { Exercise } from 'src/app/core/abstract-classes/Exercise';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-binary-exercise3',
  templateUrl: './binary-exercise3.component.html',
  styleUrls: ['./binary-exercise3.component.css'],
  providers: [{provide: Exercise, useExisting: forwardRef(() => Exercise3BinaryComponent)}]
})
export class Exercise3BinaryComponent extends Exercise {
  private enableNextButtonSource = new Subject<boolean>();
  public enableNextButton$: Observable<boolean> = this.enableNextButtonSource.asObservable();
  
  public enableNextButton(): void {
    this.enableNextButtonSource.next(true);
  }
}
