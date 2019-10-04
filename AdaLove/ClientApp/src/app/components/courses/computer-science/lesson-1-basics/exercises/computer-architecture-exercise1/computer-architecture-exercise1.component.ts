import { Component, forwardRef } from '@angular/core';
import { Exercise } from 'src/app/core/abstract-classes/Exercise';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-computer-architecture-exercise1',
  templateUrl: './computer-architecture-exercise1.component.html',
  styleUrls: ['./computer-architecture-exercise1.component.css'],
  providers: [{provide: Exercise, useExisting: forwardRef(() => ComputerArchitectureExercise1Component)}]
})
export class ComputerArchitectureExercise1Component extends Exercise {
  private enableNextButtonSource = new Subject<boolean>();
  public enableNextButton$: Observable<boolean> = this.enableNextButtonSource.asObservable();
  
  public enableNextButton(): void {
    this.enableNextButtonSource.next(true);
  }
}
