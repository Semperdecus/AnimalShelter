import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }

  static getUser() {
    return localStorage.getItem('currentUser');
  }

  public static isLoggedIn() {
    const user = localStorage.getItem('currentUser');
    if (user != null) {
      return true;
    }
  }

  static isLoggedOut() {
    return !AuthService.isLoggedIn();
  }

  static logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }

  login(username: string, password: string) {
    console.log(username);
    console.log(password);
    return this.http.post<any>(
      'http://localhost:8762/auth',
      {username, password}, {observe: 'response'}).subscribe(
      (res) => {
        console.log(res.headers.get('Authorization'));
        localStorage.setItem('currentUser', username);
        localStorage.setItem('token', res.headers.get('Authorization'));
        this.router.navigateByUrl('/dashboard');
      }
    );
  }

  ping() {
    // Requires following micro services: Auth, Eureka, Zuul, Common
    console.log('Expecting status code 401');
    return this.http.post<any>('http://localhost:8762/auth', {});
  }
}
