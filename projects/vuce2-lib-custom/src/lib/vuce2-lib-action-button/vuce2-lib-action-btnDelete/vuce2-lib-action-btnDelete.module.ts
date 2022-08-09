import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Vuce2LibModulesModule } from "../../vuce2-lib-modules";

import { Vuce2LibActionBtnDeleteComponent } from "./vuce2-lib-action-btnDelete.component";


@NgModule({
    imports:[
        CommonModule,
        Vuce2LibModulesModule
    ],
    declarations:[
        Vuce2LibActionBtnDeleteComponent
    ],
    exports:[
        Vuce2LibActionBtnDeleteComponent
    ]
})
export class Vuce2LibActionBtnDeleteModule {}
