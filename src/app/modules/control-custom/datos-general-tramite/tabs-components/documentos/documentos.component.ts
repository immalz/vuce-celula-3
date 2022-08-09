import { TableOptions, TablePaging } from './../../../../../../../projects/vuce2-lib-custom/src/lib/interfaces/grid-options-paging';
import { TableDataSource } from './../../../../../../../projects/vuce2-lib-custom/src/lib/vuce2-lib-grid/vuce2-lib-grid.interface';
import { DatasourceResult, DatasourceParameters, TableColumn } from './../../../../../../../projects/vuce2-lib-custom/src/lib/vuce2-lib-pagination/vuce2-lib-pagination.interface';
import { Component, OnInit } from '@angular/core';
import { Observable, from as fromPromise } from 'rxjs';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handlerChange(e: any) {
    console.log('e >>', e);
  }

  handlerRefresh(e){
    if(e){
        console.log('handlerRefresh',e);
    }
  }

  public columns: TableColumn[] = [
    { 
      title: 'Número', 
      name: 'nro', 
    },
    { 
        title: 'Tipo de DR', 
        name: 'tipo', 
    },
    { 
        title: 'Estado', 
        name: 'estado', 
    },
    { 
        title: 'Proyecto DR', 
        name: 'proyecto', 
    },
    { 
      title: 'Notificacion DR', 
      name: 'notificacion', 
    },
    { 
      title: 'Versiones', 
      name: 'versiones', 
    },
    { 
        title: 'Acciones',
        name: 'acciones', 
    }
  ];

  public options: TableOptions = {
    className: '',//['table-striped'],
    language: "es",
    showRefresh: false,
  };

  public datasource: TableDataSource = (request: DatasourceParameters):     Observable<DatasourceResult> => {
    console.log('request',request);
    return this.contentGuia();
  }

  contentGuia(){
    return fromPromise( new Promise<DatasourceResult>(
      (resolve)=>{
        const respuesta = {
          recordsTotal: 5,
          recordsFiltered: 5,
          data: [
            {
                "id": 1,
                "nro": "202270001",
                "tipo": "Autorización",
                "estado": "Documento de Evaluación",
                "proyecto": "25/11/2022 14:55",
                "notificacion": "25/11/2022 14:55",
                "versiones": 1,
                "acciones": "",
            },
            {
                "id": 2,
                "nro": "202270002",
                "tipo": "Autorización",
                "estado": "Documento de Evaluación",
                "proyecto": "25/11/2022 14:55",
                "notificacion": "25/11/2022 14:55",
                "versiones": 1,
                "acciones": "",
            },
            {
                "id": 3,
                "nro": "202270003",
                "tipo": "Autorización",
                "estado": "Documento de Evaluación",
                "proyecto": "25/11/2022 14:55",
                "notificacion": "25/11/2022 14:55",
                "versiones": 1,
                "acciones": "",
            },
            {
                "id": 4,
                "nro": "202270004",
                "tipo": "Autorización",
                "estado": "Documento de Evaluación",
                "proyecto": "25/11/2022 14:55",
                "notificacion": "25/11/2022 14:55",
                "versiones": 1,
                "acciones": "",
            },
            {
                "id": 5,
                "nro": "202270005",
                "tipo": "Autorización",
                "estado": "Documento de Evaluación",
                "proyecto": "25/11/2022 14:55",
                "notificacion": "25/11/2022 14:55",
                "versiones": 1,
                "acciones": "",
            },
           
        ]
    }
    resolve(respuesta);
    }));
  }

  public paging: TablePaging = {
    itemsPerPage: 10,
    itemsPerPageOptions: [5, 10, 25, 50, 100],
    itemsPerRefresh: 10,
    maxSize: 5,
    showPaging: true,
    showItemsPerPage: false
  }

}
