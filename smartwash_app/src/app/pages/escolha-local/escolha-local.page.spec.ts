import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscolhaLocalPage } from './escolha-local.page';

describe('EscolhaLocalPage', () => {
  let component: EscolhaLocalPage;
  let fixture: ComponentFixture<EscolhaLocalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
