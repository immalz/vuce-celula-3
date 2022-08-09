import { Component, Input, OnInit } from "@angular/core";


@Component({
    selector:'vuce2-lib-header',
    templateUrl: './vuce2-lib-header.component.html',
    styleUrls:['./vuce2-lib-header.component.scss']
})
export class Vuce2LibHeaderComponent implements OnInit {

    @Input()
    usuario: any;  
    
    constructor(){}   
    
    ngOnInit(): void  {}
  

}
