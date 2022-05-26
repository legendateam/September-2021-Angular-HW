import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPost } from '../interfaces';
import { environment } from '../../environments/environment';
import { urls } from '../constants/urls.constants';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) { }

  public getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>(environment.api + urls.posts);
  }

  public getOneById(id: string): Observable<IPost> {
    return this.http.get<IPost>(`${environment.api + urls.posts}/${id}`);
  }
}
