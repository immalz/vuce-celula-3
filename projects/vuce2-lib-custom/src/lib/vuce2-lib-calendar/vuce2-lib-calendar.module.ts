import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Vuce2LibCalendarComponent } from "./vuce2-lib-calendar.component";
import { Vuce2LibModulesModule } from "../vuce2-lib-modules";

@NgModule({
    declarations: [Vuce2LibCalendarComponent],
    imports: [CommonModule,
              Vuce2LibModulesModule
            ],
    exports: [Vuce2LibCalendarComponent],
})
export class Vuce2LibCalendarModule {}