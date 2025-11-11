import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacaoInicioprogramaPage } from './confirmacao-inicioprograma.page';

describe('ConfirmacaoInicioprogramaPage', () => {
  let component: ConfirmacaoInicioprogramaPage;
  let fixture: ComponentFixture<ConfirmacaoInicioprogramaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacaoInicioprogramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
