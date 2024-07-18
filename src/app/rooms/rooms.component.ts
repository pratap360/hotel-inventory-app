import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './room';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'hoin-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent], // Include CommonModule here
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck,AfterViewInit,AfterViewChecked{

  hotelName = "Hilton Hotel";
  numberOfRooms = 10;
  hideRooms = false;
  
  selectedRooms!: RoomList;
    
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  title = 'Room List';

  roomList: RoomList[] = [] ;

  @ViewChild (HeaderComponent) headerComponent!: HeaderComponent;

  constructor () {}
  ngAfterViewChecked(): void {
    // this.headerComponent.title = 'Rooms View';
  }
  ngAfterViewInit(): void {
    // console.log(this.headerComponent);
    // * if getting any error in dev mode then it fine but in prod it's not fine must look into the code for more info
    this.headerComponent.title = 'Rooms View';
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngOnInit(): void {

    console.log(this.headerComponent);

    this.roomList = [
    {
      roomNumber: 1,
      roomType: 'Basic Room',
      amenities: "AC, TV, Kitchen",
      price: 100,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      checkinTime: new Date("11-Nov-2023"),
      checkoutTime: new Date("12-Nov-2023"),
      rating: 3.5,
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: "AC,Free Wifi, TV, Kitchen",
      price: 500,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      checkinTime: new Date("11-Nov-2023"),
      checkoutTime: new Date("12-Nov-2023"),
      rating: 4.0,
    },
    {
      roomNumber: 3,
      roomType: 'Private Room',
      amenities: "AC,Free Wifi, TV, Kitchen, Balcony,bathroom",
      price: 1500,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      checkinTime: new Date("11-Nov-2023"),
      checkoutTime: new Date("12-Nov-2023"),
      rating: 4.5,
    },
  ];
}
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List'
  }

  selectRoom(room: RoomList) {
    this.selectedRooms = room; 
  }


  addRoom(){
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: "AC,Free Wifi, TV, Kitchen",
      price: 500,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      checkinTime: new Date("11-Nov-2023"),
      checkoutTime: new Date("12-Nov-2023"),
      rating: 4.0,
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

}

