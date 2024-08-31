import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './guards/login.guard';
import { roomGuard } from './rooms/room.guard';
import { BookingComponent } from './booking/booking.component';
import { bookingGuard } from './booking/guards/booking.guard';
import { CommentsComponent } from './comments/comments.component';
import { commentsGuard } from './comments/guard/comments.guard';

export const routes: Routes = [
    // {path: '', redirectTo: '/rooms', pathMatch: 'full'},
    // {path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule) },
    // the above loadchildren is a lazy loading 👆
    // {path: 'rooms/:roomid', component: RoomsBookingComponent},
    // {path: 'rooms/add', component: RoomsAddComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'rooms', canActivateChild: [roomGuard], component: RoomsComponent, children : [
        {path: 'add', component: RoomsAddComponent},
        // {path: ':roomid', component: RoomsBookingComponent},
    ]},
    // lazy loading the component 👇🏼 
    {path: 'booking',loadComponent: () => import('./booking/booking.component').then(m => m.BookingComponent),canActivate: [loginGuard],
        children : [
        {path: ':roomid', component: BookingComponent , canDeactivate:[bookingGuard]},
        ]
    },
    {path: 'comments', component: CommentsComponent, 
        // resolve: {comments : commentsGuard}
    },
    {path: 'employee',component: EmployeeComponent,canActivate: [loginGuard]},
    {path: '**', component: NotfoundComponent},

];
