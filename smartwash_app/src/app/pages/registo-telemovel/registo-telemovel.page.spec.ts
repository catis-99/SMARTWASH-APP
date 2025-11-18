import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistoTelemovelPage } from './registo-telemovel.page';

describe('RegistoTelemovelPage', () => {
  let component: RegistoTelemovelPage;
  let fixture: ComponentFixture<RegistoTelemovelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistoTelemovelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
