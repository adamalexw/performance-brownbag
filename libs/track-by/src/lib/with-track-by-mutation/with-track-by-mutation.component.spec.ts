import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithTrackByMutationComponent } from './with-track-by-mutation.component';

describe('WithTrackByMutationComponent', () => {
  let component: WithTrackByMutationComponent;
  let fixture: ComponentFixture<WithTrackByMutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithTrackByMutationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithTrackByMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
