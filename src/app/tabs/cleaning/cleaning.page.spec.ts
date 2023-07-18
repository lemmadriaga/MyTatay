import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CleaningPage } from './cleaning.page';

describe('CleaningPage', () => {
  let component: CleaningPage;
  let fixture: ComponentFixture<CleaningPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CleaningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
