import { Component, createNgModuleRef, Injector, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'performance-brownbag-lazy-modules',
  templateUrl: './lazy-modules.component.html',
  styleUrls: ['./lazy-modules.component.scss']
})
export class LazyModulesComponent {
  @ViewChild('onDemandTemplate', { read: ViewContainerRef })
  loadHost!: ViewContainerRef;

  constructor(private injector: Injector) {}

  async loadModule() {
    const { LazyLoadModule } = await import('../lazy-complex-component/lazy-load.module');
    const { LazyComplexComponentComponent } = await import('../lazy-complex-component/lazy-complex-component.component');
    const moduleRef = createNgModuleRef(LazyLoadModule, this.injector);

    this.loadHost.clear();
    const { instance } = this.loadHost.createComponent(LazyComplexComponentComponent, { ngModuleRef: moduleRef });
    console.log(instance.dataService);
  }
}
