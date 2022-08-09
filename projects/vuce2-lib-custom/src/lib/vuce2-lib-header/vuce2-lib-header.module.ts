import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2LibHeaderComponent } from './vuce2-lib-header.component';
import { Vuce2LibMaterialModule } from '../vuce2-lib-material';


@NgModule({
  imports: [
    CommonModule,
    Vuce2LibMaterialModule
  ],
  declarations:[
    Vuce2LibHeaderComponent
  ],
  exports: [
    Vuce2LibHeaderComponent  ]
})
export class Vuce2LibHeaderModule {}
