import { Component, ChangeDetectionStrategy } from '@angular/core';
import { F1Team, TEAMS_DATA } from '@performance-brownbag/data-access';

@Component({
  selector: 'performance-brownbag-functions-in-templates',
  templateUrl: './functions-in-templates.component.html',
  styleUrls: ['./functions-in-templates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionsInTemplatesComponent {
  teams = TEAMS_DATA;
  selectedTeam?: F1Team;

  getLogo(team: string): string {
    console.log('get-function');
    return `https://www.formula1.com/content/dam/fom-website/teams/2022/${team.toLowerCase().replace(/ /g, '-')}-logo.png.transform/2col/image.png`;
  }

  selectTeam(team: F1Team) {
    this.selectedTeam = team;
  }
}
