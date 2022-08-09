import { TableOptions, TablePaging } from './../../../../../../../projects/vuce2-lib-custom/src/lib/interfaces/grid-options-paging';
import { TableDataSource } from './../../../../../../../projects/vuce2-lib-custom/src/lib/vuce2-lib-grid/vuce2-lib-grid.interface';
import { DatasourceResult, DatasourceParameters, TableColumn } from './../../../../../../../projects/vuce2-lib-custom/src/lib/vuce2-lib-pagination/vuce2-lib-pagination.interface';
import { Component, OnInit } from '@angular/core';
import { Observable, from as fromPromise } from 'rxjs';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.scss']
})
export class InformesComponent implements OnInit {

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
        title: 'Tipo de Informe', 
        name: 'tipo', 
    },
    { 
        title: 'Estado', 
        name: 'estado', 
    },
    { 
        title: 'Emisión', 
        name: 'fechaEmisión', 
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
                "nro": "1",
                "tipo": "Informe de Aprobación",
                "estado": "Aprobado",
                "fechaEmisión": "25/11/2022",
                "acciones": "",
            },
            {
                "id": 2,
                "nro": "2",
                "tipo": "Informe de Aprobación",
                "estado": "Aprobado",
                "fechaEmisión": "25/11/2022",
                "acciones": "",
            },
            {
                "id": 3,
                "nro": "3",
                "tipo": "Informe de Aprobación",
                "estado": "Rechazado",
                "fechaEmisión": "25/11/2022",
                "acciones": "",
            },
            {
                "id": 4,
                "nro": "4",
                "tipo": "Informe de Aprobación",
                "estado": "Aprobado",
                "fechaEmisión": "25/11/2022",
                "acciones": "",
            },
            {
                "id": 5,
                "nro": "5",
                "tipo": "Informe de Aprobación",
                "estado": "Rechazado",
                "fechaEmisión": "25/11/2022",
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
