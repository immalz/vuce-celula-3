import { Component, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'vuce2-lib-input-text',
  templateUrl: './vuce2-lib-input-text.component.html',
  styleUrls: ['./vuce2-lib-input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Vuce2LibInputTextComponent),
      multi: true,
    },
  ],
})
export class Vuce2LibInputTextComponent implements ControlValueAccessor {
  @Input()
  etiqueta: string;

  @Input()
  placeholder: string;

  @Input()
  texto_alternativo: string;

  @Input()
  icono: string;

  @Input()
  sufijo: string;

  @Input()
  control: AbstractControl;

  @Input()
  disabled: boolean = false;

  value: string = '';

  onChanged: any = () => {};
  onTouched: any = () => {};

  constructor() {
    this.placeholder = '';
    this.texto_alternativo = '';
    this.icono = '';
    this.etiqueta = '';
  }

  public writeValue(value: string): void {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    console.log('input', this.control);
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChangeValue(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
    this.onChanged(value);
  }
}
