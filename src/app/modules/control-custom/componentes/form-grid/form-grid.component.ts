import { Component, Input } from "@angular/core";
import { Observable, from as fromPromise } from "rxjs";
import { DatasourceParameters, DatasourceResult, TableColumn, TableDataSource, TableOptions, TablePaging } from "projects/vuce2-lib-custom/src/public-api";
import { FormGridService } from "./form-grid.service";

@Component({
    selector: 'form-grid',
    templateUrl: './form-grid.component.html',
    styleUrls:['./form-grid.component.scss'],
    providers:[ FormGridService ]
})
export class FormGridComponent {

    @Input()
    lang!:string;

    constructor(private service: FormGridService){ }

    public options: TableOptions = {
        className: '',//['table-striped'],
        language: "es",
        showRefresh: false,
    };

    public paging: TablePaging = {
        itemsPerPage: 10,
        itemsPerPageOptions: [5, 10, 25, 50, 100],
        itemsPerRefresh: 10,
        maxSize: 5,
        showPaging: true,
        showItemsPerPage: false
    }

    public datasource: TableDataSource = (request: DatasourceParameters): Observable<DatasourceResult> => {
        console.log('request',request);
        return this.contentGuia();
    }

    contentGuia(){
        return fromPromise( new Promise<DatasourceResult>(
          (resolve)=>{
            const respuesta = {
              recordsTotal: 10,
              recordsFiltered: 10,
              data: [
                {
                    "id": "1000",
                    "idTupa": "DGFOO2-TUPA8",
                    "tipoDocumento": "RUC",
                    "numeroDocumento": "15343531624",
                    "razonSocial": "15343531624",
                    "direccion": "Jr Santa Maria N° 567",
                    "celular": "998763543",
                    "correoElectronico": "ejemplo@gmail.com",
                    "departamento": "Lima",
                    "provincia": "Lima",
                    "distrito": "Lince",
                    "telefono": "0000000",
                    "fax": "0000000",
                    "representanteLegal": ""
                },
                {
                    "id": "1001",
                    "idTupa": "DGFOO2-TUPA8",
                    "tipoDocumento": "RUC",
                    "numeroDocumento": "15343531624",
                    "razonSocial": "15343531624",
                    "direccion": "Jr Santa Maria N° 567",
                    "celular": "998763543",
                    "correoElectronico": "ejemplo@gmail.com",
                    "departamento": "Lima",
                    "provincia": "Lima",
                    "distrito": "Lince",
                    "telefono": "0000000",
                    "fax": "0000000",
                    "representanteLegal": ""
                },
                {
                    "id": "1002",
                    "idTupa": "DGFOO2-TUPA8",
                    "tipoDocumento": "RUC",
                    "numeroDocumento": "15343531624",
                    "razonSocial": "15343531624",
                    "direccion": "Jr Santa Maria N° 567",
                    "celular": "998763543",
                    "correoElectronico": "ejemplo@gmail.com",
                    "departamento": "Lima",
                    "provincia": "Lima",
                    "distrito": "Lince",
                    "telefono": "0000000",
                    "fax": "0000000",
                    "representanteLegal": ""
                },
                {
                    "id": "1003",
                    "idTupa": "DGFOO2-TUPA8",
                    "tipoDocumento": "RUC",
                    "numeroDocumento": "15343531624",
                    "razonSocial": "15343531624",
                    "direccion": "Jr Santa Maria N° 567",
                    "celular": "998763543",
                    "correoElectronico": "ejemplo@gmail.com",
                    "departamento": "Lima",
                    "provincia": "Lima",
                    "distrito": "Lince",
                    "telefono": "0000000",
                    "fax": "0000000",
                    "representanteLegal": ""
                },
                {
                    "id": "1004",
                    "idTupa": "DGFOO2-TUPA8",
                    "tipoDocumento": "RUC",
                    "numeroDocumento": "15343531624",
                    "razonSocial": "15343531624",
                    "direccion": "Jr Santa Maria N° 567",
                    "celular": "998763543",
                    "correoElectronico": "ejemplo@gmail.com",
                    "departamento": "Lima",
                    "provincia": "Lima",
                    "distrito": "Lince",
                    "telefono": "0000000",
                    "fax": "0000000",
                    "representanteLegal": ""
                },
                {
                    "id": "1005",
                    "idTupa": "DGFOO2-TUPA8",
                    "tipoDocumento": "RUC",
                    "numeroDocumento": "15343531624",
                    "razonSocial": "15343531624",
                    "direccion": "Jr Santa Maria N° 567",
                    "celular": "998763543",
                    "correoElectronico": "ejemplo@gmail.com",
                    "departamento": "Lima",
                    "provincia": "Lima",
                    "distrito": "Lince",
                    "telefono": "0000000",
                    "fax": "0000000",
                    "representanteLegal": ""
                },
                {
                    "id": "1006",
                    "idTupa": "DGFOO2-TUPA8",
                    "tipoDocumento": "RUC",
                    "numeroDocumento": "15343531624",
                    "razonSocial": "15343531624",
                    "direccion": "Jr Santa Maria N° 567",
                    "celular": "998763543",
                    "correoElectronico": "ejemplo@gmail.com",
                    "departamento": "Lima",
                    "provincia": "Lima",
                    "distrito": "Lince",
                    "telefono": "0000000",
                    "fax": "0000000",
                    "representanteLegal": ""
                },
                {
                    "id": "1007",
                    "idTupa": "DGFOO2-TUPA8",
                    "tipoDocumento": "RUC",
                    "numeroDocumento": "15343531624",
                    "razonSocial": "15343531624",
                    "direccion": "Jr Santa Maria N° 567",
                    "celular": "998763543",
                    "correoElectronico": "ejemplo@gmail.com",
                    "departamento": "Lima",
                    "provincia": "Lima",
                    "distrito": "Lince",
                    "telefono": "0000000",
                    "fax": "0000000",
                    "representanteLegal": ""
                },
                {
                    "id": "1008",
                    "idTupa": "DGFOO2-TUPA8",
                    "tipoDocumento": "RUC",
                    "numeroDocumento": "15343531624",
                    "razonSocial": "15343531624",
                    "direccion": "Jr Santa Maria N° 567",
                    "celular": "998763543",
                    "correoElectronico": "ejemplo@gmail.com",
                    "departamento": "Lima",
                    "provincia": "Lima",
                    "distrito": "Lince",
                    "telefono": "0000000",
                    "fax": "0000000",
                    "representanteLegal": ""
                },
                {
                    "id": "1009",
                    "idTupa": "DGFOO2-TUPA8",
                    "tipoDocumento": "RUC",
                    "numeroDocumento": "15343531624",
                    "razonSocial": "15343531624",
                    "direccion": "Jr Santa Maria N° 567",
                    "celular": "998763543",
                    "correoElectronico": "ejemplo@gmail.com",
                    "departamento": "Lima",
                    "provincia": "Lima",
                    "distrito": "Lince",
                    "telefono": "0000000",
                    "fax": "0000000",
                    "representanteLegal": ""
                }
            ]
        }
        console.log('respuesta',respuesta);
        resolve(respuesta);
        }));
    }


    public columns: TableColumn[] = [
        { 
            title: 'ID Tupa', 
            name: 'idTupa', 
        },
        { 
            title: 'Razon Social', 
            name: 'razonSocial', 
        },
        { 
            title: 'Correo', 
            name: 'correoElectronico', 
        },
        { 
            title: '', 
            name: 'btnSelect',
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