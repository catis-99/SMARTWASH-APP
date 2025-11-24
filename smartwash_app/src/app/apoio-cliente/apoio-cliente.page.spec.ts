import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApoioClientePage } from './apoio-cliente.page';

describe('ApoioClientePage', () => {
  let component: ApoioClientePage;
  let fixture: ComponentFixture<ApoioClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoioClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
