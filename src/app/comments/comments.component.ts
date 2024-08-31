import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs';

@Component({
  selector: 'hoin-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit {
  
  commnet: any;
  comments$ = this.commentService.getComments();

  comment$ = this.activtedRoute.data.pipe(pluck('comments'));
  
  constructor(private commentService: CommentsService,
    private activtedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.activtedRoute.data.subscribe(data => {console.log(data['comments']);
    })
  }


}
