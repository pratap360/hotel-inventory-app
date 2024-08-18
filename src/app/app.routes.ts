import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';

export const routes: Routes = [
    {path: '', redirectTo: '/rooms', pathMatch: 'full'},
    {path: 'rooms', component: RoomsComponent},
    {path: 'employee',component: EmployeeComponent},
];
