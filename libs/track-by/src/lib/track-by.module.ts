import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TrackByHomeComponent } from './track-by-home/track-by-home.component';
import { NoTrackByComponent } from './no-track-by/no-track-by.component';
import { WithTrackByComponent } from './with-track-by/with-track-by.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { FormsModule } from '@angular/forms';
import { NoTrackByMutationComponent } from './no-track-by-mutation/no-track-by-mutation.component';
import { WithTrackByMutationComponent } from './with-track-by-mutation/with-track-by-mutation.component';
import { SharedModule } from '@performance-brownbag/shared';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TrackByHomeComponent,
        children: [
          {
            path: '',
            redirectTo: 'no-track-by-mutation',
          },
          {
            path: 'no-track-by',
            component: NoTrackByComponent,
          },
          {
            path: 'with-track-by',
            component: WithTrackByComponent,
          },
          {
            path: 'no-track-by-mutation',
            component: NoTrackByMutationComponent,
          },
          {
            path: 'with-track-by-mutation',
            component: WithTrackByMutationComponent,
          },
        ],
      },
    ]),
    FormsModule,
    SharedModule
  ],
  declarations: [
    TrackByHomeComponent,
    NoTrackByComponent,
    WithTrackByComponent,
    AddTeamComponent,
    NoTrackByMutationComponent,
    WithTrackByMutationComponent,
  ],
})
export class TrackByModule {}
