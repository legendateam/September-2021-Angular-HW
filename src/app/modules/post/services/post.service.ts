import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

import {urls} from "../../../constants";
import {IPost, IPostDetails} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>(urls.posts)
  }

  public getOneById(id: string): Observable<IPostDetails> {
    return this.http.get<IPostDetails>(`${urls.posts}/${id}`)
  }
}
