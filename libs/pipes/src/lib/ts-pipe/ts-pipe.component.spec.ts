import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsPipeComponent } from './ts-pipe.component';

describe('TsPipeComponent', () => {
  let component: TsPipeComponent;
  let fixture: ComponentFixture<TsPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TsPipeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
