import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInformesTecnicosVistaPreviaComponent } from './modal-informes-tecnicos-vista-previa.component';

describe('ModalInformesTecnicosVistaPreviaComponent', () => {
  let component: ModalInformesTecnicosVistaPreviaComponent;
  let fixture: ComponentFixture<ModalInformesTecnicosVistaPreviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInformesTecnicosVistaPreviaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInformesTecnicosVistaPreviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
