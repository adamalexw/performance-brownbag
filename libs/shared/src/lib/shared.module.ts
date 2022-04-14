import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { LogoPipe } from './logo.pipe';
import { LogoLodashPipe } from './logo-lodash.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TeamComponent, LogoPipe, LogoLodashPipe],
  exports: [TeamComponent],
  providers: [LogoPipe]
})
export class SharedModule {}
