import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPost } from '../interfaces';
import { constants } from '../сonstants';
import { ParamsEnum } from '../enum';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: IPost[] = [];

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IPost[]> {
    return this.http
      .get<IPost[]>(`${constants.basicUrl}${ParamsEnum.posts}`);
  }
}
