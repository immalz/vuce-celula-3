import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Languages } from "../constants/languages";
import { ColumnState, PagingState, TableOptions, TablePaging } from "../interfaces";
import { SORT_ORDER, TableColumn } from "../interfaces";

@Injectable()
export class Vuce2LibPaginationService {
    private stateChangedSource: BehaviorSubject<Vuce2LibPaginationService> = new BehaviorSubject<Vuce2LibPaginationService>(this);


    stateChanged$: Observable<Vuce2LibPaginationService>;
    //showFilterRow: boolean = false;
    //orderMulti: boolean = true;
    columns: ColumnState[];
    paging: PagingState;
    //sortStack: ColumnState[] = [];
    fullTextFilter: string;
    language: any = null;
    showRefresh:boolean;
    showHeadersColumns:boolean;

    constructor() {
        this.stateChanged$ = this.stateChangedSource.asObservable();
    }

    // 44
    public setOptions(options: TableOptions): void {
        //this.orderMulti = !!options.orderMulti ? options.orderMulti : true;
        this.language = typeof options.language === "string" ? Languages[options.language] : options.language;
        //console.log('options.showRefresh >>>', options.showRefresh);
        if(options.showRefresh){
            this.showRefresh = options.showRefresh==true?true:false;
        }else{
            this.showRefresh = options.showRefresh==false?false:true;
        }

        if(options.showHeadersColumns){
            this.showHeadersColumns = options.showHeadersColumns==true?true:false;
        }else{
            this.showHeadersColumns = options.showHeadersColumns==false?false:true;
        }
    }


    // L 49
    public setColumns(columns: Array<TableColumn>) {
        return new Promise<void>(
            (resolve)=>{ 
                console.log('columns', columns);
                const columnsF = columns.filter(x=>x.hidden==(false || undefined));
                console.log('columns hidden', columnsF);
                this.columns = columnsF.map(c => {
                    // if (!!c.filter) {
                    //     this.showFilterRow = true;
                    // }
        
                    let column: ColumnState = {
                        //filterValue: null,
                        // sortOrder: c.defaultSortOrder,
                        def: c,
                        //hasSort: c.sort,
                        //hasFilter: !!c.filter
                    };
        
                    // if (!!column.sortOrder) {
                    //     this.sortStack.push(column);
                    // }
        
                    return column;
                });
            resolve();
        }); 
        
    }


    // L 71
    public setPaging(paging: TablePaging): void {
        this.paging = {
            currentPage: 1,
            itemsPerPage: paging.itemsPerPage,
            recordsTotal: 0,
            recordsFiltered: 0
        };
    }

    public changePaging(page: number, itemsPerPage:any){
        console.log('changePaging');
        console.log(page,itemsPerPage);
        this.paging.currentPage = page;
        this.paging.itemsPerPage = Number.parseInt(itemsPerPage);
        this.notify();
    }

    public notify () : void {
        this.stateChangedSource.next(this);
    }




}
