import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {IPost} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {
// analog redux
  post = new BehaviorSubject<IPost>({id: 0, title: '', body: '', userId: 0})

  constructor() { }
}
