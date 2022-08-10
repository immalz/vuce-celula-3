import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subsanacion',
  templateUrl: './subsanacion.component.html',
  styleUrls: ['./subsanacion.component.scss']
})
export class SubsanacionComponent implements OnInit {

  imageAccordion = 'assets/image/accordion.svg';
  formFilter: FormGroup;
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
  constructor() { }

  ngOnInit(): void {
    this.crearFormGroup();
  }

  crearFormGroup(): void {
    this.formFilter = new FormGroup({
      modos: new FormControl(''), 
    })
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
