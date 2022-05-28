import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainLayoutsComponent} from "./layouts/main-layouts/main-layouts.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainLayoutsComponent, children: [
      { path: 'users', loadChildren: () => import('./modules/user/user.module').then(mod => mod.UserModule) },
      { path: 'posts', loadChildren: () => import('./modules/post/post.module').then(mod => mod.PostModule) },
      { path: 'comments', loadChildren: ()=> import('./modules/comment/comment.module').then(mod => mod.CommentModule) }
    ]
  },
  { path: '**', component: ErrorPageComponent }
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
