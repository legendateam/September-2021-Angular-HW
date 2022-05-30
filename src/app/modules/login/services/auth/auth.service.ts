import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {IToken, IUser} from "../../../../interfaces";
import {urls} from "../../../../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  constructor(private http: HttpClient) { }

  public login(user: IUser): Observable<IToken> {
    return this.http.post<IToken>(urls.auth, user)
  }
}
