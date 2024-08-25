import { CanActivateChildFn } from '@angular/router';

export const roomGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};

// constructor (private loginService: LoginService) {
// }

// CanActivateChildFn(
//   return this.loginService..isAdmin;
// )
 