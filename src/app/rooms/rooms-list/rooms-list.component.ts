import { Component, Input, OnInit } from '@angular/core';
import { RoomList } from '../room';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'hoin-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomList[] = [] ; 
   
  constructor() { }

  ngOnInit(): void {
    
  }
}
