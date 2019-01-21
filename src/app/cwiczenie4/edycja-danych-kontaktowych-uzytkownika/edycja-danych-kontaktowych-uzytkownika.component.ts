import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validators } from '../../shared/validators/validators';

@Component({
  selector: 'app-edycja-danych-kontaktowych-uzytkownika',
  templateUrl: './edycja-danych-kontaktowych-uzytkownika.component.html',
  styleUrls: ['./edycja-danych-kontaktowych-uzytkownika.component.scss']
})
export class EdycjaDanychKontaktowychUzytkownikaComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    this.form = this.fb.group({
      name: this.fb.control(null, [
        Validators.pattern('^[a-zA-ąężźćłóś]+')
      ]),
      surname: this.fb.control(null, [
        Validators.pattern('^[a-zA-ąężźćłóś]+')
      ]),
      email: null,
      birthDate: null,
      sex: null,
      rodo: null,
      pesel: this.fb.control(null, [
        Validators.pattern('^[0-9]*$')
      ])
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  getPeselErrorMessage() {
    return this.form.get('pesel').hasError('required') ? 'You must enter a value' :
      this.form.get('pesel').hasError('pattern') ? 'Not a valid pesel' :
        '';
  }

  // getEmailErrorMessage() {
  //   return this.form.get('email').hasError('required') ? 'You must enter a value' :
  //     this.form.get('email').hasError('pattern') ? 'Invalid email' :
  //       '';
  // }
}
