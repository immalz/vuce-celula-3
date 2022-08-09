import { Component, forwardRef, Input } from "@angular/core";
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'vuce2-lib-input-textarea',
    templateUrl: './vuce2-lib-input-textarea.component.html',
    styleUrls:['./vuce2-lib-input-textarea.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(
                () => Vuce2LibInputTextareaComponent
            ),
            multi: true
        }
    ]
})
export class Vuce2LibInputTextareaComponent implements ControlValueAccessor {

    @Input()
    etiqueta: string;

    @Input()
    placeholder:string;

    @Input()
    texto_alternativo:string;

    @Input()
    icono:string;
 
    disabled: boolean = false;

    @Input()
    control: AbstractControl;

    public value: string;
    onChanged: any = () => { }
    onTouched: any = () => { }

    constructor(){
        this.placeholder='';
        this.texto_alternativo='';
        this.icono='';
        this.etiqueta='';
    }

    public writeValue( value: string ): void {
        if(value){
            this.value = value;
        }		
	}

    registerOnChange( fn: any ): void {
		this.onChanged = fn;
	}
    registerOnTouched( fn: any ): void {
		this.onTouched = fn;
	}
    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    public onChangeValue( event: Event ): void {
		const value: string =
			( <HTMLInputElement>event.target ).value;
		this.onChanged( value );
	}    

}
