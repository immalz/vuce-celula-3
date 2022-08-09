import { Observable } from "rxjs";

export type SORT_ORDER = 'asc' | 'desc';
//export type FILTER_TYPE = 'default' | 'text' | 'range' | 'daterange' | 'equals' | 'collection';

// L 7
export interface TableOptions {
    language?: string | any;
    //orderMulti?: boolean;
    className?: string | string[];
    //search?: boolean;
    showRefresh?: boolean;
    showHeadersColumns?:boolean;
}

// L 14
export interface TablePaging {
    itemsPerPageOptions: number[];
    itemsPerPage: number;
    itemsPerRefresh: number;
    itemsPerShowPaging?: number;
    maxSize:number;
    showPaging: boolean;
    showItemsPerPage?: boolean;
}


// L 21
export interface TableDataSource {
    (request: DatasourceParameters): Observable<DatasourceResult>;
}

// L 25
export interface TableColumn {
    name : string;
    title? : string;
    width? : number | string;
    // sort?: boolean;
    // defaultSortOrder?: SORT_ORDER;
    //filter?: TableColumnFilter;
    hidden?: boolean;
    render?: TableColumnRender;
    action?: TableColumnAction;
}


// L 56
export interface TableColumnRender {
    (value: any, row: Object): string;
}

// L 60
export interface TableColumnAction {
    (value: any, row: Object): void;
}

// L 64
export interface DatasourceParameters { 
    start: number; 
    length: number; 
    // orders: DatasourceOrder[];
    //filters: DatasourceFilter[]; 
    //fullTextFilter: string;
}

// L 72
// export interface DatasourceFilter { 
//     name: string; 
//     type: FILTER_TYPE;
//     value: any;
// }

// L78
export interface DatasourceOrder { 
    name: string; 
    dir: SORT_ORDER;
}

// L 83
export interface DatasourceResult { 
    recordsTotal: number; 
    recordsFiltered: number; 
    data: any[];
}


export interface PagingState {
    currentPage:number;
    itemsPerPage: number;
    recordsTotal: number; 
    recordsFiltered: number; 
}

export interface ColumnState {
    //filterValue: any;
    // sortOrder : SORT_ORDER;
    def: TableColumn;
    // hasSort: boolean;
    // hasFilter: boolean;
}