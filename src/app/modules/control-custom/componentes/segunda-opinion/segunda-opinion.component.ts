import { MatDialog } from '@angular/material/dialog';
import { ModalConformidadSegundaOpinionComponent } from './../modales/modal-conformidad-segunda-opinion/modal-conformidad-segunda-opinion.component';
import { TablePaging } from './../../../../../../projects/vuce2-lib-custom/src/lib/interfaces/grid-options-paging';
import { Observable, from as fromPromise } from 'rxjs';
import { TableOptions } from './../../../../../../projects/vuce2-custom/src/lib/vuce2-grid/vuce2-grid.interface';
import { DatasourceResult, DatasourceParameters, TableDataSource, TableColumn } from './../../../../../../projects/vuce2-lib-custom/src/lib/vuce2-lib-pagination/vuce2-lib-pagination.interface';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segunda-opinion',
  templateUrl: './segunda-opinion.component.html',
  styleUrls: ['./segunda-opinion.component.scss']
})
export class SegundaOpinionComponent implements OnInit {

  imageAccordion = 'assets/image/accordion.svg';
  
  breadCrumbs = [
    {
      id: 2,
      texto: 'Tramites',
      url: '#',
      selected: false
    },
    {
      id: 3,
      texto: 'Trámites en Proceso de Evaluación',
      url: 'evaluacion',
      selected: false
    },
    {
      id: 4,
      texto: 'Datos Generales del Trámite',
      url: '#',
      selected: true
    }
  ]

  tabsRadius = [
    {
      id: '1',
      name: 'En Evaluación',
      active: false,
      completed: true,
    },
    {
      id: '2',
      name: 'Informe',
      active: false,
      completed: false,
    },
    {
      id: '3',
      name: 'Por Resolver',
      active: false,
      completed: false,
    },
    {
      id: '4',
      name: 'Documento Resolutivo',
      active: false,
      completed: false,
    },
  ];

  tabs: any[] = [
    { caption: 'Datos del solicitante', disabled: false, route: '' },
    { caption: 'Escritos', disabled: false, route: 'escritos' },
    { caption: 'Notificaciones / Subsanaciones', disabled: false, route: 'notificaciones' },
    { caption: 'Informes', disabled: false, route: 'informes' },
    { caption: 'Documentos Resolutivos', disabled: false, route: 'documentos' },
  ];

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }

    ngOnInit(): void {
  }

  changeTab(tab): any {
    const caption = this.tabs.find(element => element.caption === tab);

    this.router.navigate([`/datos-generales/${caption.route}`])
  }

  return(): void {
    this.router.navigate([`/datos-generales`]);
  }

  handlerChange(e: any) {
    console.log('e >>', e);
  }

  handlerRefresh(e){
    if(e){
        console.log('handlerRefresh',e);
    }
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalConformidadSegundaOpinionComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result) {

      }
    });
  }

  public columns: TableColumn[] = [
    { 
      title: 'Texto', 
      name: 'nro', 
    },
    { 
        title: 'Texto', 
        name: 'asunto', 
    },
    { 
        title: 'Texto', 
        name: 'fechaTransmision', 
    },
    { 
        title: '2da Opinión', 
        name: 'segunda', 
    },
    { 
      title: 'Texto', 
      name: 'estado', 
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
                "estado": "Pendiente",
                "fechaTransmision": "25/11/21 9:00am",
                "acciones": "",
            },
            {
                "id": 2,
                "nro": "2",
                "asunto": "Cambio de Dirección",
                "estado": "Pendiente",
                "fechaTransmision": "25/11/21 9:00am",
                "acciones": "",
            },
            {
                "id": 3,
                "nro": "3",
                "asunto": "Cambio de Dirección",
                "estado": "Pendiente",
                "fechaTransmision": "25/11/21 9:00am",
                "acciones": "",
            },
            {
                "id": 4,
                "nro": "4",
                "asunto": "Cambio de Dirección",
                "estado": "Pendiente",
                "fechaTransmision": "25/11/21 9:00am",
                "acciones": "",
            },
            {
                "id": 5,
                "nro": "5",
                "asunto": "Cambio de Dirección",
                "estado": "Pendiente",
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
