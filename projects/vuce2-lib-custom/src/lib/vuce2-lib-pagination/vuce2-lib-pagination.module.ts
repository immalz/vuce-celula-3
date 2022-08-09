import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2LibPaginationComponent } from './vuce2-lib-pagination.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MatIconModule } from '@angular/material/icon';
import { Vuce2LibPaginationCellTemplateDirective } from './vuce2-lib-pagination-cell-template.directive';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        Vuce2LibPaginationComponent,
        Vuce2LibPaginationCellTemplateDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        PaginationModule,
        MatIconModule,
        FlexLayoutModule
    ],
    exports: [
        Vuce2LibPaginationComponent,
        Vuce2LibPaginationCellTemplateDirective
    ]
})
export class Vuce2LibPaginationModule { }
