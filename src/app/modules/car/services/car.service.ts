import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {ICar} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ICar[]> {
    return this.http.get<ICar[]>(urls.cars)
  }

  public getOneById(id: string): Observable<ICar> {
    return this.http.get<ICar>(`${urls.cars}/${id}`)
  }

  public patchingOne(id: string, pathingCar: Partial<ICar>): Observable<ICar> {
    return this.http.patch<ICar>(`${urls.cars}/${id}`, pathingCar)
  }

  public fullUpdateOne(id: string, newCar: ICar): Observable<ICar> {
    return this.http.put<ICar>(`${urls.cars}/${id}`, newCar)
  }

  public deleteOne(id: string): void {
    this.http.delete(`${urls.cars}/${id}`)
  }
}
