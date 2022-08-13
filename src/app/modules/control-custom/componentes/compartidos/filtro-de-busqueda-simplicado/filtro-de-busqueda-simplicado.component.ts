import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-de-busqueda-simplicado',
  templateUrl: './filtro-de-busqueda-simplicado.component.html',
  styleUrls: ['./filtro-de-busqueda-simplicado.component.scss']
})
export class FiltroDeBusquedaSimplicadoComponent implements OnInit {

  formFilter: FormGroup

  constructor() { }

  ngOnInit() {
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

