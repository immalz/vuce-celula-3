import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2LibRadioButtonComponent } from './vuce2-lib-radio-button.component';
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";

@NgModule({
  declarations: [
    Vuce2LibRadioButtonComponent
  ],
  imports: [
    CommonModule,
    Vuce2LibModulesModule  
  ],
  exports:[
    Vuce2LibRadioButtonComponent
  ]
})
export class Vuce2LibRadioButtonModule { }
