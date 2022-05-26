import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostDetailsComponent } from '../post-details/post-details.component';
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      { path: ':id', component: PostDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule { }
