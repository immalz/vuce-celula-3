import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-informes-tecnicos-pasar-firmar',
  templateUrl: './modal-informes-tecnicos-pasar-firmar.component.html',
  styleUrls: ['./modal-informes-tecnicos-pasar-firmar.component.scss']
})
export class ModalInformesTecnicosPasarFirmarComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalInformesTecnicosPasarFirmarComponent>,
    private fb: FormBuilder,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }
  goToDetail(): void {
    this.router.navigate(['/datos-generales']);
    this.dialogRef.close(false);
  }
}
