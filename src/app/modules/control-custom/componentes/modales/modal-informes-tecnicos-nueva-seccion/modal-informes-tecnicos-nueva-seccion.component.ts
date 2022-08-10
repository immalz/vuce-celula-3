import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalInformesTecnicosNuevaSeccionEliminarComponent } from '../modal-informes-tecnicos-nueva-seccion-eliminar/modal-informes-tecnicos-nueva-seccion-eliminar.component';

@Component({
  selector: 'app-modal-informes-tecnicos-nueva-seccion',
  templateUrl: './modal-informes-tecnicos-nueva-seccion.component.html',
  styleUrls: ['./modal-informes-tecnicos-nueva-seccion.component.scss']
})
export class ModalInformesTecnicosNuevaSeccionComponent implements OnInit {
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ModalInformesTecnicosNuevaSeccionComponent>,
    private dialog: MatDialog,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.CreateFirstForm()
  }

  CreateFirstForm() {
    this.form = this.fb.group({
      disabled: new FormControl({ value: false, disabled: false }),
      titulo: new FormControl({ value: 'Antecedentes', disabled: false  }, Validators.required),
      detalle: new FormControl({ value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', disabled: false  }, Validators.required),
    })
    this.form.controls['disabled'].valueChanges.subscribe(
      (value) => {
        if (value) {
          this.form.controls['titulo'].disable();
          this.form.controls['detalle'].disable();
        }
        else { 
          this.form.controls['titulo'].enable();
          this.form.controls['detalle'].enable();
        }
      }
    )
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  openModal(): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(ModalInformesTecnicosNuevaSeccionEliminarComponent, {
      width: '550px',
      disableClose: true,
      hasBackdrop: true
    });
  }
  get titulo() {
    return this.form.controls['titulo'];
  }
  get disabled() {
    return this.form.controls['titulo'];
  }
  get detalle() {
    return this.form.controls['detalle'];
  }
}
