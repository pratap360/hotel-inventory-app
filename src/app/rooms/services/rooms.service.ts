import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../room';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})

export class RoomsService {

 roomList:RoomList[] = [];

// * correct code for getRooms$ but do revert after test of error handling 👇🏼
//  getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(shareReplay(1));

// the below code is wrong to just use how to handle error 👇🏼
 getRooms$ = this.http.get<RoomList[]>('/api/room').pipe(shareReplay(1));

  // constructor(@Inject(APP_SERVICE_CONFIG)private config:AppConfig) {
  constructor(@Inject(APP_SERVICE_CONFIG)private config:AppConfig,private http:HttpClient) {
    // ? this is possible by the value providers 👇🏼
    console.log(this.config.apiUrl);
    console.log('RoomsService instantiated'); 
   }

  getRooms() {
    // return this.roomList;
    return this.http.get<RoomList[]>('/api/rooms')
  }

  addRoom(room : RoomList){
    return this.http.post<RoomList[]>('/api/rooms',room)
  }

  editRoom(room : RoomList){
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`,room)
  }

  deleteRoom(id:string){
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`)
  }

  getPhotos() {
    const photos = new HttpRequest(
      'GET', 'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true,
      }
    );
    return this.http.request(photos);
  }
}
