import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  public setItem(key:string, item: string): void {
    sessionStorage.setItem(key, item)
  }

  public getItem(key: string): string | null {
    return sessionStorage.getItem(key)
  }

  public removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
}
