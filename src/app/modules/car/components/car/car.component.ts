import {Component, Input, OnInit} from '@angular/core';

import {ICar} from "../../interfaces";
import {CarService} from "../../services/car.service";
import {ActivatedRoute} from "@angular/router";
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input()
  car: ICar

  constructor(private carService:CarService, private activatedRoute: ActivatedRoute, public formService:FormService) { }

  ngOnInit(): void {
  }

  public deleteCar(): void {
    const { id } = this.car;
    this.activatedRoute.data.subscribe( ({dataCars}) => {
      const index = dataCars.findIndex( (car: ICar) => car.id === id)
      dataCars.splice( index, 1 )
    })
    this.carService.deleteOne(id as number).subscribe( value => value )
  }

  public update(): void {
    this.formService.updateClick = true;
    this.formService.update(this.car)
  }
}
