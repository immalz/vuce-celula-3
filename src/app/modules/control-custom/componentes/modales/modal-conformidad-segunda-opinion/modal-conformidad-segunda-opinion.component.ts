import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-conformidad-segunda-opinion',
  templateUrl: './modal-conformidad-segunda-opinion.component.html',
  styleUrls: ['./modal-conformidad-segunda-opinion.component.scss']
})
export class ModalConformidadSegundaOpinionComponent implements OnInit {

  modalForm;

  constructor() { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  close(): any {

  }

  navigate(): any {
    
  }
  
  crearFormulario(){
    this.modalForm = new FormGroup({
      conformidad: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required)
    })
  }


  get conformidad(){
      return this.modalForm.get('conformidad');
  }
  get mensaje(){
      return this.modalForm.get('mensaje');
  }

  
  public items: any = [
    { 
      id: 1,
      text: 'Pendiente de Revisión (Defecto)',
    },
    { 
      id:2,
      text: 'Oservado',
    },
    { 
      id:3,
      text: 'Aprobado',
    },
  ]


}
