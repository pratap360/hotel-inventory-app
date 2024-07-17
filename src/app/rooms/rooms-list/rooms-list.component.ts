import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomList } from '../room';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'hoin-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomList[] = [] ; 
  
  @Output() selectedRoom = new EventEmitter<RoomList>();
   
  constructor() { }

  ngOnInit(): void {
    
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
