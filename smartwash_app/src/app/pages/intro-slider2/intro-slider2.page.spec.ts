import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroSlider2Page } from './intro-slider2.page';

describe('IntroSlider2Page', () => {
  let component: IntroSlider2Page;
  let fixture: ComponentFixture<IntroSlider2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroSlider2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
