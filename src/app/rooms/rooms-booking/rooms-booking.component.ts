import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'hoin-rooms-booking', 
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss'
})
export class RoomsBookingComponent implements OnInit{

  id : number = 0
  // id$ !: Observable<number>
  // id$ = this.router.params.pipe(map(params => params['roomid']))
  id$ = this.router.paramMap.pipe(map((params) => params.get('roomid')));

  constructor(private router: ActivatedRoute) { }
 
  ngOnInit(): void {
    // this.id = this.router.params.pipe(map(params => params['roomid']))

    // this.id = this.router.snapshot.params['roomid']
    // this.router.params.subscribe((params)=> {this.id = params['roomid']})
  }
 
}
