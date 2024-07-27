import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './room';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from "../header/header.component";
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'hoin-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent], // Include CommonModule here
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

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

  roomList: RoomList[] = [];

stream = new Observable<string>((observer) => {
  observer.next('user1');
  observer.next('user2');
  observer.next('user3');
  observer.complete();
  // observer.error('error from observable');
})    

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent !: QueryList<HeaderComponent>;

  // custom instance variable called for dependency injection
  // roomService = new RoomService(); 
  constructor(@SkipSelf() private roomService: RoomsService) { }


  ngOnInit(): void {
    // this.roomList = this.roomService.getRooms();
    this.stream.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.log(error),
      complete: () => console.log('completed')
     })

     this.stream.subscribe((data)=> console.log(data));

    this.roomService.getRooms().subscribe((rooms: RoomList[]) => {
      this.roomList = rooms;
    })
    // console.log(this.roomService.getRooms());
    
    // console.log(this.headerComponent);


  }
  ngAfterViewChecked(): void {
    // this.headerComponent.title = 'Rooms View';
  }
  ngAfterViewInit(): void {
    // console.log(this.headerComponent);
    // * if getting any error in dev mode then it fine but in prod it's not fine must look into the code for more info
    this.headerComponent.title = 'Rooms View';

    this.headerChildrenComponent.last.title = 'Last title';
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }


  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List'
  }

  selectRoom(room: RoomList) {
    this.selectedRooms = room;
  }


  addRoom() {
    const room: RoomList = {
      roomNumber: '4',
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

