import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  isAdmin: boolean = false;

  constructor() { }

  setAdmin(): void {
    this.isAdmin = true;
  }

  setUser(): void {
    this.isAdmin = false;
  }
}
