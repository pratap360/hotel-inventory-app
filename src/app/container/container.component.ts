import { AfterContentInit, Component, ContentChildren, Host, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hoin-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  providers: [RoomsService]
})
export class ContainerComponent implements OnInit, AfterContentInit{

  @ContentChildren (EmployeeComponent) employees!: EmployeeComponent;

  constructor (@Host() private roomService: RoomsService) {

  }
  ngOnInit(): void {
    
  }
  ngAfterContentInit(): void {
    console.log(this.employees);
    // this.employees.empName = 'Paruidev' 
  }

}
