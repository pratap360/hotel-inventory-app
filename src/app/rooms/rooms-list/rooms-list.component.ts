import { Component, Input, OnInit } from '@angular/core';
import { RoomList } from '../room';

@Component({
  selector: 'hoin-rooms-list',
  standalone: true,
  imports: [],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomList[] = [] ; 
   
  constructor() { }

  ngOnInit(): void {
    
  }
}
