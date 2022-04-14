import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@performance-brownbag/shared';
import { FunctionsInTemplatesComponent } from './functions-in-templates/functions-in-templates.component';
import { PipesHomeComponent } from './pipes-home/pipes-home.component';
import { TemplatePipeComponent } from './template-pipe/template-pipe.component';
import { TsPipeComponent } from './ts-pipe/ts-pipe.component';
import { LoashPipeComponent } from './loash-pipe/loash-pipe.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PipesHomeComponent,
        children: [
          {
            path: '',
            redirectTo: 'functions-in-templates',
          },
          {
            path: 'functions-in-templates',
            component: FunctionsInTemplatesComponent,
          },
          {
            path: 'template-pipe',
            component: TemplatePipeComponent,
          },
          {
            path: 'ts-pipe',
            component: TsPipeComponent,
          },
          {
            path: 'lodash-pipe',
            component: LoashPipeComponent,
          },
        ],
      },
    ]),
    SharedModule,
  ],
  declarations: [
    FunctionsInTemplatesComponent,
    TemplatePipeComponent,
    TsPipeComponent,
    PipesHomeComponent,
    LoashPipeComponent,
  ],
})
export class PipesModule {}
