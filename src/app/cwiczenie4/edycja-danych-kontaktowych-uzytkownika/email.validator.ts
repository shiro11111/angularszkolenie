
import { AbstractControl } from '@angular/forms';

export function ValidateEmail(control: AbstractControl) {
  const email = control.value;
  const emailRegexp = new RegExp('^[a-zA-Z0-9!#$%&\'*+\\\\/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&\'*+\\\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$');

  return !emailRegexp.test(email) ? { email: true } : null;
}
