import { Component, OnInit } from '@angular/core';
import { ConfigsService } from '../services/configs.service';

@Component({
  selector: 'hoin-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  title : string = ''
  constructor(private configsService: ConfigsService) { }
  ngOnInit(): void {
    
  }

}
