import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'performance-brownbag-lazy-simple-component',
  templateUrl: './lazy-simple-component.component.html',
  styleUrls: ['./lazy-simple-component.component.scss']
})
export class OnDemandComponent {
  @Input()
  data: string | undefined;

  @Output()
  output = new EventEmitter<string>();

  onOutput() {
    this.output.emit(new Date().toISOString());
  }
}
