import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive } from '@angular/core';
import { ValidateEmail } from './email.validator';

@Directive({
  selector: '[appValidateEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidateEmailDirective, multi: true}]
})

export class ValidateEmailDirective implements Validator {

  validate(control: AbstractControl): {[key: number]: any} | null {
    return ValidateEmail(control);
  }
}
