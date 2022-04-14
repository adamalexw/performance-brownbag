import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsInTemplatesComponent } from './functions-in-templates.component';

describe('FunctionsInTemplatesComponent', () => {
  let component: FunctionsInTemplatesComponent;
  let fixture: ComponentFixture<FunctionsInTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunctionsInTemplatesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionsInTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
