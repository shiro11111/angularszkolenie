import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Uzytkownik} from '../../shared/models/uzytkownik';
import {UzytkownicyService} from '../../shared/services/uzytkownicy.service';

@Component({
  selector: 'app-szczegoly-uzytkownika-dialog',
  templateUrl: './szczegoly-uzytkownika-dialog.component.html',
  styleUrls: ['./szczegoly-uzytkownika-dialog.component.scss']
})
export class SzczegolyUzytkownikaDialogComponent implements OnInit {

  data: Uzytkownik;

  constructor(
    @Inject(MAT_DIALOG_DATA) private dialogData: { id: number },
    private service: UzytkownicyService,
    private dialogRef: MatDialogRef<SzczegolyUzytkownikaDialogComponent>
  ) { }

  ngOnInit() {
    this.data = this.service.getDetails(this.dialogData.id);
  }

  onRemove(): void {
    this.service.remove(this.data.id);
    this.dialogRef.close(this.data.id);
  }

}
