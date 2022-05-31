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
    this.form = new FormGroup({
      model: new FormControl(car.model, [Validators.required, Validators.minLength(2)]),
      year: new FormControl(car.year, [Validators.required, Validators.min(1990), Validators.max(new Date().getUTCFullYear())]),
      price: new FormControl(car.price, [Validators.required, Validators.min(1)]),
    });
  }
}
