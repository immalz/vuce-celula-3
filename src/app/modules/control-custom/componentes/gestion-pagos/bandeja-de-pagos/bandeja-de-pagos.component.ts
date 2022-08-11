import { MatDialog } from '@angular/material/dialog';
import { TablePaging, DatasourceResult, TableDataSource, DatasourceParameters, TableOptions, TableColumn } from 'projects/vuce2-lib-custom/src/public-api';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable, from as fromPromise } from 'rxjs';
import { ModalRegistroComponent } from '../modal-registro/modal-registro.component';

@Component({
  selector: 'app-bandeja-de-pagos',
  templateUrl: './bandeja-de-pagos.component.html',
  styleUrls: ['./bandeja-de-pagos.component.scss']
})
export class BandejaDePagosComponent implements OnInit {

  breadCrumbs = [
    {
      id: 3,
      texto: 'Pagos',
      url: '#',
      selected: false
    },
    {
      id: 4,
      texto: 'Bandeja de Pagos',
      url: '#',
      selected: true
    }
  ]
  formFilter: FormGroup;
  showMoreFilter: boolean = false;


  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.crearFormGroup()
  }

  openModal(row): void {
    const dialogRef = this.dialog.open(ModalRegistroComponent, 
      {
        width: '800px',
        data: row
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`${result}`);
    });
  }

  crearFormGroup(): void {
    this.formFilter = new FormGroup({
      formato: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      prioridad: new FormControl(''), 
      diasRestantes: new FormControl(''), 
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

  get formato() {
    return this.formFilter.controls['formato'];
  }
  get estado() {
    return this.formFilter.controls['estado'];
  }
  get fecha() {
    return this.formFilter.controls['fecha'];
  }
  get prioridad() {
    return this.formFilter.controls['prioridad'];
  }
  get diasRestantes() {
    return this.formFilter.controls['diasRestantes'];
  }
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

  public options: TableOptions = {
    className: '',//['table-striped'],
    language: "es",
    showRefresh: false,
  };

  public datasource: TableDataSource = (request: DatasourceParameters): Observable<DatasourceResult> => {
  console.log('request',request);
  return this.contentGuia();
  }

  public paging: TablePaging = {
    itemsPerPage: 10,
    itemsPerPageOptions: [5, 10, 25, 50, 100],
    itemsPerRefresh: 10,
    maxSize: 5,
    showPaging: true,
    showItemsPerPage: false
  }

  public columns: TableColumn[] = [
    { 
        title: 'Procedimiento',
        name: 'procedimiento', 
    },
    { 
        title: 'Nro Tramite',
        name: 'nroTramite', 
    },
    { 
        title: 'Monto Pagado',
        name: 'monto', 
    },
    { 
        title: 'Razon Social',
        name: 'razonSocial', 
    },
    { 
        title: 'Orden de Pago',
        name: 'orden', 
    },
    { 
        title: 'Estado',
        name: 'estado', 
    },
    { 
        title: 'Acciones',
        name: 'acciones', 
    },
  ];

  contentGuia(){
    return fromPromise( new Promise<DatasourceResult>(
      (resolve)=>{
        const respuesta = {
          recordsTotal: 10,
          recordsFiltered: 10,
          data: [
            {
                "id": "1",
                "procedimiento": "Autorizacion de Servicio de Importación",
                "nroTramite": "12345678",
                "monto": "1500.00",
                "razonSocial": "Foresesa S.A.C",
                "orden": "12345678",
                "estado": "Pagado",
                "Acciones": "",
            },
            {
              "id": "2",
              "procedimiento": "Autorizacion de Servicio de Importación",
              "nroTramite": "12345678",
              "monto": "1500.00",
              "razonSocial": "Foresesa S.A.C",
              "orden": "12345678",
              "estado": "Pendiente",
              "Acciones": "",
          },
          {
            "id": "3",
            "procedimiento": "Autorizacion de Servicio de Importación",
            "nroTramite": "12345678",
            "monto": "1500.00",
            "razonSocial": "Foresesa S.A.C",
            "orden": "12345678",
            "estado": "Pendiente",
            "Acciones": "",
          },
          {
            "id": "4",
            "procedimiento": "Autorizacion de Servicio de Importación",
            "nroTramite": "12345678",
            "monto": "1500.00",
            "razonSocial": "Foresesa S.A.C",
            "orden": "12345678",
            "estado": "Pagado",
            "Acciones": "",
                },
                {
                  "id": "5",
                  "procedimiento": "Autorizacion de Servicio de Importación",
                  "nroTramite": "12345678",
                  "monto": "1500.00",
                  "razonSocial": "Foresesa S.A.C",
                  "orden": "12345678",
                  "estado": "Pendiente",
                  "Acciones": "",
              },
              {
                "id": "6",
                "procedimiento": "Autorizacion de Servicio de Importación",
                "nroTramite": "12345678",
                "monto": "1500.00",
                "razonSocial": "Foresesa S.A.C",
                "orden": "12345678",
                "estado": "Pendiente",
                "Acciones": "",
            },
            {
              "id": "6",
              "procedimiento": "Autorizacion de Servicio de Importación",
              "nroTramite": "12345678",
              "monto": "1500.00",
              "razonSocial": "Foresesa S.A.C",
              "orden": "12345678",
              "estado": "Pagado",
              "Acciones": "",
          },
          {
            "id": "7",
            "procedimiento": "Autorizacion de Servicio de Importación",
            "nroTramite": "12345678",
            "monto": "1500.00",
            "razonSocial": "Foresesa S.A.C",
            "orden": "12345678",
            "estado": "Pagado",
            "Acciones": "",
          },
          {
            "id": "8",
            "procedimiento": "Autorizacion de Servicio de Importación",
            "nroTramite": "12345678",
            "monto": "1500.00",
            "razonSocial": "Foresesa S.A.C",
            "orden": "12345678",
            "estado": "Pagado",
            "Acciones": "",
          },
        ]
    }
    resolve(respuesta);
    }));
  }


}
