import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2LibIconBadgeComponent } from './vuce2-lib-icon-badge.component';
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";

@NgModule({
  declarations: [
    Vuce2LibIconBadgeComponent
  ],
  imports: [
    CommonModule,
    Vuce2LibModulesModule
  ],
  exports: [
    Vuce2LibIconBadgeComponent
  ]
})
export class Vuce2LibIconBadgeModule { }
