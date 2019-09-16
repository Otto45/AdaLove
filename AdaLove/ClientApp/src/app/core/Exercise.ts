import { TemplateRef, ViewContainerRef } from '@angular/core';

export abstract class Exercise {

    constructor(private template: TemplateRef<any>, private container: ViewContainerRef) {}

    public abstract tryAgain(): void;
    public abstract checkAnswer(): void;

    public show() {
        this.container.createEmbeddedView(this.template);
    }

    public hide() {
        this.container.detach();
    }
}