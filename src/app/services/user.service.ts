import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../interfaces';
import { environment } from '../../environments/environment';
import { urls } from '../constants/urls.constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${environment.api}${urls.users}`);
  }

  public getOneById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${environment.api}${urls.users}/${id}`);
  }
}
