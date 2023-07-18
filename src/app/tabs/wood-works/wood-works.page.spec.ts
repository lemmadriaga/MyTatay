import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WoodWorksPage } from './wood-works.page';

describe('WoodWorksPage', () => {
  let component: WoodWorksPage;
  let fixture: ComponentFixture<WoodWorksPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WoodWorksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
