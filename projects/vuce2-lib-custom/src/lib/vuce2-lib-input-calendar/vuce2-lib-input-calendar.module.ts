import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Vuce2LibInputCalendarComponent } from './vuce2-lib-input-calendar.component';
import { Vuce2LibModulesModule } from '../vuce2-lib-modules';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  imports: [CommonModule, Vuce2LibModulesModule],
  declarations: [Vuce2LibInputCalendarComponent],
  exports: [Vuce2LibInputCalendarComponent],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }],
})
export class Vuce2LibInputCalendarModule {}
