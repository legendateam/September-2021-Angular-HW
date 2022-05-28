import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostsComponent} from "./components/posts/posts.component";
import {PostResolver} from "./services/resolvers/post.resolver";
import {PostsResolver} from "./services/resolvers/posts.resolver";
import {PostGuard} from "./services/guards/post.guard";
import {PostDetailsComponent} from "./components/post-details/post-details.component";

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: { postsData: PostsResolver },
    children: [
      {
        path: ':id',
        component: PostDetailsComponent,
        resolve: { postData: PostResolver },
        canActivate: [PostGuard],
        canDeactivate: [PostGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
