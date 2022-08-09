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
