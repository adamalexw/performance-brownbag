import { Component } from '@angular/core';
import { DataService } from '@performance-brownbag/data-access';

@Component({
  selector: 'performance-brownbag-lazy-complex-component',
  templateUrl: './lazy-complex-component.component.html',
  styleUrls: ['./lazy-complex-component.component.scss']
})
export class LazyComplexComponentComponent {
  constructor(public readonly dataService: DataService) {}
}
