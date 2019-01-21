import {Component, OnInit} from '@angular/core';
import {GoscieService} from '../../shared/services/goscie.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-goscie-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  data: string[];
  pending: boolean;

  constructor(private service: GoscieService) {
  }

  ngOnInit(): void {
    this.reloadList();
  }


  reloadList(): void {
    this.pending = true;
    this.service.getGuests().pipe(
      first()
    ).subscribe((data: string[]) => {
      this.pending = false;
      this.data = data;
    });
  }

}
