import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { DatasourceParameters, DatasourceResult, TableColumn, TableDataSource, TableOptions, TablePaging  } from "projects/vuce2-lib-custom/src/public-api";
import { FormPaginationService } from "./form-pagination.service";

@Component({
    selector: 'form-pagination',
    templateUrl: './form-pagination.component.html',
    styleUrls:['./form-pagination.component.scss'],
    providers:[ FormPaginationService ]
})
export class FormPaginationComponent {

    @Input()
    lang!:string;

    iconLCardLink: string;
    titleCardLink: string;
    linkCardLink: string;
    iconRCardLink: string;
    textoCardLink: string;


    constructor(private service: FormPaginationService)
    { 
        this.iconLCardLink = "assets/image/icoLink.svg";
        this.titleCardLink = "MCT001";
        this.linkCardLink = "Emision de certificado de origen";
        this.iconRCardLink = "assets/image/iconRLink.svg";
        this.textoCardLink = "Texto referencial para publicidad";
    }

    public options: TableOptions = {
        className: '',//['table-striped'],
        language: this.lang?this.lang:"es",
        showRefresh: false,
        showHeadersColumns: false
    };

    public paging: TablePaging = {
        itemsPerPage: 9,
        itemsPerPageOptions: [5, 10, 25, 50, 100],
        itemsPerRefresh: 10,
        maxSize: 5,
        showPaging: true, 
        showItemsPerPage: false,
        itemsPerShowPaging: 9,
    }

    

    public datasource: TableDataSource = (request: DatasourceParameters): Observable<DatasourceResult> => {
        console.log('request',request);
        return this.service.getUsersDataSource(request);
    }

    public columns: TableColumn[] = [
        { 
            title: 'Name', 
            name: 'name', 
        },
        { 
            title: 'Username', 
            name: 'username', 
        },
        { 
            title: 'Email', 
            name: 'email', 
            hidden: true,
        },
        { 
            title: 'Estado', 
            name: 'estado', 
        },
        {
            title: '', 
            name: 'btnEdit',
            width: "10px"
        },
        { 
            title: '', 
            name: 'btnDelete',
            width: "10px"
        }
    ];

    handlerEdit(row: any) {
        alert("EDIT row: \n\n" + JSON.stringify(row));
    }

    handlerDelete(row: any) {
        alert("DELETE row: \n\n" + JSON.stringify(row));
    }

    handlerRefresh(e){
        if(e){
            console.log('handlerRefresh',e);
        }
    }

    onLang(locale:string){
        const busEvent = new CustomEvent('app-event-translate-language', {
            bubbles: true,
            detail: { locale: locale }
        });        
        dispatchEvent(busEvent);
    }

}