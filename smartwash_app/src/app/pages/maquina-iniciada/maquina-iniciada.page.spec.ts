import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaquinaIniciadaPage } from './maquina-iniciada.page';

describe('MaquinaIniciadaPage', () => {
  let component: MaquinaIniciadaPage;
  let fixture: ComponentFixture<MaquinaIniciadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaIniciadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
