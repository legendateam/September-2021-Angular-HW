import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import {CarService} from "./services/car.service";
import {CarsResolver} from "./services/resolvers/cars.resolver";
import {HttpClientModule} from "@angular/common/http";
import {CarsGuard} from "./services/guards/cars.guard";


@NgModule({
  declarations: [
    CarsComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CarRoutingModule
  ],
  providers: [CarService, CarsResolver, CarsGuard]
})
export class CarModule { }
