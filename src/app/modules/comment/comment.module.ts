import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentComponent} from "./components/comment/comment.component";

@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ]
})
export class CommentModule { }
