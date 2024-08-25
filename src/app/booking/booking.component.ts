import { Component, OnInit } from '@angular/core';
import { ConfigsService } from '../services/configs.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'hoin-booking',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, MatInputModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  constructor(
    private configsService: ConfigsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl(''),
      bookingId: [''],
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      guestAddress: [''],
      guestCity: [''],
      guestState: [''],
      guestCountry: [''],
      guestZipCode: [''],
      guestCount: [''],
      guestList: [''],
    });
  }
}
