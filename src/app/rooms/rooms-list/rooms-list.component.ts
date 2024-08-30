import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../room';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FilterPipe } from "../filter.pipe";
@Component({
  selector: 'hoin-rooms-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FilterPipe],
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges , OnDestroy {
 
  @Input() rooms: RoomList[] | null = [] ; 
  @Input() title: string = '';
  @Input() price = 0;
  @Output() selectedRoom = new EventEmitter<RoomList>();
   
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']){
      this.title= changes['title'].currentValue.toUpperCase();
    }
    
  }

  ngOnInit(): void {
    
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    
  }

}
