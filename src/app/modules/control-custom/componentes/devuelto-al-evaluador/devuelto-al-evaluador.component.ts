import { ModalDatosDeTramiteComponent } from './../modales/modal-datos-de-tramite/modal-datos-de-tramite.component';
import { MatDialog } from '@angular/material/dialog';
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
  selector: 'app-devuelto-al-evaluador',
  templateUrl: './devuelto-al-evaluador.component.html',
  styleUrls: ['./devuelto-al-evaluador.component.scss']
})
export class DevueltoAlEvaluadorComponent implements OnInit {

  formFilter: FormGroup;
  showMoreFilter: boolean = false;

  ngOnInit() {
  }

  breadCrumbs = [
  {
    id: 2,
    texto: 'Tramites',
    url: '#',
    selected: false
  },
  {
    id: 3,
    texto: 'Trámites Devueltas al Evaluador',
    url: '#',
    selected: true
  }]

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }


  changeTab(e): any {

  }

  tabs: any[] = [
    { caption: 'Tramites Regulares', disabled: false, route: '' },
    { caption: 'Recursos Administrativos', disabled: false, route: 'informes' },
  ];

  handlerRefresh(e){
    if(e){
        console.log('handlerRefresh',e);
    }
  }

  goToDetail(row: any): void {
    const dialogRef = this.dialog.open(ModalDatosDeTramiteComponent, {
      width: '450px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result) {
      this.router.navigate(['/datos-generales']);
      }
    });
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
                "Estado": "Trámites en Subsanación",
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
                "Estado": "Trámites en Subsanación",
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
                "Estado": "Trámites en Subsanación",
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
                "Estado": "Trámite en proceso de evaluación",
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
                "Estado": "Trámite en proceso de inspección y finalizada",
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
                "Estado": "Trámite en proceso de evaluación",
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
                "Estado": "Trámite en proceso de evaluación",
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
                "Estado": "Trámite con evaluación finalizada",
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
                "Estado": "Tramite con correción de documentos",
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
                "Estado": "Trámite con evaluación finalizada",
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

}
