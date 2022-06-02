import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../interfaces/user.interface";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(urls.users)
  }

  public getOneById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${urls.users}/${id}`)
  }
}
