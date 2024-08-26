import { Component, OnInit } from '@angular/core';
import { ConfigsService } from '../services/configs.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'hoin-booking',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, MatInputModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatAccordion,MatExpansionModule,MatIconModule],
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
      roomId: new FormControl({value:'12',disabled: true}),
      bookingId: [''],
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],

      address : this.fb.group({
        addressLine1: [''], 
        addressLine2: [''], 
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
     

      guestCount: [''],
      guestList: [''],
    });
  }

  addBooking() {
    // console.log(this.bookingForm.value);
    console.log(this.bookingForm.getRawValue());
  }
}
