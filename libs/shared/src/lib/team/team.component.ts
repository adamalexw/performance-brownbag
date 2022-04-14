import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { F1Team } from '@performance-brownbag/data-access';

@Component({
  selector: 'performance-brownbag-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent {
  @Input()
  team: F1Team | null | undefined = undefined;

  @Input()
  inbuiltPipes = true;

  @HostBinding('class') class = 'flex items-center gap-2';
}
