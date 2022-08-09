import { Component, Input } from "@angular/core";

@Component({
    selector: 'vuce2-lib-cabecera',
    templateUrl: './vuce2-lib-cabecera.component.html',
    styleUrls: ['./vuce2-lib-cabecera.component.scss']
})
export class Vuce2LibCabeceraComponent {

    @Input()
    title:string='';

    @Input()
    subtitle:string='';

}
