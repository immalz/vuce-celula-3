import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInformesTecnicosPasarFirmarComponent } from './modal-informes-tecnicos-pasar-firmar.component';

describe('ModalInformesTecnicosPasarFirmarComponent', () => {
  let component: ModalInformesTecnicosPasarFirmarComponent;
  let fixture: ComponentFixture<ModalInformesTecnicosPasarFirmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInformesTecnicosPasarFirmarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInformesTecnicosPasarFirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
