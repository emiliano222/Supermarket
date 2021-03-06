import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = localStorage.getItem('token');
    if (token != null) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Basic ' + token)
      });
      return next.handle(req);
    } else

      return next.handle(req);
  }


  constructor() { }

}
