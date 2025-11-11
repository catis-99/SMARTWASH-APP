import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelecaoProgramaPage } from './selecao-programa.page';

describe('SelecaoProgramaPage', () => {
  let component: SelecaoProgramaPage;
  let fixture: ComponentFixture<SelecaoProgramaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoProgramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
