import { Component, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";


@Component({
    selector: 'vuce2-lib-calendar',
    templateUrl: './vuce2-lib-calendar.component.html',
    styleUrls: ['./vuce2-lib-calendar.component.scss'],
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => Vuce2LibCalendarComponent),
        multi: true,
      },
    ],
})
export class Vuce2LibCalendarComponent implements ControlValueAccessor {

    selected: Date | null;

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