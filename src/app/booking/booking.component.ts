import { Component, OnInit } from '@angular/core';
import { ConfigsService } from '../services/configs.service';

@Component({
  selector: 'hoin-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit {
  constructor(private configsService: ConfigsService) { }

  ngOnInit(): void {
  }

}
