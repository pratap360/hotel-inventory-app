import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';
// import { BookingComponent } from './booking/booking.component';

export const routes: Routes = [
    // {path: '', redirectTo: '/rooms', pathMatch: 'full'},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    // {path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule) },
    // the above loadchildren is a lazy loading 👆
    {path: 'rooms', component: RoomsComponent, children : [
        {path: 'add', component: RoomsAddComponent},
        {path: ':roomid', component: RoomsBookingComponent},
    ]},
    // {path: 'rooms/:roomid', component: RoomsBookingComponent},
    // {path: 'rooms/add', component: RoomsAddComponent},
    // lazy loading the component 👇🏼 
    {path: 'booking',loadComponent: () => import('./booking/booking.component').then(m => m.BookingComponent)},
    {path: 'employee',component: EmployeeComponent},
    {path: '**', component: NotfoundComponent},

];
