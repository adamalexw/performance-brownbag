import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithTrackByComponent } from './with-track-by.component';

describe('WithTrackByComponent', () => {
  let component: WithTrackByComponent;
  let fixture: ComponentFixture<WithTrackByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithTrackByComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithTrackByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
