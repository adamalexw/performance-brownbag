import { ChangeDetectionStrategy, Component } from '@angular/core';
import { F1Team, TEAMS_DATA } from '@performance-brownbag/data-access';

@Component({
  selector: 'performance-brownbag-with-track-by-mutation',
  templateUrl: './with-track-by-mutation.component.html',
  styleUrls: ['./with-track-by-mutation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithTrackByMutationComponent {
  teams: F1Team[];

  constructor() {
    this.teams = TEAMS_DATA;
  }

  onAddTeam(team: string) {
    this.teams.push({
      name: team,
      logo: `https://www.formula1.com/content/dam/fom-website/teams/2022/${team
        .toLowerCase()
        .replace(/ /g, '-')}-logo.png.transform/2col/image.png`,
    });
  }

  remove(team: string) {
    this.teams = this.teams.filter((t) => t.name !== team);
  }

  refresh() {
    this.teams = [
      {
        name: 'Mercedes',
        logo: 'https://www.formula1.com/content/dam/fom-website/teams/2022/mercedes-logo.png.transform/2col/image.png',
      },
      {
        name: 'Ferrari',
        logo: 'https://www.formula1.com/content/dam/fom-website/teams/2022/ferrari-logo.png.transform/2col/image.png',
      },
      {
        name: 'Red Bull Racing',
        logo: 'https://www.formula1.com/content/dam/fom-website/teams/2022/red-bull-racing-logo.png.transform/2col/image.png',
      },
      {
        name: 'Mclaren',
        logo: 'https://www.formula1.com/content/dam/fom-website/teams/2022/mclaren-logo.png.transform/2col/image.png',
      }];
  }

  trackByFn(index: number): number {
    return index;
  }
}
