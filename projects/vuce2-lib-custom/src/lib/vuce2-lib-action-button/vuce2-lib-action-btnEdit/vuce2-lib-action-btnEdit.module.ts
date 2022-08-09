import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Vuce2LibModulesModule } from "../../vuce2-lib-modules";
import { Vuce2LibActionBtnEditComponent } from "./vuce2-lib-action-btnEdit.component";


@NgModule({
    imports:[
        CommonModule,
        Vuce2LibModulesModule
    ],
    declarations:[
        Vuce2LibActionBtnEditComponent
    ],
    exports:[
        Vuce2LibActionBtnEditComponent
    ]
})
export class Vuce2LibActionBtnEditModule {}
