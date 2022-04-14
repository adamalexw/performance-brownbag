import { Component, EventEmitter, HostBinding, Output } from '@angular/core';

@Component({
  selector: 'performance-brownbag-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss'],
})
export class AddTeamComponent {
  @Output()
  addTeam = new EventEmitter<string>();

  @HostBinding('class') class = 'mb-3 flex items-center gap-2';

  team = 'Alpine';
}
