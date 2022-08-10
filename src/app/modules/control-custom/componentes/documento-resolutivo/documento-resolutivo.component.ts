import { TableDataSource } from 'projects/vuce2-lib-custom/src/public-api';
import { Observable, from as fromPromise } from 'rxjs';
import { DatasourceResult } from 'projects/vuce2-lib-custom/src/public-api';
import { DatasourceParameters } from 'projects/vuce2-lib-custom/src/public-api';
import { TableOptions } from 'projects/vuce2-lib-custom/src/public-api';
import { TablePaging } from 'projects/vuce2-lib-custom/src/public-api';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { TableColumn } from 'projects/vuce2-lib-custom/src/public-api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-documento-resolutivo',
  templateUrl: './documento-resolutivo.component.html',
  styleUrls: ['./documento-resolutivo.component.scss']
})
export class DocumentoResolutivoComponent implements OnInit {

  formFilter: FormGroup;
  showPreview: boolean = false;
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
    url: '#',
    selected: true
  }]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.crearFormGroup()
  }

  crearFormGroup(): void {
    this.formFilter = new FormGroup({
      formato: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      prioridad: new FormControl(''), 
      diasRestantes: new FormControl(''), 
      modos: new FormControl(''), 
    })
  }


  handlerChange(e: any) {
    console.log('e >>', e);
  }

  handlerRefresh(e){
    if(e){
        console.log('handlerRefresh',e);
    }
  }

  goToDetail(row: any): void {
    this.router.navigate(['/datos-generales']);
  }

  public columns: TableColumn[] = [
    { 
        title: 'Tupa', 
        name: 'idTupa', 
    },
    { 
        title: 'Nro. Trámite', 
        name: 'nroTramite', 
    },
    { 
        title: 'Solicitante',
        name: 'solicitante', 
    },
    { 
        title: 'Días Restantes',
        name: 'diasRestantes', 
    },
    { 
        title: 'Estado',
        name: 'Estado', 
    },
    { 
        title: 'Acciones',
        name: 'acciones', 
    }
  ];

  tabs: any[] = [
    { caption: 'Tramites Regulares', disabled: false, route: '' },
    { caption: 'Recursos Administrativos', disabled: false, route: 'escritos' },
  ];

  get formato() {
    return this.formFilter.controls['formato'];
  }
  get estado() {
    return this.formFilter.controls['estado'];
  }
  get fecha() {
    return this.formFilter.controls['fecha'];
  }
  get modo() {
    return this.formFilter.controls['modos'];
  }
  get validar() {
    return this.formFilter.controls['validar'];
  }
  
  public options: TableOptions = {
    className: '',//['table-striped'],
    language: "es",
    showRefresh: false,
  };

  public datasource: TableDataSource = (request: DatasourceParameters): Observable<DatasourceResult> => {
  console.log('request',request);
  return this.contentGuia();
  }

  changeTab(tab): any {
    console.log(tab)
  }

  selectMode(e: any): void {
    console.log(e);
    e === 2 ? this.showPreview = true : this.showPreview = false;
  }

  contentGuia(){
    return fromPromise( new Promise<DatasourceResult>(
      (resolve)=>{
        const respuesta = {
          recordsTotal: 10,
          recordsFiltered: 10,
          data: [
            {
                "id": "1",
                "idTupa": "29",
                "formato": "2022200587",
                "nroTramite": "15343531624",
                "expediente": "15343531624",
                "solicitante": "Farma Industria SAC",
                "inicio": "25/11/2022 09:00am",
                "diasRestantes": "2 dias",
                "Estado": "Pendiente",
                "Acciones": "",
            },
            {
                "id": "2",
                "idTupa": "29",
                "formato": "2022200587",
                "nroTramite": "15343531624",
                "expediente": "15343531624",
                "solicitante": "Farma Industria SAC",
                "inicio": "25/11/2022 09:00am",
                "diasRestantes": "2 dias",
                "Estado": "Asignado",
                "Acciones": "",
            },
            {
                "id": "3",
                "idTupa": "29",
                "formato": "2022200587",
                "nroTramite": "15343531624",
                "expediente": "15343531624",
                "solicitante": "Farma Industria SAC",
                "inicio": "25/11/2022 09:00am",
                "diasRestantes": "2 dias",
                "Estado": "Pendiente",
                "Acciones": "",
            },
            {
                "id": "4",
                "idTupa": "29",
                "formato": "2022200587",
                "nroTramite": "15343531624",
                "expediente": "15343531624",
                "solicitante": "Farma Industria SAC",
                "inicio": "25/11/2022 09:00am",
                "diasRestantes": "2 dias",
                "Estado": "Pendiente",
                "Acciones": "",
            },
            {
                "id": "5",
                "idTupa": "29",
                "formato": "2022200587",
                "nroTramite": "15343531624",
                "expediente": "15343531624",
                "solicitante": "Farma Industria SAC",
                "inicio": "25/11/2022 09:00am",
                "diasRestantes": "2 dias",
                "Estado": "Pendiente",
                "Acciones": "",
            },
            {
                "id": "6",
                "idTupa": "29",
                "formato": "2022200587",
                "nroTramite": "15343531624",
                "expediente": "15343531624",
                "solicitante": "Farma Industria SAC",
                "inicio": "25/11/2022 09:00am",
                "diasRestantes": "2 dias",
                "Estado": "Asignado",
                "Acciones": "",
            },
            {
                "id": "7",
                "idTupa": "29",
                "formato": "2022200587",
                "nroTramite": "15343531624",
                "expediente": "15343531624",
                "solicitante": "Farma Industria SAC",
                "inicio": "25/11/2022 09:00am",
                "diasRestantes": "2 dias",
                "Estado": "Pendiente",
                "Acciones": "",
            },
            {
                "id": "8",
                "idTupa": "29",
                "formato": "2022200587",
                "nroTramite": "15343531624",
                "expediente": "15343531624",
                "solicitante": "Farma Industria SAC",
                "inicio": "25/11/2022 09:00am",
                "diasRestantes": "2 dias",
                "Estado": "Pendiente",
                "Acciones": "",
            },
            {
                "id": "9",
                "idTupa": "29",
                "formato": "2022200587",
                "nroTramite": "15343531624",
                "expediente": "15343531624",
                "solicitante": "Farma Industria SAC",
                "inicio": "25/11/2022 09:00am",
                "diasRestantes": "2 dias",
                "Estado": "Pendiente",
                "Acciones": "",
            },
            {
                "id": "10",
                "idTupa": "29",
                "formato": "2022200587",
                "nroTramite": "15343531624",
                "expediente": "15343531624",
                "solicitante": "Farma Industria SAC",
                "inicio": "25/11/2022 09:00am",
                "diasRestantes": "2 dias",
                "Estado": "Pendiente",
                "Acciones": "",
            }
        ]
    }
    console.log('respuesta',respuesta);
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

  public modos: any = [
    { 
      id: 1,
      text: 'Vista Lista',
    },
    { 
      id:2,
      text: 'Vista Detalle',
    },
  ]

  public estados: any = [
    { 
      id: 1,
      text: 'Estado Gestion de la evaluacion VUCE 2.0',
    },
    { 
      id:2,
      text: 'Estado Gestion de la evaluacion VUCE 2.0',
    },
    { 
      id:3,
      text: 'Estado Gestion de la evaluacion VUCE 2.0',
    },
  ]

}
