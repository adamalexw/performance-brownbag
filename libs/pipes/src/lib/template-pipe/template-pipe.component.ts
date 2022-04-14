import { ChangeDetectionStrategy, Component } from '@angular/core';
import { F1Team, TEAMS_DATA } from '@performance-brownbag/data-access';

@Component({
  selector: 'performance-brownbag-template-pipe',
  templateUrl: './template-pipe.component.html',
  styleUrls: ['./template-pipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplatePipeComponent {
  teams = TEAMS_DATA;

  selectedTeam?: F1Team;

  selectTeam(team: F1Team) {
    this.selectedTeam = team;
  }
}
