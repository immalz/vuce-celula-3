import { Component, Input } from '@angular/core';

@Component({
  selector: 'vuce2-lib-radio-state',
  templateUrl: './vuce2-lib-radio-state.component.html',
  styleUrls: ['./vuce2-lib-radio-state.component.scss'],
})
export class Vuce2LibRadioStateComponent {
  @Input() tabList: any[] = [];
  constructor() {}
}
