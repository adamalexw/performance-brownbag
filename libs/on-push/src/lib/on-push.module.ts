import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { OnPushHomeComponent } from './on-push-home/on-push-home.component';
import { OnPushComponent } from './on-push/on-push.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OnPushHomeComponent,
        children: [
          {
            path: '',
            redirectTo: 'default',
          },
          {
            path: 'default',
            component: DefaultComponent,
          },
          {
            path: 'on-push',
            component: OnPushComponent,
          },
        ],
      },
    ]),
  ],
  declarations: [DefaultComponent, OnPushHomeComponent, OnPushComponent],
})
export class OnPushModule {}
