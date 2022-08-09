import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";
import { Vuce2LibButtonTerciarioComponent } from "./vuce2-lib-button-terciario.component";


@NgModule({
    imports:[
        CommonModule, 
        Vuce2LibModulesModule
    ],
    declarations:[
        Vuce2LibButtonTerciarioComponent
    ],
    exports:[
        Vuce2LibButtonTerciarioComponent
    ]
})
export class Vuce2LibButtonTerciarioModule {}
