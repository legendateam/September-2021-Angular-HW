import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IComment, IData } from '../../interfaces';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input()
    comment: IComment;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public getDetails({ data: comment }: IData<IComment>) {
    this.router.navigate([comment.id], { relativeTo: this.activatedRoute, state: { data: comment } });
  }
}
