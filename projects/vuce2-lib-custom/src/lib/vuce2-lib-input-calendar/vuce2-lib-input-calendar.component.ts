import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  FormControl,
  AbstractControl,
  ControlValueAccessor,
} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'vuce2-lib-input-calendar',
  templateUrl: './vuce2-lib-input-calendar.component.html',
  styleUrls: ['./vuce2-lib-input-calendar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Vuce2LibInputCalendarComponent),
      multi: true,
    },
  ],
})
export class Vuce2LibInputCalendarComponent
  implements ControlValueAccessor, OnInit
{
  @Input()
  control: AbstractControl;

  @Input()
  etiqueta: string;

  @Input() fecha: FormControl;

  @Input() icono: string;

  events: string[] = [];
  value: string = '';
  disabled: boolean = false;
  onChanged: any = () => {};
  onTouched: any = () => {};

  constructor() {
    this.icono = '';
    this.etiqueta = '';
  }

  ngOnInit() {
    this.fecha = new FormControl(new Date(this.control.value));
  }

  public writeValue(value: string): void {
    if (value) {
      this.value = value;
      console.log('prueba');
    }
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    const value: string = new Date(event.value.toString()).toLocaleDateString();
    this.onChanged(value);
    // console.log(type, new Date(event.value.toString()).toLocaleDateString());
  }
}
