import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@performance-brownbag/shared';
import { LazyComplexComponentComponent } from './lazy-complex-component.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [LazyComplexComponentComponent],
})
export class LazyLoadModule {}
