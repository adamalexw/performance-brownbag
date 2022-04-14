import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadHomeComponent } from './lazy-load-home/lazy-load-home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LazyModulesComponent } from './lazy-modules/lazy-modules.component';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';
import { LazyImageComponent } from './lazy-image/lazy-image.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LazyLoadHomeComponent,
        children: [
          {
            path: '',
            redirectTo: 'components',
          },
          {
            path: 'components',
            component: LazyComponentComponent,
          },
          {
            path: 'modules',
            component: LazyModulesComponent,
          },
          {
            path: 'images',
            component: LazyImageComponent,
          },
        ],
      },
    ]),
    FormsModule,
  ],
  declarations: [LazyLoadHomeComponent, LazyModulesComponent, LazyComponentComponent, LazyImageComponent],
})
export class LazyLoadModule {}
