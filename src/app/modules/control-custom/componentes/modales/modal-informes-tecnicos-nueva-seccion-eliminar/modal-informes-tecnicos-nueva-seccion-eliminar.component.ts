import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-informes-tecnicos-nueva-seccion-eliminar',
  templateUrl: './modal-informes-tecnicos-nueva-seccion-eliminar.component.html',
  styleUrls: ['./modal-informes-tecnicos-nueva-seccion-eliminar.component.scss']
})
export class ModalInformesTecnicosNuevaSeccionEliminarComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalInformesTecnicosNuevaSeccionEliminarComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
