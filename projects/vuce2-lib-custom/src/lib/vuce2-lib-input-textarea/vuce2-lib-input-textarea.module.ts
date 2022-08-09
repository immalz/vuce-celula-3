import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Vuce2LibInputTextareaComponent } from "./vuce2-lib-input-textarea.component";
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";

@NgModule({
    imports:[
        CommonModule,
        Vuce2LibModulesModule
    ],
    declarations:[
        Vuce2LibInputTextareaComponent
    ],
    exports:[
        Vuce2LibInputTextareaComponent
    ]
})
export class Vuce2LibInputTextareaModule {}
