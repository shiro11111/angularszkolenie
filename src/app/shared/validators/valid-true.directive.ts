import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {validators} from './validators';

@Directive({
  selector: '[appValidTrue]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidTrueDirective, multi: true}]
})
export class ValidTrueDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors {
    return validators.validTrue(control);
  }

}
