import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'vuce2-lib-button',
  templateUrl: './vuce2-lib-button.component.html',
  styleUrls: ['./vuce2-lib-button.component.scss'],
  providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(
                () => Vuce2LibButtonComponent
			),
			multi: true
		}
	]
})
export class Vuce2LibButtonComponent implements ControlValueAccessor{

  @Input()
  disabled: boolean;

  @Input()
  colors:string;

  @Input()
  texto:string;

  public value!: string;
  onChange: any = () => { }
  onTouched: any = () => { }


  constructor() {
    this.colors='';
    this.texto='';
  }
  public writeValue( value: string ): void {
		this.texto = value;
	}
  registerOnChange( fn: any ): void {
		this.onChange = fn;
	}
  registerOnTouched( fn: any ): void {
		this.onTouched = fn;
	}
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
 

}
