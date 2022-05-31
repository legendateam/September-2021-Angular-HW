import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {ICar} from "../../interfaces";
import {CarService} from "../car.service";

@Injectable({
  providedIn: 'root'
})
export class CarResolver implements Resolve<ICar> {

  constructor(private carService:CarService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICar> | Promise<ICar> | ICar {
    const { id } = route.params;

    const stateCar = this.router.getCurrentNavigation()?.extras?.state?.['carDetails'];

    if ( stateCar ) {
      return stateCar;
    }

    return this.carService.getOneById(id)
  }
}
