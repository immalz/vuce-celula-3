import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ISelectItem } from 'projects/vuce2-custom/src/public-api';
import { ModalInformesTecnicosVistaPreviaComponent } from '../../../modales/modal-informes-tecnicos-vista-previa/modal-informes-tecnicos-vista-previa.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;
  Estado = 'Aceptado';
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog) { }
  motivos: ISelectItem[] = [
    {
      id: '1',
      text: 'No cumple con los requisitos de trámite',
    },
    {
      id: '2',
      text: 'No cumple con el marco normativo',
    },
    {
      id: '3',
      text: 'Otros',
    },
  ];;
  ngOnInit(): void {
    this.CreateFirstForm();
  }
  CreateFirstForm() {
    this.form = this.fb.group({
      para: new FormControl('', Validators.required),
      referencia: new FormControl('', Validators.required),
      asunto: new FormControl('', Validators.required),
      motivo: new FormControl('', Validators.required),
      detalle: new FormControl('', Validators.required),
    });
  }
  get para() {
    return this.form.controls['para'];
  }
  get asunto() {
    return this.form.controls['asunto'];
  }
  get referencia() {
    return this.form.controls['referencia'];
  }
  get motivo() {
    return this.form.controls['motivo'];
  }
  get detalle() {
    return this.form.controls['detalle'];
  }

  handlerChange(e: any) {
    console.log('e >>', e);
  }
  openModalVistaPrevia(): void {
    const dialogRef = this.dialog.open(ModalInformesTecnicosVistaPreviaComponent, {
      width: 'calc(80vw - 200px)',
      disableClose: true,
      hasBackdrop: true,
      panelClass: 'dialog'
    });
  }
}
