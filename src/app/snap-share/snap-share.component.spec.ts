import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapShareComponent } from './snap-share.component';

describe('SnapShareComponent', () => {
  let component: SnapShareComponent;
  let fixture: ComponentFixture<SnapShareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnapShareComponent]
    });
    fixture = TestBed.createComponent(SnapShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
