import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-bandeja-de-pagos-entidad-descarga',
  templateUrl: './modal-bandeja-de-pagos-entidad-descarga.component.html',
  styleUrls: ['./modal-bandeja-de-pagos-entidad-descarga.component.scss']
})
export class ModalBandejaDePagosEntidadDescargaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalBandejaDePagosEntidadDescargaComponent>,
    private fb: FormBuilder,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
