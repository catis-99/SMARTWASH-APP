import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelecaoMaquinasPage } from './selecao-maquinas.page';

describe('SelecaoMaquinasPage', () => {
  let component: SelecaoMaquinasPage;
  let fixture: ComponentFixture<SelecaoMaquinasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoMaquinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
