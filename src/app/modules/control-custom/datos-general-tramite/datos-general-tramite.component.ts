import { MatDialog } from '@angular/material/dialog';
import { ModalEvaluacionTramiteComponent } from './../componentes/modales/modal-evaluacion-tramite/modal-evaluacion-tramite.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-general-tramite',
  templateUrl: './datos-general-tramite.component.html',
  styleUrls: ['./datos-general-tramite.component.scss']
})
export class DatosGeneralTramiteComponent implements OnInit {


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
    this.router.navigate([`/datos-generales`])
  }

  goToDetail(): void {
    const dialogRef = this.dialog.open(ModalEvaluacionTramiteComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result) {
      this.router.navigate(['/segunda-opinion']);
      }
    });
  }

  return(): any {
    this.router.navigate([`/evaluacion`])
  }

  changeTab(tab): any {
    const caption = this.tabs.find(element => element.caption === tab);

    this.router.navigate([`/datos-generales/${caption.route}`])
  }

}
