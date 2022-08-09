import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Vuce2LibButtonPrimaryModule } from "../vuce2-lib-button-primary";
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";
import { Vuce2LibSelectModule } from "../vuce2-lib-select";
import { Vuce2LibCardTitleSubtitleIconComponent } from "./vuce2-lib-card-title-subtitle-icon.component";

@NgModule({
    declarations: [Vuce2LibCardTitleSubtitleIconComponent],
    imports: [
        CommonModule,
        Vuce2LibButtonPrimaryModule,
        Vuce2LibSelectModule,
        Vuce2LibModulesModule
    ],
    exports: [Vuce2LibCardTitleSubtitleIconComponent],
})
export class Vuce2LibCardTitleSubtitleIconModule {}