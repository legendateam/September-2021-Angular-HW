import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ICommentDetails} from "../../interfaces";
import {CommentService} from "../comment.service";

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<ICommentDetails> {

  constructor(private router: Router, private commentService: CommentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICommentDetails> | Promise<ICommentDetails> | ICommentDetails {
    // anti-ddos
    const stateComment = this.router.getCurrentNavigation()?.extras?.state?.['comment'];

    if (stateComment) {
      return stateComment
    }

    const { id } = route.params;
    return this.commentService.getOneById(id)
  }
}
