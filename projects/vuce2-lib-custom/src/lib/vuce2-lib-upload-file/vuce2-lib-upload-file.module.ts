import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Vuce2LibUploadFileComponent } from './vuce2-lib-upload-file.component';
import { Vuce2LibModulesModule } from '../vuce2-lib-modules';

@NgModule({
    declarations: [
        Vuce2LibUploadFileComponent
    ],
    imports: [
        CommonModule,
        Vuce2LibModulesModule
    ],
    exports: [
        Vuce2LibUploadFileComponent
    ]
})
export class Vuce2LibUploadFileModule {}
