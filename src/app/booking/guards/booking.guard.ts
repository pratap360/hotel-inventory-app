 import { CanDeactivateFn } from '@angular/router';
import { BookingComponent } from '../booking.component';

export const bookingGuard: CanDeactivateFn<BookingComponent> = (component, currentRoute, currentState, nextState) => {
// constructor (private _snackBar: MatSnackBar) {}

  if (component.bookingForm.pristine) {
    return component.bookingForm.pristine ;
  }else {
    // this._snackBar.open('You have unsaved changes. Do you want to continue?');
    return false
  }
};
