import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelecaoLavagemPage } from './selecao-lavagem.page';

describe('SelecaoLavagemPage', () => {
  let component: SelecaoLavagemPage;
  let fixture: ComponentFixture<SelecaoLavagemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoLavagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
