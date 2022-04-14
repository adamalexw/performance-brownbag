import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'performance-brownbag-lazy-component',
  templateUrl: './lazy-component.component.html',
  styleUrls: ['./lazy-component.component.scss'],
})
export class LazyComponentComponent {
  @ViewChild('onDemandTemplate', { read: ViewContainerRef })
  loadHost!: ViewContainerRef;

  data = 'input data';

  async loadComponent() {
    this.loadHost.clear();

    const { OnDemandComponent } = await import("../lazy-simple-component/lazy-simple-component.component");

    const componentRef = this.loadHost.createComponent(OnDemandComponent);
    componentRef.instance.data = this.data;

    componentRef.instance.output.pipe(tap(console.log)).subscribe();
  }
}
