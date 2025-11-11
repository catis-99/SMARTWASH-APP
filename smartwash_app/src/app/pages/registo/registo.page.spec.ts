import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistoPage } from './registo.page';

describe('RegistoPage', () => {
  let component: RegistoPage;
  let fixture: ComponentFixture<RegistoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
