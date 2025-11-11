import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservadosPage } from './reservados.page';

describe('ReservadosPage', () => {
  let component: ReservadosPage;
  let fixture: ComponentFixture<ReservadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
