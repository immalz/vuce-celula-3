import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[vuce2LibGridCellTemplate]'
})
export class Vuce2LibGridCellTemplateDirective {

    @Input() public vuce2LibGridCellTemplate: string;

    constructor(public templateRef: TemplateRef<any>) { }
}
