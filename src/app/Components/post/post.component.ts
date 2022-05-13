import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../Interfaces';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input()
  // @ts-ignore
      post: IPost = {};

  constructor() { }

  ngOnInit(): void {
  }
}
