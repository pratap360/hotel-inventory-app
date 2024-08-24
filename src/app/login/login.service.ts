import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  isLoggedIn = false;
  constructor() { }

  login(email: string, password: string) {
    if (email === "admin@test.com" && password === "admin"){
      this.isLoggedIn = true;
    }

    return this.isLoggedIn;
  }
}
