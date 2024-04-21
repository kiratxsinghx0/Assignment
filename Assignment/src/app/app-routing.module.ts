import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  { path: 'my-space', loadChildren: () => import('./my-space/my-space.module').then(m => m.MySpaceModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'live', loadChildren: () => import('./live/live.module').then(m => m.LiveModule) },
  { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
  { path: 'videos', loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' } ,// Default route,
  {path : "**" ,  redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
