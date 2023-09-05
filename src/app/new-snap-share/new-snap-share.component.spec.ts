import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSnapShareComponent } from './new-snap-share.component';

describe('NewSnapShareComponent', () => {
  let component: NewSnapShareComponent;
  let fixture: ComponentFixture<NewSnapShareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSnapShareComponent]
    });
    fixture = TestBed.createComponent(NewSnapShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
