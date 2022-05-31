import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../../../services/auth-global/auth.service';
import { LocalStorageService } from '../../../../services';

@Injectable({
  providedIn: 'root',
})
export class CarsGuard implements CanActivate {
  constructor(private AuthService: AuthService, private router:Router, private local: LocalStorageService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.AuthService.isAuthorization() ? true : this.router.navigate(['/']);
  }
}
