// import { HttpInterceptorFn } from '@angular/common/http';
// export const requestInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

import {  HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('request interceptor',request);
    if (request.method === 'POST') {
      const newRequest = request.clone({
        headers : new HttpHeaders({'token':'123'})
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }


}

