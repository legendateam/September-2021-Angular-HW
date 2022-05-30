import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ICar} from "../../interfaces";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( ({ dataCars }) => this.cars = dataCars )
  }

}
