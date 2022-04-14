import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'performance-brownbag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('class') class = 'block p-4';
}
