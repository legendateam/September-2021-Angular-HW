import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { CommentComponent } from '../comment/comment.component';
import { CommentDetailsComponent } from '../comment-details/comment-details.component';
import { CommentService } from '../../services';

@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommentsRoutingModule,
  ],
  providers: [
    CommentService,
  ]
})

export class CommentsModule { }
