import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appExercise]'
})
export class ExerciseDirective {

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef) { }

    display(): void {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
    }

    hide(): void {
        this.viewContainerRef.clear();
    }
}