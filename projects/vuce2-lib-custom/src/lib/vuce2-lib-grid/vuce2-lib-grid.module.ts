import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2LibGridComponent } from './vuce2-lib-grid.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MatIconModule } from '@angular/material/icon';
import { Vuce2LibGridCellTemplateDirective } from './vuce2-lib-grid-cell-template.directive';

@NgModule({
    declarations: [
        Vuce2LibGridComponent,
        Vuce2LibGridCellTemplateDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        PaginationModule,
        MatIconModule
    ],
    exports: [
        Vuce2LibGridComponent,
        Vuce2LibGridCellTemplateDirective
    ]
})
export class Vuce2LibGridModule { }
