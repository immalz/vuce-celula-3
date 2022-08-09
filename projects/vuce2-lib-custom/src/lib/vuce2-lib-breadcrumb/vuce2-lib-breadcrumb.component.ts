import { Component, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IBreadCrumb } from '../interfaces/breadcrumb';

@Component({
  selector: 'vuce2-lib-breadcrumb',
  templateUrl: './vuce2-lib-breadcrumb.component.html',
  styleUrls: ['./vuce2-lib-breadcrumb.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Vuce2LibBreadcrumbComponent),
      multi: true,
    },
  ],
})
export class Vuce2LibBreadcrumbComponent implements OnInit, ControlValueAccessor {
  public value: boolean = false;
  public change: any = () => { };
  public touched: any = () => { };

  itemHome: IBreadCrumb;

  @Input()
  items: IBreadCrumb[];

  constructor() {
    this.items = [];

  }

  ngOnInit(): void {
    this.itemHome = {
      texto: '',
      selected: false,     
      event: { moduleName: 'Inicio', contentName: 'home' }
    }

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

  onClick(item: any, index: number) {
    if (item.event) {
      const event = new CustomEvent('app-event-get-content', {
        bubbles: true,
        detail: { moduleName: item.event.moduleName, contentName: item.event.contentName }
      });
      dispatchEvent(event);

      if (index == 0) {
        this.items.length = 0;
      } else {
        this.items.length = index + 1;
        this.items[index].event = null;
        this.items[index].selected = true;
      }
    }

  }
}




