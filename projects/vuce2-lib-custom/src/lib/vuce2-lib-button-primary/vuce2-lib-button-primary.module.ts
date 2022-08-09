import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";
import { Vuce2LibButtonPrimaryComponent } from "./vuce2-lib-button-primary.component";


@NgModule({
    imports:[
        CommonModule, 
        Vuce2LibModulesModule
    ],
    declarations:[
        Vuce2LibButtonPrimaryComponent
    ],
    exports:[
        Vuce2LibButtonPrimaryComponent
    ]
})
export class Vuce2LibButtonPrimaryModule {}
