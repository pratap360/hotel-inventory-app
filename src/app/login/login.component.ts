import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../hover.directive';
import { EmailvailidatorDirective } from '../emailvalidator/emailvailidator.directive';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'hoin-login',
  standalone: true,
  imports: [CommonModule,FormsModule,HoverDirective,EmailvailidatorDirective,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  static login() {
    throw new Error('Method not implemented.');
  }

  email: string = '';
  password: string = '';



  constructor(private route: Router,
    private loginservice: LoginService
  ) { }

  ngOnInit(): void {
    
  }

  login() {
    if (this.loginservice.login(this.email, this.password)) {
      // alert("login successful");
      this.route.navigate(['/rooms']);
      // or 
      // this.route.navigateByUrl('/rooms/add');
    }
  }

}
