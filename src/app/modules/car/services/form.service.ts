import { Injectable } from '@angular/core';
import {
  AbstractControl, FormControl, FormGroup, Validators,
} from '@angular/forms';
import { ICar } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  form:FormGroup;

  updateClick: boolean;

  id: number;

  constructor() {
  }

  public createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      year: new FormControl(null, [Validators.required, Validators.min(1990), Validators.max(new Date().getUTCFullYear())]),
      price: new FormControl(null, [Validators.required, Validators.min(1)]),
    });
  }

  public update(car: ICar): void {
    this.id = car.id as number;
    this.form.setValue({model: car.model, year: car.year, price: car.price})
  }
}
