import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
    CommentComponent,
    CommentsComponent,
    PostComponent,
    PostsComponent,
    UserComponent,
    UsersComponent,
} from './Components';

@NgModule({
    declarations: [
        AppComponent,
        CommentComponent,
        UsersComponent,
        UserComponent,
        PostComponent,
        PostsComponent,
        CommentsComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
