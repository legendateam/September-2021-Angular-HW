import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, Router
} from '@angular/router';
import { Observable} from 'rxjs';

import {IPostDetails} from "../../interfaces";
import {PostService} from "../post.service";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IPostDetails> {

  constructor(private postService: PostService, private router:Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<IPostDetails> | Promise<IPostDetails> | IPostDetails {

    // anti-ddos server

    const { id } = route.params;

    const postDetails = this.router.getCurrentNavigation()?.extras?.state?.['postDetails'];

    if (postDetails) {
      return postDetails;
    }

    return this.postService.getOneById(id)
  }
}
