import {Injectable} from '@angular/core';
import {Uzytkownik} from '../models/uzytkownik';

@Injectable({
  providedIn: 'root'
})
export class UzytkownicyService {

  private static users: Uzytkownik[] = [
    {
      id: 1,
      name: 'Maciej #1',
      surname: 'Maciej',
      age: 1
    },
    {
      id: 2,
      name: 'Maciej #2',
      surname: 'Maciej',
      age: 11
    },
    {
      id: 3,
      name: 'Maciej #3',
      surname: 'Maciej',
      age: 111
    }, {
      id: 4,
      name: 'Maciej #4',
      surname: 'Maciej',
      age: 111
    }, {
      id: 5,
      name: 'Maciej #5',
      surname: 'Maciej',
      age: 1111
    }
  ];

  constructor() {
  }

  getList(): Uzytkownik[] {
    return UzytkownicyService.users;
  }

  getDetails(id: number): Uzytkownik {
    return UzytkownicyService.users.find((item: Uzytkownik) => {
      return item && item.id === id;
    })
  }

  remove(id: number) {
    UzytkownicyService.users = UzytkownicyService.users.filter((item) => item.id !== id);
  }
}
