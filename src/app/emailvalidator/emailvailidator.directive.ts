import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[hoinEmailvailidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailvailidatorDirective,
      multi: true
    }
  ],
})
export class EmailvailidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    if(value.includes('test')){
      return {
        invalidEmail: true
      }
    }
    return null
  }

}
