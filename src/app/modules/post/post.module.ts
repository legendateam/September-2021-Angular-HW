import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {DataService} from "./services/data.service";
import {PostService} from "./services/post.service";
import {HttpClientModule} from "@angular/common/http";
import {CustomPipe} from "./services/pipes/custom.pipe";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    CustomPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostRoutingModule
  ],
  providers: [
    PostService
  ]
})
export class PostModule { }
