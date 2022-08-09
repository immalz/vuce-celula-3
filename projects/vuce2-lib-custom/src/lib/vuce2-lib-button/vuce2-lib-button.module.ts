import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";
import { Vuce2LibButtonComponent } from "./vuce2-lib-button.component";


@NgModule({
    imports:[
        CommonModule, 
        Vuce2LibModulesModule
    ],
    declarations:[
        Vuce2LibButtonComponent
    ],
    exports:[
        Vuce2LibButtonComponent
    ]
})
export class Vuce2LibButtonModule {}
