import {
  Component,
  ContentChildren,
  forwardRef,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Vuce2LibContentTemplateDirective } from '../directives';

@Component({
  selector: 'vuce2-lib-accordion',
  templateUrl: './vuce2-lib-accordion.component.html',
  styleUrls: ['./vuce2-lib-accordion.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Vuce2LibAccordionComponent),
      multi: true,
    },
  ],
})
export class Vuce2LibAccordionComponent {
  panelOpenState = false;
  @Input() title: string;
  @Input() status: string;
  @Input() statusVisible?: boolean = true;
  @Input() image: string;
  
  @Input() statusClass: Object = {
    Pendiente: 'status-box-pending',
    Conforme: 'status-box-success',
    Observado: 'status-box-observed',
  };

  @ContentChildren(Vuce2LibContentTemplateDirective)
  cellTemplates: QueryList<Vuce2LibContentTemplateDirective>;

  constructor() {
    this.title = 'Datos del Solicitantes';
    this.status = 'Pendiente';
  }

  getContentTemplate(): TemplateRef<any> {
    let template = this.cellTemplates.filter(
      (c) => c.vuce2LibContentTemplate === 'contentTemplate'
    );
    if (template.length > 0) {
      return template.map((p) => p.templateRef)[0];
    }
    return null;
  }
}
