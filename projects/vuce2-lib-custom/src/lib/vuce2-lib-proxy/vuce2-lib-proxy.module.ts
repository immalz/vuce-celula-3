import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Vuce2LibModulesModule } from "../vuce2-lib-modules";
import { PluginProxyComponent } from './plugin-proxy.component';

@NgModule({
    imports: [
        CommonModule,
        Vuce2LibModulesModule
    ],
    declarations: [
        PluginProxyComponent
    ],
    exports: [
        PluginProxyComponent
    ]
})
export class Vuce2LibProxyModule { }
