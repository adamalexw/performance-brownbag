import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTrackByMutationComponent } from './no-track-by-mutation.component';

describe('NoTrackByMutationComponent', () => {
  let component: NoTrackByMutationComponent;
  let fixture: ComponentFixture<NoTrackByMutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoTrackByMutationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoTrackByMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
