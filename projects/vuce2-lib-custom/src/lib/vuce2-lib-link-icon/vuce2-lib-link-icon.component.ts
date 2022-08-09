import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'vuce2-lib-link-icon',
  templateUrl: './vuce2-lib-link-icon.component.html',
  styleUrls: ['./vuce2-lib-link-icon.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Vuce2LibLinkIconComponent),
      multi: true,
    },
  ],
})
export class Vuce2LibLinkIconComponent implements ControlValueAccessor {
  @Input()
  texto: string;

  @Input()
  position: any = {
    moduleName: '',
    contentName: '',
  };

  @Input()
  disabled: boolean = false;

  public value: boolean = false;
  public change: any = () => {};
  public touched: any = () => {};

  constructor() {
    this.texto = '';
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
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
