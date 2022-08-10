import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-informes-tecnicos-nueva-seccion',
  templateUrl: './modal-informes-tecnicos-nueva-seccion.component.html',
  styleUrls: ['./modal-informes-tecnicos-nueva-seccion.component.scss']
})
export class ModalInformesTecnicosNuevaSeccionComponent implements OnInit {
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ModalInformesTecnicosNuevaSeccionComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
    this.CreateFirstForm()
  }

  CreateFirstForm(){
    this.form= this.fb.group({
      titulo: new FormControl('Antecedentes', Validators.required),
      detalle: new FormControl('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', Validators.required),
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  get titulo() {
    return this.form.controls['titulo'];
  }
  get detalle() {
    return this.form.controls['detalle'];
  }
}
