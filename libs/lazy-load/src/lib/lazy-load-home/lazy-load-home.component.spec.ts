import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadHomeComponent } from './lazy-load-home.component';

describe('LazyLoadHomeComponent', () => {
  let component: LazyLoadHomeComponent;
  let fixture: ComponentFixture<LazyLoadHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyLoadHomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
