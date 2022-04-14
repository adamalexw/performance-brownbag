import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'performance-brownbag-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultComponent {}
