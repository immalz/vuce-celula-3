import { DatasourceResult, TableDataSource, DatasourceParameters, TableColumn } from './../../../../../../../projects/vuce2-lib-custom/src/lib/vuce2-lib-pagination/vuce2-lib-pagination.interface';
import { TablePaging, TableOptions } from './../../../../../../../projects/vuce2-lib-custom/src/lib/interfaces/grid-options-paging';
import { Component, OnInit } from '@angular/core';
import { Observable, from as fromPromise } from 'rxjs';

@Component({
  selector: 'app-escritos',
  templateUrl: './escritos.component.html',
  styleUrls: ['./escritos.component.scss']
})
export class EscritosComponent implements OnInit {

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
      title: 'Nro', 
      name: 'nro', 
    },
    { 
        title: 'Asunto', 
        name: 'asunto', 
    },
    { 
        title: 'Estado', 
        name: 'estado', 
    },
    { 
        title: 'Fecha Transmision', 
        name: 'fechaTransmision', 
    },
    { 
        title: 'Acciones',
        name: 'acciones', 
    },
    {
      name: 'expanded',
      expanded: false
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
                "nro": "1",
                "asunto": "Cambio de Dirección",
                "estado": "Escrito por Transmitir",
                "fechaTransmision": "25/11/21 9:00am",
                "acciones": "",
            },
            {
                "id": 2,
                "nro": "2",
                "asunto": "Cambio de Dirección",
                "estado": "Escrito Aprobado",
                "fechaTransmision": "25/11/21 9:00am",
                "acciones": "",
            },
            {
                "id": 3,
                "nro": "3",
                "asunto": "Cambio de Dirección",
                "estado": "Escrito Rechazado",
                "fechaTransmision": "25/11/21 9:00am",
                "acciones": "",
            },
            {
                "id": 4,
                "nro": "4",
                "asunto": "Cambio de Dirección",
                "estado": "Escrito Rechazado",
                "fechaTransmision": "25/11/21 9:00am",
                "acciones": "",
            },
            {
                "id": 5,
                "nro": "5",
                "asunto": "Cambio de Dirección",
                "estado": "Escrito Rechazado",
                "fechaTransmision": "25/11/21 9:00am",
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
