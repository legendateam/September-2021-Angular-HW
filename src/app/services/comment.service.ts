import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IComment } from '../interfaces';
import { constants } from '../сonstants';
import { ParamsEnum } from '../enum';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) { }

  public getAll(): Observable<IComment[]> {
    return this.http
      .get<IComment[]>(`${constants.basicUrl}${ParamsEnum.comments}`);
  }
}
