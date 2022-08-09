import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss']
})
export class SeccionComponent implements OnInit {

  panelOpenState = false;

  tabs: any[] = [1,2,3];

  constructor() { }

  ngOnInit(): void {
  }

}
