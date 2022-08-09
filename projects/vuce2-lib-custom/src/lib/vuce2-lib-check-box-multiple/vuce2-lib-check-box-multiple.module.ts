import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2LibCheckBoxMultipleComponent } from './vuce2-lib-check-box-multiple.component';
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";


@NgModule({
  declarations: [
    Vuce2LibCheckBoxMultipleComponent
  ],
  imports: [
    CommonModule,
    Vuce2LibModulesModule
  ],
  exports: [
    Vuce2LibCheckBoxMultipleComponent
  ]
})
export class Vuce2LibCheckBoxMultipleModule { }
