import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem(key:string, item: string): void {
    localStorage.setItem(key, item)
  }

  public getItem(key: string): string | null {
    return localStorage.getItem(key)
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
