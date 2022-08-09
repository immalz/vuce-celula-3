import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'vuce2-lib-button-secundary',
  templateUrl: './vuce2-lib-button-secundary.component.html',
  styleUrls: ['./vuce2-lib-button-secundary.component.scss'],
  providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(
                () => Vuce2LibButtonSecundaryComponent
			),
			multi: true
		}
	]
})
export class Vuce2LibButtonSecundaryComponent implements ControlValueAccessor{

  @Input()
  disabled: boolean;

  @Input()
  texto:string;

  @Input()
  icon:string;

  @Input()
  iconLeft:string;

  @Input()
  largo:string;

  public value!: string;
  onChange: any = () => { }
  onTouched: any = () => { }


  constructor() {
    this.texto='';
    this.icon='';
    this.iconLeft='';
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
