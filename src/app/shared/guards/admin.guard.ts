import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {FakeAuthService} from '../services/fake-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private service: FakeAuthService,
              private router: Router) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.service.isAdmin) {
      this.router.navigate(['no-access']);
      return false;
    }
    return true;
  }

}
