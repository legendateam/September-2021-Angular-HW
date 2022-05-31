import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../../../../interfaces';
import { urls } from '../../../../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthRegisterService {
  constructor(private http: HttpClient) { }

  public register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(urls.users, user);
  }
}
