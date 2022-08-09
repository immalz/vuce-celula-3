import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2LibLinkIconComponent } from './vuce2-lib-link-icon.component';
import { Vuce2LibModulesModule } from '../vuce2-lib-modules';
import { Vuce2LibButtonPrimaryModule } from '../vuce2-lib-button-primary';

@NgModule({
  declarations: [Vuce2LibLinkIconComponent],
  imports: [CommonModule, Vuce2LibModulesModule, Vuce2LibButtonPrimaryModule],
  exports: [Vuce2LibLinkIconComponent],
})
export class Vuce2LibLinkIconModule {}
