import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackByHomeComponent } from './track-by-home.component';

describe('TrackByHomeComponent', () => {
  let component: TrackByHomeComponent;
  let fixture: ComponentFixture<TrackByHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackByHomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackByHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
