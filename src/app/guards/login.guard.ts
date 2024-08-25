import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {

  
  return true;
};

// export const loginGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//   const loginService = inject(LoginService);
//   const router = inject(Router);

//   console.log("Guard check. Is logged in?", loginService.isLoggedIn);

//   if (loginService.isLoggedIn) {
//     return true;
      // return this.loginService.isLoggedIn?true : this.router.navigate(['/login']);
//   } else {
//     console.log("Not logged in, redirecting to /login");
//     router.navigate(['/login']);
//     return false;
//   }
// };