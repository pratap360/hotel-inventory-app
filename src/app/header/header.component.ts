import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hoin-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  title : string = ''
  constructor() { }
  ngOnInit(): void {
    
  }

}
