import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Vuce2LibMaterialModule } from '../vuce2-lib-material';
import { Vuce2LibFormErrorMsgModule } from '../vuce2-lib-form-error-msg';


const sharedModules = [
  CommonModule,
  Vuce2LibMaterialModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  Vuce2LibFormErrorMsgModule
];

@NgModule({
  declarations: [],
  imports: [
    ...sharedModules
  ],
  exports: [
    ...sharedModules
  ]
})
export class Vuce2LibModulesModule {}
