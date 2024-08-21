import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

  AddRoom(roomsForm:NgForm) {
    this.roomService
      .addRoom(this.room)
      .subscribe((data) => {
        this.successMsg = 'Room added successfully';

        // reset the form 1 way
        roomsForm.reset();

        // reset the form 2 way
        roomsForm.resetForm({
          roomType: '',
          roomNumber: '',
          amenities: '',
          price: 0,
          photos: '',
          checkinTime: new Date(),
          checkoutTime: new Date(),
          rating: 0,
        });
      
      });
  }
}
