import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EdycjaDanychKontaktowychUzytkownikaComponent} from './edycja-danych-kontaktowych-uzytkownika/edycja-danych-kontaktowych-uzytkownika.component';
import {RouterModule} from '@angular/router';
import {cwiczenie4Routes} from './cwiczenie4.route';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule
} from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import { ValidatePeselDirective } from './edycja-danych-kontaktowych-uzytkownika/pesel-validator.directive';
import { ValidateEmailDirective } from './edycja-danych-kontaktowych-uzytkownika/email-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCheckboxModule,
    SharedModule,
    RouterModule.forChild(cwiczenie4Routes)
  ],
  declarations: [
    EdycjaDanychKontaktowychUzytkownikaComponent,
    ValidatePeselDirective,
    ValidateEmailDirective
  ]
})
export class Cwiczenie4Module {
}
