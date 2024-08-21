import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../hover.directive';
@Component({
  selector: 'hoin-login',
  standalone: true,
  imports: [FormsModule,HoverDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  email: string = '';
  password: string = '';


  constructor() { }

  ngOnInit(): void {
    
  }

  login() {
    if (this.email === "admin@test.com" && this.password === "admin") {
      alert("login successful");
    }
  }

}
