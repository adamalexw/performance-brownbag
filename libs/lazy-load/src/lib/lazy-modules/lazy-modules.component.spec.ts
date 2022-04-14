import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyModulesComponent } from './lazy-modules.component';

describe('LazyModulesComponent', () => {
  let component: LazyModulesComponent;
  let fixture: ComponentFixture<LazyModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyModulesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
