import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { ICar } from '../interfaces';
import { urls } from '../../../constants';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) { }

  public getAll(): Observable<ICar[]> {
    return this.http.get<ICar[]>(urls.cars);
  }

  public getOneById(id: string): Observable<ICar> {
    return this.http.get<ICar>(`${urls.cars}/${id}`);
  }

  public createOne(car: ICar): Observable<ICar> {
    return this.http.post<ICar>(urls.cars, car);
  }

  public fullUpdateOne(id: number, newCar: ICar): Observable<ICar> {
    return this.http.patch<ICar>(`${urls.cars}/${id}`, newCar);
  }

  public updateOne(id: number, pathingCar: Partial<ICar>): Observable<ICar> {
    return this.http.put<ICar>(`${urls.cars}/${id}`, pathingCar);
  }

  public deleteOne(id: number): Observable<any> {
    return this.http.delete(`${urls.cars}/${id}`);
  }
}
