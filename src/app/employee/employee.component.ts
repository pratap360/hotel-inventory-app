import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hoin-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit{

  empName : string = "Pratap"

  constructor(){
    
  }
  ngOnInit(): void {
    
  }

}
