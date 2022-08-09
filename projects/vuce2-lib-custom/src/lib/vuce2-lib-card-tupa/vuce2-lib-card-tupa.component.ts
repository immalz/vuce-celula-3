import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'vuce2-lib-card-tupa',
    templateUrl: './vuce2-lib-card-tupa.component.html',
    styleUrls: ['./vuce2-lib-card-tupa.component.scss'],
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => Vuce2LibCardTupaComponent),
        multi: true,
      },
    ],
})
export class Vuce2LibCardTupaComponent implements ControlValueAccessor {

    @Input()
    title: string;

    @Input()
    subtitle: string;
    
    @Input()
    description: string;

    @Input()
    borradores: string;

    @Input()
    pago: string;

    @Input()
    plazo: string;

    @Input()
    prerequisito: string;

    @Input()
    isButton: boolean;

    @Input()
    isComplete: boolean;

    @Input()
    isPendiente: boolean;

    @Input()
    textButton: string;

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