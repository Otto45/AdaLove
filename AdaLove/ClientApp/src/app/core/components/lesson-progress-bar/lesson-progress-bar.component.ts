import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-lesson-progress-bar',
  templateUrl: './lesson-progress-bar.component.html',
  styleUrls: ['./lesson-progress-bar.component.css']
})
export class LessonProgressBarComponent implements OnChanges {

  @Input() exerciseNumber: number;
  @Input() totalExerciseCount: number;

  public barWidth: string = '0%';

  ngOnChanges() {
    if (this.exerciseNumber !== undefined && this.totalExerciseCount !== undefined) {
      this.barWidth = this.exerciseNumber / this.totalExerciseCount * 100 + '%';
    }
  }
}
