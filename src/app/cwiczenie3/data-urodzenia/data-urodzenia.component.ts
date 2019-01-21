import { Component, OnInit } from '@angular/core';
import {FakeAuthService} from '../../shared/services/fake-auth.service';

@Component({
  selector: 'app-data-urodzenia',
  templateUrl: './data-urodzenia.component.html',
  styleUrls: ['./data-urodzenia.component.scss']
})
export class DataUrodzeniaComponent implements OnInit {

  constructor(public service: FakeAuthService) { }

  ngOnInit() {
  }

}
