import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSnapShareComponent } from './single-snap-share.component';

describe('SingleSnapShareComponent', () => {
  let component: SingleSnapShareComponent;
  let fixture: ComponentFixture<SingleSnapShareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleSnapShareComponent]
    });
    fixture = TestBed.createComponent(SingleSnapShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
