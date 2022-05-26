import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments.component';
import { CommentDetailsComponent } from '../comment-details/comment-details.component';
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    children: [
      { path: ':id', component: CommentDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsRoutingModule { }
