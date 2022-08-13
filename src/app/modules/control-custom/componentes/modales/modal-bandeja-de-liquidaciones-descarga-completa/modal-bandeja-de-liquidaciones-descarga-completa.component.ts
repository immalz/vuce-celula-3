import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-bandeja-de-liquidaciones-descarga-completa',
  templateUrl: './modal-bandeja-de-liquidaciones-descarga-completa.component.html',
  styleUrls: ['./modal-bandeja-de-liquidaciones-descarga-completa.component.scss']
})
export class ModalBandejaDeLiquidacionesDescargaCompletaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalBandejaDeLiquidacionesDescargaCompletaComponent>,
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

