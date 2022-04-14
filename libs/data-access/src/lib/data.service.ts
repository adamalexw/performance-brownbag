import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { F1Team, TEAMS_DATA } from './data';
import { orderBy } from 'lodash-es';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private teamData = TEAMS_DATA;

  getTeams(): Observable<F1Team[]> {
    return of(this.teamData);
  }

  addTeam(team: F1Team): Observable<F1Team[]> {
    this.teamData.push(team);
    return of(this.teamData);
  }

  removeTeam(team: string): Observable<F1Team[]> {
    this.teamData = this.teamData.filter(t => t.name !== team);
    return of(this.teamData);
  }

  getTeamsInOrder(): Observable<F1Team[]> {
    return of(this.teamData).pipe(map((d) => orderBy(d, 'name', 'asc')));
  }
}
