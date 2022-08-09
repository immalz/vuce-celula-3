import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'vuce2-lib-card-info',
    templateUrl: './vuce2-lib-card-info.component.html',
    styleUrls: ['./vuce2-lib-card-info.component.scss'],
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => Vuce2LibCardInfoComponent),
        multi: true,
      },
    ],
})
export class Vuce2LibCardInfoComponent implements ControlValueAccessor {

    @Input()
    title: string;
  
    @Input()
    subTitle: string;

    @Input()
    date: string;
    
    @Input()
    icon: string;

    @Input()
    ellipse: string;

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