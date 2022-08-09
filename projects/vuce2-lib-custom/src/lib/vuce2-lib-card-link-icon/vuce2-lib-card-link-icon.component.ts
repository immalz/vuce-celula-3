import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'vuce2-lib-card-link-icon',
    templateUrl: './vuce2-lib-card-link-icon.component.html',
    styleUrls: ['./vuce2-lib-card-link-icon.component.scss'],
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => Vuce2LibCardLinkIconComponent),
        multi: true,
      },
    ],
})
export class Vuce2LibCardLinkIconComponent implements ControlValueAccessor {

    @Input()
    title: string;
  
    @Input()
    link: string;

    @Input()
    texto: string;
    
    @Input()
    iconLeft: string;

    @Input()
    iconRight: string;

    constructor() {
     
    }

    writeValue(obj: any): void {
        throw new Error("Method not implemented.");
    }
    registerOnChange(fn: any): void {
        throw new Error("Method not implemented.");
    }
    registerOnTouched(fn: any): void {
        throw new Error("Method not implemented.");
    }
    setDisabledState?(isDisabled: boolean): void {
        throw new Error("Method not implemented.");
    }
}