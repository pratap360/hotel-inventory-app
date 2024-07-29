import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../room';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'hoin-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges , OnDestroy {
 
  @Input() rooms: RoomList[] | null = [] ; 
  @Input() title: string = '';
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
