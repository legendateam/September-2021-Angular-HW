import { Component, OnInit } from '@angular/core';

import { IPost } from '../../interfaces';
import { PostService } from '../../services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: IPost[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // without ddos api, тут так само обійшов ддос за допомогою sessionStorage
    const posts = sessionStorage.getItem('posts');

    if (!posts) {
      this.postService.getAll().subscribe((posts) => {
        this.posts = posts;
        sessionStorage.setItem('posts', JSON.stringify(posts));
      });
      return;
    }

    this.posts = JSON.parse(posts);
  }
}
