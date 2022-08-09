import { Observable, from as fromPromise } from 'rxjs';
import { TableDataSource } from './../../../../../../../projects/vuce2-lib-custom/src/lib/vuce2-lib-grid/vuce2-lib-grid.interface';
import { DatasourceResult, DatasourceParameters, TableColumn } from './../../../../../../../projects/vuce2-lib-custom/src/lib/vuce2-lib-pagination/vuce2-lib-pagination.interface';
import { TablePaging, TableOptions } from './../../../../../../../projects/vuce2-lib-custom/src/lib/interfaces/grid-options-paging';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesComponent implements OnInit {


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
      title: '', 
      name: 'checkbox', 
    },
    { 
      title: 'Número', 
      name: 'nro', 
    },
    { 
        title: 'Mensaje', 
        name: 'mensaje', 
    },
    { 
        title: 'Recepción', 
        name: 'recepcion', 
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

  public datasource: TableDataSource = (request: DatasourceParameters): Observable<DatasourceResult> => {
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
                "nro": "2022207001",
                "mensaje": "Subsanar Observaciones",
                "recepcion": "25/11/21",
                "check": false,
                "acciones": "",
            },
            {
                "id": 2,
                "nro": "2022207002",
                "mensaje": "Subsanar Observaciones",
                "recepcion": "25/11/21",
                "check": false,
                "acciones": "",
            },
            {
                "id": 3,
                "nro": "2022207003",
                "mensaje": "Subsanar Observaciones",
                "recepcion": "25/11/21",
                "check": true,
                "acciones": "",
            },
            {
                "id": 4,
                "nro": "2022207004",
                "mensaje": "Subsanar Observaciones",
                "recepcion": "25/11/21",
                "check": false,
                "acciones": "",
            },
            {
                "id": 5,
                "nro": "2022207005",
                "mensaje": "Subsanar Observaciones",
                "recepcion": "25/11/21",
                "check": false,
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
