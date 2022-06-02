import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPost } from '../interfaces';
import { urls } from '../../../constants';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) { }

  public getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>(urls.posts);
  }

  public getOneById(id: string): Observable<IPost> {
    return this.http.get<IPost>(`${urls.posts}/${id}`);
  }
}
