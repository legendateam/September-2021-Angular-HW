import { Injectable } from '@angular/core';

import { TokenPairEnum } from '../../enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accessTokenKey = TokenPairEnum.ACCESS;

  constructor() { }

  public isAuthorization(): boolean {
    return !!localStorage.getItem(this.accessTokenKey);
  }
}
