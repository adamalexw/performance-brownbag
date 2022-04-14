import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePipeComponent } from './template-pipe.component';

describe('TemplatePipeComponent', () => {
  let component: TemplatePipeComponent;
  let fixture: ComponentFixture<TemplatePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplatePipeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
