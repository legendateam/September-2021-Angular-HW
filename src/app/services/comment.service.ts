import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IComment } from '../interfaces';
import { urls } from '../constants';
import { ParamsEnum } from '../enum';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) { }

  public getAll() : Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(`${urls.baseURL}${ParamsEnum.comments}`);
  }

  public getOneByID(id: string) : Observable<IComment> {
    return this.httpClient.get<IComment>(`${urls.baseURL}${ParamsEnum.comments}/${id}`);
  }
}
