import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2LibDatepickerComponent } from './vuce2-lib-datepicker.component';
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";

@NgModule({
  declarations: [
    Vuce2LibDatepickerComponent
  ],
  imports: [
    CommonModule,
    Vuce2LibModulesModule  
  ],
  exports: [
    Vuce2LibDatepickerComponent
  ]
})
export class Vuce2LibDatepickerModule { }
