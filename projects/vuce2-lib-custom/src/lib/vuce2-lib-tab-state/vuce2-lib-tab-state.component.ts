import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vuce2-lib-tab-state',
  templateUrl: './vuce2-lib-tab-state.component.html',
  styleUrls: ['./vuce2-lib-tab-state.component.scss'],
})
export class Vuce2LibTabStateComponent {
  @Input() tabList: any[] = [];

  @Output()
  public tabClick = new EventEmitter<MouseEvent>();
  
  public emmitClick(event: MouseEvent) {
      this.tabClick.emit(event);
  }
}
