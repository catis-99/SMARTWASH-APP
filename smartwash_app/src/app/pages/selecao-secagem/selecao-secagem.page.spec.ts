import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelecaoSecagemPage } from './selecao-secagem.page';

describe('SelecaoSecagemPage', () => {
  let component: SelecaoSecagemPage;
  let fixture: ComponentFixture<SelecaoSecagemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoSecagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
