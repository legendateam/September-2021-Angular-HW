import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ICar } from '../../interfaces';
import { CarService } from '../../services/car.service';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css'],
})
export class FormCreateComponent implements OnInit {
  car: ICar;

  error: string;

  constructor(private carService:CarService, private activatedRoute: ActivatedRoute, public formService:FormService) {
    this.formService.createForm();
  }

  ngOnInit(): void {
  }

  public createCar(): void {
    this.car = this.formService.form.getRawValue();
    this.formService.updateClick = false;
    this.carService.createOne(this.car).pipe(
      catchError((err) => throwError(this.error = err.error.details)),
    ).subscribe((car) => this.activatedRoute.data.subscribe(({ dataCars }) => {
      dataCars.push(car);
      this.formService.form.reset()
    }));
  }

  public updateCar(): void {
    const id = this.formService.id as number;
    const car = this.formService.form.getRawValue() as ICar;
    this.carService.fullUpdateOne(id, car).subscribe((car) => {
      this.activatedRoute.data.subscribe(({ dataCars }) => {
        const index = dataCars.findIndex((car: ICar) => car.id === id);
        dataCars.splice(index, 1, car);
      });
    });
  }
}
