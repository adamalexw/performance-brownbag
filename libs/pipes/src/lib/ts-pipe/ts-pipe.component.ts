import { Component } from '@angular/core';
import { F1Team, TEAMS_DATA } from '@performance-brownbag/data-access';
import { LogoPipe } from '@performance-brownbag/shared';

@Component({
  selector: 'performance-brownbag-ts-pipe',
  templateUrl: './ts-pipe.component.html',
  styleUrls: ['./ts-pipe.component.scss'],
})
export class TsPipeComponent {
  teams = TEAMS_DATA;
  selectedTeam?: F1Team;

  constructor(private readonly logoPipe: LogoPipe) {}

  selectTeam(team: F1Team) {
    this.selectedTeam = { ...team, logo:  this.logoPipe.transform(team.name) };
  }
}
