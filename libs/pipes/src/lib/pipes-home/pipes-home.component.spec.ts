import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesHomeComponent } from './pipes-home.component';

describe('PipesHomeComponent', () => {
  let component: PipesHomeComponent;
  let fixture: ComponentFixture<PipesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipesHomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
