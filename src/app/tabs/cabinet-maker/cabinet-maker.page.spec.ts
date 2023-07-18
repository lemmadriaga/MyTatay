import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CabinetMakerPage } from './cabinet-maker.page';

describe('CabinetMakerPage', () => {
  let component: CabinetMakerPage;
  let fixture: ComponentFixture<CabinetMakerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CabinetMakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
