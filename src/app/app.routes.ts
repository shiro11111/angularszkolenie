import {Routes} from '@angular/router';
import {ListaComponent} from './goscie/lista/lista.component';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {AdminGuard} from './shared/guards/admin.guard';
import {NoAccessComponent} from './shared/components/no-access/no-access.component';

export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cwiczenie1'},
  {path: 'cwiczenie1', component: ListaComponent},
  {path: 'cwiczenie2', loadChildren: './cwiczenie2/cwiczenie2.module#Cwiczenie2Module'},
  {path: 'cwiczenie3', canActivate: [AdminGuard], loadChildren: './cwiczenie3/cwiczenie3.module#Cwiczenie3Module'},
  {path: 'cwiczenie4', loadChildren: './cwiczenie4/cwiczenie4.module#Cwiczenie4Module'},

  {path: 'no-access', component: NoAccessComponent},
  {path: '**', component: NotFoundComponent}
];
