import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {catchError, map, throwError} from "rxjs";

import {errorValidations, regex} from "../../../../constants";
import {ErrorEnum} from "../../../../enum";
import {AuthRegisterService, SessionStorageService} from "../../../../services";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  noSame: string;
  identical: string;
  errorUsername: string;

  constructor(private authService: AuthRegisterService,
              private router: Router, private sessionStorageService: SessionStorageService) {
    this._createForm();
    this.noSame = ErrorEnum.NO_SAME;
    this.identical = ErrorEnum.IDENTICAL;

    this.sessionStorageService.removeItem('createdUser');
  }

  ngOnInit(): void {
  }

  public registerUser(): void {
    const user = this.form.getRawValue();
    delete user.confirmPassword;
    this.authService.register(user).pipe(
      map(user => user),
      catchError(err => throwError(this.errorUsername = err.error['username'][0]))
    ).subscribe( () => {
      this.sessionStorageService.setItem('createdUser', 'successfully')
      this.router.navigate(['login'])
    })
  }

  private _createForm() {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(2), Validators.maxLength(40), Validators.pattern(regex.username)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(2), Validators.maxLength(40), Validators.pattern(regex.password)
      ]),
      confirmPassword: new FormControl(null,[
        Validators.required,
        Validators.minLength(2), Validators.maxLength(40), Validators.pattern(regex.password)
      ])
    }, [this._checkPassword, RegistrationComponent.checkIdenticalPasswordWithUsername])
  }

  private _checkPassword(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password?.value === confirmPassword?.value ? null : { [ErrorEnum.NO_SAME]: errorValidations[ErrorEnum.NO_SAME]};
  }

  public static checkIdenticalPasswordWithUsername(form: AbstractControl): ValidationErrors | null {
    const username = form.get('username');
    const password = form.get('password');
    return username?.value === password?.value && username?.value?.length >= 1 && password?.value?.length >= 1  ?
      { [ErrorEnum.IDENTICAL]: errorValidations[ErrorEnum.IDENTICAL] } : null
  }
}
