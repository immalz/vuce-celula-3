import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";
import { Vuce2LibButtonNeutralComponent } from "./vuce2-lib-button-neutral.component";


@NgModule({
    imports:[
        CommonModule, 
        Vuce2LibModulesModule
    ],
    declarations:[
        Vuce2LibButtonNeutralComponent
    ],
    exports:[
        Vuce2LibButtonNeutralComponent
    ]
})
export class Vuce2LibButtonNeutralModule {}
