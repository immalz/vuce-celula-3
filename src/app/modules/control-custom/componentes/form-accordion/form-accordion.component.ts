import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-form-accordion',
  templateUrl: './form-accordion.component.html',
  styleUrls: ['./form-accordion.component.scss'],
})
export class FormAccordionComponent implements OnInit {
  tabs: any[] = [
    { text: 'En Evaluación', status: true },
    { text: 'Informe', status: false },
    { text: 'Por resolver', status: false },
    { text: 'Documento Resolutivo', status: false },
  ];

  imageAccordion = 'assets/image/accordion.svg';
  tabsRadius: any[] = [];

  constructor() {
    this.tabsRadius = [
      {
        id: '1',
        name: 'En Evaluación',
        active: false,
        completed: true,
      },
      {
        id: '2',
        name: 'Informe',
        active: true,
        completed: false,
      },
      {
        id: '3',
        name: 'Por Resolver',
        active: false,
        completed: false,
      },
      {
        id: '4',
        name: 'Documento Resolutivo',
        active: false,
        completed: false,
      },
    ];
  }

  ngOnInit(): void {}
}
