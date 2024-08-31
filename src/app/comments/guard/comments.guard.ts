import { CanActivateFn, ResolveFn } from '@angular/router';
import { Comments } from '../comments';
import { CommentsService } from '../comments.service';

export class commentsGuard {

  constructor(private commentsService: CommentsService) {}


  commentsGuard: ResolveFn <Comments[]> = (route, state) => {
    return this.commentsService.getComments();
  };
  
}