import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Uzytkownik} from '../../shared/models/uzytkownik';
import {UzytkownicyService} from '../../shared/services/uzytkownicy.service';

@Component({
  selector: 'app-szczegoly-uzytkownika',
  templateUrl: './szczegoly-uzytkownika.component.html',
  styleUrls: ['./szczegoly-uzytkownika.component.scss']
})
export class SzczegolyUzytkownikaComponent implements OnInit, OnChanges {

  @Input() id: number;
  @Output()  textEntered: EventEmitter<string> = new EventEmitter();

  data: Uzytkownik;
  text: string;

  constructor(private service: UzytkownicyService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.id) {
      this.data = this.service.getDetails(this.id);
    }
  }

}
