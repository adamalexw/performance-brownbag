import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoashPipeComponent } from './loash-pipe.component';

describe('LoashPipeComponent', () => {
  let component: LoashPipeComponent;
  let fixture: ComponentFixture<LoashPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoashPipeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoashPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
