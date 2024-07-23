import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoggerService } from './logger.service';
// import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'hoin-root',
  standalone: true,
  templateUrl: './app.component.html',

  // template: '<h1>Hello Angular but this is inline</h1>',
  // template: `<h1>Hello Angular but this is inline</h1>
  // <p>so it is just a template</p>`,
  styleUrl: './app.component.scss',
  // styles: [`h1{color:red;}`]
  imports: [
    RouterOutlet,
    RoomsComponent,
    CommonModule,
    ContainerComponent,
    EmployeeComponent,
  ],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  @ViewChild('name', { static: true }) name!: ElementRef;
  constructor(
    @Optional() private loggerService: LoggerService) {}
    // @Inject(localStorageToken) private localStorage: any) {}
  ngOnInit() {
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = 'Hiltion Hotel';
    // this.localStorage.setItem('name', 'Hiltion Hotel');
  }

  // role = 'Admin'
  // role = 'User'
  // role = 'Users'

  // @ViewChild('user',{read:ViewContainerRef}) vcr!: ViewContainerRef
  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 40;
  // }

}
