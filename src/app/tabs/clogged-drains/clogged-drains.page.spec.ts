import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloggedDrainsPage } from './clogged-drains.page';

describe('CloggedDrainsPage', () => {
  let component: CloggedDrainsPage;
  let fixture: ComponentFixture<CloggedDrainsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CloggedDrainsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
