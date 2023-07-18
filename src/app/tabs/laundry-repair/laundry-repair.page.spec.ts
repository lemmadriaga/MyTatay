import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaundryRepairPage } from './laundry-repair.page';

describe('LaundryRepairPage', () => {
  let component: LaundryRepairPage;
  let fixture: ComponentFixture<LaundryRepairPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaundryRepairPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
