import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocaisFavoritosPage } from './locais-favoritos.page';

describe('LocaisFavoritosPage', () => {
  let component: LocaisFavoritosPage;
  let fixture: ComponentFixture<LocaisFavoritosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaisFavoritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
