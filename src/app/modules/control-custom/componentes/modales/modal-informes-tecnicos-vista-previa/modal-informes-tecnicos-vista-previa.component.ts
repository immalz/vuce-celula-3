import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalInformesTecnicosPasarFirmarComponent } from '../modal-informes-tecnicos-pasar-firmar/modal-informes-tecnicos-pasar-firmar.component';

@Component({
  selector: 'app-modal-informes-tecnicos-vista-previa',
  templateUrl: './modal-informes-tecnicos-vista-previa.component.html',
  styleUrls: ['./modal-informes-tecnicos-vista-previa.component.scss']
})
export class ModalInformesTecnicosVistaPreviaComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<ModalInformesTecnicosVistaPreviaComponent>,
    private dialog: MatDialog,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onClick(): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(ModalInformesTecnicosPasarFirmarComponent, {
      width: '550px',
      disableClose: true,
      hasBackdrop: true
    });
  }
}
