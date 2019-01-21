import {Component, OnInit} from '@angular/core';
import {Uzytkownik} from '../../shared/models/uzytkownik';
import {UzytkownicyService} from '../../shared/services/uzytkownicy.service';
import {MatDialog} from '@angular/material';
import {SzczegolyUzytkownikaDialogComponent} from '../szczegoly-uzytkownika-dialog/szczegoly-uzytkownika-dialog.component';
import {FakeAuthService} from '../../shared/services/fake-auth.service';

@Component({
  selector: 'app-lista-uzytkownikow',
  templateUrl: './lista-uzytkownikow.component.html',
  styleUrls: ['./lista-uzytkownikow.component.scss']
})
export class ListaUzytkownikowComponent implements OnInit {

  data: Uzytkownik[];

  constructor(
    private service: UzytkownicyService,
    private dialog: MatDialog,
    public authService: FakeAuthService
  ) {
  }

  ngOnInit() {
    this.refreshList();
  }

  onUserClick(id: number): void {
    let dialogRef = this.dialog.open(SzczegolyUzytkownikaDialogComponent, {
      data: {
        id
      }
    });

    dialogRef.afterClosed().subscribe((removedId: number) => {
      if (removedId) {
        this.refreshList();
      }
    })
  }

  private refreshList(): void {
    this.data = this.service.getList();
  }
}
