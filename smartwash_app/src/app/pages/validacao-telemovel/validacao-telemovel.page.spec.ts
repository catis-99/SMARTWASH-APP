import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidacaoTelemovelPage } from './validacao-telemovel.page';

describe('ValidacaoTelemovelPage', () => {
  let component: ValidacaoTelemovelPage;
  let fixture: ComponentFixture<ValidacaoTelemovelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacaoTelemovelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
