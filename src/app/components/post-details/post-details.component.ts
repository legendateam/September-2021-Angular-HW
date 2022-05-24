import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPost, IState } from '../../interfaces';
import { PostService } from '../../services';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  post: IPost;

  constructor(private postService: PostService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(({ id }) => {
      const { state: { data: post } } = history as IState<IPost>;

      if (!post) {
        this.postService.getOneById(id).subscribe((post) => this.post = post);
        return;
      }

      this.post = post;
    });
  }
}
