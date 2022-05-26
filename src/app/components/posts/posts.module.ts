import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostComponent } from '../post/post.component';
import { PostDetailsComponent } from '../post-details/post-details.component';
import { PostService } from '../../services';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostsRoutingModule,
  ],
  providers: [
    PostService,
  ],
})
export class PostsModule { }
