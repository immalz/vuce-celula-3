import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[vuce2LibPaginationCellTemplate]'
})
export class Vuce2LibPaginationCellTemplateDirective {

    @Input() public vuce2LibPaginationCellTemplate: string;

    constructor(public templateRef: TemplateRef<any>) { }
}
