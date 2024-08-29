import { Component, OnInit } from '@angular/core';
import { ConfigsService } from '../services/configs.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BookingService } from './booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { Custom } from './validators/custom.validator';
import { ActivatedRoute } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'hoin-booking',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatAccordion,
    MatExpansionModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  i: any;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(
    private configsService: ConfigsService,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomid');
    this.bookingForm = this.fb.group({
        roomId: new FormControl({ value:roomId, disabled: true }),
        bookingId: [''],
        // guestEmail: ['',[Validators.required, Validators.email]],
        guestEmail: [
          '',
          {
            updateOn: 'blur',
            validators: [Validators.required, Validators.email],
          },
        ],
        checkinDate: [''],
        checkoutDate: [''],

        address: this.fb.group({
          addressLine1: ['', { validators: [Validators.required] }],
          addressLine2: [''],
          city: ['', { validators: [Validators.required] }],
          state: ['', { validators: [Validators.required] }],
          country: [''],
          zipCode: [''],
        }),

        bookingStatus: [''],
        bookingAmount: [''],
        bookingDate: [''],
        mobileNumber: ['', { updateOn: 'blur' }],
        guestName: ['', [Validators.required, Validators.minLength(5), Custom.ValidateName, Custom.ValidateSpecialChar('*')]],

        guests: this.fb.array([this.addGuestControl()]),
        guestList: [''],
        tnc: new FormControl(false, { validators: [Validators.requiredTrue] }),
      },{ updateOn: 'blur', validators: [Custom.validateDate] }
      // { updateOn: 'blur' }
    );
    this.getBookingData();
    // this.bookingForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    //   this.bookingService.bookRooms(data).subscribe((data) => {
    //     console.log(data);
    //   })
    // });

    this.bookingForm.valueChanges.pipe(
      // mergeMap((data) => this.bookingService.bookRooms(data))
      // switchMap((data) => this.bookingService.bookRooms(data))
      exhaustMap((data) => this.bookingService.bookRooms(data))
    ).subscribe((data) => console.log(data));

    // this.bookingForm = this.fb.group({
    //   roomId: '2',
    //   bookingId: '',
    //   guestEmail: '',
    //   checkinDate: '',
    //   checkoutDate: '',

    //   address: {
    //     addressLine1: '',
    //     addressLine2: '',
    //     city: '',
    //     state: '',
    //     country: '',
    //     zipCode: '',
    //   },

    //   bookingStatus: '',
    //   bookingAmount: '',
    //   bookingDate: '',
    //   mobileNumber: '',
    //   guestName: '',

    //   guests:[],
    //   guestList: '',
    //   tnc : false,
    // });
  }

  addBooking() {
    // console.log(this.bookingForm.value);
    console.log(this.bookingForm.getRawValue());
    // this.bookingService.bookRooms(this.bookingForm.getRawValue())
    //   .subscribe((data) => console.log(data));
    // this.bookingForm.reset();
  }

  getBookingData() {
    //  this.bookingForm.setValue({
    //   roomId: '32',
    //   bookingId: '',
    //   guestEmail: 'test@test.com',
    //   checkinDate: new Date ('2022-01-01'),
    //   checkoutDate: '',
    //   address: {
    //     addressLine1: '',
    //     addressLine2: '',
    //     city: '',
    //     state: '',
    //     country: '',
    //     zipCode: '',
    //   },
    //   bookingStatus: '',
    //   bookingAmount: '',
    //   bookingDate: '',
    //   mobileNumber: '',
    //   guestName: '',
    //   guests:[],
    //   guestList: '',
    //   tnc : false,
    //  })
  }

  addGuest() {
    this.guests.push(this.addGuestControl());
  }

  addGuestControl() {
    return this.fb.group({
      guestName: ['', { validators: [Validators.required] }],
      age: new FormControl(''),
    });
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }
  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
}
