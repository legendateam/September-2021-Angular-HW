import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IComment } from '../interfaces/comment.interface';
import { urls } from '../constants/urls.constants';
import { SymbolEnum } from '../enum';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) { }

  public getAll(): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${environment.api}${urls.comments}`);
  }

  public getOneById(id: string): Observable<IComment> {
    return this.http.get<IComment>(`${environment.api}${urls.comments}${SymbolEnum.SLASH}${id}`);
  }
}
