import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../Interfaces';
import { constants } from '../Constants';
import { ParamsEnum } from '../Enum';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) { }

    public getAll(): Observable<IUser[]> {
        return this.http.get<IUser[]>(`${constants.basicUrl}${ParamsEnum.users}`);
    }
}
