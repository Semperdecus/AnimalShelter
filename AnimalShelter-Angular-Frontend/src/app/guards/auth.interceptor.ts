import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const bearerToken = localStorage.getItem('token');

    if (bearerToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization',
          bearerToken)
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
