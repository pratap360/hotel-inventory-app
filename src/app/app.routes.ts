import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    // {path: '', redirectTo: '/rooms', pathMatch: 'full'},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    // {path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule) },
    {path: 'rooms', component: RoomsComponent},
    {path: 'rooms/add', component: RoomsAddComponent},
    {path: 'rooms/:roomid', component: RoomsBookingComponent},
    {path: 'employee',component: EmployeeComponent},
    {path: '**', component: NotfoundComponent},

];
