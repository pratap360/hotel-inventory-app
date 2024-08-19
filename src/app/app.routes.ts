import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';

export const routes: Routes = [
    {path: '', redirectTo: '/rooms', pathMatch: 'full'},
    {path: 'rooms', component: RoomsComponent},
    {path: 'rooms/:roomid', component: RoomsBookingComponent},
    {path: 'employee',component: EmployeeComponent},
    {path: '**', component: NotfoundComponent},

];
