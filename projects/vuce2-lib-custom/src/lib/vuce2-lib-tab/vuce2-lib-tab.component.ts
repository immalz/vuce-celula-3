import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from "@angular/core";
import { fromEvent, Subscription } from "rxjs";

@Component({
    selector: 'vuce2-lib-tab',
    templateUrl: './vuce2-lib-tab.component.html',
    styleUrls: ['./vuce2-lib-tab.component.scss']
})
export class Vuce2LibTabComponent implements OnInit{

    @Input() 
    contentSource: any;

    @Input()
    selectedVal:string = '';

    @Output() tabEvent = new EventEmitter<string>();

    $eventBus?: Subscription;
    
    constructor(){}

    onEventHandler(e: CustomEvent) {
        //console.log('Vuce2TabComponent onEventHandler',e);
        if(e.detail){
            const response = e.detail;
            this.handleChangeTab(response.tab);
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.handleChangeTab(this.selectedVal);
    }

    async ngOnInit() {
        // console.log('Vuce2TabComponent')
        // console.log(this.contentSource)
        // console.log(this.selectedVal);
        this.anchura();
        this.$eventBus = fromEvent<CustomEvent>(window, 'app-event-tab-change').subscribe((e) => this.onEventHandler(e));
    }

    handleChangeTab(value:any){
        //console.log('vuce2-tab handleChangeTab',value)
        if(value){
            console.log(value);
            this.selectedVal = value;
            this.tabEvent.emit(value);
        }
    }
    anchura(): string{
        let styleElement: HTMLElement = document.createElement( 'style' );
        
        const cant = this.contentSource.length;
        const parte = 100 / cant;
        const width = (parte.toFixed(1))+'%';
        styleElement.innerText = ':root { ' + '--anchura:'+width + ' }';
        document.getElementsByTagName( 'head' )[0].appendChild( styleElement );
        console.log('width',width);
        return width;
    }
    ngOnDestroy() {
        this.$eventBus?.unsubscribe();
    }
}
