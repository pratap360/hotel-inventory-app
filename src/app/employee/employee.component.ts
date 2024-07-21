import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hoin-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers: [RoomsService],
})
export class EmployeeComponent implements OnInit{

  empName : string = "Pratap"
  // constructor(@Self() private roomService: RoomsService)
  constructor(private roomService: RoomsService) {
    
  }
  ngOnInit(): void {
    
  }

}
