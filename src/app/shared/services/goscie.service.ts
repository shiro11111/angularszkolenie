import {Injectable} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoscieService {

  constructor() { }

  getGuests(): Observable<string[]> {
    return timer(1000).pipe(
      map(() => [
        'Piotr',
        'Andriy',
        'Olek',
        'Sylwia',
        'Maciek',
        'Patryk',
        'Igor'
      ])
    );
  }
}
