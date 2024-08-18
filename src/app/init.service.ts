import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  config: any;

  constructor(private http: HttpClient) {}
  init() {
    return this.http
    // ! use any of this get methods for the config.json file 
      // .get('/assets/config.json') or .get('assets/config.json')
      .get('assets/config.json')
      .pipe(tap((config) => (this.config = config)));
  }
}
