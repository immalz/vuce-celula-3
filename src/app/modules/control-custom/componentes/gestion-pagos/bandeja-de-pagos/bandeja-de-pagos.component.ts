import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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


  constructor() { }

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

}
