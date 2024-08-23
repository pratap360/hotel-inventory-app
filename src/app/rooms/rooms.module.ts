import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    RoomsComponent,
    RoomsListComponent,
    RoomsBookingComponent,
    RoomsAddComponent
  ]
})
export class RoomsModule { }
