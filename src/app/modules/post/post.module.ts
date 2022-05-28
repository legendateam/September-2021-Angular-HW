import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import {PostResolver} from "./services/resolvers/post.resolver";
import {PostsResolver} from "./services/resolvers/posts.resolver";
import {PostGuard} from "./services/guards/post.guard";
import {PostService} from "./services/post.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostRoutingModule
  ],
  providers: [
    PostResolver,
    PostsResolver,
    PostGuard,
    PostService
  ]
})
export class PostModule { }
