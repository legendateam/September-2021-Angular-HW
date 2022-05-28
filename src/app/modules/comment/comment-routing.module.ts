import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommentsComponent} from "./components/comments/comments.component";
import {CommentsResolver} from "./services/resolvers/comments.resolver";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentResolver} from "./services/resolvers/comment.resolver";
import {CommentGuard} from "./services/guards/comment.guard";
import {CommentsGuard} from "./services/guards/comments.guard";

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    resolve: { commentsData: CommentsResolver },
    canActivate: [CommentsGuard],
    children: [
      { path: ':id', component: CommentDetailsComponent, resolve: { commentDetailsData: CommentResolver }, canDeactivate: [CommentGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
