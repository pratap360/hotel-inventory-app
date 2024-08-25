import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  isLoggedIn = false;
  isAdmin = false;
  constructor() { }

  login(email: string, password: string) {
    if (email === "admin@test.com" && password === "admin"){
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    if(email === "user@test.com" && password === "user"){
      this.isLoggedIn = true;
      this.isAdmin = false;
    }

    return this.isLoggedIn;
  }
}


// private loggedIn = false;
//   constructor() { console.log("LoginService initialized. Current login state:", this.loggedIn);}



//   login(email: string, password: string): boolean {
//     if (email === "admin@test.com" && password === "admin") {
//       this.loggedIn = true;
//       console.log("Login successful. State set to:", this.loggedIn);
//     } else {
//       console.log("Login failed. State remains:", this.loggedIn);
//     }
//     return this.loggedIn;
//   }

//   get isLoggedIn(): boolean {
//     console.log("Checking login state. Current state:", this.loggedIn);
//     return this.loggedIn;
//   }
