import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CupoesPage } from './cupoes.page';

describe('CupoesPage', () => {
  let component: CupoesPage;
  let fixture: ComponentFixture<CupoesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CupoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
