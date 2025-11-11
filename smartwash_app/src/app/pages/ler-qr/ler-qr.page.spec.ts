import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LerQrPage } from './ler-qr.page';

describe('LerQrPage', () => {
  let component: LerQrPage;
  let fixture: ComponentFixture<LerQrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LerQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
