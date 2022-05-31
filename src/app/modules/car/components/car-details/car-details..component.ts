import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICar } from '../../interfaces';

@Component({
  selector: 'app-one-car',
  templateUrl: './car-details..component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  car: ICar;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dataCar }) => this.car = dataCar);
  }
}
