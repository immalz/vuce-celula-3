import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";
import { Vuce2LibButtonSecundaryComponent } from "./vuce2-lib-button-secundary.component";


@NgModule({
    imports:[
        CommonModule, 
        Vuce2LibModulesModule
    ],
    declarations:[
        Vuce2LibButtonSecundaryComponent
    ],
    exports:[
        Vuce2LibButtonSecundaryComponent
    ]
})
export class Vuce2LibButtonSecundaryModule {}
