import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { CardValue } from "../models";

@Component({
    selector: 'vuce2-lib-card-icon',
    templateUrl: './vuce2-lib-card-icon.component.html',
    styleUrls: ['./vuce2-lib-card-icon.component.scss'],
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => Vuce2LibCardIconComponent),
        multi: true,
      },
    ],
  })
export class Vuce2LibCardIconComponent implements ControlValueAccessor {

    @Input()
    valor: string;
  
    @Input()
    path_img: string;
  
    @Input()
    url: string;

    @Input()
    texto: string;

    public value: boolean = false;
    public change: any = () => {};
    public touched: any = () => {};
  
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