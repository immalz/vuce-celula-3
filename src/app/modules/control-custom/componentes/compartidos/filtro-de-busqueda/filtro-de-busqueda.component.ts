import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-de-busqueda',
  templateUrl: './filtro-de-busqueda.component.html',
  styleUrls: ['./filtro-de-busqueda.component.scss']
})
export class FiltroDeBusquedaComponent implements OnInit {

  formFilter: FormGroup
  showMoreFilter: boolean = false;
  constructor() { }

  ngOnInit() {
    this.crearFormGroup()
  }

  crearFormGroup(): void {
    this.formFilter = new FormGroup({
      formato: new FormControl('', Validators.compose([Validators.required])),
      estado: new FormControl('',Validators.compose([Validators.required])),
      fecha: new FormControl('', Validators.compose([Validators.required])),
      prioridad: new FormControl('', Validators.compose([Validators.required])), 
      diasRestantes: new FormControl('',Validators.compose([Validators.required])),
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
