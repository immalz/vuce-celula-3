import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { fromEvent, Subscription } from "rxjs";

@Component({
    selector: 'vuce2-lib-menu',
    templateUrl: './vuce2-lib-menu.component.html',
    styleUrls: ['./vuce2-lib-menu.component.scss']
})
export class Vuce2LibMenuComponent implements OnInit, OnChanges {
    @Input() 
    contentSource: any;

    @Input()
    selectedVal:string = '';

    @Output() tabEvent = new EventEmitter<string>();

    $eventBus?: Subscription;
    
    constructor(){}

    onEventHandler(e: CustomEvent) {
        //console.log('onEventHandler',e);
        if(e.detail){
            const response = e.detail;
            this.handleChangeMenu(response.menu);
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.handleChangeMenu(this.selectedVal);
    }

    async ngOnInit() {
        // console.log('Vuce2MenuComponent')
        // console.log(this.contentSource)
        // console.log(this.selectedVal);
        this.$eventBus = fromEvent<CustomEvent>(window, 'app-event-menu-change').subscribe((e) => this.onEventHandler(e));
    }

    handleChangeMenu(value:any){
        //console.log(value)
        if(value){
            //console.log(value);
            this.selectedVal = value;
            this.tabEvent.emit(value);
        }
    }

    ngOnDestroy() {
        this.$eventBus?.unsubscribe();
    }
}
