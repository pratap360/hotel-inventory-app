import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoomList } from '../room';
import { CommonModule } from '@angular/common';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hoin-rooms-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.scss',
})
export class RoomsAddComponent implements OnInit {
  room: RoomList = {
    roomType: '',
    roomNumber: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,
  };

  successMsg: string = '';

  constructor(private roomService: RoomsService) {}

  ngOnInit(): void {}

  AddRoom() {
    this.roomService
      .addRoom(this.room)
      .subscribe((data) => (this.successMsg = 'Room added successfully'));
  }
}
