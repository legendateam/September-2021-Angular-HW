import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../interfaces';
import { urls } from '../constants';
import { ParamsEnum } from '../enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${urls.baseURL}${ParamsEnum.users}`);
  }

  public getOneById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${urls.baseURL}${ParamsEnum.users}/${id}`);
  }
}
