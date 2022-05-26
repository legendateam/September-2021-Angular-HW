import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPost } from '../../interfaces';
import { PostService } from '../../services';
import { StateEnum } from '../../enum';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  post: IPost;

  constructor(private postService: PostService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(({ id }) => {
      const postOfState = this.router.getCurrentNavigation()?.extras?.state?.[StateEnum.POST] as IPost;

      if (postOfState) {
        this.post = postOfState;
        return;
      }

      this.postService.getOneById(id).subscribe((post) => this.post = post);
    });
  }
}
