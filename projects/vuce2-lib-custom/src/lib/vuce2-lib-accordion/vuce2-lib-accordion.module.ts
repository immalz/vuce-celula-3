import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2LibAccordionComponent } from './vuce2-lib-accordion.component';
import { Vuce2LibModulesModule } from '../vuce2-lib-modules';
import { Vuce2LibContentTemplateDirective } from '../directives';

const vuce2Directives=[
    Vuce2LibContentTemplateDirective
];
@NgModule({
    declarations: [
        Vuce2LibAccordionComponent,
        ...vuce2Directives
    ],
    imports: [
        CommonModule, 
        Vuce2LibModulesModule
    ],
    exports: [
        Vuce2LibAccordionComponent,
        ...vuce2Directives
    ],
})
export class Vuce2LibAccordionModule { }
