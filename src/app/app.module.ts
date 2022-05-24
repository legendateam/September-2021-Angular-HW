import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
  CommentComponent, CommentDetailsComponent, CommentsComponent, ErrorPageComponent, HomePageComponent,
  PostComponent, PostDetailsComponent, PostsComponent, UserComponent, UserDetailsComponent, UsersComponent,
} from './components';

const router: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
        children: [
          { path: ':id', component: UserDetailsComponent },
        ],
      },

      {
        path: 'posts',
        component: PostsComponent,
        children: [
          { path: ':id', component: PostDetailsComponent },
        ],
      },

      {
        path: 'comments',
        component: CommentsComponent,
        children: [
          { path: ':id', component: CommentDetailsComponent },
        ],
      },
    ],
  },

  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    HomePageComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(router),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
