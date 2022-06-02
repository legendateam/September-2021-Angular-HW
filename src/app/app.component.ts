import { Component } from '@angular/core';

import { IUser } from './interfaces/user.interface';
import { DataService } from './modules/post/services/data.service';
import { IPost } from './modules/post/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  user: IUser;

  post: IPost;

  constructor(private dataService: DataService) {
    this.dataService.post.subscribe((post) => this.post = post);
  }

  emmit(user: IUser) {
    this.user = user;
  }
}
