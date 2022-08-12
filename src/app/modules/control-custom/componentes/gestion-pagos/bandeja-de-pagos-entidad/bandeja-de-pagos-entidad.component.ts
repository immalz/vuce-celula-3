import { MatDialog } from '@angular/material/dialog';
import { TablePaging, DatasourceResult, TableDataSource, DatasourceParameters, TableOptions, TableColumn } from 'projects/vuce2-lib-custom/src/public-api';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable, from as fromPromise } from 'rxjs';
import { ModalRegistroComponent } from '../modal-registro/modal-registro.component';
import { ModalBandejaDePagosEntidadDescargaComponent } from '../../modales/modal-bandeja-de-pagos-entidad-descarga/modal-bandeja-de-pagos-entidad-descarga.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bandeja-de-pagos-entidad',
  templateUrl: './bandeja-de-pagos-entidad.component.html',
  styleUrls: ['./bandeja-de-pagos-entidad.component.scss']
})
export class BandejaDePagosEntidadComponent implements OnInit {

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

  private httpClient: HttpClient;
  constructor(private http: HttpClient,
    public dialog: MatDialog
  ) {
    this.httpClient = http;}

  ngOnInit(): void {
    this.crearFormGroup()
  }
  async convertRelativeUriToFile(filePath: string, fileName: string, mimeType: any) {
    mimeType = mimeType || `image/${filePath.split(".")[filePath.split(".").length - 1]}`;
    const imageUrl = await fetch(filePath);
    const buffer = await imageUrl.arrayBuffer();
    return new File([buffer], fileName, { type: mimeType });
}

  async descargar(row) {
    const file = await this.convertRelativeUriToFile('./assets/image/vuce-comprobante.png', 'comprobante','image/png');
    console.log(file);
    const fileURL = URL.createObjectURL(file);  
    window.open(fileURL, '_blank');
    this.openModal("Data");
  }
  openModal(row): void {
    const dialogRef = this.dialog.open(ModalBandejaDePagosEntidadDescargaComponent,
      {
        width: '550px',
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
  handlerRefresh(e) {
    if (e) {
      console.log('handlerRefresh', e);
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
      id: 2,
      text: 'Estado Gestion de la evaluacion VUCE 2.0',
    },
    {
      id: 3,
      text: 'Estado Gestion de la evaluacion VUCE 2.0',
    },
  ]

  public options: TableOptions = {
    className: '',//['table-striped'],
    language: "es",
    showRefresh: false,
  };

  public datasource: TableDataSource = (request: DatasourceParameters): Observable<DatasourceResult> => {
    console.log('request', request);
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
      title: 'Entidad',
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
      title: 'Nro de Orden de Pago',
      name: 'orden',
    },
    {
      title: 'Estado Orden de Pago',
      name: 'estado',
    },
    {
      title: 'Fecha Vigencia',
      name: 'fechaVigencia',
    },
    {
      title: 'Acciones',
      name: 'acciones',
    },
  ];

  contentGuia() {
    return fromPromise(new Promise<DatasourceResult>(
      (resolve) => {
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
              "fechaVigencia": "15/11/21 09:00am",
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
              "fechaVigencia": "15/11/21 09:00am",
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
              "fechaVigencia": "15/11/21 09:00am",
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
              "fechaVigencia": "15/11/21 09:00am",
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
              "fechaVigencia": "15/11/21 09:00am",
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
              "fechaVigencia": "15/11/21 09:00am",
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
              "fechaVigencia": "15/11/21 09:00am",
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
              "fechaVigencia": "15/11/21 09:00am",
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
              "fechaVigencia": "15/11/21 09:00am",
              "Acciones": "",
            },
          ]
        }
        resolve(respuesta);
      }));
  }


}
