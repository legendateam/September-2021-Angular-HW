import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, Router
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {PostService} from "../post.service";
import {IPost} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<IPost[]> {

  constructor(private postService: PostService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> | Promise<IPost[]> | IPost[] {

    // ddos server

    const posts = this.router.getCurrentNavigation()?.extras?.state?.['posts'];

    if (posts) {
      return posts;
    }

    return this.postService.getAll();
  }
}
