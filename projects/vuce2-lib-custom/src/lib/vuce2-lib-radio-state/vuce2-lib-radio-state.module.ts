import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2LibRadioStateComponent } from './vuce2-lib-radio-state.component';
import { Vuce2LibModulesModule } from '../vuce2-lib-modules';

@NgModule({
  declarations: [Vuce2LibRadioStateComponent],
  imports: [CommonModule, Vuce2LibModulesModule],
  exports: [Vuce2LibRadioStateComponent],
})
export class Vuce2LibRadioStateModule {}
