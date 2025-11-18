import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncontraNosPage } from './encontra-nos.page';

describe('EncontraNosPage', () => {
  let component: EncontraNosPage;
  let fixture: ComponentFixture<EncontraNosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EncontraNosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
