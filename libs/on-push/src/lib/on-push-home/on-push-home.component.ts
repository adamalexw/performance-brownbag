import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'performance-brownbag-on-push-home',
  templateUrl: './on-push-home.component.html',
  styleUrls: ['./on-push-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushHomeComponent {}
