import { Component, OnInit } from '@angular/core';

import { IComment } from '../../interfaces';
import { CommentService } from '../../services';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments: IComment[];

  constructor(private commentService: CommentService) { }

  //
  // // ddos server
  // ngOnInit(): void {
  //   // ddos server
  //   this.commentService.getAll().subscribe(comments => this.comments = comments);
  // }

  // без ддоса
  ngOnInit(): void {
    // за допомогою sessionStorage
    const comments = sessionStorage.getItem('comments');

    if (comments) {
      this.comments = JSON.parse(comments);
      return;
    }
    // за допомогою sessionStorage без дддоса
    this.commentService.getAll().subscribe((comments) => {
      this.comments = comments;

      sessionStorage.setItem('comments', JSON.stringify(this.comments));
    });
  }
}
