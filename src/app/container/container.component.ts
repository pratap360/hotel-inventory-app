import { AfterContentInit, Component, ContentChildren, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hoin-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements OnInit, AfterContentInit{

  @ContentChildren (EmployeeComponent) employees!: EmployeeComponent;

  constructor ( ) {

  }
  ngOnInit(): void {
    
  }
  ngAfterContentInit(): void {
    console.log(this.employees);
    // this.employees.empName = 'Paruidev' 
  }

}
