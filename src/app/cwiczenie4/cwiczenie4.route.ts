import {Routes} from '@angular/router';
import {EdycjaDanychKontaktowychUzytkownikaComponent} from './edycja-danych-kontaktowych-uzytkownika/edycja-danych-kontaktowych-uzytkownika.component';

export const cwiczenie4Routes: Routes = [
  {path: '', redirectTo: 'edycja-danych-kontaktowych-uzytkownika', pathMatch: 'full'},
  {path: 'edycja-danych-kontaktowych-uzytkownika', component: EdycjaDanychKontaktowychUzytkownikaComponent}
];
