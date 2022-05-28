import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentComponent} from "./components/comment/comment.component";
import { HttpClientModule} from "@angular/common/http";
import {CommentService} from "./services/comment.service";
import {CommentGuard} from "./services/guards/comment.guard";
import {CommentsGuard} from "./services/guards/comments.guard";
import {CommentResolver} from "./services/resolvers/comment.resolver";
import {CommentsResolver} from "./services/resolvers/comments.resolver";

@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommentRoutingModule
  ],
  providers: [
    CommentService,
    CommentGuard,
    CommentsGuard,
    CommentResolver,
    CommentsResolver
  ]
})
export class CommentModule { }
