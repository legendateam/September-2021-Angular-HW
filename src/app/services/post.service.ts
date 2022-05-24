import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPost } from '../interfaces';
import { urls } from '../constants';
import { ParamsEnum } from '../enum';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${urls.baseURL}${ParamsEnum.posts}`);
  }

  public getOneById(id: string): Observable<IPost> {
    return this.httpClient.get<IPost>(`${urls.baseURL}${ParamsEnum.posts}/${id}`);
  }
}
