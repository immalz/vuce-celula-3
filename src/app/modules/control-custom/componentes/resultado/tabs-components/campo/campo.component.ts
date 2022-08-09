import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo',
  templateUrl: './campo.component.html',
  styleUrls: ['./campo.component.scss']
})
export class CampoComponent implements OnInit {

  constructor() { }
  imageAccordion = 'assets/image/accordion.svg';
  statusVisible: boolean = false;
  accordeon = [
    {
      title: 'Productos',
      content: []
    },
    {
      title: 'Guía de Transporte o Traslado',
      content: []
    },
    {
      title: 'Requisitos Adjuntos',
      content: []
    },
  ]

  ngOnInit(): void {
  }

}
