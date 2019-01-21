import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUzytkownikowComponent } from './lista-uzytkownikow/lista-uzytkownikow.component';
import { SzczegolyUzytkownikaComponent } from './szczegoly-uzytkownika/szczegoly-uzytkownika.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatListModule} from '@angular/material';
import { SzczegolyUzytkownikaDialogComponent } from './szczegoly-uzytkownika-dialog/szczegoly-uzytkownika-dialog.component';
import {RouterModule} from '@angular/router';
import {cwiczenie2Routes} from './cwiczenie2.routes';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    RouterModule.forChild(cwiczenie2Routes)
  ],
  declarations: [ListaUzytkownikowComponent, SzczegolyUzytkownikaComponent, SzczegolyUzytkownikaDialogComponent],
  entryComponents: [SzczegolyUzytkownikaDialogComponent]
})
export class Cwiczenie2Module { }
