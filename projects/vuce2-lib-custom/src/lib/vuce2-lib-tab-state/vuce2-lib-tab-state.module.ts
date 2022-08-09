import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2LibTabStateComponent } from './vuce2-lib-tab-state.component';
import { Vuce2LibModulesModule } from '../vuce2-lib-modules';

@NgModule({
  imports: [CommonModule, Vuce2LibModulesModule],
  declarations: [Vuce2LibTabStateComponent],
  exports: [Vuce2LibTabStateComponent],
})
export class Vuce2LibTabStateModule {}
