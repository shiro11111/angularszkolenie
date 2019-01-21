import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataUrodzeniaComponent } from './data-urodzenia/data-urodzenia.component';
import {RouterModule} from '@angular/router';
import {cwiczenie3Routes} from './czwiczenie3.routes';
import {MatButtonModule, MatDatepickerModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    RouterModule.forChild(cwiczenie3Routes)
  ],
  declarations: [DataUrodzeniaComponent]
})
export class Cwiczenie3Module { }
