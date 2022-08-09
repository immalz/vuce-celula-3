import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IBreadCrumb } from '../interfaces/breadcrumb';

@Component({
  selector: 'vuce2-lib-bienvenida',
  templateUrl: './vuce2-lib-bienvenida.component.html',
  styleUrls: ['./vuce2-lib-bienvenida.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Vuce2LibBienvenidaComponent),
      multi: true,
    },
  ],
})
export class Vuce2LibBienvenidaComponent implements ControlValueAccessor {
  public value: boolean = false;
  public change: any = () => {};
  public touched: any = () => {};

  @Input()
  nombre: string;
  @Input()
  imagen: string;
  @Input()
  componente:string;

  constructor() {
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
