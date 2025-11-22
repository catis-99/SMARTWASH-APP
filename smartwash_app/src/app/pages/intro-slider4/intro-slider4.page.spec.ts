import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Slider4Page } from './intro-slider4.page';

describe('Slider4Page', () => {
    let component: Slider4Page;
    let fixture: ComponentFixture<Slider4Page>; beforeEach(() => {
        fixture = TestBed.createComponent(Slider4Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
