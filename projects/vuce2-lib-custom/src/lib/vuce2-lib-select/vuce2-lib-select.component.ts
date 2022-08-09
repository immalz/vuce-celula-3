import {
  Component,
  forwardRef,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { ISelectItem } from '../interfaces/select-item';

@Component({
  selector: 'vuce2-lib-select',
  templateUrl: './vuce2-lib-select.component.html',
  styleUrls: ['./vuce2-lib-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Vuce2LibSelectComponent),
      multi: true,
    },
  ],
})
export class Vuce2LibSelectComponent implements ControlValueAccessor {
  @Input()
  width: string;

  @Input()
  etiqueta: string = '';

  @Input()
  items: ISelectItem[] = [];

  @Input()
  texto_alternativo: string = '';

  @Input()
  control: AbstractControl;


  selected: string;
  disabled: boolean;
  onChanged: any = () => {};
  onTouched: any = () => {};
  required: string;

  showSelect: boolean = false;

  @Output() change = new EventEmitter<string>();

  constructor(private eRef: ElementRef) {}

  ngOnInit(): void {
    console.log(this.items);
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.control.markAsTouched({ onlySelf: true });
      if (!this.control.value) this.control.markAsTouched({ onlySelf: false });
    } else {
      this.showSelect = false;
    }
  }

  writeValue(value: any): void {
    this.selected = value;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // onChangeValue(event: any) {
  //   console.log(event.text);
  //   // this.onChanged(event.target.value);
  //   this.onChanged(event.text);
  // }

  onClick(event: any) {
    event.currentTarget.childNodes[0].classList.add('trasladar');
    event.currentTarget.childNodes[1].classList.add('icon-hidden');
    event.currentTarget.childNodes[1].onclick();
  }

  onSelected() {
    this.showSelect = !this.showSelect;
  }

  onChangeValue(event: any) {
    this.control.setValue(event.id);
    this.change.emit(event.id);
    this.selected = event.text;
    this.showSelect = false;
  }
}
