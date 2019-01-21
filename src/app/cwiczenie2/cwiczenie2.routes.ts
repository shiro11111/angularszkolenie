import {Routes} from '@angular/router';
import {ListaUzytkownikowComponent} from './lista-uzytkownikow/lista-uzytkownikow.component';
import {SzczegolyUzytkownikaComponent} from './szczegoly-uzytkownika/szczegoly-uzytkownika.component';

export const cwiczenie2Routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'lista-uzytkownikow'},
  {
    path: 'lista-uzytkownikow', component: ListaUzytkownikowComponent, children: [
      {path: ':id', component: SzczegolyUzytkownikaComponent}
    ]
  }
];
