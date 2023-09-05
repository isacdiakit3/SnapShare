import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapShareListeComponent } from './snap-share-liste.component';

describe('SnapShareListeComponent', () => {
  let component: SnapShareListeComponent;
  let fixture: ComponentFixture<SnapShareListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnapShareListeComponent]
    });
    fixture = TestBed.createComponent(SnapShareListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
