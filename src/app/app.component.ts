import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common'; 

@Component({
    selector: 'hoin-root',
    standalone: true,
    templateUrl: './app.component.html',
    
    // template: '<h1>Hello Angular but this is inline</h1>',
    // template: `<h1>Hello Angular but this is inline</h1>
    // <p>so it is just a template</p>`, 
    styleUrl: './app.component.scss'
    // styles: [`h1{color:red;}`]
    ,
    imports: [RouterOutlet, RoomsComponent,CommonModule]
})
export class AppComponent {
  title = 'hotelinventoryapp';

  // role = 'Admin'
  // role = 'User'
  role = 'Users'
}
