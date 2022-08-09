import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2LibTabInteractionComponent } from './vuce2-lib-tab-interaction.component';
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports: [
        CommonModule,
        Vuce2LibModulesModule    
    ],
    declarations: [
        Vuce2LibTabInteractionComponent
    ],
    exports: [
        Vuce2LibTabInteractionComponent
    ]
})
export class Vuce2LibTabInteractionModule { }
