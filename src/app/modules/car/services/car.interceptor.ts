import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse,
} from '@angular/common/http';
import {
  catchError, map, Observable, throwError,
} from 'rxjs';
import { Router } from '@angular/router';

import { LocalStorageService } from '../../../services';
import { AuthService } from '../../../services/auth-global/auth.service';
import { TokenPairEnum } from '../../../enum';

@Injectable()
export class CarInterceptor implements HttpInterceptor {
  constructor(private localStorageService:LocalStorageService, private authService: AuthService, private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAuthorization = this.authService.isAuthorization();

    if (isAuthorization) {
      const access = this.localStorageService.getItem(TokenPairEnum.ACCESS) as string;
      request = this._addToken(request, access);
    }
    return next.handle(request).pipe(
      map((value) => value),
      catchError((res: HttpErrorResponse): Observable<any> => {
        if (res && res.error && res.status === 401) {
          this.localStorageService.removeItem(TokenPairEnum.ACCESS);
          this.router.navigate(['login']);
        }
        return throwError(() => new Error('token is invalid or expired'));
      }),
    );
  }

  private _addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }
}
