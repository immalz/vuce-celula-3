import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-modal-datos-de-tramite',
  templateUrl: './modal-datos-de-tramite.component.html',
  styleUrls: ['./modal-datos-de-tramite.component.scss']
})
export class ModalDatosDeTramiteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalDatosDeTramiteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close(false);
  }

  navigate(): void {
    this.dialogRef.close(true)
  }

}
