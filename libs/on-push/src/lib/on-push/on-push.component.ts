import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'performance-brownbag-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushComponent {}
