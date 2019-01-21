import {AbstractControl} from '@angular/forms';

export const validators = {

  validTrue(control: AbstractControl): { [key: string]: any } | null {
    return !control.value ? {'validTrue': false} : null;
  }
};
