import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2LibCheckBoxComponent } from './vuce2-lib-check-box.component';
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";


@NgModule({
  declarations: [
    Vuce2LibCheckBoxComponent
  ],
  imports: [
    CommonModule,
    Vuce2LibModulesModule
  ],
  exports: [
    Vuce2LibCheckBoxComponent
  ]
})
export class Vuce2LibCheckBoxModule { }
