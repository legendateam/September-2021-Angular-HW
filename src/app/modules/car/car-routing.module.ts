import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CarsComponent} from "./components/cars/cars.component";
import {CarsResolver} from "./services/resolvers/cars.resolver";
import {CarsGuard} from "./services/guards/cars.guard";

const routes: Routes = [
  { path: '', component: CarsComponent, resolve: { dataCars: CarsResolver }, canActivate: [CarsGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
