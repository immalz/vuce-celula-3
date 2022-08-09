import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Vuce2LibInputTextComponent } from "./vuce2-lib-input-text.component";
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";

@NgModule({
    imports:[
        CommonModule,
        Vuce2LibModulesModule,
    ],
    declarations:[
        Vuce2LibInputTextComponent
    ],
    exports:[
        Vuce2LibInputTextComponent
    ]
})
export class Vuce2LibInputTextModule {}
