import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2LibSelectComponent } from './vuce2-lib-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";


@NgModule({
    declarations: [
        Vuce2LibSelectComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        Vuce2LibModulesModule,
     
    ],
    exports: [
        Vuce2LibSelectComponent
    ]
})
export class Vuce2LibSelectModule {}
