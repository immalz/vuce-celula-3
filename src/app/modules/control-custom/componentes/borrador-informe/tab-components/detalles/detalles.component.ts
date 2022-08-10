import { TableDataSource } from 'projects/vuce2-lib-custom/src/public-api';
import { Observable, from as fromPromise } from 'rxjs';
import { DatasourceResult } from 'projects/vuce2-lib-custom/src/public-api';
import { DatasourceParameters } from 'projects/vuce2-lib-custom/src/public-api';
import { TableOptions } from 'projects/vuce2-lib-custom/src/public-api';
import { TablePaging } from 'projects/vuce2-lib-custom/src/public-api';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { TableColumn } from 'projects/vuce2-lib-custom/src/public-api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISelectItem } from 'projects/vuce2-custom/src/public-api';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  public options: TableOptions = {
    className: '',//['table-striped'],
    language: "es",
    showRefresh: false,
  };
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.CreateFirstForm();
  }
  CreateFirstForm(){
    this.form = this.fb.group({
      record:  new FormControl('1', Validators.required),
    })
  }
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
  contentGuia() {
    return fromPromise(new Promise<DatasourceResult>(
      (resolve) => {
        const respuesta = {
          recordsTotal: 10,
          recordsFiltered: 10,
          data: [
            {
              "id": "9",
              "descripcion": "Informe de Apelacion_2da_instancia.pdf",
              "tamano": "20kb",
              "formato": "PDF",
              "fecha": "30/12/2022 14:55",
            },
            {
              "id": "9",
              "descripcion": "Informe de Apelacion_2da_instancia.pdf",
              "tamano": "20kb",
              "formato": "PDF",
              "fecha": "30/12/2022 14:55",
            },
            {
              "id": "9",
              "descripcion": "Informe de Apelacion_2da_instancia.pdf",
              "tamano": "20kb",
              "formato": "PDF",
              "fecha": "30/12/2022 14:55",
            },
          ]
        }
        console.log('respuesta', respuesta);
        resolve(respuesta);
      }));
  }
  public columns: TableColumn[] = [
    {
      title: 'Descripción',
      name: 'descripcion',
    },
    {
      title: 'Tamaño',
      name: 'tamano',
    },
    {
      title: 'Formato',
      name: 'formato',
    },
    {
      title: 'Fecha',
      name: 'fecha',
    },
    {
      title: 'Acción',
      name: 'accion',
    }
  ];
  records: ISelectItem[] = [
    {
      id: '1',
      text: 'Validar',
    },
    {
      id: '2',
      text: '--',
    },
    {
      id: '3',
      text: '--',
    },
  ];
  get record() {
    return this.form.controls['record'];
  }
  handlerRefresh(e) {
    if (e) {
      console.log('handlerRefresh', e);
    }
  }
  handlerChange(e: any) {
    console.log('e >>', e);
  }
}
