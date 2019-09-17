import { Directive, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Exercise } from '../abstract-classes/Exercise';

@Directive({
    selector: '[exercise]'
})
export class ExerciseDirective {

    private exerciseComponentInstance: Exercise = null;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef,
    ) { }

    display(): void {
        let hostComponent = this.viewContainerRef["_data"].componentView.component;  // Hack to get the component instance, cannot inject it because it can be any subclass of Exercise
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(hostComponent);
        const componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.exerciseComponentInstance = componentRef.instance as Exercise;
    }

    hide(): void {
        this.viewContainerRef.detach();
    }

    tryAgain(): void {
        if (this.exerciseComponentInstance !== null) {
            this.exerciseComponentInstance.tryAgain();
        }
    }

    checkAnswer(): void {
        if (this.exerciseComponentInstance !== null) {
            this.exerciseComponentInstance.checkAnswer();
        }
    }
}