import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, RouterModule.forRoot([
    {
      path: 'pipes',
      loadChildren: () => import('@performance-brownbag/pipes').then((m) => m.PipesModule),
    },
    {
      path: 'track-by',
      loadChildren: () => import('@performance-brownbag/track-by').then((m) => m.TrackByModule),
    },
    {
      path: 'on-push',
      loadChildren: () => import('@performance-brownbag/on-push').then((m) => m.OnPushModule),
    },
    {
      path: 'lazy-load',
      loadChildren: () => import('@performance-brownbag/lazy-load').then((m) => m.LazyLoadModule),
    }]
  )],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
