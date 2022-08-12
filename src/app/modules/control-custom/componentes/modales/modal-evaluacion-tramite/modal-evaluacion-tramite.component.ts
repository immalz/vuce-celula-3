import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlService } from './../../form-control/form-control.service';
import { RadioButtonControl } from './../../../../../../../projects/vuce2-custom/src/lib/models/radio-button-control';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-evaluacion-tramite',
  templateUrl: './modal-evaluacion-tramite.component.html',
  styleUrls: ['./modal-evaluacion-tramite.component.scss']
})
export class ModalEvaluacionTramiteComponent implements OnInit {

  form: FormGroup;
  check: RadioButtonControl;

  constructor(
    public dialogRef: MatDialogRef<ModalEvaluacionTramiteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: FormControlService
  ) { }

  ngOnInit(): void {
    this.check = this.getCheckList();
    this.crearFormGroup();
  }

  crearFormGroup() {
    this.form = new FormGroup({
      check: new FormControl('', Validators.required),
    });
  }

  close(): void {
    this.dialogRef.close(false);
  }

  navigate(): void {
    this.dialogRef.close(true)
  }

  onEvent(e) {
    console.log(e)
  }

  get checks() {
    return this.form.controls['check'];
  }

  getCheckList() {
    let check: RadioButtonControl = {
      disabled: false,
      name: 'rubro',
      etiqueta: 'Rubro',
      controlType: 'radioButton',
      required: false,
      options: [
        {
          key: '1',
          value: 'Si',
          selected: false,
        },
        {
          key: '0',
          value: 'No',
          selected: false,
        },
      ],
    };
    return check;
  }
}
