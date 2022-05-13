import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPost } from '../Interfaces';
import { constants } from '../Constants';
import { ParamsEnum } from '../Enum';

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
