import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PainterPage } from './painter.page';

describe('PainterPage', () => {
  let component: PainterPage;
  let fixture: ComponentFixture<PainterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PainterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
