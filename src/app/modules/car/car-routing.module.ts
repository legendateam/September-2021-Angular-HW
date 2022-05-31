import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CarsComponent} from "./components/cars/cars.component";
import {CarsResolver} from "./services/resolvers/cars.resolver";
import {CarsGuard} from "./services/guards/cars.guard";
import {CarDetailsComponent} from "./components/car-details/car-details..component";
import {CarResolver} from "./services/resolvers/car.resolver";

const routes: Routes = [
  { path: '', component: CarsComponent, resolve: { dataCars: CarsResolver }, canActivate: [CarsGuard],
    children: [
      { path: ':id', component: CarDetailsComponent, resolve: { dataCar: CarResolver } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
