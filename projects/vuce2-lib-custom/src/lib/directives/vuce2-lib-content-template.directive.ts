import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[vuce2LibContentTemplate]'
})
export class Vuce2LibContentTemplateDirective {

    @Input() public vuce2LibContentTemplate: string;

    constructor(public templateRef: TemplateRef<any>) { }
}
