import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacaoReservaPage } from './confirmacao-reserva.page';

describe('ConfirmacaoReservaPage', () => {
  let component: ConfirmacaoReservaPage;
  let fixture: ComponentFixture<ConfirmacaoReservaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacaoReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
