import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacaoPagamentoPage } from './confirmacao-pagamento.page';

describe('ConfirmacaoPagamentoPage', () => {
  let component: ConfirmacaoPagamentoPage;
  let fixture: ComponentFixture<ConfirmacaoPagamentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacaoPagamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
