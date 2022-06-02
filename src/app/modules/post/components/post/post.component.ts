import {Component, Input, OnInit} from '@angular/core';

import {DataService} from "../../services/data.service";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  pushPost() {
    this.dataService.post.next(this.post)
  }

}
