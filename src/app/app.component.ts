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
import { NavigationEnd, NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
import { AppNavComponent } from "./app-nav/app-nav.component";
import { ConfigsService } from './services/configs.service';
import { filter } from 'rxjs';
// import { AppRoutingModule } from './app-routing.module';
// import { InitService } from './init.service';
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
    RouterLink,
    RoomsComponent,
    CommonModule,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent
],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(private configsService: ConfigsService,
    private router: Router
   ){}

  // constructor(@Optional() private loggerService: LoggerService,
  // @Inject(localStorageToken) private localStorage: any,
  // ){}

  // @Inject(localStorageToken) private localStorage: any,
  // private initService: InitService){
  // console.log(initService.config);
  // }

  ngOnInit() {
    // this.router.events.subscribe((event) => {
    //   console.log(event);
    // })

    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log("navigation start");
    });

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) =>{
      console.log("navigation end");
    } )
    // this.loggerService?.log('AppComponent.ngOnInit()');
    // this.name.nativeElement.innerText = 'Hiltion Hotel';
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
