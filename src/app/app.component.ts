import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
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
export class AppComponent implements OnInit {
  
  title = 'hotelinventoryapp';

  // role = 'Admin'
  // role = 'User'

  // role = 'Users'
  // @ViewChild('user',{read:ViewContainerRef}) vcr!: ViewContainerRef
  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 40;
  // }
  @ViewChild('name',{static:true}) name!: ElementRef
  ngOnInit () {
    this.name.nativeElement.innerText = "Hiltion Hotel"
  }

}
