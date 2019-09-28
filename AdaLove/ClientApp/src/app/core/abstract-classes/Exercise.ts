import { Observable } from 'rxjs';

export abstract class Exercise {
    public abstract enableNextButton$: Observable<boolean>;
}