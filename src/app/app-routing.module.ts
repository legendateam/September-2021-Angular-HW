import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoyaoutComponent } from './components/loyaout/loyaout.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: LoyaoutComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./components/users/users.module').then(mod => mod.UsersModule),
      },
      {
        path: 'posts',
        loadChildren: () => import('./components/posts/posts.module').then(mod => mod.PostsModule),
      },
      {
        path: 'comments',
        loadChildren: () => import('./components/comments/comments.module').then(mod => mod.CommentsModule),
      },
    ],
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class AppRoutingModule {
}
