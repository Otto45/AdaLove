import { Component, forwardRef } from '@angular/core';
import { Exercise } from 'src/app/core/abstract-classes/Exercise';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-exercise2-binary',
  templateUrl: './exercise2-binary.component.html',
  styleUrls: ['./exercise2-binary.component.css'],
  providers: [{provide: Exercise, useExisting: forwardRef(() => Exercise2BinaryComponent)}]
})
export class Exercise2BinaryComponent extends Exercise {
  private enableNextButtonSource = new Subject<boolean>();
  public enableNextButton$: Observable<boolean> = this.enableNextButtonSource.asObservable();
  
  public enableNextButton(): void {
    this.enableNextButtonSource.next(true);
  }
}
