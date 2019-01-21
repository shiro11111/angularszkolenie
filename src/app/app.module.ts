import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {GoscieModule} from './goscie/goscie.module';
import {Cwiczenie2Module} from './cwiczenie2/cwiczenie2.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {SharedModule} from './shared/shared.module';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig, MatNativeDateModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GoscieModule,
    Cwiczenie2Module,
    MatNativeDateModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: <MatDialogConfig>{
        hasBackdrop: true,
        panelClass: 'app-panel'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
