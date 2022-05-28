import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment, ICommentDetails} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IComment[]> {
    return this.http.get<IComment[]>(urls.comments)
  }

  public getOneById(id:string): Observable<ICommentDetails> {
    return this.http.get<ICommentDetails>(`${urls.comments}/${id}`)
  }
}
