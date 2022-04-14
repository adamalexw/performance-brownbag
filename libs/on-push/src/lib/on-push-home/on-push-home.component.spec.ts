import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushHomeComponent } from './on-push-home.component';

describe('OnPushHomeComponent', () => {
  let component: OnPushHomeComponent;
  let fixture: ComponentFixture<OnPushHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnPushHomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
