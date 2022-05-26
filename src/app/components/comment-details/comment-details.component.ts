import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IComment } from '../../interfaces/comment.interface';
import { CommentService } from '../../services';
import {StateEnum} from "../../enum";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css'],
})
export class CommentDetailsComponent implements OnInit {
  comment: IComment;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(({ id }) => {
      const commentOfState = this.router.getCurrentNavigation()?.extras?.state?.[StateEnum.COMMENT] as IComment;

      if (!commentOfState) {
        this.commentService.getOneById(id).subscribe((comment) => this.comment = comment);
        return;
      }

      this.comment = commentOfState;
    });
  }
}
