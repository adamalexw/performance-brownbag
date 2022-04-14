import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService, F1Team } from '@performance-brownbag/data-access';
import { ReplaySubject, tap } from 'rxjs';

@Component({
  selector: 'performance-brownbag-with-track-by',
  templateUrl: './with-track-by.component.html',
  styleUrls: ['./with-track-by.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithTrackByComponent {
  private teamsSubject = new ReplaySubject<F1Team[]>()
  teams$ = this.teamsSubject.asObservable().pipe(tap(console.log));

  constructor(private readonly dataService: DataService) {
    this.dataService.getTeams().subscribe(teams => this.teamsSubject.next(teams));
  }

  onAddTeam(team: string) {
    this.dataService.addTeam(({ name: team, logo: `https://www.formula1.com/content/dam/fom-website/teams/2022/${team.toLowerCase().replace(/ /g, '-')}-logo.png.transform/2col/image.png` })).subscribe(t => this.teamsSubject.next(t));
  }

  remove(team: string) {
    this.dataService.removeTeam(team).subscribe(t => this.teamsSubject.next(t));
  }

  refresh() {
    this.dataService.getTeamsInOrder().subscribe(teams => this.teamsSubject.next(teams));
  }

  trackByFn(index: number): number {
    return index;
  }
}
