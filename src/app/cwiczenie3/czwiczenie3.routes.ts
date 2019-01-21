import {Routes} from '@angular/router';
import {DataUrodzeniaComponent} from './data-urodzenia/data-urodzenia.component';

export const cwiczenie3Routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'data-urodzenia' },
  { path: 'data-urodzenia', component: DataUrodzeniaComponent }
];
