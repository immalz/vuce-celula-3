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
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {

 
  formFilter: FormGroup;
  showPreview: boolean = false;
  breadCrumbs = [
  {
    id: 2,
    texto: 'Proceso de Evaluación',
    url: '#',
    selected: false
  },
  {
    id: 3,
    texto: 'Resultado de Evaluación',
    url: '#',
    selected: true
  },
]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.navigate([`/resultados`])
  }


  handlerChange(e: any) {
    console.log('e >>', e);
  }

  handlerRefresh(e){
    if(e){
        console.log('handlerRefresh',e);
    }
  }


  tabs: any[] = [
    { caption: 'Por Sección', disabled: false, route: '' },
    { caption: 'Por Campo', disabled: false, route: 'campo' },
    { caption: 'Normativo', disabled: false, route: 'normativo' },
  ];


  public options: TableOptions = {
    className: '',//['table-striped'],
    language: "es",
    showRefresh: false,
  };


  changeTab(tab): any {
    const caption = this.tabs.find(element => element.caption === tab);
    this.router.navigate([`/resultados/${caption.route}`])
  }

  selectMode(e: any): void {
    console.log(e);
    e === 2 ? this.showPreview = true : this.showPreview = false;
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


}
