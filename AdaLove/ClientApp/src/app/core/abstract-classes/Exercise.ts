import { Subject, Observable } from 'rxjs';

export abstract class Exercise {
    public abstract showNextButton$: Observable<boolean>;
    public abstract tryAgain(): void;
    public abstract checkAnswer(): void;
}