import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotFoundComponent} from './components/not-found/not-found.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { ValidTrueDirective } from './validators/valid-true.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent, NoAccessComponent, ValidTrueDirective],
  exports: [NotFoundComponent, ValidTrueDirective]
})
export class SharedModule { }
