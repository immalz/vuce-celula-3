import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { IModuleContentGroup } from '../interfaces/module-content-group';

@Component({
    selector: 'vuce2-lib-sidebar',
    templateUrl: './vuce2-lib-sidebar.component.html',
    styleUrls: ['./vuce2-lib-sidebar.component.scss']
})
export class Vuce2LibSidebarComponent implements OnInit {
    path_img = "/assets/vuce2-lib-assets/images/";
    icon_lupa = `${this.path_img}lupa2.png`;
    icon_arrow_right = `${this.path_img}arrow_right.png`;

    itemSelected: any = '';

    @Input()
    modules: any;

    @Input()
    itemDefault: any;

    @Input()
    imageHelp: string;

    @Output() tabEvent = new EventEmitter<any>();

    itemEvent: any;

    $eventBus?: Subscription;

    selectedVal: string = '';

    constructor() { }

    onEventHandler(e: CustomEvent) {
        //console.log('onEventHandler',e);
        if (e.detail) {
            const response = e.detail;
            this.handleChangeMenu(response.menu);
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.handleChangeMenu(this.itemDefault);
    }

    async ngOnInit() {
        this.$eventBus = fromEvent<CustomEvent>(window, 'app-event-menu-change').subscribe((e) => this.onEventHandler(e));
    }

    handleChangeMenu(item: any) {
        if (item) {
            console.log(item);
            this.selected(item);
            this.itemSelected = item;
         /*   if(item.hasOwnProperty("subModules")){
                this.itemEvent = {
                    moduleName: item.name,
                    contentName: item.contentDefault
                }
            } else {
                this.itemEvent = {
                    moduleName: item.nameContentGroup,
                    contentName: item.content
                }
            } */
           
            //this.tabEvent.emit(this.itemEvent); 
            this.tabEvent.emit(item); 
        }
    }

    ngOnDestroy() {
        this.$eventBus?.unsubscribe();
    }

    deselect() {
        var els = document.getElementsByClassName("menu-item selected")

        for (var i = 0; i < els.length; i++) {
            els[i].setAttribute("class", "menu-item");
        }

        var els = document.getElementsByClassName("menu-item")

        for (var i = 0; i < els.length; i++) {
            els[i].setAttribute("class", "menu-item");
        }

    }

    selected(item: any) {
        this.deselect();
        var els = document.getElementsByClassName("menu-item")

        for (var i = 0; i < els.length; i++) {
            if (els[i].getAttribute("id") == "menu-" + item.id) {
                console.log(els[i].getAttribute("id"));
                els[i].setAttribute("class", "menu-item selected");
            }
        }
    }
}
