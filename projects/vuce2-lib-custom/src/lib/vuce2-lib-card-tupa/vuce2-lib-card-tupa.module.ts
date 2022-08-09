import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Vuce2LibButtonPrimaryModule } from "../vuce2-lib-button-primary";
import { Vuce2LibCardTupaComponent } from "./vuce2-lib-card-tupa.component";

@NgModule({
    declarations: [Vuce2LibCardTupaComponent],
    imports: 
    [
        CommonModule,
        Vuce2LibButtonPrimaryModule
    ],
    exports: [Vuce2LibCardTupaComponent],
})
export class Vuce2LibCardTupaModule {}