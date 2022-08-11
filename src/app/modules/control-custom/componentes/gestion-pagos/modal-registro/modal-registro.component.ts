import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-registro',
  templateUrl: './modal-registro.component.html',
  styleUrls: ['./modal-registro.component.scss']
})
export class ModalRegistroComponent implements OnInit {

  form: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<ModalRegistroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(): void {
    console.log(this.data)
    this.crearFormGroup();
  }

  crearFormGroup() {
    this.form = new FormGroup({
      fecha: new FormControl(new Date(), Validators.required),
      modalidad: new FormControl('', Validators.required),
      motivo: new FormControl('', Validators.required),
      detalle: new FormControl('', Validators.required),
    });
  }

  cancelar() {
    this.dialogRef.close();
  }

  get fecha() {
    return this.form.controls['fecha'];
  }
  get modalidad() {
    return this.form.controls['modalidad'];
  }
  get motivo() {
    return this.form.controls['motivo'];
  }
  get detalle() {
    return this.form.controls['detalle'];
  }


  public modalidades = [
    {
      id: "1",
      text: 'Efectivo'
    },
    {
      id: "2",
      text: 'Transferencia'
    },
    {
      id: "3",
      text: 'Otro Trámite'
    }
  ]

  public motivos = [
    {
      id: "1",
      text: 'Elección de trámite incorrecto'
    },
    {
      id: "2",
      text: 'Desmintiendo de trámite iniciado'
    },
    {
      id: "3",
      text: 'Otro Trámite'
    }
  ]

}
