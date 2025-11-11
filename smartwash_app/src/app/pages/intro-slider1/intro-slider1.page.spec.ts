import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroSlider1Page } from './intro-slider1.page';

describe('IntroSlider1Page', () => {
  let component: IntroSlider1Page;
  let fixture: ComponentFixture<IntroSlider1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroSlider1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
