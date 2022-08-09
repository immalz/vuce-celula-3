import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2LibTabComponent } from './vuce2-lib-tab.component';
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";

@NgModule({
    imports: [
        CommonModule,
        Vuce2LibModulesModule
    ],
    declarations: [
        Vuce2LibTabComponent
    ],
    exports: [
        Vuce2LibTabComponent
    ]
})
export class Vuce2LibTabModule { }
