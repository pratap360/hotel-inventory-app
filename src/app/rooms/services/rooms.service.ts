import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../room';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class RoomsService {

 roomList:RoomList[] = [
    // {
    //   roomNumber: 1,
    //   roomType: 'Basic Room',
    //   amenities: "AC, TV, Kitchen",
    //   price: 100,
    //   photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
    //   checkinTime: new Date("11-Nov-2023"),
    //   checkoutTime: new Date("12-Nov-2023"),
    //   rating: 3.5,
    // },
    // {
    //   roomNumber: 2,
    //   roomType: 'Deluxe Room',
    //   amenities: "AC,Free Wifi, TV, Kitchen",
    //   price: 500,
    //   photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
    //   checkinTime: new Date("11-Nov-2023"),
    //   checkoutTime: new Date("12-Nov-2023"),
    //   rating: 4.0,
    // },
    // {
    //   roomNumber: 3,
    //   roomType: 'Private Room',
    //   amenities: "AC,Free Wifi, TV, Kitchen, Balcony,bathroom",
    //   price: 1500,
    //   photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
    //   checkinTime: new Date("11-Nov-2023"),
    //   checkoutTime: new Date("12-Nov-2023"),
    //   rating: 4.5,
    // },
  ];
  constructor(@Inject(APP_SERVICE_CONFIG)private config:AppConfig,private http:HttpClient) {
    // ? this is possible by the value providers 👇🏼
    console.log(this.config.apiUrl);
    console.log('RoomsService instantiated'); 
   }

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms')
  }

}
