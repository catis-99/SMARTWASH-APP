import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmaReservaPage } from './confirma-reserva.page';

describe('ConfirmaReservaPage', () => {
  let component: ConfirmaReservaPage;
  let fixture: ComponentFixture<ConfirmaReservaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmaReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
