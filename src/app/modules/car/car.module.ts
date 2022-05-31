import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { CarRoutingModule } from './car-routing.module';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import {CarService} from "./services/car.service";
import {CarsResolver} from "./services/resolvers/cars.resolver";
import {CarsGuard} from "./services/guards/cars.guard";
import {CarInterceptor} from "./services/car.interceptor";
import { FormCreateComponent } from './components/form-create/form-create.component';
import {FormService} from "./services/form.service";
import { CarDetailsComponent } from './components/car-details/car-details..component';
import {CarResolver} from "./services/resolvers/car.resolver";


@NgModule({
  declarations: [
    CarsComponent,
    CarComponent,
    FormCreateComponent,
    CarDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarRoutingModule
  ],
  providers: [
    CarService,
    CarsResolver,
    CarsGuard,
    CarResolver,
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: CarInterceptor },
    FormService
  ]
})
export class CarModule { }
