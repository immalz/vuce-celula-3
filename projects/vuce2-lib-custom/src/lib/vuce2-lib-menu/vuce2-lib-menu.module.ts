import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2LibMenuComponent } from './vuce2-lib-menu.component';
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";

@NgModule({
    imports: [
        CommonModule,
        Vuce2LibModulesModule
    ],
    declarations: [
        Vuce2LibMenuComponent
    ],
    exports: [
        Vuce2LibMenuComponent
    ]
})
export class Vuce2LibMenuModule { }
