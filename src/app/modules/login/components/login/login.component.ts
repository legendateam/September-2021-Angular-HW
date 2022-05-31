import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';
import { regex } from '../../../../constants';
import { RegistrationComponent } from '../../../registration/components/registration/registration.component';
import { ErrorEnum, TokenPairEnum } from '../../../../enum';
import { AuthLoginService } from '../../services/auth/auth.service';
import { LocalStorageService } from '../../../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  identical: string;

  error: string;

  constructor(
private authService: AuthLoginService,
private localStorageService: LocalStorageService,
              private router: Router,
  ) {
    this._createForm();
    this.identical = ErrorEnum.IDENTICAL;
  }

  ngOnInit(): void {
  }

  public login(): void {
    this.authService.login(this.form.getRawValue()).pipe(
      map((value) => value),
      catchError((e) => throwError(this.error = e.error.detail)),
    ).subscribe(({ access }) => {
      this.localStorageService.setItem(TokenPairEnum.ACCESS, access);
      this.router.navigate(['cars']);
    });
  }

  private _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(2), Validators.maxLength(40), Validators.pattern(regex.username),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(2), Validators.maxLength(40), Validators.pattern(regex.password),
      ]),
    }, [RegistrationComponent.checkIdenticalPasswordWithUsername]);
  }
}
