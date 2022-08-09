import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-borrador-informe',
  templateUrl: './borrador-informe.component.html',
  styleUrls: ['./borrador-informe.component.scss']
})
export class BorradorInformeComponent implements OnInit {

  breadCrumbs = [
    {
      id: 2,
      texto: '...',
      url: '#',
      selected: false
    },
    {
      id: 3,
      texto: 'Proceso de Evaluación',
      url: '#',
      selected: false
    },
    {
      id: 4,
      texto: 'Informe Técnico',
      url: '#',
      selected: true
    }
  ]

  correlativoAutomatico: boolean = false;
  
  tabs: any[] = [
    { caption: 'Registro', disabled: false, route: '' },
    { caption: 'Informe', disabled: false, route: 'informe' },
    { caption: 'Detalles', disabled: false, route: 'detalles' },
  ];
  formFilter: FormGroup;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.crearFormGroup();
  }

  crearFormGroup(): void {
    this.formFilter = new FormGroup({
      modos: new FormControl(''), 
    })
  }

  slideToggle(e): any {
    this.correlativoAutomatico = !this.correlativoAutomatico
  }

  changeTab(tab): any {
    const caption = this.tabs.find(element => element.caption === tab);
    this.router.navigate([`/borrador/${caption.route}`])
  }

  
  selectMode(e: any): void {
    console.log(e);
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

  get modo() {
    return this.formFilter.controls['modos'];
  }

}
