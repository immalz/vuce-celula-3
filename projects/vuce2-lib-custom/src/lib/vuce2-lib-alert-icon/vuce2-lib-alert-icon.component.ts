import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Vuce2LibMaterialModule } from '../vuce2-lib-material';

@Component({
  selector: 'vuce2-lib-alert-icon',
  templateUrl: './vuce2-lib-alert-icon.component.html',
  styleUrls: ['./vuce2-lib-alert-icon.component.scss'],
  providers: [
		{

			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(
                () => Vuce2LibAlertIconComponent
			),
			multi: true
		}
	]
})
export class Vuce2LibAlertIconComponent implements ControlValueAccessor{

  @Input()
  texto: string;

  @Input()
  icono: string;

  public value: boolean=false;
  public change: any = () => {};
  public touched: any = () => {};

  constructor() {
    this.texto = '';
    this.icono = '';
  }

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.change = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

}
