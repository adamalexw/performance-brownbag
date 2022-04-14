import { ChangeDetectionStrategy, Component } from '@angular/core';
import { F1Team, TEAMS_DATA } from '@performance-brownbag/data-access';

@Component({
  selector: 'performance-brownbag-loash-pipe',
  templateUrl: './loash-pipe.component.html',
  styleUrls: ['./loash-pipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoashPipeComponent {
  teams = TEAMS_DATA;

  selectedTeam?: F1Team;

  selectTeam(team: F1Team) {
    this.selectedTeam = team;
  }
}
